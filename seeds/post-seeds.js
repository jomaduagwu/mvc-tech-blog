const { Post } = require('../models');

const postdata = [
    {
        title: "Coding is Fun",
        content: "I'm really enjoying coding. I love the challenge and the satisfaction once I create something.",
        userId: 1
    },
    {
        title: "Social media can be distracting",
        content: "I have to set a daily limit on all my social media accounts because I'm spending way too much time on them and I'm not as productive in my work.",
        userId: 2
    },
    {
        title: "Lorem ipsum dolor sit amet",
        content: "Aut quas voluptatem sed sint molestiae quo ducimus tempore. Aut possimus rerum non minima vero ut modi nisi ut quibusdam quis est inventore Quis.",
        userId: 3
    },
    {
        title: "Eum molestiae ratione in saepe optio",
        content: "Sit suscipit quia non nobis Quis ea sint omnis. Quo expedita voluptates eum nisi eveniet vel quia officiis sit molestiae eligendi.",
        userId: 4
    },
    {
        title: "recusandae soluta est internos",
        content: "Ut maiores voluptatibus sed reiciendis nihil aut voluptatem mollitia cum rerum consequatur et laudantium enim ad deserunt consequatur.",
        userId: 3
    },
    {
        title: "Quis eos reprehenderit autem",
        content: "Eos quos sequi! Nam internos accusantium est dicta neque in natus ducimus ad beatae neque vel velit voluptas. Et delectus eligendi qui voluptatem velit est necessitatibus neque sit officia corrupti.",
        userId: 1
    },

]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;