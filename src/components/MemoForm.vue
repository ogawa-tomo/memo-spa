<script setup>
import { ref } from 'vue'
import { useMemosStore } from '@/stores/memos'

const props = defineProps({ id: Number })
const memosStore = useMemosStore()
const content = ref('')
const onUpdate = () => {
  memosStore.update(props.id, content.value)
  content.value = ''
}
</script>

<template>
  MemoForm.vue<br />
  <span v-if="props.id">id{{ props.id }}のメモ編集コンポーネント</span>
  <span v-else>メモ作成コンポーネント</span><br />
  <form @submit.prevent="onUpdate">
    <textarea v-model="content"></textarea>
    <button>登録</button>
  </form>
</template>
