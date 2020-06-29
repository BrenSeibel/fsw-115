import React, { Component }from 'react';
import App from './App'
import Todo from './todo.json'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://api.vschool.io/<BrenSeibel>/todo')
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
});

    }
}

export default Todo