// function formatDate(date) {
//     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
//         date
//       ).getFullYear()}`;
// }


// module.exports = {
//     formatDate
// };

const Handlebars = require('handlebars');

module.exports = {
  css: function(file) {
    // Generate the HTML for including CSS file
    return new Handlebars.SafeString('<link rel="stylesheet" href="' + file + '">');
  }
};