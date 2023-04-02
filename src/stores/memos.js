import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMemosStore = defineStore('memos', () => {
  // const editingContent = ref("")
  const memos = ref([
    { id: 1, content: 'hogehoge', editing: false },
    { id: 2, content: 'fugafuga', editing: false }
  ])
  const update = (id, content) => {
    if (id) {
      const memo = getById(id)
      memo.content = content
      memo.editing = false
    } else {
      const id = memos.value.length === 0 ? 1 : Math.max(...memos.value.map((memo) => memo.id)) + 1
      memos.value.push({ id: id, content: content, editing: false })
    }
  }
  const remove = (id) => {
    const memo = getById(id)
    const idx = memos.value.indexOf(memo)
    memos.value.splice(idx, 1)
  }
  const getById = (id) => {
    return memos.value.find((memo) => memo.id === id)
  }
  const startEdit = (id) => {
    const memo = getById(id)
    if (memo) memo.editing = true
    console.log(memos.value)
  }
  const finishEdit = () => {
    console.log(memos.value)
    for (const memo of memos.value) {
      memo.editing = false
    }
  }

  return { memos, update, remove, startEdit, finishEdit, getById }
})
