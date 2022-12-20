
 //TODO list
  var todoList = [
    {id:1, name:"coding",status :"done"},
    {id:2, name:"help mom",status :"incomplete"},
    {id:3, name:"relax",status :"done"}
  ];
  console.log(todoList)
while (getOptionByUser!=5){
    var getOptionByUser =Number(prompt(" 1-add todo\n 2-delete todo\n 3-Todo done\n 4-show all todos\n 5-exit\n enter an option:"))
    function selectUser(){
        switch (getOptionByUser) {
            case 1:
                    
                   addtodo();
                   break;
            case 2:
                deleteTodo();
                break;
            case 3:
                doneTodo();
                break;
            case 4:
                showAllTodos();
                break;
                case 5:
                break;
            default:
                alert("plsese select the correct option!!!")
                break;
          }
    }
    selectUser();
      //start addtoto
    function addtodo(){
      var gettodoByUser = prompt("enter todo name:")
      var todoLentgh = todoList.length;
      todoList.push(
    
          {
              id: todoLentgh+1,
              name:gettodoByUser,
              status:"incomplete" 
          }
      )
      alert("todo added")
      
    
    }
    //end addtodo
    
    //start deletetodo
    function deleteTodo(){
        var showtodos2 = []
        var showtodos = todoList.forEach(
            function(items){
                showtodos2.push(items.name)
                
            }
            
        )
        showtodos2 = showtodos2.join("\n")
        
        var isDelete = Number(prompt(showtodos2+"\n\n"+" select option to delete:"))
        todoList.splice(isDelete,1)
        
        alert("todo deleted")
        
    
    }

    // end deleteTodo
    
    // stert doneTodo
    function doneTodo(){
        var showtodos2 = []
        var showtodos = todoList.forEach(
            function(items){
                showtodos2.push(items.name)
                
            }
            
        )
        showtodos2 = showtodos2.join("\n")
        var  OptionToDelete =prompt(showtodos2+"\n\n"+"enter option to done todo:")
        todoList.forEach(function(todo){
            if(todo.name === OptionToDelete){
                todo.status = "done"
            }
        });
        alert("todo done!")
        
    
    }
      // end doneTodo
    
}

function showAllTodos (){
    var showIdTodo = [];
    var showNameTodo=[];
    var showstatusTodo = []
    var showIdtodos = todoList.forEach(
        function(items){
            showIdTodo.push(items.id)
            
        }
    )
    var showNametodos = todoList.forEach(
        function(items){
            showNameTodo.push(items.name)
        }
    )
    var showStatusTodos = todoList.forEach(
        function(items){
            showstatusTodo.push(items.status)
        }
    )
    for(var i = 0;i<todoList.length;i++){
        console.log(showIdTodo[i]+"-"+showNameTodo[i] +" | "+showstatusTodo[i])
    }
}


