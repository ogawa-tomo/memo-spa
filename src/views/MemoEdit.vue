<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoEditForm from '../components/MemoEditForm.vue'

const props = defineProps({ id: Number })
</script>

<template>
  MemoEdit.vue<br />
  id{{ props.id }}のメモ編集画面<br />
  <br />
  <MemoIndex /><br />
  <MemoEditForm :id="props.id" /><br />
  <br />
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
