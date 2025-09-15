const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB configuration
const MONGODB_URI = 'mongodb+srv://proctor_admin:mypassword123@cluster0.cyt1mfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let db;

// Connect to MongoDB
MongoClient.connect(MONGODB_URI)
    .then(client => {
        console.log('✅ Connected to MongoDB');
        db = client.db('proctoring');
    })
    .catch(error => console.error('❌ MongoDB connection error:', error));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Store for interview sessions (fallback for when DB is not available)
let sessions = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API to save interview session
app.post('/api/sessions', async (req, res) => {
    try {
        const session = {
            candidateName: req.body.candidateName,
            startTime: new Date(req.body.startTime),
            endTime: new Date(req.body.endTime),
            duration: req.body.duration,
            focusLostCount: req.body.focusLostCount,
            noFaceCount: req.body.noFaceCount,
            multipleFacesCount: req.body.multipleFacesCount,
            suspiciousObjects: req.body.suspiciousObjects,
            integrityScore: req.body.integrityScore,
            alerts: req.body.alerts,
            createdAt: new Date()
        };

        if (db) {
            // Save to MongoDB
            const result = await db.collection('sessions').insertOne(session);
            res.json({ success: true, sessionId: result.insertedId });
        } else {
            // Fallback to in-memory storage
            session.id = Date.now();
            sessions.push(session);
            res.json({ success: true, sessionId: session.id });
        }
    } catch (error) {
        console.error('Error saving session:', error);
        res.status(500).json({ error: error.message });
    }
});

// API to get all sessions
app.get('/api/sessions', async (req, res) => {
    try {
        if (db) {
            // Get from MongoDB
            const sessions = await db.collection('sessions').find({}).toArray();
            res.json(sessions);
        } else {
            // Fallback to in-memory storage
            res.json(sessions);
        }
    } catch (error) {
        console.error('Error fetching sessions:', error);
        res.status(500).json({ error: error.message });
    }
});

// API to get specific session
app.get('/api/sessions/:id', async (req, res) => {
    try {
        if (db) {
            // Get from MongoDB
            let session;
            if (ObjectId.isValid(req.params.id)) {
                session = await db.collection('sessions').findOne({ _id: new ObjectId(req.params.id) });
            } else {
                // Try to find by numeric ID for backward compatibility
                session = await db.collection('sessions').findOne({ id: parseInt(req.params.id) });
            }
            
            if (session) {
                res.json(session);
            } else {
                res.status(404).json({ error: 'Session not found' });
            }
        } else {
            // Fallback to in-memory storage
            const session = sessions.find(s => s.id == req.params.id);
            if (session) {
                res.json(session);
            } else {
                res.status(404).json({ error: 'Session not found' });
            }
        }
    } catch (error) {
        console.error('Error fetching session:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});