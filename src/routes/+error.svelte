<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faWarning } from '@fortawesome/free-solid-svg-icons';
</script>

<header class="bg-indigo-500 pb-[10em] pt-[5em] text-center text-white">
  <Fa icon={faWarning} size="3x" class="mx-auto" />
  <h1 class="text-3xl font-bold">Error 404</h1>
  <h2 class="mt-[0.75em] mb-[0.25em] text-xl">Deze pagina bestaat niet.</h2>
  <p>Keer terug naar <a class="font-bold hover:underline" href="/">startpagina</a>.</p>
</header>

<style>
  header {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  }
</style>
