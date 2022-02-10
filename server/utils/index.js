const validateEmail = (email) => {
    const emailValidationRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return emailValidationRegex.test(email)
}

const convertToLowerCase = (next) => {
    this.email = this.email.toLowercase();
    next();
}

module.exports = { validateEmail, convertToLowerCase }