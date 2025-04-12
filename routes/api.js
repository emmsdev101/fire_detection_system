const express = require('express');
const router = express.Router();
const globals = require('../store/globals');

// Sample GET route
router.get('/', (req, res) => {
    res.json(globals);
});

router.post('/update-values', (req, res) => {
    
    const { temperature, fire_detected, smoke_detected } = req.body;

    console.log("Received data:", req.body);
    if (temperature === undefined || fire_detected === undefined || smoke_detected === undefined ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    globals.device.temperature = temperature;
    globals.device.fire_detected = fire_detected;
    globals.device.smoke_detected = smoke_detected;

    res.json(200);
}
);

module.exports = router;
