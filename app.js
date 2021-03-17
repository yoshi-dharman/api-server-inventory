const express = require("express");
const app = express();
const port = process.env.PORT || 3100;
const cors = require('cors');
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("server running on port "+port);
});