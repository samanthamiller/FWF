function ToDoController($scope){
    $scope.newListItem = "";
    
    $scope.listItems = [
        {taskName: "Lab Assignment 01", isCompleted: false},
        {taskName: "Lab Assignment 02", isCompleted: false},
        {taskName: "Lab Assignment 03", isCompleted: false}
    ];
    
    $scope.addItem = function(){
        
        var obj = {
            taskName : $scope.newListItem ,
            isCompleted : false
        };
      
        //var obj = {};
        //obj.taskName = $scope.newListItem;
        //obj.isCompleted = false;
        
        $scope.listItems.push(obj)
    
    }

    $scope.cleanUp = function(){
        var oldItems = $scope.listItems;
        
        $scope.listItems = [];
        for(var i = 0 ; i < oldItems.length; i++)
        {
            if(! oldItems[i].isCompleted)
            {
                $scope.listItems.push(oldItems[i]);
            }
        }
        
    }

}
