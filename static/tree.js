angular.module('components', [])
  .component('tree', {
      restrict: 'E',
      transclude: true,
      bindings: { tree: '<', variables: '=' },
      controller: function($scope, $element) {
        $scope.isLeaf = function(o) { return typeof(o) === "string" };
      },
      template: `
    fdsahjkfdas {{tree}} fdsafds
        <span>
          <script type="text/ng-template" id="processArray">
            <ul>
              <li ng-include="'processElement'" ng-repeat="elt in array"></li>
            </ul>
          </script>

          <script type="text/ng-template" id="processLeaf">
            <span class="placeholder"></span>
            {{variables[elt].name}}
          </script>

          <script type="text/ng-template" id="processElement" ng-init="expanded = false">
            <!-- a non-leaf elt is an object with one key, whose value is an array -->
            <span ng-if="!isLeaf(elt)">
              <span ng-repeat="(key, value) in elt" class="nonleaf expanded-{{expanded}}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                <span ng-click="expanded = !expanded">{{key}}</span>
                <span class="subelements" ng-include="'processArray'" ng-init="array = value"></span>
              </span>
            </span>

            <span ng-if="isLeaf(elt)" ng-include="'processLeaf'" class="leaf"></span>
          </script>

          <ng-include src="'processArray'" ng-init="array = tree" />
      {{tree}}
        </span>
      `,
      replace: true,
  });
