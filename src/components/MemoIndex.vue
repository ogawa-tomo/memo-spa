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
      <span v-if="memo.editing">{{ memo.content }}</span>
      <span v-else>
        <RouterLink :to="{ name: 'MemoEdit', params: { id: memo.id } }">
          {{ memo.content }}
        </RouterLink>
      </span>
    </li>
  </ul>
</template>
