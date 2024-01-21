const express = require("express"); 
const app = express(); 


app.get("/", (req, res) =>
 { res.send("Express on Vercel"); 
});

app.get("/home", (req, res) =>
 { res.send("Hello.. this is home page"); 
});

app.get("/about", (req, res) =>
 { res.send("hello.. this is about page"); 
});

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
     });

module.exports = app;