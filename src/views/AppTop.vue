<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
</script>

<template>
  <MemoIndex /><br />
  <br />
  <RouterLink :to="{ name: 'MemoNew' }">新規作成</RouterLink>
</template>
