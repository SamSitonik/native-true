// 2-5-20 Import express library
const express = require("express");
// Import path module
const path = require("path");
// Init express
const app = express();
 
app.use(express.json()) 
 
// Serve static assets in production, Shiyu, code here executed when you test it locally, it will only be executed when you send code online. 
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
 
const PORT = process.env.PORT || 3100;
 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

