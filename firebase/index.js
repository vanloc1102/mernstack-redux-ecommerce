const admin = require("firebase-admin");

const serviceAccount = require("../config/firebaseServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-7e672.firebaseio.com",
});

module.exports = admin;
