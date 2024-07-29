
const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/weather/playlist', () => {
  it('should return a playlist for a valid city', async () => {
    const res = await request(app).get('/api/weather/playlist?city=London');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('genre');
    expect(res.body).toHaveProperty('songs');
  });

  it('should return an error for an invalid city', async () => {
    const res = await request(app).get('/api/weather/playlist?city=InvalidCity');
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error');
  });
});
            