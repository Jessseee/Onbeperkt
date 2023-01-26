<script>
  import Checklist from '$lib/components/checklist/Checklist.svelte';
</script>

<svelte:head>
  <title>Onbeperkt Borne</title>
</svelte:head>

<header class="overflow-hidden bg-indigo-500 text-center text-white sm:text-left md:flex">
  <div class="relative mb-[3em] hidden w-1/2 lg:block">
    <img
      src="/images/header-illustration.png"
      alt="Illustration of people with and without disabilities standing together." />
    <small class="absolute bottom-[75px] left-[70px]">
      Image by
      <a
        class="hover:underline"
        href="https://www.freepik.com/free-vector/men-women-welcoming-people-with-disabilities-group-people-meeting-blind-female-character-male-wheelchair_16375447.htm#query=accessibility&position=2&from_view=keyword">
        pch.vector
      </a>
    </small>
  </div>
  <div class="mx-auto mb-[8em] w-5/6 pt-[8em] lg:w-1/2 lg:pr-[5em] xl:pr-[8em]">
    <h2 class="mb-[1em] text-4xl font-medium">
      Werken aan een onbeperkt <b><u>Borne</u></b>. Vrij toegankelijk en gelijkwaardig voor
      <em>iedereen</em>.
    </h2>
    <p class="text-xl">
      <span class="mt-[0.5em]">Is uw bedrijf toegankelijk?</span>
      <a
        href="/#checklist"
        class="mt-[0.5em] ml-[0.5em] inline-block rounded-full bg-emerald-500 px-[1.25em] py-[0.25em] text-base drop-shadow-sm transition-all hover:translate-y-[-0.1em] hover:drop-shadow-lg">
        Gebruik de checklist
      </a>
    </p>
  </div>
</header>

<main class="mx-auto mb-[3em] w-1/2 max-w-[600px]">
  <Checklist />
</main>

<style>
  header {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  }
</style>
