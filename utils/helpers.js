module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },

      format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
    },  

    hasDuplicates(array) {
      var valuesSoFar = Object.create(null);
      for (var i = 0; i < array.length; ++i) {
          var value = array[i];
          if (value in valuesSoFar) {
              return true;
          }
          valuesSoFar[value] = true;
      }
      return false;
  }

}