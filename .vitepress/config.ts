import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Octrafic Docs",
  description: "Octrafic is an open source AI-powered CLI tool for automated API testing. Test any HTTP API using natural language — no code required.",

  sitemap: {
    hostname: 'https://docs.octrafic.com',
  },

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Octrafic Docs' }],
    ['meta', { name: 'og:image', content: 'https://octrafic.com/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://octrafic.com/og-image.png' }],
  ],

  vite: {
    server: {
      allowedHosts: ['mbserver', 'localhost']
    }
  },

  themeConfig: {
    logo: 'https://octrafic.com/octrafic-logo.png',
    siteTitle: 'Octrafic',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/getting-started/introduction' },
      { text: 'Reference', link: '/reference/cli' },
      { text: 'GitHub', link: 'https://github.com/Octrafic/octrafic-cli' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Quick Start', link: '/getting-started/quick-start' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Chat Features', link: '/guides/chat-features' },
          { text: 'Project Management', link: '/guides/project-management' },
          { text: 'PDF Reports', link: '/guides/reports' },
          { text: 'Exporting Tests', link: '/guides/exports' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Providers', link: '/guides/providers' },
          { text: 'Authentication', link: '/guides/authentication' }
        ]
      },
      {
        text: 'Integration',
        items: [
          { text: 'Headless Mode', link: '/guides/headless' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'CLI Reference', link: '/reference/cli' },
          { text: 'Environment Variables', link: '/reference/environment-variables' },
          { text: 'Troubleshooting', link: '/guides/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Octrafic/octrafic-cli' }
    ]
  }
})
