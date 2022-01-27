/*David, Vincent Jericho C.
2075 - WCSERVER*/

var log = {
  info: function(info) {
    console.log('Info: '+ info);
  },

  warning: function(warning) {
    console.log('Warning: '+ warning);
  },

  error: function(error) {
    console.log('Error: '+ error);
  },
}

module.exports = log