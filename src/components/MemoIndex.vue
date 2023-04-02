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
  <main>
    <p v-if="memos.length === 0">メモは登録されていません。</p>
    <ul>
      <li v-for="memo in memos" :key="memo.id">
        <span v-if="memo.editing">{{ memo.firstLine }}</span>
        <span v-else>
          <RouterLink :to="{ name: 'MemoEdit', params: { id: memo.id } }">
            {{ memo.firstLine }}
          </RouterLink>
        </span>
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  width: 390px;
  margin-right: 10px;
  word-wrap: break-word;
}
</style>
