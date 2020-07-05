var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// document.getElementsByClassName("addBtn")[0]
// .addEventListener("click", ()=>{
// newElement()

// })

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  console.log(ev.target.tagName === 'LI')
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(dataObject) {
    
const todoForm = document.todoform;

    
  var li = document.createElement("li");

  li.textContent = dataObject.title;
  if (document.todoform.title === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.todoform.title = "";

  var li2 = document.createElement("li");

  li2.textContent = dataObject.description;
  if (document.todoform.description === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li2);
  }
  document.todoform.description = "";
  
  
  var li3 = document.createElement("li");

  li3.textContent = dataObject.price;
  if (document.todoform.price === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li3);
  }
  document.todoform.price = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const todoForm = document.todoform;

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    const todoForm = document.todoform;
    const newTodo = {
        title : todoForm.title.value,
        description : todoForm.description.value,
        price : todoForm.price.value
    }
    axios.post("https://api.vschool.io/<BrenSeibel>/todo", newTodo)
    .then(response => {console.log(response.data)
    newElement(response.data)})
    .catch(error => console.log(error))
})

console.log(axios)


// const checkbox = document.createElement("input")
// checkbox.type = "checkbox"
// document.body.appendChild(checkbox)

// checkbox.addEventListener("change", function(event){
//     console.log(event.target.checked)
    
//     axios.put("https://api.vschool.io/BrenSeibel/todo")+
//     (arr[i]._id), {completed: event.targer.checked}
//     .then(response => {console.log(response.data)
    
//     })
//     .catch(error => console.log(error))
// });