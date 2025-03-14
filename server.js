const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server listening on http:/localhost:${port}`)
})

app.get("/", (req, res) => {
    res.send("welcome to my server")
})
//index
app.get("/posts", (req, res) => {
    res.send("all posts")
    console.log("sent all posts");

})

//show
app.get("/posts/:id", (req, res) => {
    const postId = req.params.id
    res.send(`post with id: ${postId}`)
    console.log(`sent post with id ${postId}`);

})
//store
app.post("/posts/:id", (req, res) => {
    const postId = req.params.id
    res.send(`add new post with id: ${postId}`)
})

//update
app.put("/posts/:id", (req, res) => {
    const postId = req.params.id
    res.send(`update post with id: ${postId}`)
})

//modify
app.patch("/posts/:id", (req, res) => {
    const postId = req.params.id
    res.send(`edit post with id: ${postId}`)
})

//destroy
app.delete("/posts/:id", (req, res) => {
    const postId = req.params.id
    res.send(`delete post with id: ${postId}`)
})
