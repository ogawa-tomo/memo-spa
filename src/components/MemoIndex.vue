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
      <RouterLink :to="{ name: 'MemoEdit', params: { id: memo.id } }">
        {{ memo.content }}
      </RouterLink>
    </li>
  </ul>

  <RouterLink :to="{ name: 'MemoNew' }">新規作成</RouterLink><br />
</template>
