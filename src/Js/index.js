var app = angular.module('indexPage', ["ngRoute"]);




app.config(function ($routeProvider) {
    $routeProvider
        .when("/login", { templateUrl: "./login.html", controller: "myCtrl" })
        .when("/MonHoc/:idMH", { templateUrl: "./lessson.html", controller: "monHocCtrl" })
        .when("/Quiz/:idMH/:idQ", { templateUrl: "./quiz.html", controller: "monHocCtrl" })
        .otherwise({ templateUrl: "./includes/home.html", controller: "myCtrl" });
});

// Controller Mẹ
app.controller('myCtrl', function ($scope, $rootScope, $http, $location) {
    //Mãng Sinh Viên
    $scope.listStudents = []; //Mãng rỗng
    $scope.username = '';
    // dùng giao thức http lấy mãng js về
    $http.get('./src/db/Students.js').then(
        function (d) {

            $scope.listStudents = d.data;
            $scope.username = $scope.listStudents[0].username;
            $scope.name = $scope.listStudents[0].fullname;
            $scope.marks = $scope.listStudents[0].marks;
        },
        function (e) {
            alert('Lỗi: ' + e.statusText)
        }
    );

    //Mảng môn học
    $scope.Subjects = []; //Mãng rỗng
    // dùng giao thức http lấy mãng js về
    $http.get('./src/db/Subjects.js').then(
        function (d) {
            $scope.Subjects = d.data;
        },
        function (e) {
            console.log('Lỗi khi lấy câu hỏi');
        }
    );

});

app.controller('monHocCtrl', function ($scope, $http, $routeParams, $interval) {
    $scope.daNopBai = false;
    $scope.idMH = $routeParams.idMH;
    $scope.idQ = $routeParams.idQ;
    $scope.dsCauHoi = [];

    $http.get('./src/db/Quizs/' + $scope.idMH + '.js').then(
        function (r) {
            $scope.dsCauHoi = r.data;
            chonDapAn();
        },
        function (r) {
            console.log('Lỗi khi lấy câu hỏi')
        }
    );

    $scope.subject = layDoiTuongTuID($scope.Subjects, $scope.idMH); //đối tượng

    $scope.limitCharacters = function (text, limit) {
        return (text.length > limit) ? text.substring(0, limit) + '...' : text;
    };






    $scope.pSize = 1;
    $scope.start = 0;

    $scope.next = function () {
        $scope.start++;
        if ($scope.start == $scope.dsCauHoi.length) $scope.start = 0;

    }

    $scope.back = function () {
        $scope.start--;
        if ($scope.start == -1) $scope.start = $scope.dsCauHoi.length - 1;

    }

    
    // Đếm thời gian
    $scope.timeToStop = 120;
    $interval(function () {
        $scope.timeToStop--;
        if($scope.timeToStop == 0) $scope.nopBai();
    }, 1000);

   

    $scope.thayDoiCauHoi = function(index){
        $scope.start = index;
    }

    $scope.cauDaChon = function(){
        var num = 0;
        for(var i = 0; i< $scope.dsCauHoi.length; i++){
            if($scope.radioStates[i] != null) num++;
        }
        return num;
    }


    function chonDapAn() {
        // Khởi tạo đối tượng để lưu trữ trạng thái của các nút radio button
        $scope.radioStates = new Array($scope.dsCauHoi.length);
        console.log($scope.radioStates);

        // Hàm này được gọi khi người dùng chọn một câu trả lời
        $scope.selectAnswer = function (qIndex, selectedAnswerId) {
            $scope.radioStates[qIndex] = selectedAnswerId;
            console.log($scope.radioStates);
        };

    }



    $scope.nopBai = function(){
        $scope.currentTime = Date.now();
        $scope.daNopBai = true;
        var diemTong = 0;
        $scope.cauDung = 0;
        var score = 0;
        for(var i=0; i< $scope.dsCauHoi.length;i++){
            diemTong += $scope.dsCauHoi[i].Marks;
            if($scope.dsCauHoi[i].AnswerId == $scope.radioStates[i]){
                score += $scope.dsCauHoi[i].Marks;
                $scope.cauDung++;
            }
        }
      
        $scope.ketQua = (score/diemTong)*10;
      

        
    }
});





function layDoiTuongTuID(mang, idCanTim) {
    for (var i = 0; i < mang.length; i++) {
        if (mang[i].Id == idCanTim) {
            return mang[i]; // Trả về đối tượng nếu ID khớp
        }
    }
    console.log('khong tim thay id of ', + idCanTim);
    console.log(mang);
    return null; // Trả về null nếu không tìm thấy

}

app.filter('formatTime', function () {
    return function (input) {
        var minutes = Math.floor(input / 60);
        var seconds = input % 60;
        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };
});

app.filter('timeFormat', function() {
    return function(input) {
        var date = new Date(input);
        var hours = date.getHours().toString().padStart(2, '0');
        var minutes = date.getMinutes().toString().padStart(2, '0');
        var seconds = date.getSeconds().toString().padStart(2, '0');
        return hours + ':' + minutes + ':' + seconds;
    };
});

