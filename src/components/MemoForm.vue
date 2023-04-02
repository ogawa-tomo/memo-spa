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
  memo.editing = true
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
  <main>
    <form @submit.prevent="onUpdate">
      <textarea v-model="content"></textarea>
      <button>登録</button>
    </form>
    <div v-if="props.id">
      <button @click="onRemove">削除</button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 390px;
  margin-left: 10px;
}
textarea {
  width: 100%;
  height: 200px;
}
</style>
