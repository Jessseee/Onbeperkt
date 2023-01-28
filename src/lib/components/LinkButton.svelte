<script>
  export let href;
  export let target = null;
  export let rel = null;
</script>

<a
  class="{$$props.class} mt-[1em] inline-block rounded-full px-[1.5em] py-[0.5em] drop-shadow-sm transition-all hover:translate-y-[-0.1em] hover:drop-shadow-lg"
  {href}
  {rel}
  {target}>
  <slot />
</a>
