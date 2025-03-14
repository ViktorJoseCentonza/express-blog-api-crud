const posts_data = require('../data/posts_data')

function index(req, res) {
    res.json(posts_data)
}

function show(req, res) {
    const postSlug = req.params.slug
    const singlePost = posts_data.find(post => post.slug === postSlug)

    if (!singlePost) {
        return res.status(404).json({
            error: '404 not found',
            message: 'Post not found'
        })
    }

    res.json(singlePost)
}

function store(req, res) {
    const postSlug = req.params.slug
    res.send(`add new post with slug: ${postSlug}`)
}

function update(req, res) {
    const postSlug = req.params.slug
    res.send(`update post with slug: ${postSlug}`)
}

function modify(req, res) {
    const postSlug = req.params.slug
    res.send(`edit post with slug: ${postSlug}`)
}

function destroy(req, res) {
    const postSlug = req.params.slug
    // console.log(posts_data.indexOf(postSlug))
    // posts_data.splice(posts_data.indexOf(postSlug), 1)

    const postIndex = posts_data.findIndex(post => post.slug == postSlug);
    console.log(postIndex)
    posts_data.splice(postIndex, 1)
    console.log(posts_data)
    res.send("204")
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}