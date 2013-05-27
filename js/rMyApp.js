/* The main config files - dependencies for requirejs */

require.config({
    paths: {
        angular: 'components/angular/angular',
        myApp: 'lib/ngMyApp',
        myService1: 'lib/services/myService1',
        myService2: 'lib/services/myService2',
        myMainCtrl: 'lib/controllers/myMainCtrl'
    },
    shim: {
        'myApp': {
            deps: ['angular']
        },
        'myService1': {
            deps: ['myApp']
        },
        'myService2': {
            deps: ['myApp', 'myService1']
        },
        'myMainCtrl': {
            deps: ['myApp', 'myService1', 'myService2']
        }
    }
});

require(['angular', 'myApp', 'myService1', 'myService2', 'myMainCtrl']);