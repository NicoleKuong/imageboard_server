const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();

const jsonParser = express.json();
app.use(jsonParser);

// Start server
app.listen(PORT, () => console.log("App listening"));
