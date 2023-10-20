/* eslint-disable no-undef */
const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
    it('server should connect', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
      });
      it('should return tweets', async () => {
        const res = await request(app).get('/tweets');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
      });
});
