// In src/index.js 
const express = require("express"); 
const routeIndex = require("./routes/index.js")  //adding this crashed the app

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.use("/index.js", routeIndex); //adding this crashed the app

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});