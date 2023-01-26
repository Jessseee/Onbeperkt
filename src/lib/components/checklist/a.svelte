<script>
  export let href;
  export let rel;
</script>

<a class="text-blue-500 hover:underline" {rel} {href}><slot /></a>
