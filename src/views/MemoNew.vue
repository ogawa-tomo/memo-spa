<script setup>
import MemoList from '@/components/MemoList.vue'
import MemoForm from '../components/MemoForm.vue'
</script>

<template>
  <div class="flex">
    <MemoList />
    <MemoForm />
  </div>
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>

<style scoped>
/* div {
  display: flex;
} */
</style>
