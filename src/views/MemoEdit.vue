<script setup>
import MemoList from '@/components/MemoList.vue'
import MemoForm from '../components/MemoForm.vue'

const props = defineProps({ id: Number })
</script>

<template>
  <main class="flex">
    <MemoList />
    <MemoForm :id="props.id" />
  </main>
  <RouterLink :to="{ name: 'AppTop' }">トップに戻る</RouterLink><br />
</template>
