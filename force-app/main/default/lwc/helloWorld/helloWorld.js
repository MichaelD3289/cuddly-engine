import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
        pokemonDetails;
        chosenPokemon = 'ditto';
        endpoint = "https://pokeapi.co/api/v2/pokemon/"

        changeHandler(event) {
        this.chosenPokemon = event.target.value;
        }

        getPokemonHandler() {
                fetch(this.endpoint + this.chosenPokemon).then(res => res.json()).then(data => {
                        this.pokemonDetails = JSON.stringify(data, null, 4)
                })
        }
}