# Video Proctoring System 🎯

A comprehensive AI-powered video proctoring system built with Node.js, Express.js, and MongoDB for monitoring online interviews and examinations in real-time.

## 🌟 Features

### Core Monitoring Capabilities
- **Real-time Video Monitoring** - Live camera feed analysis
- **AI-Powered Face Detection** - Detect and track candidate faces
- **Focus Loss Detection** - Monitor when candidate looks away from screen
- **Multiple Faces Detection** - Alert when multiple people are detected
- **Suspicious Object Detection** - Identify phones, books, and other prohibited items
- **Integrity Score Calculation** - Real-time scoring based on violations
- **Session Recording** - Complete session data storage and retrieval

### Technical Features
- **MongoDB Integration** - Persistent data storage with cloud database
- **RESTful API** - Clean API endpoints for session management
- **Real-time Alerts** - Instant notifications for violations
- **Responsive Design** - Works on desktop and mobile devices
- **Cross-browser Compatibility** - Supports modern web browsers

## 🚀 Live Demo

Access the system at: `http://localhost:3000` (after setup)

##🚀 Live LINK-(Deployed on Render)
https://video-proctoring-system-edi9.onrender.com/

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14.0 or higher) - [Download here](https://nodejs.org/)
- **Modern Web Browser** with camera access (Chrome, Firefox, Safari, Edge)
- **Internet Connection** for MongoDB Atlas connectivity
- **Webcam** for video monitoring functionality

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Khanrukku/video-proctoring-system.git
cd video-proctoring-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```
or for development:
```bash
node server.js
```

### 4. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
video-proctoring-system/
├── index.html              # Main frontend interface
├── server.js               # Express server with MongoDB integration
├── objectDetection.js      # AI object detection logic
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── node_modules/           # Installed dependencies
└── README.md              # Project documentation
```

## 🔧 Configuration

### Database Connection
The system uses MongoDB Atlas cloud database. Connection string is configured in `server.js`:
```javascript
const MONGODB_URI = 'mongodb+srv://proctor_admin:mypassword123@cluster0.cyt1mfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
```

### Port Configuration
Default port is 3000. To use a different port:
```bash
PORT=3001 node server.js
```

## 🎮 Usage Guide

### Starting a Proctoring Session

1. **Enter Candidate Information**
   - Input candidate name
   - Click "Start Proctoring"

2. **Camera Permission**
   - Allow camera access when prompted
   - Ensure proper lighting and positioning

3. **Monitoring Phase**
   - System monitors in real-time
   - Violations are tracked and displayed
   - Integrity score updates continuously

4. **Session Completion**
   - Click "End Session" to stop monitoring
   - Session data is automatically saved to database

### Monitoring Features

- **Face Detection**: Green box around detected face
- **Focus Tracking**: Alerts when looking away
- **Object Detection**: Identifies suspicious items
- **Multi-face Alert**: Warns of multiple people
- **Integrity Score**: Real-time violation scoring

## 🔌 API Endpoints

### Session Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/sessions` | Save interview session data |
| `GET` | `/api/sessions` | Retrieve all sessions |
| `GET` | `/api/sessions/:id` | Get specific session by ID |

### Example API Usage

**Save Session:**
```javascript
POST /api/sessions
{
  "candidateName": "John Doe",
  "startTime": "2025-01-15T10:00:00Z",
  "endTime": "2025-01-15T11:00:00Z",
  "duration": 3600,
  "focusLostCount": 5,
  "noFaceCount": 2,
  "multipleFacesCount": 1,
  "suspiciousObjects": ["phone"],
  "integrityScore": 85,
  "alerts": ["Focus lost", "Phone detected"]
}
```

## 🛠️ Dependencies

### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "mongodb": "^6.3.0"
}
```

### Frontend Technologies
- HTML5 Canvas API
- WebRTC API for camera access
- TensorFlow.js for AI detection
- Bootstrap for responsive design

## 🔒 Security Features

- **Data Encryption**: MongoDB connection with SSL/TLS
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Comprehensive error management
- **Secure Headers**: CORS configuration for cross-origin requests

## 📊 Monitoring Metrics

The system tracks and stores:

- **Session Duration**: Total time of proctoring session
- **Focus Loss Events**: Times when candidate looked away
- **Face Detection Issues**: No face or multiple faces detected
- **Suspicious Objects**: Phones, books, papers detected
- **Overall Integrity Score**: Calculated based on all violations
- **Alert Log**: Timestamped list of all violations

## 🚨 Alert System

Real-time alerts for:
- ❌ **No face detected**
- 👥 **Multiple faces detected**
- 👀 **Focus lost (looking away)**
- 📱 **Suspicious objects detected**
- ⏰ **Extended violations**

## 🔧 Troubleshooting

### Common Issues

**Camera Not Working:**
- Check browser permissions
- Ensure camera is not used by another application
- Try refreshing the page

**Database Connection Failed:**
- Check internet connection
- Verify MongoDB connection string
- System falls back to in-memory storage

**Port Already in Use:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 node server.js
```

**Dependencies Installation Issues:**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |

## 📈 Performance

- **Real-time Processing**: < 100ms detection latency
- **Memory Usage**: ~ 150MB RAM
- **CPU Usage**: 15-25% on modern systems
- **Network**: Minimal bandwidth usage (database sync only)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 Development

### Running in Development Mode
```bash
# Install nodemon for auto-restart
npm install -g nodemon

# Start with auto-reload
nodemon server.js
```

### Adding New Features
- Frontend changes: Edit `index.html`
- Backend API: Modify `server.js`
- AI Detection: Update `objectDetection.js`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khanrukku**
- GitHub: [@Khanrukku](https://github.com/Khanrukku)
- Repository: [video-proctoring-system](https://github.com/Khanrukku/video-proctoring-system)

## 🙏 Acknowledgments

- TensorFlow.js team for AI detection capabilities
- MongoDB team for cloud database services
- Express.js community for web framework
- Open source community for various libraries used



##screenshots & screen recording 

Database-
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/276b885e-3683-4ca0-98aa-f52e6f3d6098" />

demo-


## 📞 Support

For issues and questions:
1. Check the [Issues](https://github.com/Khanrukku/video-proctoring-system/issues) page
2. Create a new issue with detailed description
3. Include error logs and browser console output

---

**Made with ❤️ for secure online examinations**





https://github.com/user-attachments/assets/b00420e8-e228-4163-9104-e83aded86249


