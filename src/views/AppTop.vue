<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
</script>

<template>
  <MemoIndex />
  <RouterLink :to="{ name: 'MemoNew' }">新規作成</RouterLink>
</template>
