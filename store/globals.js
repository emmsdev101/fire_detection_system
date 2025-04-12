// globals.js
const globalVariables = {
    appName: 'IoT Based Fire Detection and Notification System via SMS',
    version: '1.0.0',
    settings: {
        environment: 'development',
        port: process.env.PORT || 3000,
    },
    device:{
        temperature:0,
        fire_detected:false,
        smoke_detected:false,
        message:"🔥 FIRE DETECTED!"
    }
};

module.exports = globalVariables;
