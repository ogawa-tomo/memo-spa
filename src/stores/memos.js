import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMemosStore = defineStore('memos', () => {
  // const editingContent = ref("")
  class Memo {
    constructor(id, content) {
      this.id = id
      this.content = content
      this.editing = false
    }
    get firstLine() {
      return this.content.split('\n')[0]
    }
  }
  const memos = ref([new Memo(1, 'hogehoge'), new Memo(2, 'fugafuga')])
  const update = (id, content) => {
    if (id) {
      const memo = getById(id)
      memo.content = content
      memo.editing = false
    } else {
      const id = memos.value.length === 0 ? 1 : Math.max(...memos.value.map((memo) => memo.id)) + 1
      memos.value.push(new Memo(id, content))
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

  const finishEdit = () => {
    for (const memo of memos.value) {
      memo.editing = false
    }
  }

  return { memos, update, remove, finishEdit, getById }
})
