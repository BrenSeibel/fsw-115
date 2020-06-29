import React, { Component }from 'react';
import App from './App'

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
});

    }
}

export default Index