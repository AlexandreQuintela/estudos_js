var listTask = document.getElementById('lista');

function addTask(){
    var task = document.getElementById("novaTarefa").value;
    listTask.innerHTML = '<p><input type="checkbox" name="" id="">'+task+'</p>'
}