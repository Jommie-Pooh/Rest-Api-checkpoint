const { EMAIL_USER } = require("../config/index");
const transport = require("./smtpTransport");


const sendOtpToUser = (otp,email) => {


    const mailOptions = {
        from: EMAIL_USER,
        to: email,
        subject: "OTP Verification",
        html: `<h1>Your OTP is ${otp}</h1>`,
};

transport.sendMail(mailOptions, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent successfully");
    }
    
});
};

// send password reset token to users as email
const sendPasswordResetTokenToUser = (otp, email) => {
    const mailOptions = {
        from: EMAIL_USER,
        to: email,
        subject: "Password reset OTP",
        html: `<h1>Your OTP is${otp}</h1>`,
    };
    
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("email sent successfully");
        }
    });
};

module.exports = { sendOtpToUser, sendPasswordResetTokenToUser };