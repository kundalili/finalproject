module.exports = (token, template) => {

    switch (template) {

        case ('register'):

            return `
              <!DOCTYPE html>
              <html>
                <body style="margin: 100; text-align: center;
                  padding: 100;background-color: #b4c5ff;
                     min-height:70vh;width:100%;">
                      <p style="font-size: 2rem; color:#022969; padding: 60; ">Welcome to INA!</p>
                      <p style="font-size: 2rem; color:#022969; padding: 30; ">Please click the following link to verify your email address</p>
                      <a href="${process.env.URL}/emailconfirm/${token}" style="margin: 100; font-size: 2rem; text-align: center; padding: 30;
                    padding: 100; color: #EE968C;
                  min-height:70vh;width:100%;">Verify your email</a>
                </body>
              </html>
            `
        case ('forgotpassword'):
            
            return `
            <!DOCTYPE html>
            <html>
              <body style="margin: 0; padding: 0;background-color: #000000;min-height:70vh;width:100%;">
                <img src="${process.env.URL}/logo.jpg" alt="our logo" style="width: 80px; height:80px;object-fit:center;"/>  
                <p></p>
                <p>Kindly click the following link to change your password</p>
                <a href="${process.env.URL}/changepassword/${token}">Change your password</a>
              </body>
            </html>
            `
        default:
            return
    }
}