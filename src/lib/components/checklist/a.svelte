<script>
  export let href;
  export let rel;
</script>

<a class="text-blue-500 hover:underline" target="_blank" {rel} {href}><slot /></a>
