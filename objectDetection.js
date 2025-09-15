// Simple object detection using TensorFlow.js
class ObjectDetector {
    constructor() {
        this.model = null;
        this.isLoaded = false;
    }
    
    async loadModel() {
        try {
            // Load COCO-SSD model for object detection
            this.model = await cocoSsd.load();
            this.isLoaded = true;
            console.log('Object detection model loaded');
        } catch (error) {
            console.error('Failed to load model:', error);
        }
    }
    
    async detectObjects(videoElement) {
        if (!this.isLoaded || !this.model) {
            return [];
        }
        
        try {
            const predictions = await this.model.detect(videoElement);
            
            // Filter for suspicious objects
            const suspiciousItems = ['cell phone', 'book', 'laptop', 'mouse', 'keyboard'];
            const suspicious = predictions.filter(pred => 
                suspiciousItems.some(item => pred.class.toLowerCase().includes(item))
            );
            
            return suspicious;
        } catch (error) {
            console.error('Detection error:', error);
            return [];
        }
    }
}