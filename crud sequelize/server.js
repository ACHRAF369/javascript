const express = require('express');
const app = express();
const db = require("./models");
const PORT = process.env.port || 3030;


app.use(express.urlencoded({ extended : true}));
app.use(express.json());



const apiRoutes = require("./routes/apiRoutes")
app.use("/api", apiRoutes)



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listing on : http://localhost:${PORT}`);
        
    })
})