import React, { Component }from 'react';
import App from './App'

class Apicall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
});

    }
}

export default Apicall