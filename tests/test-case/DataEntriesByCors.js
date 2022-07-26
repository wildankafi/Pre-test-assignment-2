const assert = require('chai').expect;

const api = require('../api/apibase.js')

describe ('API Data Entries By Cors',() => {
    it('Cors With yes', async() => {
        const response = await api.getDataEntries()
        .query({cors : "yes"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Cors).to.include('yes');        
    }),
    it('Cors With No', async() => {
        const response = await api.getDataEntries()
        .query({cors : "no"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Cors).to.include('no');        
    }),
    it('Cors With unknown', async() => {
        const response = await api.getDataEntries()
        .query({cors : "unknown"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Cors).to.include('unknown');        
    }),
    it('Cors Null, Show  all data 1425', async() => {
        const response = await api.getDataEntries()
        .query({cors : ""})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.count).to.equal(1425);       
    }),
    it('Cors With Test', async() => {
        const response = await api.getDataEntries()
        .query({cors : "test"})
        assert (response.status).to.equal(200);
        assert (response.body.entries).is.null;        
    })
})