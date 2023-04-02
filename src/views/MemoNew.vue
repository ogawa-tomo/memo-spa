<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoEditForm from '../components/MemoEditForm.vue'
</script>

<template>
  MemoNew.vue<br />
  メモ新規作成画面<br />
  <br />
  <MemoIndex /><br />
  <MemoEditForm /><br />
  <br />
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
