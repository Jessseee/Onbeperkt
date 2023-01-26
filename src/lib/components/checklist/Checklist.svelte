<script>
  import Checklist from './checklist.md';
  import store from '$lib/stores/checklist.ts';
  import { onMount } from 'svelte';

  let checklist;

  onMount(() => {
    checklist.querySelector('.collapse-btn').click();
    document.querySelectorAll('input').forEach((el, i) => {
      el.id = `checkbox-${i}`;
      if (el.id in $store) {
        el.checked = $store[el.id];
      }
    });
  });
</script>

<h1 class="mb-[0.25em] text-3xl font-bold">Toegankelijkheidsbeoordeling</h1>
<p class="mb-[1em] text-lg">
  De onderstaande checklist is de eerste stap in het evalueren van de toegankelijkheid van uw
  bedrijf.
</p>
<div bind:this={checklist} id="checklist">
  <Checklist />
</div>
