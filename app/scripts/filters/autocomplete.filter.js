(function () {

  angular.module('atestApp')
    .filter('autocomplete', function () {

      return function(values, input) {
        //get only first letters
        if (!input || input.length < 2) { return []; }

        var output = [];
        var resultsCount = 0;

        values.forEach( function (value) {
          if (resultsCount > 4) { return; }
          if (value.name.toLowerCase().indexOf(input.toLowerCase()) === 0) {
            output.push(value);
            resultsCount++;
          }
        });

        return output;
      }

    });

}());
