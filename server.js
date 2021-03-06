const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// db
mongoose
    .connect(
        // process.env.DATABASE ||
        //     "mongodb://localhost:27017/ecommerce-react-redux-mern",
        process.env.DATABASE ||
            "mongodb+srv://root:root@singapore.njw09.mongodb.net/mern-firstapp-redux?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
