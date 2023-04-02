<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
</script>

<template>
  <div class="flex">
    <MemoIndex />
  </div>
  <RouterLink :to="{ name: 'MemoNew' }">新規作成</RouterLink>
</template>
