import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface TeamMember {
  id: number
  name: string
  role: string
  avatar: string
  bio: string
  skills: string[]
  social: {
    twitter: string
    linkedin: string
    github: string
  }
}

export const useTeamStore = defineStore('team', () => {
  const members = ref<TeamMember[]>([
    {
      id: 1,
      name: 'Rachmat S. Haryadi',
      role: 'Lead Developer',
      avatar: 'https://i.pravatar.cc/150?img=11',
      bio: 'Rachmat is a passionate developer with over 10 years of experience in building scalable web applications. He specializes in frontend technologies and is the driving force behind our technical excellence.',
      skills: ['Vue.js', 'TypeScript', 'Node.js', 'Software Architecture', 'CI/CD'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      id: 2,
      name: 'Siti Aminah',
      role: 'UI/UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=12',
      bio: 'Siti has a keen eye for design and a deep understanding of user experience. She translates complex ideas into beautiful, intuitive, and functional interfaces.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Mobile UI'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      id: 3,
      name: 'Budi Hartono',
      role: 'Project Manager',
      avatar: 'https://i.pravatar.cc/150?img=13',
      bio: 'Budi is the organizational backbone of our team. He ensures that projects are delivered on time and within budget, while fostering a collaborative and productive environment.',
      skills: ['Agile Methodologies', 'Scrum', 'Risk Management', 'Stakeholder Communication', 'Jira'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
  ])

  const getMemberByName = (name: string) => {
    return members.value.find(m => m.name.toLowerCase().replace(/\s+/g, '-') === name)
  }

  return { members, getMemberByName }
})
