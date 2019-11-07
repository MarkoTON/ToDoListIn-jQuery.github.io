let taskArray = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];

$(function addTask() { 
  $("#btn-task").click(function(e){
    e.preventDefault();
    // Take value
    let taskTxt = $("#task").val();
    // Clearing input fild
    $("#task").val("");
    // adding ask in to array 
    taskArray.push(taskTxt);
    // Saving array in LS
    localStorage.setItem("taskList", JSON.stringify(taskArray));
    
    console.log(taskTxt);
    console.log(taskArray);
    loadTask();
  });
  
  loadTask();
  function loadTask(){
    // Clearing list
    $("ul#taskList").html("");
    // Taking list from LocalStorage
    var taskListArray = JSON.parse(localStorage.getItem("taskList"));
    // UL list
    let ul = $("ul#taskList");
    // Looping array
    $(taskListArray).each(function( index ) {
      let li = `<li class="list-group-item"><b>${taskListArray[index]}</b></li>` 
      ul.append(li);
      // console.log(taskListArray[index]);
    });
    console.log(taskListArray);
  };
});

$("#btn-clear").click(function () { 
  localStorage.clear();
});
