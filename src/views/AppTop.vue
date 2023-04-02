<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
</script>

<template>
  AppTop.vue<br />
  トップ画面<br />
  <br />
  <MemoIndex /><br />
  <br />
  <RouterLink :to="{ name: 'MemoNew' }">新規作成</RouterLink>
</template>
