<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoForm from '../components/MemoForm.vue'

const props = defineProps({ id: Number })
</script>

<template>
  <MemoIndex />
  <MemoForm :id="props.id" />
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
