function index(req, res) {
    res.send("all posts")
}

function show(req, res) {
    const postId = req.params.id
    res.send(`post with id: ${postId}`)
}

function store(req, res) {
    const postId = req.params.id
    res.send(`add new post with id: ${postId}`)
}

function update(req, res) {
    const postId = req.params.id
    res.send(`update post with id: ${postId}`)
}

function modify(req, res) {
    const postId = req.params.id
    res.send(`edit post with id: ${postId}`)
}

function destroy(req, res) {
    const postId = req.params.id
    res.send(`delete post with id: ${postId}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}