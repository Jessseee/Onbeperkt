import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const checklist = writable();

if (browser) {
  checklist.set(JSON.parse(localStorage.getItem('checklist') || '{}'));

  checklist.subscribe((value) => {
    localStorage.checklist = JSON.stringify(value);
  });
}

export default checklist;
