<script setup>
import MemoIndex from '@/components/MemoIndex.vue'
import MemoForm from '../components/MemoForm.vue'

const props = defineProps({ id: Number })
</script>

<template>
  <main class="flex">
    <MemoIndex />
    <MemoForm :id="props.id" />
  </main>
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
