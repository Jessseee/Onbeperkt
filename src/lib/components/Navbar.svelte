<script>
  import { base } from '$app/paths';
</script>

<div class="flex bg-indigo-500 px-[0.5em] pb-[0.5em] pt-[2em] text-white md:px-[5em]">
  <a href={base} class="group/logo flex gap-1">
    <img
      src="{base}/images/logo.webp"
      class="h-[35px] w-[40px] translate-y-[3px]"
      alt="Het onbeperkt logo" />
    <div>
      <h1 class="text-3xl font-bold group-hover/logo:underline">Onbeperkt</h1>
      <h2 class="text-xl">Borne</h2>
    </div>
  </a>

  <nav class="ml-auto mr-[2em] mt-[0.25em] text-lg">
    <ul class="hover-item:underline gap-[2em] text-right md:flex md:text-left">
      <li><a class="hover:underline" href="{base}/#checklist">Beoordeling</a></li>
      <li><a class="hover:underline" href="{base}/over">Over ons</a></li>
    </ul>
  </nav>
</div>
