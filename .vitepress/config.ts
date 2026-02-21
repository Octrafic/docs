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
          { text: 'Environment Variables', link: '/reference/environment-variables' },
          { text: 'Troubleshooting', link: '/guides/troubleshooting' }
        ]
      },
      { text: 'Release Notes', link: '/releases' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Octrafic/octrafic-cli' }
    ]
  }
})
