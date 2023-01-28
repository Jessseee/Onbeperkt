<script>
  import store from '$lib/stores/checklist.ts';
  import LinkButton from '$lib/components/LinkButton.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  let percentage = 0;

  onMount(() => {
    const checked = Object.values($store).reduce((acc, next) => acc + next, 0);
    const total = Object.keys($store).length;
    percentage = (checked / total) * 100;
  });
</script>

<header class="bg-indigo-500 px-[1em] pt-[1em] pb-[3em] text-center text-white">
  {#if percentage > 75}
    <h1 class="text-3xl font-bold">Uw bedrijf gaat de goede kant op!</h1>
  {:else}
    <h1 class="text-3xl font-bold">Er valt nog veel te verbeteren!</h1>
  {/if}
</header>

<main class="mx-auto my-[3em] max-w-[600px] px-[2em] md:w-2/3">
  <h2 class="text-2xl font-medium">Wat nu?</h2>
  <p class="mb-[1em]">
    Op basis van de door u ingevulde beoordeling lijkt het er op dat
    {#if percentage > 75}
      uw bedrijf op veel vlakken goed toegankelijk is, maar is natuurlijk altijd nog ruimte voor
      verbetering!
    {:else}
      er nog veel ruimte is voor verbetering omtrent toegankelijkheid binnen uw bedrijf.
    {/if}
  </p>
  <p class="mb-[0.5em]">
    Een onbeperkte samenleving begint bij <b>bewustwording</b>. Om uw bedrijf toegankelijker te
    maken is het belangrijk om te onderzoeken waar de meeste winst gemaakt kan worden voor
    verbeterde toegankelijkheid. Hieronder vind u een aantal plaatsen waar u meer informatie kunt
    vinden:
  </p>
  <ul class="mb-[1em] list-disc pl-[2em]">
    <li>
      Onze visie voor een onbeperkte samenleving:
      <a class="text-blue-500 hover:underline" href="{base}/over">Over Ons</a>.
    </li>
    <li>
      Advies online toegankelijkheid:
      <a
        class="text-blue-500 hover:underline"
        href="https://www.accessibility.nl"
        target="_blank"
        rel="noreferrer">
        Accessibility.nl
      </a>
    </li>
    <li>
      Locale ervaringsdeskundigen:
      <a
        class="text-blue-500 hover:underline"
        href="https://ervaringsdeskundigenhandicapborne.nl"
        target="_blank"
        rel="noreferrer">
        Ervaringsdeskundigen Handicap Borne
      </a>
    </li>
  </ul>

  <h2 class="text-2xl font-medium">Er is hulp!</h2>
  <p>
    U hoeft gelukkig niet alles zelf uit te zoeken. Er zijn ervarings&#173;deskundigen in uw
    omgeving die u graag willen helpen om uw bedrijf toegankelijker te maken. Neem nu contact op
    voor gepersonaliseerd advies!
  </p>
  <LinkButton
    class="bg-indigo-500 text-white"
    href="https://ervaringsdeskundigenhandicapborne.nl"
    target="_blank"
    rel="noreferrer">
    Contacteer Ervarings&#173;deskundigen
  </LinkButton>
</main>

<style>
  header {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  }
</style>
