const input = document.getElementById('itemInput')
const addBtn = document.getElementById('addBtn')
const itemList = document.getElementById('itemList')

input.addEventListener('input', () => {
  if (input.value.trim() === '') {
    addBtn.disabled = true
  } else {
    addBtn.disabled = false
  }
})

addBtn.addEventListener('click', () => {
  const text = input.value.trim()
  if (text === '') return

  const li = document.createElement('button')
  li.textContent = text

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Sil'

  deleteBtn.addEventListener('click', () => {
    itemList.removeChild(li)
  })

  li.appendChild(deleteBtn)

  itemList.appendChild(li)

  input.value = ''
  addBtn.disabled = true
})
