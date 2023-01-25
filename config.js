const MONGO_URI = process.env.NODE_ENV === 'prodyction'
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV;
    
    module.exports = {MONGO_URI};