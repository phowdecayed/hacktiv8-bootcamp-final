<script setup lang="ts">
import { ref, computed } from 'vue'
import { motion } from 'motion-v'
import { useAuthStore } from '@/stores/auth'
import { useContactStore, type ContactMessage } from '@/stores/contact'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Trash2, Search } from 'lucide-vue-next'

type FilterStatus = 'all' | 'read' | 'unread'

const authStore = useAuthStore()
const contactStore = useContactStore()

const searchTerm = ref('')
const statusFilter = ref<FilterStatus>('all')

const filteredMessages = computed(() => {
  let messages = [...contactStore.messages]

  // Apply status filter
  if (statusFilter.value !== 'all') {
    messages = messages.filter((msg) =>
      statusFilter.value === 'read' ? msg.isRead : !msg.isRead,
    )
  }

  // Apply search term
  if (searchTerm.value) {
    const lowerCaseSearch = searchTerm.value.toLowerCase()
    messages = messages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(lowerCaseSearch) ||
        msg.email.toLowerCase().includes(lowerCaseSearch) ||
        msg.message.toLowerCase().includes(lowerCaseSearch),
    )
  }

  return messages
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
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Admin Dashboard
      </h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Welcome, {{ authStore.user }}. Here are the latest updates.
      </p>
    </motion.div>

    <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }"
      >
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Messages</CardTitle>
            <CardDescription>
              Here are the messages submitted through the contact form.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <div class="relative w-full sm:max-w-sm">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input v-model="searchTerm" placeholder="Search messages..." class="pl-10" />
              </div>
              <Select v-model="statusFilter">
                <SelectTrigger class="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div class="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="w-[100px]">Status</TableHead>
                    <TableHead>Sender</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead class="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <template v-if="filteredMessages.length > 0">
                    <TableRow
                      v-for="msg in filteredMessages"
                      :key="msg.id"
                      :class="{ 'bg-muted/50': msg.isRead }"
                    >
                      <TableCell>
                        <Badge :variant="msg.isRead ? 'secondary' : 'default'">
                          {{ msg.isRead ? 'Read' : 'Unread' }}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div class="font-medium">{{ msg.name }}</div>
                        <div class="text-sm text-muted-foreground">{{ msg.email }}</div>
                      </TableCell>
                      <TableCell class="max-w-sm truncate" :title="msg.message">{{ msg.message }}</TableCell>
                      <TableCell>{{ msg.date }}</TableCell>
                      <TableCell class="text-right">
                        <Button
                          v-if="!msg.isRead"
                          @click="contactStore.markAsRead(msg.id)"
                          variant="ghost"
                          size="icon"
                          class="mr-2"
                          title="Mark as read"
                        >
                          <Check class="w-4 h-4" />
                        </Button>
                        <Button
                          @click="contactStore.deleteMessage(msg.id)"
                          variant="ghost"
                          size="icon"
                          class="text-destructive hover:text-destructive"
                          title="Delete message"
                        >
                          <Trash2 class="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </template>
                  <TableRow v-else>
                    <TableCell colspan="5" class="h-24 text-center">
                      No matching messages found.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</template>
