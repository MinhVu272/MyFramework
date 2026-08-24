const MiniFramework = require("../src");

const app = new MiniFramework();

app.get("/", (req, res) => {
    res.end("Hello from Mini Framework!");
});

app.get("/about", (req, res) => {
    res.end("About page");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});