axios.get("http://swapi.dev/api/people/").then(response => {

    console.log(response.data)

    var main = document.getElementsByTagName("main")[0]

    for (let i = 0; i < response.data.results.length; i++){
        var name = document.createElement("name")
        main.appendChild(name)
        name.textContent = response.data.results[i].name
    

    axios.get(response.data.results[i].homeworld).then(response => {

        console.log(response.data)
     
        // for (let b = 0; b < response.data.results.length; b++){
            var planet = document.createElement("planet")
            main.appendChild(planet)
            planet.textContent = response.data.name
        // }
    })

    axios.get(response.data.results[i].starships[0]).then(response => {
        console.log(response.data)

        var starships = document.createElement("starships")
        main.appendChild(starships)
        starships.textContent = response.data.name
    })
        
}
})

