angular.module('myApp').controller('myMainCtrl', ['myService1', 'myService2', '$scope', function(myService1, myService2, $scope) {

        /**
         *  Initialize the view
         *
         */
        $scope.init = function() {

            myService1.myFunctionService1();
            myService2.myFunctionService2();
            console.log('myAppIsInitialize');

        };

}]);
