const express = require('express')
const router = express.Router()


//index
router.get("/", (req, res) => {
    res.send("all posts")
    console.log("sent all posts");

})

//show
router.get("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`post with id: ${postId}`)
    console.log(`sent post with id ${postId}`);

})
//store
router.post("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`add new post with id: ${postId}`)
})

//update
router.put("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`update post with id: ${postId}`)
})

//modify
router.patch("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`edit post with id: ${postId}`)
})

//destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`delete post with id: ${postId}`)
})

module.exports = router;