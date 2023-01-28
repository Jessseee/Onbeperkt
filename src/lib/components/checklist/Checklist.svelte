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

<div bind:this={checklist} id="checklist">
  <h1 class="mb-[0.25em] text-3xl font-bold">Toegankelijkheids&#173;beoordeling</h1>
  <p class="mb-[1em] text-lg">
    De onderstaande checklist is de eerste stap in het evalueren van de toegankelijkheid van uw
    bedrijf.
    <em>
      Voor meer informatie en persoonlijk advies klik op de knop onder aan de pagina na het invullen
      van de checklist.
    </em>
  </p>
  <Checklist />
</div>
