<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useMemosStore } from '@/stores/memos'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({ id: Number })
const memosStore = useMemosStore()

const content = ref('')
const memo = memosStore.getById(props.id)
if (memo) {
  memosStore.startEdit(props.id)
  content.value = memo.content
}

const onUpdate = () => {
  memosStore.update(props.id, content.value)
  content.value = ''
  router.push({ name: 'AppTop' })
}
const onRemove = () => {
  memosStore.remove(props.id)
  router.push({ name: 'AppTop' })
}
onBeforeUnmount(() => {
  memosStore.finishEdit()
})
</script>

<template>
  MemoForm.vue<br />
  <span v-if="props.id">id{{ props.id }}のメモ編集コンポーネント</span>
  <span v-else>メモ作成コンポーネント</span><br />
  <form @submit.prevent="onUpdate">
    <textarea v-model="content"></textarea>
    <button>登録</button>
  </form>
  <div v-if="props.id">
    <button @click="onRemove">削除</button>
  </div>
</template>
