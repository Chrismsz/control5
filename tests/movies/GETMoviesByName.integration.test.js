import request from 'supertest'
import { server, app } from '../../src/index'
import sinon from 'sinon'
import movieActions from '../../src/actions/movies/movies'


/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */
describe('GET /api/movies/batman', () => {
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('debería devolver toda la lista de películas con titulos que contienen el string batman', async () => {                
        const response = await request(app.callback()).get('/api/movies/batman')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMovies("batman"))
    })

    test('debería devolver status 200 si no encontró coincidencias', async () => {
        sinon.stub(movieActions, 'getMoviesByName').returns(null)
        const response = await request(app.callback()).get('/api/movies/batman')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'No se han encontrado coincidencias' })
    })
})

function getMovies (name) {
    return movieActions.getMoviesByName(name)        
}