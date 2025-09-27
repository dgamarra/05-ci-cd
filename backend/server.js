const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost:27017/pro-tests")
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));
