<script>
  // import {onMount, onDestroy} from 'svelte'
  import { Pokestore } from '../stores'
  import { fade, scale } from 'svelte/transition'
  import Pokemon from './Pokemon.svelte';

  // let feedback = []

  // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

  // onMount(() => {
  //   console.log('mounted')
  // })

  // onDestroy(() => {
  //  unsubscribe()
  // })

</script>


{#each $Pokestore as pokemon (pokemon.url)}
  <Pokemon item={pokemon} />
{/each}