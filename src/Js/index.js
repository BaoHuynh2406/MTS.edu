var app = angular.module('indexPage', ["ngRoute"]);

    app.controller('ctrl', ($scope, $rootScope, $http, $location) =>{

    });

    app.config(function ($routeProvider) {
        $routeProvider
          .when("/login", { templateUrl: "./login.html" })
          .when("/lienhe", { templateUrl: "lienhe.html" })
          .when("/tracnghiem/:idMH/:tenMH", { templateUrl: "tracnghiem.html", controller: "tnctrl" })
          .otherwise({templateUrl: "./home.html"});
      });




    app.controller('ctrlUser', function ($scope, $http) {
        $scope.listStudents = []; //Mãng rỗng
                // dùng giao thức http lấy mãng js về
                $http.get('./src/db/Students.js').then(
                    function (d) {
                        $scope.listStudents = d.data;
                        $scope.name =  $scope.listStudents[0].fullname;
                        $scope.marks =  $scope.listStudents[0].marks;
                    },
                    function (e) {
                        alert('Lỗi: ' + e.statusText)
                    }
                );
    });

// m.controller('khoaHoc', ($scope, $http) =>{
//         $scope.Subjects = []; //Mãng rỗng
//          // dùng giao thức http lấy mãng js về
//          $http.get('./src/db/Subjects.js').then(
//             function (d) {
//                 $scope.Subjects = d.data;
//             },
//             function (e) {
//                 alert('Lỗi: ' + e.statusText)
//             }
//         );
// });

