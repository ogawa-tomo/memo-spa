<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoForm from '../components/MemoForm.vue'

const props = defineProps({ id: Number })
</script>

<template>
  <MemoIndex /><br />
  <MemoForm :id="props.id" /><br />
  <br />
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
