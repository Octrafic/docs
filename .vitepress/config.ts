import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Octrafic Documentation",
  description: "AI-powered CLI tool for API testing and exploration",

  vite: {
    server: {
      allowedHosts: ['mbserver', 'localhost']
    }
  },

  themeConfig: {
    logo: 'https://octrafic.com/octrafic-logo.png',
    siteTitle: 'Octrafic',

    nav: [
      { text: 'Guide', link: '/getting-started/introduction' },
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
        text: 'Guides',
        items: [
          { text: 'Chat Features', link: '/guides/chat-features' },
          { text: 'Project Management', link: '/guides/project-management' },
          { text: 'Providers', link: '/guides/providers' },
          { text: 'Authentication', link: '/guides/authentication' },
          { text: 'PDF Reports', link: '/guides/reports' },
          { text: 'Exporting Tests', link: '/guides/exports' },
          { text: 'Headless Mode', link: '/guides/headless' }
        ]
      },
      {
        text: 'Release Notes',
        items: [
          { text: 'v0.4.1', link: '/releases/v0.4.1' },
          { text: 'v0.4.0', link: '/releases/v0.4.0' },
          { text: 'v0.3.4', link: '/releases/v0.3.4' },
          { text: 'v0.3.3', link: '/releases/v0.3.3' },
          { text: 'v0.3.2', link: '/releases/v0.3.2' },
          { text: 'v0.3.1', link: '/releases/v0.3.1' },
          { text: 'v0.3.0', link: '/releases/v0.3.0' },
          { text: 'v0.2.1', link: '/releases/v0.2.1' },
          { text: 'v0.2.0', link: '/releases/v0.2.0' },
          { text: 'v0.1.0', link: '/releases/v0.1.0' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Octrafic/octrafic-cli' }
    ]
  }
})
