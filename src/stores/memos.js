import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMemosStore = defineStore('memos', () => {
  const memos = ref([
    { id: 1, content: 'hogehoge' },
    { id: 2, content: 'fugafuga' }
  ])
  // const addMemo = (content) => {
  //   const id = memos.value.length === 0 ? 1 : Math.max(...memos.value.map((memo) => memo.id))
  //   memos.value.push({ id: id, content: content })
  // }
  const update = (id, content) => {
    if (id) {
      const memo = memos.value.find((memo) => memo.id === id)
      memo.content = content
    } else {
      const id = memos.value.length === 0 ? 1 : Math.max(...memos.value.map((memo) => memo.id))
      memos.value.push({ id: id, content: content })
    }
  }
  const remove = (memo) => {
    const idx = memos.value.indexOf(memo)
    memos.value.splice(idx, 1)
  }

  return { memos, update, remove }
})
