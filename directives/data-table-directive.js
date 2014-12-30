tableApp.directive('aioDataTable', ['$filter', function ($filter) {
    return {
        //replace: true,
        restrict: 'EA',
        scope: {
            enablePaging: '@',
            enableSearch: '@',
            mapping: '=',
            data: '=',
            pagingFirstText: '@',
            pagingLastText: '@',
            pagingPreviousText: '@',
            pagingNextText: '@'
        },
        templateUrl: 'data-table.html',
        link: function ($scope, element, attrs, ctrls) {
            var tableHelper = new dataTableHandler();
            tableHelper.linkTo($scope, element, attrs, ctrls);
        }
    };
}]);

tableApp.directive('aioDataTableRoundCorners', function () {
    return {
        //replace: true,
        restrict: 'EA',
        scope: {
            enablePaging: '@',
            enableSearch: '@',
            mapping: '=',
            data: '=',
            pagingFirstText: '@',
            pagingLastText: '@',
            pagingPreviousText: '@',
            pagingNextText: '@'
        },
        templateUrl: 'rounded-table.html',
        link: function ($scope, element, attrs, ctrls) {
            var tableHelper = new dataTableHandler();
            tableHelper.linkTo($scope, element, attrs, ctrls);
        }
    };
});

