const assert = require('chai').expect;

const api = require('../api/apibase.js')

describe ('API Data Entries By Auth',() => {
    it('Auth With apiKey', async() => {
        const response = await api.getDataEntries()
        .query({Auth : "apiKey"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Auth).to.include('apiKey');        
    }),
    it('Auth With apiKeys', async() => {
        const response = await api.getDataEntries()
        .query({Auth : "apiKeys"})
        assert (response.status).to.equal(200);
        assert (response.body.entries).is.null;         
    }),
    it('Auth Null, Show  all data 1425', async() => {
        const response = await api.getDataEntries()
        .query({Auth : ""})
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