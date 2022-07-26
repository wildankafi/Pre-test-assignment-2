const assert = require('chai').expect;

const api = require('../api/apibase.js')

describe ('API Data Entries By Https',() => {
    it('Https With 1', async() => {
        const response = await api.getDataEntries()
        .query({HTTPS : 1})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].HTTPS).to.equal(true);       
    }),
    it('Https With 0', async() => {
        const response = await api.getDataEntries()
        .query({HTTPS : 0})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].HTTPS).to.equal(false);       
    }),
    it('Https With a', async() => {
        const response = await api.getDataEntries()
        .query({HTTPS : "a"})
        assert (response.status).to.equal(200);
        assert (response.body.entries).is.null;         
    }),
    it('HTTPS Null, Show  all data 1425', async() => {
        const response = await api.getDataEntries()
        .query({HTTPS : ""})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.count).to.equal(1425);       
    })
})