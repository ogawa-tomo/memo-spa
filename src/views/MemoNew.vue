<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoForm from '../components/MemoForm.vue'
</script>

<template>
  <MemoIndex />
  <MemoForm />
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
