<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { motion } from 'motion-v'
import { useAuthStore } from '@/stores/auth'
import { useContactStore, type ContactMessage } from '@/stores/contact'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Trash2, Search, RefreshCw, MailOpen, Mail } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'

type FilterStatus = 'all' | 'read' | 'unread'

const authStore = useAuthStore()
const contactStore = useContactStore()

const searchTerm = ref('')
const statusFilter = ref<FilterStatus>('all')
const selectedMessage = ref<ContactMessage | null>(null)
const isDetailViewOpen = ref(false)
const isLoading = ref(true)

const filteredMessages = computed(() => {
  let messages = [...contactStore.messages].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  // Apply status filter
  if (statusFilter.value !== 'all') {
    messages = messages.filter((msg) =>
      statusFilter.value === 'read' ? msg.is_read : !msg.is_read
    )
  }

  // Apply search term
  if (searchTerm.value) {
    const lowerCaseSearch = searchTerm.value.toLowerCase()
    messages = messages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(lowerCaseSearch) ||
        msg.email.toLowerCase().includes(lowerCaseSearch) ||
        msg.subject.toLowerCase().includes(lowerCaseSearch) ||
        msg.message.toLowerCase().includes(lowerCaseSearch)
    )
  }

  return messages
})

const refreshMessages = async () => {
  isLoading.value = true
  await contactStore.fetchMessages()
  isLoading.value = false
}

const viewMessage = (msg: ContactMessage) => {
  selectedMessage.value = msg
  isDetailViewOpen.value = true
  if (!msg.is_read) {
    handleToggleReadStatus(msg.id, msg.is_read)
  }
}

const deleteMessageFromDetail = (id: number) => {
  contactStore.deleteMessage(id)
  isDetailViewOpen.value = false
}

const handleToggleReadStatus = async (id: number, is_read: boolean) => {
  const updatedMessage = await contactStore.toggleReadStatus(id, is_read)
  if (updatedMessage && selectedMessage.value && selectedMessage.value.id === id) {
    selectedMessage.value = updatedMessage
  }
}

const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'PPpp')
}

onMounted(() => {
  refreshMessages()
})
</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <motion.div
      class="py-20 text-center bg-primary/5"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Admin Inbox</h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Welcome, {{ authStore.user?.name }}. Manage your contact messages efficiently.
      </p>
    </motion.div>

    <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Card class="overflow-hidden">
        <CardHeader class="border-b">
          <CardTitle>Contact Messages</CardTitle>
          <CardDescription> Browse and manage messages from the contact form. </CardDescription>
        </CardHeader>
        <div class="p-6">
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <div class="relative w-full sm:max-w-sm">
              <Search
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              />
              <Input
                v-model="searchTerm"
                placeholder="Search by name, email, subject..."
                class="pl-10"
              />
            </div>
            <Select v-model="statusFilter">
              <SelectTrigger class="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
              </SelectContent>
            </Select>
            <Button @click="refreshMessages" variant="outline" class="w-full sm:w-auto">
              <RefreshCw class="w-4 h-4 mr-2" :class="{ 'animate-spin': isLoading }" />
              Refresh
            </Button>
          </div>

          <div class="border rounded-lg">
            <!-- Inbox Table Header -->
            <div
              class="p-4 hidden sm:flex border-b bg-muted/50 text-sm font-medium text-muted-foreground items-center gap-4"
            >
              <div class="flex items-center gap-4 flex-1">
                <div class="flex items-center gap-2 invisible">
                  <span class="w-2 h-2 rounded-full"></span>
                  <Avatar class="hidden sm:block"><AvatarFallback>X</AvatarFallback></Avatar>
                </div>
                <div class="flex-1 grid grid-cols-12 gap-2 items-center">
                  <div class="col-span-12 sm:col-span-3">Sender</div>
                  <div class="col-span-12 sm:col-span-6">Subject</div>
                  <div class="col-span-12 sm:col-span-3 text-left sm:text-right">Date</div>
                </div>
              </div>
              <div class="flex items-center gap-2 ml-auto invisible">
                <Button variant="ghost" size="icon"><MailOpen class="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon"><Trash2 class="w-5 h-5" /></Button>
              </div>
            </div>

            <transition-group tag="div" name="message-list" class="divide-y">
              <div
                v-for="msg in filteredMessages"
                :key="msg.id"
                @click="viewMessage(msg)"
                class="p-4 flex items-start gap-4 cursor-pointer hover:bg-muted/50 transition-colors"
                :class="{ 'bg-muted/20': msg.is_read, 'font-semibold': !msg.is_read }"
              >
                <div class="flex items-center gap-4 flex-1">
                  <div class="flex items-center gap-2">
                    <span
                      class="w-2 h-2 rounded-full"
                      :class="[msg.is_read ? 'bg-transparent' : 'bg-primary']"
                    ></span>
                    <Avatar class="hidden sm:block">
                      <AvatarFallback>{{ msg.name.charAt(0).toUpperCase() }}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div class="flex-1 grid grid-cols-12 gap-2 items-center">
                    <div class="col-span-12 sm:col-span-3">
                      <p
                        class="truncate"
                        :class="{
                          'text-foreground': !msg.is_read,
                          'text-muted-foreground': msg.is_read
                        }"
                      >
                        {{ msg.name }}
                      </p>
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                      <p
                        class="truncate"
                        :class="{
                          'text-foreground': !msg.is_read,
                          'text-muted-foreground': msg.is_read
                        }"
                      >
                        {{ msg.subject }}
                      </p>
                    </div>
                    <div
                      class="col-span-12 sm:col-span-3 text-sm text-muted-foreground text-left sm:text-right"
                    >
                      {{ formatDate(msg.created_at) }}
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 ml-auto">
                  <Button
                    @click.stop="handleToggleReadStatus(msg.id, msg.is_read)"
                    variant="ghost"
                    size="icon"
                    :title="msg.is_read ? 'Mark as unread' : 'Mark as read'"
                  >
                    <MailOpen v-if="!msg.is_read" class="w-5 h-5" />
                    <Mail v-else class="w-5 h-5 text-muted-foreground" />
                  </Button>
                  <Button
                    @click.stop="contactStore.deleteMessage(msg.id)"
                    variant="ghost"
                    size="icon"
                    class="text-destructive hover:text-destructive"
                    title="Delete message"
                  >
                    <Trash2 class="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </transition-group>
            <div v-if="filteredMessages.length === 0" class="p-12 text-center">
              <p class="text-muted-foreground">No matching messages found.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <!-- Message Detail Dialog -->
    <Dialog v-model:open="isDetailViewOpen">
      <DialogContent v-if="selectedMessage" class="sm:max-w-3xl p-0">
        <DialogHeader class="p-6 pb-4">
          <div class="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>{{ selectedMessage.name.charAt(0).toUpperCase() }}</AvatarFallback>
            </Avatar>
            <div class="flex-1">
              <DialogTitle class="text-2xl mb-1">{{ selectedMessage.subject }}</DialogTitle>
              <DialogDescription>
                From:
                <span class="font-medium text-foreground">{{ selectedMessage.name }}</span> ({{
                  selectedMessage.email
                }})
                <br />
                Received on: {{ formatDate(selectedMessage.created_at) }}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <Separator />
        <div class="p-6 max-h-[60vh] overflow-y-auto text-base leading-relaxed whitespace-pre-wrap">
          {{ selectedMessage.message }}
        </div>
        <Separator />
        <DialogFooter
          class="p-4 bg-muted/50 flex flex-col-reverse sm:flex-row sm:justify-end gap-2"
        >
          <Button @click="isDetailViewOpen = false" variant="outline">Close</Button>
          <Button
            @click="handleToggleReadStatus(selectedMessage!.id, selectedMessage!.is_read)"
            variant="secondary"
          >
            <MailOpen v-if="selectedMessage.is_read" class="w-4 h-4 mr-2" />
            <Mail v-else class="w-4 h-4 mr-2" />
            {{ selectedMessage.is_read ? 'Mark as Unread' : 'Mark as Read' }}
          </Button>
          <Button @click="deleteMessageFromDetail(selectedMessage!.id)" variant="destructive">
            <Trash2 class="w-4 h-4 mr-2" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped>
.message-list-enter-active,
.message-list-leave-active {
  transition: all 0.5s ease;
}
.message-list-enter-from,
.message-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
