const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        // const name = data.name;
        // document.getElementById("").textContent = "JSON results: " + jsonData;
        // document.getElementById("").textContent = "Parsed JSON's 'name' property: " + data.name;
        // spaceshipurl = data.starships[0];
        // console.log(spaceshipurl);
        showData(data.objects[0]);
    }
};
 function showData(arr){
     for(let i = 0; i < arr.pokemon.length; i++){
         const h1 = document.createElement('h1')
         h1.textContent = arr.pokemon[i].name
         document.body.appendChild(h1)
     }
 }

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

