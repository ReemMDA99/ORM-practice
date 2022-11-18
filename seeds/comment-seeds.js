const { Comment } = require('../models');

const userComment = [
  {
    comment_text: 'My post 1',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'My post 2',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'My post 3',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'My post 4',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'My post 5',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'My post 6.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'My post 7',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'My post 8',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'My post 9',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'My post 10',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'My post 11',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'My post 12',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'My post 13',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'My post 14',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'My post 15',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'My post 16',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'My post 17',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'My post 18',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'My post 19',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'My post 20',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'My post 21',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'My post 22',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'My post 23',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'My post 24',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'My post 25',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'My post 26',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(userComment);

module.exports = seedComments;
