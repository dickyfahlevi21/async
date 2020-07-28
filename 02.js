const axios = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com/'

// Get User
const getUsers = () =>
    axios.get(baseUrl + 'users')
    .then(response => response)
    .catch(e => console.log(e))
// Get User
const getPosts = () =>
    axios.get(baseUrl + 'posts')
    .then(response => response)
    .catch(e => console.log(e))

Promise.all([getUsers(), getPosts()])
    .then(result => {
        const users = result[0].data;
        const posts = result[1].data;
        const combine = posts.map(post => {
            post['user'] = users.filter(user => user.id == post.userId)[0]
            return post
        })
        console.log(combine)
    })
    .catch(e => console.log(e))