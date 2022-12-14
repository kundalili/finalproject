module.exports = (template) => {

    switch (template) {

        case ('register'):
            return 'You have just started an exciting journey with INA! ❤️ ❤️'
        case ('forgotpassword'):
            return 'Your instructions to change password for INA app'
        default:
            return
    }
}