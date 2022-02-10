const validateEmail = (email) => {
    const emailValidationRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return emailValidationRegex.test(email)
}

function convertToLowerCase(next) {
    this.email = this.email.toLowercase();
    next();
} // Mongoose expects normal functions for middleware for the pre method

module.exports = { validateEmail, convertToLowerCase }