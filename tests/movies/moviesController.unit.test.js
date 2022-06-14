const { getAllMovies, getMoviesByName, getMoviesByClassifier, getClassifierParam, getOrderParam } = require('../../src/actions/movies/movies')
const jsonData = require('../../src/dataset/movies.json')

test('se espera que devuelva toda la data', () => {
    const result = getAllMovies()
    expect(result).toBe(jsonData)
})

test('se espera que devuelva un array vacío por no encontrar el nombre', () => {
    const result = getMoviesByName("attack on titan")
    expect(result).toStrictEqual([])
})

test('se espera que devuelva la data por nombre', () => {
    const result = getMoviesByName("First Love, Last Rites")
    expect(result).toStrictEqual([{"Title": "First Love, Last Rites", "US Gross": 10876, "Worldwide Gross": 10876, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Aug 07 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Strand", "Source": null, "Major Genre": "Drama", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.9, "IMDB Votes": 207}])
})

test('se espera que devuelva nulo por no entregarle un valor correcto en order', () => {
    const result = getMoviesByClassifier("imdb", "dsadas")
    expect(result).toBe(null)
})

test('se espera que devuelva nulo por no entregarle un valor correcto en classifier', () => {
    const result = getMoviesByClassifier("dsadas", "asc")
    expect(result).toBe(null)
})

test('se espera que devuelva nulo por no entregarle un valor correcto en ambos parámetros', () => {
    const result = getMoviesByClassifier("fsafsa", "dasdasasc")
    expect(result).toBe(null)
})

test('se espera que devuelva nulo por entregarle un valor nulo en ambos parámetros', () => {
    const result = getMoviesByClassifier(null, null)
    expect(result).toBe(null)
})



