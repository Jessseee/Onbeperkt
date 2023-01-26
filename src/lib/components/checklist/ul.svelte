<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

  let list;
  let collapsed = true;

  function collapseList() {
    collapsed = !collapsed;
    list.querySelectorAll('.collapse-btn').forEach((el) => el.click());
  }
</script>

<button on:click={collapseList} class="collapse-btn ml-[0.5em] translate-y-1">
  <Fa icon={collapsed ? faCaretRight : faCaretDown} size="lg" />
</button>
<br />
<ul bind:this={list} class:collapsed>
  <slot />
</ul>

<style>
  .collapsed {
    display: none;
  }
</style>
