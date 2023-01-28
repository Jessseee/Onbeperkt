<script>
  import Checklist from '$lib/components/checklist/Checklist.svelte';
  import { base } from '$app/paths';
  import LinkButton from '../lib/components/LinkButton.svelte';
</script>

<header class="overflow-hidden bg-indigo-500 text-center text-white sm:text-left md:flex">
  <div class="relative mb-[3em] hidden w-1/2 lg:block">
    <img
      src="{base}/images/header.webp"
      alt="Illustration of people with and without disabilities standing together." />
    <small class="absolute bottom-[75px] left-[70px]">
      Image by
      <a
        class="hover:underline"
        target="_blank"
        rel="noreferrer"
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
      <LinkButton href="{base}/#checklist" class="bg-emerald-500 text-base text-white">
        Gebruik de checklist!
      </LinkButton>
    </p>
  </div>
</header>

<main class="mx-auto mb-[3em] max-w-[600px] px-[2em] md:w-2/3">
  <Checklist />
  <LinkButton href="{base}/info" class="bg-indigo-500 text-white">
    Is mijn bedrijf toegankelijk?
  </LinkButton>
</main>

<style>
  header {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  }
</style>
