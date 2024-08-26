const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const {
  CLIENT_ID,
  CLIENT_SECRET,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  EMAIL_USER,
} = require("../config/index");



const Oauth2 = google.auth.OAuth2;

const myOauth2Client = new Oauth2(
  CLIENT_ID,
  CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

myOauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: EMAIL_USER,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: ACCESS_TOKEN,
  },
});

module.exports = transport;