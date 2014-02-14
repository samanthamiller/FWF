angular.module("gpaApp").service("studentService", function(){
    
    // Array holding objects of currents students information, also the array new students will be pushed into
   var studentArray = [
       {name: 'Nicole', gpa: '3.75'},
       {name: 'Samantha', gpa: '3.9'},
       {name: 'Bryan', gpa: '2.15'}
   ];
    
    
    this.getStudent = function(){
        // Set the variable studentStorage to localStorage and parse it so it is JSON readable
        var studentStorage = JSON.parse(localStorage.getItem('studentsLS')) || studentArray;
        // Store the JSON information in the studentArray
        studentArray = studentStorage;
        return studentArray;
    }
    
    this.getGpaAt = function(idx){
        // Returns the index number so that it can be used to delete the student
        return studentArray[idx];
        localStorage.setItem('studentsLS', JSON.stringify(studentArray));
    }
    
    this.addNewStudent = function(pName, pGpa){
        // Puts the input information into an object so that it can be pushed to the studentArray
        var newStudent = {name: pName, gpa: pGpa};
        // Pushes newStudent into the studentArray
        studentArray.push(newStudent);
        // Adds student to local storage
        localStorage.setItem('studentsLS', JSON.stringify(studentArray));
    }
    
    this.removeStudentAt = function(pIndex){
        studentArray.splice(pIndex, 1);
        // Removes student from local storage
        localStorage.setItem('studentsLS', JSON.stringify(studentArray));
    }
});