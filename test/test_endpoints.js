/**
  * @author ThiaguinhoLS
*/

const should = require('should');
const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const urlBase = 'http://localhost:3000';

describe('Teste API', function() {

  it('Status code 200 na index', function(done) {
    request.get(urlBase, function(error, response, body) {
      console.log(error);
      console.log(response);
      console.log(body);
      expect(response.statusCode).to.equal(200);
      done();
    });
  })

});
