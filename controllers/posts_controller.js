const posts_data = require('../data/posts_data')

function tagFilter(req, res) {
    let filteredPosts = posts_data
    if (req.query.tags) {
        filteredPosts = posts_data.filter(post => post.tags.includes(req.query.tags))
    }
    if (filteredPosts == '') {
        res.status(404).json({
            error: '404 not found',
            message: 'no post with those tags was found!'
        })
    } else {
        res.json(filteredPosts);
    }

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
    if (postIndex === -1) {
        res.status(404).json({
            error: '404 not found',
            message: 'Post not found'
        })
    } else {
        posts_data.splice(postIndex, 1)
        console.log(posts_data)
        res.status(204).send()
    }

}

module.exports = {
    show,
    tagFilter,
    store,
    update,
    modify,
    destroy
}