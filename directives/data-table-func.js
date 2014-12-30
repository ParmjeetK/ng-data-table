function dataTableHandler() {
      this.linkTo = function ($scope, element, attrs, ctrls) {

        $scope.enablePage = angular.isDefined(attrs.enablePaging) ? $scope.$parent.$eval(attrs.enablePaging) : true;
        $scope.cssClass = angular.isDefined(attrs.css) ? $scope.$parent.$eval(attrs.css) : "table table-striped table-bordered table-hover";
        $scope.enableSearchBox = angular.isDefined(attrs.enableSearch) ? $scope.$parent.$eval(attrs.enableSearch) : true;

        $scope.firstText = angular.isDefined(attrs.pagingFirstText) ? $scope.$parent.$eval(attrs.pagingFirstText) : "First";
        $scope.lastText = angular.isDefined(attrs.pagingLastText) ? $scope.$parent.$eval(attrs.pagingLastText) : "Last";
        $scope.previousText = angular.isDefined(attrs.pagingPreviousText) ? $scope.$parent.$eval(attrs.pagingPreviousText) : "Prev";
        $scope.nextText = angular.isDefined(attrs.pagingNextText) ? $scope.$parent.$eval(attrs.pagingNextText) : "Next";


        $scope.tableHeaders = angular.copy($scope.mapping.headers);
        $scope.columnsMap = angular.copy($scope.mapping.map);
        $scope.paginationArr = [10, 25, 50, 100];
        $scope.currentPageSize = $scope.paginationArr[0];
        $scope.dataTableSearch = "";
        $scope.currentPage = 1;
        $scope.$watch('data', function () {
            loadDataTable();
        });

        $scope.searchcss = "";

        if (!$scope.enablePage && $scope.enableSearchBox) {
            $scope.searchcss = "float:left";
        }
        else {
            $scope.searchcss = "float:right";
        }

        $scope.setPagingAndData = function () {

            var begin = ((parseInt($scope.currentPage) - 1) * parseInt($scope.currentPageSize))
            , end = begin + parseInt($scope.currentPageSize);

            var data = $scope.data.slice(begin, end);
            bindData(data);
        }

        $scope.$watch("currentPage", function (event, data) {
            if ($scope.data !== undefined)
                $scope.setPagingAndData();
        });


        $scope.changePageSize = function () {
            $scope.currentPage = 1;
            loadDataTable();
        }

        function bindData(data) {
            var columns = [];
            $scope.tableData = [];
            for (var tableRow in data) {
                columns = [];
                var row;
                if (!angular.isArray(data[tableRow])) {
                    row = [data[tableRow]];
                }
                else {
                    row = data[tableRow];//TODO need to add code for this scenario
                }
                //row = [data[tableRow]];
                for (var map in $scope.columnsMap) {
                    var linqMap = $scope.columnsMap[map];
                    var queryResult2 = Enumerable.From(row)
                        .Select(linqMap)
                        .ToArray();

                    if (queryResult2.length > 0 && (queryResult2[0] !== ''
                        && queryResult2[0] !== undefined && queryResult2[0] !== null)) {
                        columns.push(queryResult2[0]);
                    }
                }
                if (columns.length > 0)
                    $scope.tableData.push(columns);
            }
        }

        function loadDataTable() {
            var columns = [];
            $scope.tableData = [];
            for (var tableRow in $scope.data) {
                if ($scope.tableData.length >= $scope.currentPageSize) {
                    break;
                }
                columns = [];
                var row;
                if (!angular.isArray($scope.data[tableRow])) {
                    row = [$scope.data[tableRow]];
                }
                else {
                    row = $scope.data[tableRow];
                }
                for (var map in $scope.columnsMap) {
                    var linqMap = $scope.columnsMap[map];
                    var queryResult2 = Enumerable.From(row)
                        .Select(linqMap)
                        .ToArray();

                    if (queryResult2.length > 0 && (queryResult2[0] !== ''
                        && queryResult2[0] !== undefined && queryResult2[0] !== null)) {
                        columns.push(queryResult2[0]);
                    }
                }
                if (columns.length > 0)
                    $scope.tableData.push(columns);
            }
        }
    }
}