import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
class Pokedex extends Component{
    
render(){
    let title;
    if(this.props.isWinner){
        title=<h2 className="Pokedex-winner">Winning Hand</h2>;
    }
    else{
        title=<h2 className="Pokedex-Loser">Loser Hand</h2>;
    }
return (
    <div className="Pokedex">
    <h1>Pokedex!</h1>
    <p>Total Experience: {this.props.exp}</p>
    {title}
    <div className="Pokecard-cards">
    {this.props.pokemon.map((p)=>(
        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
    ))

    }
    </div>
    </div>
)

}

}

export default Pokedex;