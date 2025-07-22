import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/lib/axios'

export interface ContactMessage {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
  is_read: boolean
}

export const useContactStore = defineStore('contact', () => {
  const messages = ref<ContactMessage[]>([])

  async function fetchMessages() {
    try {
      const response = await api.get('/api/contact-messages')
      messages.value = response.data
    } catch (error) {
      console.error('Failed to fetch messages', error)
    }
  }

  async function createMessage(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<boolean> {
    try {
      await api.post('/api/contact-messages', { name, email, subject, message })
      return true
    } catch (error) {
      console.error('Failed to create message', error)
      return false
    }
  }

  async function toggleReadStatus(
    id: number,
    is_read: boolean
  ): Promise<ContactMessage | null> {
    try {
      const response = await api.put(`/api/contact-messages/${id}`, { is_read: !is_read })
      const updatedMessage = response.data
      const index = messages.value.findIndex((m) => m.id === id)
      if (index !== -1) {
        messages.value[index] = updatedMessage
      }
      return updatedMessage
    } catch (error) {
      console.error('Failed to update message', error)
      return null
    }
  }

  async function deleteMessage(id: number) {
    try {
      await api.delete(`/api/contact-messages/${id}`)
      messages.value = messages.value.filter((m) => m.id !== id)
    } catch (error) {
      console.error('Failed to delete message', error)
    }
  }

  return {
    messages,
    fetchMessages,
    createMessage,
    toggleReadStatus,
    deleteMessage
  }
})
