module.exports = (template) => {

    switch (template) {

        case ('register'):
            return 'Welcome to xxx app ✔'
        case ('forgotpassword'):
            return 'Your instructions to change password for xxx app'
        default:
            return
    }
}