<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoForm from '../components/MemoForm.vue'

const props = defineProps({ id: Number })
</script>

<template>
  <div class="flex">
    <MemoIndex />
    <MemoForm :id="props.id" />
  </div>
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
