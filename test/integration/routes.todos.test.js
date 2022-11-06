const request = require('supertest');
const app = require('../../app');

describe('Todos API', () => {
    it('GET /todos --> array todos', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        completed: expect.any(Boolean)
                    })
                ]))
            })
    });

    it('GET /todos/id --> specific todo by ID', () => {
        return request(app)
            .get('/todos/2')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    completed: expect.any(Boolean)
                }))
            })
    });

    it('GET /todos/id --> 404 if todo is not found', () => {
        return request(app)
        .get('/todos/999')
        .expect(404);
    });

    it('POST /todos --> create todo', () => {
        return request(app).post('/todos')
        .send({name: 'Task one'})
        .expect(201)
        .then((response) => {
            expect(response.body).toEqual(expect.objectContaining({
                name: 'Task one',
                completed: false
            }))
        })
    });

    it('POST /todos --> validate request body to create todo', () => {
        return request(app).post('/todos')
        .send({})
        .expect(400);
    });
})