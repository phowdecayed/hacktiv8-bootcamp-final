import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  date: string
  isRead: boolean
}

export const useContactStore = defineStore('contact', () => {
  const messages = ref<ContactMessage[]>([])

  // Load messages from localStorage
  const storedMessages = localStorage.getItem('contactMessages')
  if (storedMessages) {
    messages.value = JSON.parse(storedMessages)
  }

  // Watch for changes and save to localStorage
  watch(
    messages,
    (newMessages) => {
      localStorage.setItem('contactMessages', JSON.stringify(newMessages))
    },
    { deep: true },
  )

  function addMessage(name: string, email: string, message: string) {
    const newMessage: ContactMessage = {
      id: new Date().toISOString(),
      name,
      email,
      message,
      date: new Date().toLocaleString('id-ID'),
      isRead: false,
    }
    messages.value.unshift(newMessage)
  }

  function markAsRead(id: string) {
    const message = messages.value.find((m) => m.id === id)
    if (message) {
      message.isRead = true
    }
  }

  function deleteMessage(id: string) {
    messages.value = messages.value.filter((m) => m.id !== id)
  }

  function refreshMessages() {
    const storedMessages = localStorage.getItem('contactMessages')
    if (storedMessages) {
      messages.value = JSON.parse(storedMessages)
    }
  }

  function seedMessages() {
    if (messages.value.length > 0) return

    const seedData: Omit<ContactMessage, 'id' | 'date' | 'isRead'>[] = [
      { name: 'Alice Johnson', email: 'alice@example.com', message: 'I have a question about your web development services. Can you provide more details on the technologies you use?' },
      { name: 'Bob Williams', email: 'bob@example.com', message: 'Interested in a collaboration for a mobile app project. Please get in touch.' },
      { name: 'Charlie Brown', email: 'charlie@example.com', message: 'Great portfolio! I would like to get a quote for a UI/UX design for my e-commerce site.' },
      { name: 'Diana Miller', email: 'diana@example.com', message: 'What is the typical timeline for a standard cloud solution implementation?' },
    ]

    seedData.forEach(data => {
        addMessage(data.name, data.email, data.message)
    })
    
    // Mark one as read for demonstration
    if(messages.value.length > 2) {
        messages.value[2].isRead = true;
    }
  }

  return { messages, addMessage, markAsRead, deleteMessage, refreshMessages, seedMessages }
})
