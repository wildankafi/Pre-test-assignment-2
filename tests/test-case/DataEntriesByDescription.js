const assert = require('chai').expect;

const api = require('../api/apibase.js')

describe ('API Data Entries By Description',() => {
    it('Description With Holidays', async() => {
        const response = await api.getDataEntries()
        .query({Description : "holidays"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].Description).to.include('holidays');        
    }),
    it('Description With Holidays & title Holidays', async() => {
        const response = await api.getDataEntries()
        .query({Description : "holidays",title : "Holidays"})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category');
        assert (response.body.entries[0].API).to.include('Holidays');
        assert (response.body.entries[0].Description).to.include('holidays');              
    }),
    it('Description Null, Show  all data 1425', async() => {
        const response = await api.getDataEntries()
        .query({Description : ""})
        assert (response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.count).to.equal(1425);
        // assert (response.body.entries[0].API).to.include('Pet');        
    })
})