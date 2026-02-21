import { defineConfig } from 'vitepress'
import { readdirSync } from 'fs'
import { resolve } from 'path'

function getReleaseItems() {
  try {
    return readdirSync(resolve('releases'))
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace('.md', ''))
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
      .map(v => ({ text: v, link: `/releases/${v}` }))
  } catch {
    return []
  }
}

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
        items: getReleaseItems()
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Octrafic/octrafic-cli' }
    ]
  }
})
