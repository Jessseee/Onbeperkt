<script>
  let li;
  let span;

  import store from '$lib/stores/checklist';

  function updateCheckbox(e) {
    const parentListItem = li.parentNode.parentNode.parentNode;
    const parentCheckbox = parentListItem.children[0];
    if (parentListItem.nodeName === 'LI') {
      const siblingListItems = Array.from(parentListItem.children[1].querySelectorAll('input'));
      const allSiblingsChecked = siblingListItems.reduce((acc, next) => {
        return acc && next.checked;
      }, true);

      if (!e.target.checked && parentCheckbox.checked) parentCheckbox.checked = false;
      if (allSiblingsChecked && !parentCheckbox.checked) parentCheckbox.checked = true;
    }

    span.querySelectorAll('input').forEach((el) => {
      if (el.checked !== e.target.checked) el.click();
    });

    document.querySelectorAll('#checklist input').forEach((el) => {
      $store[el.id] = el.checked;
    });
  }
</script>

<li class="my-[0.25em] flex gap-2" bind:this={li}>
  <input
    on:change={updateCheckbox}
    type="checkbox"
    class="form-tick peer inline-block h-[1.2em] min-w-[1.2em] translate-y-[0.2em] appearance-none rounded-md border-2 transition-all checked:border-transparent checked:bg-indigo-600 hover:cursor-pointer" />
  <span bind:this={span} class="text-lg peer-checked:line-through"><slot /></span>
</li>

<style>
  .form-tick:checked {
    background-image: url("data:image/svg+xml,%3Csvg%20viewBox='0%200%2016%2016'%20fill='white'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M5.707%207.293a1%201%200%200%200-1.414%201.414l2%202a1%201%200%200%200%201.414%200l4-4a1%201%200%200%200-1.414-1.414L7%208.586%205.707%207.293z'/%3E%3C/svg%3E");
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
</style>
