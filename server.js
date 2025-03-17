const express = require('express');
const app = express();
const port = 3000;
const posts_routes = require('./routers/posts_routes')
app.use(express.json());

app.listen(port, () => {
    console.log(`server listening on http:/localhost:${port}`)
})

app.get("/", (req, res) => {
    res.send("welcome to my server")
})

app.use('/posts', posts_routes)
