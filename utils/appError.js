
class appError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = false;
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = appError;