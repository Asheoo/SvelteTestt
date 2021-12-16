<script>
    import {Pokestore} from '../stores'
    import Card from './Card.svelte'
    export let item
  
    const handleDelete = (itemId) => {
        Pokestore.update((currentPokemon) => {
        return currentPokemon.filter(item => item.name != itemId)
      })
    }
  </script>
  
  <Card>
    <button class="close" on:click={() => handleDelete(item.name)}>X</button>
    <img class='pokemon-img' src={item.ker} alt='slika pokemona' />
    <p class="text-display">
        {item.name}
    </p>
   
  </Card>
  
  <style>

    .pokemon-img {
        width: 90px;
        height: 90px;
        border-radius: 10px;
        object-fit: cover;
        display: inline-block;
    }
    .text-display {
        text-transform:capitalize;
        display: inline-block;
    }
    .num-display {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      background: #ff6a95;
      color: #fff;
      border: 1px #eee solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 19px;
    }
  
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background: none;
      border: none;
    }
  </style>