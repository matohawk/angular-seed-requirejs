angular.module('myApp').factory('myService2', ['myService1', function(myServices1) {

    return {

        myFunctionService2: function(){

            myServices1.myFunctionService1();
            console.log('myFunctionService2');

        }

    }

}]);