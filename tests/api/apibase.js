const supertest = require('supertest');
const env = require('dotenv').config();

const url = supertest(process.env.BASE_URL);

const getDataEntries = () => url.get('/entries')
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')
module.exports = {
    getDataEntries
}