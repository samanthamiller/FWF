var students = angular.module("gpaApp", ['ngRoute']);

students.controller('MyGpaController', function($scope){
    $scope.test = 'I work';
});

// Add studentService so that the function has access to the service file
students.controller('studentsController', function($scope, studentService){
    $scope.roster = studentService.getStudent();
    
    // Removes student from the roster based on index number of the student clicked 
    $scope.removeFromRoster = function(idx){
        studentService.removeStudentAt(idx);
    }
});

// Add studentService and $routeParams so that the function has access to them
students.controller('gpaController', function($scope, studentService, $routeParams){
    // When students name is clicked it will route it to the 'details' page  
    $scope.viewGpa = studentService.getGpaAt($routeParams.studentIdx);
});

// Add studentService so that the function has access to the service file
students.controller('addStudentController', function($scope, studentService){
    
    // Addes the new student to the array
    $scope.addNewStudent = function(){
        if(!$scope.newStudent || !$scope.newStudent.name || !$scope.newStudent.gpa) return;
        studentService.addNewStudent($scope.newStudent.name, $scope.newStudent.gpa);
        // On click it will return to the students page after adding the new student
        document.location.hash = "/students";
    }
});

students.config(function($routeProvider){
    $routeProvider.when('/students',{
        templateUrl: 'views/students.html',
        controller: 'studentsController'
        // :studentIdx will reRoute the page to the details page
    }).when('/gpas/:studentIdx',{
        templateUrl: 'views/gpas.html',
        controller: 'gpaController'
    }).when('/addStudent',{
        templateUrl: 'views/addStudent.html',
        controller: 'addStudentController'
    }).otherwise({
        redirectTo: '/students'
    })
});