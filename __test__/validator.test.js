'use strict';
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe("Validator Tests", () => {

    test("There is NO name in the query string", async () => {
        const response = await request.get('/person?name=""');
        expect(response.status).toEqual(500);
    });

    test("There is a valid name in the query string", async () => {
        const response = await request.get('/person?name=esam');
        expect(response.status).toEqual(200);
    });

    test("The output object is Correct", async () => {
        const response = await request.get('/person?name=esam');
        expect(response.body).toEqual({ "name": "esam" })
    })

    test("The name is empty", async () => {
        const response = await request.get('/person?name=""');
        expect(response.status).toEqual(500);
    })

    test("The name is not a string", async () => {
        const response = await request.get('/person?name=esam%');
        expect(response.status).toEqual(500);
    })

})