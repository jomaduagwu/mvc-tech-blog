const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'Et architecto temporibus cum sunt consequatur et optio error ut suscipit quae sit totam saepe.',
    userId: 3,
    postId: 1,
  },
  {
    comment: 'Cum fugiat quaerat sed quaerat sint sit sint voluptatem aut blanditiis quia ad maxime quasi.',
    userId: 1,
    postId: 2,
  },
  {
    comment: 'Et recusandae galisum aut suscipit nesciunt et saepe blanditiis ab incidunt dolor.',
    userId: 2,
    postId: 3,
  },
  {
    comment: 'Vel dolores dolores aut exercitationem soluta vel nesciunt voluptatem.',
    userId: 1,
    postId: 4,
  },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;