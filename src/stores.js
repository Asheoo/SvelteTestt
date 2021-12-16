import { writable } from 'svelte/store'

export const Pokestore = writable([]);


const fetchRandomDogPhoto = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url);
  const data = await response.json()
  return data.message;
}

const fetchPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const response = await fetch(url);
  const data = await response.json();
  const pokemoni = data.results;

  const pokemoniSaSlikom = await Promise.all(pokemoni.map(async pok => {
    const randomKer = await fetchRandomDogPhoto(); 
    return {...pok, ker: randomKer }
  }));
  Pokestore.set(pokemoniSaSlikom);
}


fetchPokemon();



export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lpisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
])
