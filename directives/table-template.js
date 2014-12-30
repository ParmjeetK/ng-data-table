angular.module('table-template-cache', [])
.run(['$templateCache', function ($templateCache) {
    $templateCache.put('data-table.html', '<div class="row"><div class="col-sm-6" ng-show="enablePage">' +
                '<div class="dataTables_length"><label>Records per page' +
                '<select ng-model="currentPageSize" ng-change="changePageSize()" class="form-control input-sm">' +
                    '<option ng-repeat="page in paginationArr" value="{{page}}">{{page}}</option>' +
                '</select></label>' +
                '</div>' +
                '</div>' +
                '<div class="col-sm-6" ng-show="enableSearchBox">' +
                '<div class="dataTables_filter" style="{{searchcss}};">' +
                '<label >Search:<input ng-model="dataTableSearch" class="form-control input-sm" type="search">' +
                '</label>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<table class="{{cssClass}}">' +//table table-striped table-bordered table-hover
            '<thead>' +
                '<tr>' +
                   '<th ng-repeat="header in tableHeaders">' +
                   '{{header}}' +
                   '</th>' +
                '<tr>' +
                '<tr ng-repeat="row in tableData | filter:dataTableSearch">' +
                   '<td ng-repeat="col in row">' +
                   '{{col}}' +
                   '</td>' +
                '<tr>' +
            '<thead></table><pagination ng-show="enablePage" boundary-links="true" items-per-page="currentPageSize" total-items="data.length" ng-model="currentPage"' +
            'class="pagination-sm" previous-text="{{previousText}}" next-text="{{nextText}}" first-text="{{firstText}}"' +
            'last-text="{{lastText}}"></pagination>');

    $templateCache.put('rounded-table.html', '<div class="row"><div class="col-sm-6" ng-show="enablePage">' +
               '<div class="dataTables_length"><label>Records per page' +
               '<select ng-model="currentPageSize" ng-change="changePageSize()" class="form-control input-sm">' +
                   '<option ng-repeat="page in paginationArr" value="{{page}}">{{page}}</option>' +
               '</select></label>' +
               '</div>' +
               '</div>' +
               '<div class="col-sm-6" ng-show="enableSearchBox">' +
               '<div class="dataTables_filter" style="{{searchcss}};">' +
               '<label >Search:<input ng-model="dataTableSearch" class="form-control input-sm" type="search">' +
               '</label>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '<table class="bordered">' +//table table-striped table-bordered table-hover
           '<thead>' +
               '<tr>' +
                  '<th ng-repeat="header in tableHeaders">' +
                  '{{header}}' +
                  '</th>' +
               '<tr>' +
               '<tr ng-repeat="row in tableData | filter:dataTableSearch">' +
                  '<td ng-repeat="col in row">' +
                  '{{col}}' +
                  '</td>' +
               '<tr>' +
           '<thead></table><pagination ng-show="enablePage" boundary-links="true" items-per-page="currentPageSize" total-items="data.length" ng-model="currentPage"' +
           'class="pagination-sm" previous-text="{{previousText}}" next-text="{{nextText}}" first-text="{{firstText}}"' +
           'last-text="{{lastText}}"></pagination>');
}]);