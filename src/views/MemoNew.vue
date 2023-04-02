<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoForm from '../components/MemoForm.vue'
</script>

<template>
  <div class="flex">
    <MemoIndex />
    <MemoForm />
  </div>
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>

<style scoped>
/* div {
  display: flex;
} */
</style>
