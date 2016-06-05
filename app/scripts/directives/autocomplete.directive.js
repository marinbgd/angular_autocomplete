(function () {

  angular.module('atestApp')
    .directive('autocomplete', function () {

      return {
        restrict: 'E',
        templateUrl: 'scripts/directives/autocomplete.html',
        scope: {
          values: '='
        },
        link: function (scope, element, attrs) {
          scope.visible = false;
          scope.canAddNewValue = false;


          function _checkForDuplicateValue (value) {
            if (!scope.values || !scope.values.length || !value) { return; }

            var i = 0,
              length = scope.values.length;

            for ( i; i<length; i += 1 ) {
              if (scope.values[i].name === value) {
                scope.canAddNewValue = false;
                return;
              }
            }

            scope.canAddNewValue = true;
          }

          scope.$watch('input', function (newValue, oldValue) {
            if (newValue && newValue.length > 1) {
              scope.visible = true;
            } else {
              scope.visible = false;
            }
            _checkForDuplicateValue(newValue);
          });

          scope.selectValue = function (value) {
            scope.input = value.name;
          };

          scope.addAutocomplete = function (value) {
            var tempValue = {
              name: value,
              custom: true
            };

            scope.$emit('ADDED_AUTOCOMPLETE_RESULT', tempValue);

            _checkForDuplicateValue(value);
          };

        }
      };

    });

}());
