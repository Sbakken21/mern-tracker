// prod - production keys
module.exports = {
    mongoURI: process.env.MONGO_URI,
    SESSION_SECRET: process.env.SESSION_SECRET,
    sendGridKey: process.env.SEND_GRID_KEY
};