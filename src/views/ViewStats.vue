<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input v-autofocus v-model="likeNoteballs" type="text" class="input" placeholder="Do you like NoteBalls?">
  </div>
</template>

<script setup>
/*
  imports
*/

import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from "@/directives/vAutofocus"
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { ref } from 'vue'

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  watch characters
*/
const likeNoteballs = ref('')
useWatchCharacters(likeNoteballs, 50)

</script>