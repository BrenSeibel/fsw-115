// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
// document.getElementsByClassName("addBtn")[0]
// .addEventListener("click", ()=>{
// newElement("myInput")
// newElement("myInput2")
// })

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// var list = document.getElementById('myUL');
// list.addEventListener('click', function(ev) {
//   console.log(ev.target.tagName === 'LI')
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// function newElement(inputId) {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById(inputId).value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById(inputId).value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }

const todoForm = document.todofrom;

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title : todoForm.tittle.value,
        description : todoForm.description.value,
        price : todoForm.price.value
    }
    axios.post("https://api.vaschool.io/BrenSeibel/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})

console.log(axios)


const checkbox = document.createElement("input")
checkbox.type = "checkbox"
document.body.appendChild(checkbox)

checkbox.addEventListener("change", function(event){
    console.log(event.target.checked)
    
    axios.put("https://api.vschool.io/BrenSeibel/todo")+
    (arr[i]._id), {completed: event.targer.checked}
    .then(response => {console.log(response.data)
    
    })
    .catch(error => console.log(error))
});