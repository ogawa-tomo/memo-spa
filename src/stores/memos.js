import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMemosStore = defineStore('memos', () => {
  const editingContent = ref('')
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
  const loadMemosData = () => {
    const memos_data = localStorage.getItem('memos')
    if (memos_data) {
      return JSON.parse(memos_data).map((memo) => new Memo(memo.id, memo.content))
    } else {
      return []
    }
  }
  const memos = ref(loadMemosData())
  const update = (id, content) => {
    if (id) {
      const memo = getById(id)
      memo.content = content
      memo.editing = false
    } else {
      const id = memos.value.length === 0 ? 1 : Math.max(...memos.value.map((memo) => memo.id)) + 1
      memos.value.push(new Memo(id, content))
    }
    saveMemosData()
  }
  const remove = (id) => {
    const memo = getById(id)
    const idx = memos.value.indexOf(memo)
    memos.value.splice(idx, 1)
    saveMemosData()
  }
  const getById = (id) => {
    return memos.value.find((memo) => memo.id === id)
  }
  const finishEdit = () => {
    for (const memo of memos.value) {
      memo.editing = false
    }
    saveMemosData()
  }
  const saveMemosData = () => {
    localStorage.setItem('memos', JSON.stringify(memos.value))
  }

  return { editingContent, memos, update, remove, finishEdit, getById }
})
