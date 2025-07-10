import { Zap, Code, Shield, Smartphone, Cloud, Layers, CheckCircle } from 'lucide-vue-next'

export interface Feature {
  slug: string
  title: string
  description: string
  longDescription: string
  icon: any
  keyPoints: { title: string; description: string }[]
}

export const featuresData: Feature[] = [
  {
    slug: 'modern-vue-3',
    title: 'Modern Vue 3',
    description:
      'Utilizing the latest features of Vue 3, including the Composition API for more modular and organized code.',
    longDescription:
      'This application is built from the ground up using Vue 3, the latest and most powerful version of the progressive JavaScript framework. We leverage the full potential of the Composition API, which allows for creating more organized, reusable, and maintainable code. This approach helps in managing complex component logic with ease, leading to a more scalable and robust application architecture.',
    icon: Code,
    keyPoints: [
      {
        title: 'Composition API',
        description: 'Create flexible and reusable components for better code organization.',
      },
      {
        title: 'Performance',
        description:
          'Benefit from Vue 3’s improved performance, including faster rendering and smaller bundle sizes.',
      },
      {
        title: 'Developer Experience',
        description:
          'Enjoy a more intuitive and powerful development workflow with the latest tools.',
      },
    ],
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    description:
      'More reliable development with static typing and better tooling to prevent runtime errors.',
    longDescription:
      'TypeScript is integrated throughout the project, bringing the benefits of static typing to JavaScript. This means many potential errors are caught during development, long before the code hits production. With features like autocompletion, type inference, and interface definitions, TypeScript enhances developer productivity and improves code quality.',
    icon: Shield,
    keyPoints: [
      {
        title: 'Type Safety',
        description: 'Catch errors early in the development process, not in production.',
      },
      {
        title: 'Improved Tooling',
        description: 'Benefit from superior autocompletion, navigation, and refactoring.',
      },
      {
        title: 'Code Quality',
        description: 'Write more robust and maintainable code that is easier to collaborate on.',
      },
    ],
  },
  {
    slug: 'tailwind-css',
    title: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapid and responsive design with minimal custom CSS.',
    longDescription:
      'We use Tailwind CSS, a utility-first CSS framework that enables rapid UI development. Instead of writing custom CSS, we build complex designs by composing utility classes directly in our markup. This approach not only speeds up the development process but also ensures design consistency across the entire application.',
    icon: Layers,
    keyPoints: [
      {
        title: 'Rapid Prototyping',
        description: 'Build and style user interfaces faster than ever before.',
      },
      {
        title: 'Consistency',
        description: 'Maintain a consistent design system with pre-defined utility classes.',
      },
      {
        title: 'Customizable',
        description: 'Easily extend or override the default styles to match your brand.',
      },
    ],
  },
  {
    slug: 'spa-routing',
    title: 'SPA Routing',
    description: 'Fast page navigation without browser refreshes using Vue Router.',
    longDescription:
      'As a Single-Page Application (SPA), navigation is handled by Vue Router. This means users can move between different sections of the application almost instantly, without the jarring experience of a full-page reload. Vue Router provides a powerful and flexible routing system for a smooth, app-like experience.',
    icon: Zap,
    keyPoints: [
      {
        title: 'Instant Navigation',
        description: 'Move between pages without waiting for a full server reload.',
      },
      {
        title: 'Lazy Loading',
        description:
          'Improve initial load time by only loading the code needed for the current view.',
      },
      {
        title: 'Protected Routes',
        description: 'Use navigation guards to secure parts of your application.',
      },
    ],
  },
  {
    slug: 'state-management',
    title: 'State Management',
    description: 'Efficient and structured application state management with Pinia.',
    longDescription:
      "For managing the application's state, we use Pinia, the official state management library for Vue. Pinia offers a simple, intuitive, and type-safe way to share state across components. Its lightweight and modular design makes it easy to organize the application's data flow, making it predictable and scalable.",
    icon: Cloud,
    keyPoints: [
      {
        title: 'Centralized State',
        description: 'Manage your application’s data in a single, predictable source of truth.',
      },
      {
        title: 'Type-Safe',
        description: 'Enjoy full TypeScript support for robust and error-free state management.',
      },
      {
        title: 'DevTools Integration',
        description: 'Easily debug and visualize state changes with Vue Devtools.',
      },
    ],
  },
  {
    slug: 'responsive-design',
    title: 'Responsive Design',
    description: 'Optimal display across various screen sizes, from mobile to desktop.',
    longDescription:
      "Every component and page is designed with a mobile-first approach, ensuring a seamless experience on any device. From small phone screens to large desktop monitors, the layout adapts beautifully. We use responsive design techniques and Tailwind CSS's responsive variants to control every aspect of the UI.",
    icon: Smartphone,
    keyPoints: [
      {
        title: 'Mobile-First',
        description: 'The design is optimized for small screens first, then scaled up.',
      },
      {
        title: 'Fluid Grids',
        description: 'Layouts adapt to any screen size, providing a consistent experience.',
      },
      {
        title: 'Cross-Device Compatibility',
        description: 'The application looks and works great on phones, tablets, and desktops.',
      },
    ],
  },
]
