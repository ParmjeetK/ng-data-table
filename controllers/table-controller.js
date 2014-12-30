tableApp.controller('table-controller', ['$scope', function ($scope) {

    $scope.mapping = {};
    $scope.mapping.headers = ['ID', 'Rendering engine', 'Browser', 'Paltform(s)', 'Engine Version', 'Css Grade'];
    $scope.mapping.map = ['$.id', '$.engine', '$.browserinfo', '$.platform', '$.version', '$.css'];

    $scope.browserInfo = {
        engine: 'Gecko',
        browserinfo: 'Firefox 1.0',
        platform: 'Win 98+ / OSX.2+',
        version: '1.7',
        css: 'A',
        id: 0
    }

    $scope.browsers = [];

    for (var index = 0; index <= 60; index++) {
        var browser = angular.copy($scope.browserInfo);
        browser.version = Math.random(100);
        browser.id = (index + 1);
        $scope.browsers.push(browser);
    }

}]);