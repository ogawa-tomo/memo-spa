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
    <textarea v-model="content"></textarea>
    <button @click="onUpdate" class="update">登録</button>
    <span v-if="props.id">
      <button @click="onRemove" class="delete">削除</button>
    </span>
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
.update {
  width: 300px;
  margin-right: 10px;
}
.delete {
  width: 80px;
}
</style>
