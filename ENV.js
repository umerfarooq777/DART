const dotenv = require('dotenv');

dotenv.config();

const ENV = {
    YOUR_ALCHEMY_URL: process.env.YOUR_ALCHEMY_URL,
    YOUR_PRIVATE_KEY: process.env.YOUR_PRIVATE_KEY,
};

export default ENV;