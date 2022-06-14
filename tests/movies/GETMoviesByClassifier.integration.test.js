import request from 'supertest'
import { server, app } from '../../src/index'
import sinon from 'sinon'
import movieActions from '../../src/actions/movies/movies'


/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */
describe('GET /api/movies/rating/imdb/desc', () => {    
    afterAll(() => {
        server.close()
    })

    test('debería devolver toda la lista de películas ordenadas según classifier y order', async () => {                
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMoviesByClassAndOrder("imdb","desc"))
    })
})

describe('GET /api/movies/rating/imdb/asc', () => {
    afterAll(() => {
        server.close()
    })

    test('debería devolver toda la lista de películas ordenadas según classifier y order', async () => {                
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMoviesByClassAndOrder("imdb","asc"))
    })
})

describe('GET /api/movies/rating/rotten/desc', () => {
    afterAll(() => {
        server.close()
    })

    test('debería devolver toda la lista de películas ordenadas según classifier y order', async () => {                
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMoviesByClassAndOrder("rotten","desc"))
    })
})

describe('GET /api/movies/rating/rotten/asc', () => {    
    afterAll(() => {
        server.close()
    })

    test('debería devolver toda la lista de películas ordenadas según classifier y order', async () => {                
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMoviesByClassAndOrder("rotten","asc"))
    })
})

describe('GET /api/movies/rating/reas/desc', () => {    
    afterAll(() => {
        server.close()
    })

    test('debería devolver status 500 si no se le pasan parámetros correctos de classifier y order', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/reas/desc')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' })
    })
})

describe('GET /api/movies/rating/imdb/dsad', () => {
    afterAll(() => {
        server.close()
    })

    test('debería devolver status 500 si no se le pasan parámetros correctos de classifier y order', async () => {        
        const response = await request(app.callback()).get('/api/movies/rating/imdb/dsad')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' })
    })
})

describe('GET /api/movies/rating/uewads/ruyehsd', () => {    
    afterAll(() => {
        server.close()
    })

    test('debería devolver status 500 si no se le pasan parámetros correctos de classifier y order', async () => {        
        const response = await request(app.callback()).get('/api/movies/rating/uewads/ruyehsd')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' })
    })
})


function getMoviesByClassAndOrder (classifier, order) {
    return movieActions.getMoviesByClassifier(classifier, order)        
}