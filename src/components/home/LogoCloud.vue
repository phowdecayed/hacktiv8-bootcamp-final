<script setup lang="ts">
import {
  Briefcase,
  Building2,
  Globe,
  Network,
  Cpu,
  Database,
  Cloud,
  Code,
  Rocket,
  Gem,
  Shield,
  Zap,
  Factory,
  Lightbulb,
} from 'lucide-vue-next'

const logosRow1 = [
  { name: 'TechCorp', icon: Briefcase },
  { name: 'Innovate', icon: Lightbulb },
  { name: 'Quantum', icon: Cpu },
  { name: 'Stellar', icon: Rocket },
  { name: 'Apex', icon: Building2 },
  { name: 'Nexus', icon: Network },
  { name: 'Visionary', icon: Globe },
]
const logosRow2 = [
  { name: 'Eclipse', icon: Shield },
  { name: 'Zenith', icon: Gem },
  { name: 'Momentum', icon: Zap },
  { name: 'Catalyst', icon: Factory },
  { name: 'Pinnacle', icon: Code },
  { name: 'Synergy', icon: Database },
  { name: 'Odyssey', icon: Cloud },
]
const logosRow3 = [
  { name: 'TechCorp', icon: Briefcase },
  { name: 'Innovate', icon: Lightbulb },
  { name: 'Quantum', icon: Cpu },
  { name: 'Stellar', icon: Rocket },
  { name: 'Apex', icon: Building2 },
  { name: 'Nexus', icon: Network },
  { name: 'Visionary', icon: Globe },
]
</script>

<template>
  <div class="py-16 sm:py-24 bg-muted/20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold tracking-tight text-foreground">
        Trusted by the world's best companies
      </h2>
      <div
        class="mt-16 w-full flex flex-col gap-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <!-- First Row -->
        <div class="inline-flex flex-nowrap">
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          >
            <li v-for="logo in logosRow1" :key="logo.name">
              <div
                class="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <component :is="logo.icon" class="h-8 w-8" />
                <span class="text-2xl font-bold">{{ logo.name }}</span>
              </div>
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            <li v-for="logo in logosRow1" :key="logo.name">
              <div
                class="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <component :is="logo.icon" class="h-8 w-8" />
                <span class="text-2xl font-bold">{{ logo.name }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- Second Row -->
        <div class="inline-flex flex-nowrap">
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse"
          >
            <li v-for="logo in logosRow2" :key="logo.name">
              <div
                class="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <component :is="logo.icon" class="h-8 w-8" />
                <span class="text-2xl font-bold">{{ logo.name }}</span>
              </div>
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse"
            aria-hidden="true"
          >
            <li v-for="logo in logosRow2" :key="logo.name">
              <div
                class="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <component :is="logo.icon" class="h-8 w-8" />
                <span class="text-2xl font-bold">{{ logo.name }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- Third Row -->
        <div class="inline-flex flex-nowrap">
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          >
            <li v-for="logo in logosRow3" :key="logo.name">
              <div
                class="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <component :is="logo.icon" class="h-8 w-8" />
                <span class="text-2xl font-bold">{{ logo.name }}</span>
              </div>
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            <li v-for="logo in logosRow2" :key="logo.name">
              <div
                class="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <component :is="logo.icon" class="h-8 w-8" />
                <span class="text-2xl font-bold">{{ logo.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 50s linear infinite;
}

@keyframes infinite-scroll-reverse {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-infinite-scroll-reverse {
  animation: infinite-scroll-reverse 50s linear infinite;
}
</style>
