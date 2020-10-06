


var my_list= []

function addNew(){
  var newName = prompt("what name would you like to add?")
  my_list.push(newName)
}

function remove(){
  var remName = prompt("what name would you like to remove?")
  var index = my_list.indexOf(remName);
  my_list.splice(index,1)
}

function display(){
  console.log(my_list);
}

 var choice = prompt("would you like to open roater web app? Y or N")
  var request = "empty";

  if (choice === 'Y') {
    while (request !== "quit") {
      request = prompt("please select an action add, remove, display or quit")
      if (request === "add") {
        addNew()
      }else if (request === "display") {
        display()
      }else if (request === "remove") {
        remove()
      }else {
        alert("not recognized")
        request = "quit"
      }
    }
  }
  alert("thank for using web app")
