import moviesData from '../../dataset/movies.json'

exports.getAllMovies = () => {
    return moviesData
}

exports.getMoviesByName = (name) => {
    const regex = new RegExp(name, 'i')
    const movies = exports.getAllMovies()
    const filteredMovies = movies.filter(
      (movie) => regex.test(movie.Title)
    )
    return filteredMovies
}

exports.getMoviesByClassifier = (classifier, order) => {
    let classifierField = getClassifierParam(classifier)
    let orderSign = getOrderParam(order)
    const movies = exports.getAllMovies()

    if (!classifierField || !orderSign) return null //se edito para que cuando no encuentre el classifier o el order retorne null

    const orderedMovies = movies.sort(
        (A, B) => {
          const aField = A[classifierField]
          const bField = B[classifierField]
  
          const aValue = (aField != null && aField != undefined) ? aField : -10
          const bValue = (bField != null && bField != undefined) ? bField : -10
          return orderSign * (aValue - bValue)
        }
    )

    return orderedMovies
}

function getClassifierParam (classifier) {
    if (classifier === 'imdb') return 'IMDB Rating'
    else if (classifier === 'rotten') return 'Rotten Tomatoes Rating'
    return undefined
}

function getOrderParam (order) {
    if (order == 'desc') return -1
    else if (order == 'asc') return 1
    return undefined
}
