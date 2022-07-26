const assert = require('chai').expect;

const api = require('../api/apibase.js')

describe ('Get ALl Data Entries',() => {
    it('Get All', async() => {
        const response = await api.getDataEntries()
        assert(response.status).to.equal(200);
        assert (response.body.entries[0]).to.have.property('API');
        assert (response.body.entries[0]).to.have.property('Description');
        assert (response.body.entries[0]).to.have.property('Auth');
        assert (response.body.entries[0]).to.have.property('HTTPS');
        assert (response.body.entries[0]).to.have.property('Cors');
        assert (response.body.entries[0]).to.have.property('Link');
        assert (response.body.entries[0]).to.have.property('Category'); 
        assert (response.body.count).to.equal(1425);  
    })
})
