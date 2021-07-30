const Post = require('../models/post');

exports.getPosts = (req, res) => {
    // res.json({
    //     posts: [{ title: "First" }, { title: "second" }]
    // });

    const posts = Post.find().select("_id title body").then((posts) => {
        // res.status(200).json({ posts: posts })
        res.json({ posts })
    }).catch(err => console.log(err))
}


exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("creating post: ", post);
    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: err
    //         })
    //     }
    //     res.status(200).json({
    //         post: result
    //     })
    // });

    post.save().then(rsult => {
        // res.result(200).json({
        res.json({
            post: result
        });
    });
}