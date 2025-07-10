export interface Author {
  name: string
  avatarUrl: string
  bio: string
}

export interface BlogPost {
  id: string
  title: string
  author: Author
  date: string
  tags: string[]
  imageUrl: string
  excerpt: string
  content: string // Markdown or HTML content
}

const authors: { [key: string]: Author } = {
  rachmat: {
    name: 'Rachmat S. haryadi',
    avatarUrl: 'https://i.pravatar.cc/150?u=rachmat',
    bio: 'A passionate full-stack developer and tech enthusiast, focused on creating modern and scalable web solutions.',
  },
  alex: {
    name: 'Alex Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=alex',
    bio: 'A design-oriented frontend developer who loves crafting beautiful and intuitive user interfaces.',
  },
  jane: {
    name: 'Jane Smith',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane',
    bio: 'A software engineer specializing in state management and application architecture.',
  },
}

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-vue-development',
    title: 'The Rise of Modern Vue: A Deep Dive into Vue 3 and Vite',
    author: authors.rachmat,
    date: '2025-07-15',
    tags: ['Vue', 'Vite', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/vue-post/800/600',
    excerpt:
      'Vue 3, combined with the blazing-fast build tool Vite, has revolutionized frontend development. This post explores the core concepts, performance improvements, and the new Composition API that makes building complex applications more intuitive than ever.',
    content: `
      <h2>The Evolution of Vue.js</h2>
      <p>Vue.js has come a long way since its inception. With the release of Vue 3, the framework introduced a host of powerful features, most notably the Composition API. This new way of organizing component logic allows for better code reuse and maintainability, especially in large-scale applications.</p>
      <h3>Why Vite is a Game-Changer</h3>
      <p>Vite, created by Vue's own Evan You, serves as the new default build tool for Vue projects. Its secret sauce is leveraging native ES modules in the browser during development. This means no more waiting for a slow bundler to start up; your development server is ready almost instantly.</p>
      <ul>
        <li><strong>Instant Server Start:</strong> On-demand file serving over native ESM.</li>
        <li><strong>Lightning Fast HMR:</strong> Hot Module Replacement that stays fast regardless of app size.</li>
        <li><strong>Optimized Build:</strong> Pre-configured Rollup builds with multi-page and library mode support.</li>
      </ul>
      <p>Together, Vue 3 and Vite provide a development experience that is second to none, enabling developers to build faster, more efficient, and more scalable web applications.</p>
    `,
  },
  {
    id: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: From Utility-First to Custom Designs',
    author: authors.alex,
    date: '2025-06-28',
    tags: ['CSS', 'TailwindCSS', 'Design'],
    imageUrl: 'https://picsum.photos/seed/tailwind-post/800/600',
    excerpt:
      'Tailwind CSS has taken the web design world by storm. Learn how to move beyond the basics and harness the full power of its utility-first approach to create beautiful, custom, and responsive designs without ever leaving your HTML.',
    content: `
      <h2>Thinking in Utilities</h2>
      <p>The core principle of Tailwind CSS is its utility-first approach. Instead of writing custom CSS classes, you build designs by applying pre-existing utility classes directly in your HTML. This might seem counterintuitive at first, but it has profound benefits for productivity and maintainability.</p>
      <h3>Customization with tailwind.config.js</h3>
      <p>The true power of Tailwind is unlocked through its configuration file. You can customize everything from your color palette and spacing scale to adding new variants and plugins. This allows you to create a design system that is perfectly tailored to your brand.</p>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
    },
  },
}</code></pre>
      <p>By embracing the utility-first workflow and leveraging its deep customization options, you can build modern and sophisticated user interfaces at a rapid pace.</p>
    `,
  },
  {
    id: 'state-management-with-pinia',
    title: 'Simplified State Management with Pinia',
    author: authors.jane,
    date: '2025-05-10',
    tags: ['Vue', 'Pinia', 'State Management'],
    imageUrl: 'https://picsum.photos/seed/pinia-post/800/600',
    excerpt:
      "Pinia is the new official state management library for Vue. It offers a simpler, more intuitive API compared to Vuex, with full TypeScript support out of the box. Discover how Pinia can streamline your application's state.",
    content: `
      <h2>Introducing Pinia</h2>
      <p>Pinia is the official successor to Vuex and is now the recommended state management solution for Vue applications. Its design philosophy is centered around simplicity and type safety.</p>
      <h3>Core Concepts</h3>
      <p>In Pinia, you define "stores" which hold your state, getters, and actions. These stores are modular and can be easily shared across components.</p>
      <ul>
        <li><strong>State:</strong> A reactive object that holds your data.</li>
        <li><strong>Getters:</strong> Computed properties for your store, perfect for deriving state.</li>
        <li><strong>Actions:</strong> Methods that can be called to modify the state. They can be asynchronous.</li>
      </ul>
      <p>With its intuitive API and excellent developer experience, Pinia makes managing complex state in Vue applications a breeze.</p>
    `,
  },
]
