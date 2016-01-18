/* eslint-env node, mocha */

'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/whoami', function() {

  it('should respond with JSON object', function(done) {
    let userAgent = 'Mozilla/5.0 (Test OS) test';
    let language = 'test-lang';
    request(app)
      .get('/api/whoami')
      .set('user-agent', userAgent)
      .set('Accept-Language', language)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.should.be.instanceof(Object);
        done();
      });
  });

  it('should return the right values', function(done) {
    let userAgent = 'Mozilla/5.0 (Test OS) test';
    let software = 'Test OS';
    let language = 'test-lang';
    request(app)
      .get('/api/whoami')
      .set('user-agent', userAgent)
      .set('Accept-Language', language)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        res.body.software.should.equal(software);
        res.body.language.should.equal(language);
        done();
      });
  });
});

describe('GET /', function() {

  it('should respond with an HTML page', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.should.match(/API Basejump/);
        done();
      });
  });
});
