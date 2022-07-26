const assert = require('chai').expect;

const api = require('../api/apibase.js')

describe ('API Data Entries By Category',() => {
    it('Category With animals', async() => {
        const response = await api.getDataEntries()
        .query({Category : "Animals"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Category).to.include('Animals');        
    }),
    it('Category With Anime', async() => {
        const response = await api.getDataEntries()
        .query({Category : "Anime"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Category).to.include('Anime');        
    }),
    it('Category Null, Show  all data 1425', async() => {
        const response = await api.getDataEntries()
        .query({Category : ""})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.count).to.equal(1425);       
    }),
    it('Category With Agustus', async() => {
        const response = await api.getDataEntries()
        .query({Category : "Agustus"})
        assert (response.status).to.equal(200);
        assert (response.body.entries).is.null;        
    })
})