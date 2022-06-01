'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server Testing', () => {
  
    test('Bad Route Test', async () => {
        const response = await request.get('/abc');
        expect(response.status).toEqual(404);
    });

    test('Bad Method Test', async () => {
        const response = await request.post('/person?name=any');
        expect(response.status).toEqual(404);
    });

    test("Home Route Test",async ()=>{
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("hello ");
    })
}) 