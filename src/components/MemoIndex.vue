<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useMemosStore } from '@/stores/memos'

const memosStore = useMemosStore()
const memos = computed(() => {
  return memosStore.memos
})
</script>

<template>
  MemoIndex.vue<br />
  メモ一覧コンポーネント<br />
  <ul>
    <li v-for="memo in memos" :key="memo.id">
      {{ memo.content }}
    </li>
  </ul>

  <RouterLink :to="{ name: 'MemoNew' }">新規作成</RouterLink><br />
  <RouterLink :to="{ name: 'MemoEdit', params: { id: 3 } }">メモ3の編集</RouterLink><br />
</template>
