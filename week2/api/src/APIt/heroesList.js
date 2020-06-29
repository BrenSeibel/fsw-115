import React from 'react';
import data from './heroesList.json'
import SuperHero from "./superHero"

class HeroesList extends React.Component {
    constructor() {
        super()
        this.state = {
            heroes : data
        }
    }

    render () {
        const heroesList = this.state.heroes.map(item => <SuperHero key = {item.id} item = {item} handleClick = {this.handleClick}/>)

        return (
            <div>
                {heroesList}
            </div>
        )
    }
}

export default HeroesList