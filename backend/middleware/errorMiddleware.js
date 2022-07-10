const errorHandler = (err, req, res, next) => {
    const statusCode = res.status ? res.status : 500
    res.status(statusCode)
    res.json( {message: err.message})
    next()
}

module.exports = { errorHandler }