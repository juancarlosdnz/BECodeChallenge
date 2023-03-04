const request = require('supertest');
const app = require('../app');

describe('GET /character', () => {

  let character;

  it('should return the character with the given name', async () => {
    const res = await request(app).get('/character?idOrName=Avengers');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Avengers');
  });
  
  it('should return the character with the given internal ID', async () => {
    const res = await request(app).get('/character?idOrName=1010354');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Adam Warlock');
  });
  
  it('should return a message if the character is not found', async () => {
    const res = await request(app).get('/character?idOrName=Pepe%20Viyuela');
    expect(res.statusCode).toBe(404);
    expect(res.text).toContain('No character found with this id/name on our database.');
  });
  
  
});