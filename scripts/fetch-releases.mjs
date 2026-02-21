import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const releasesDir = join(__dirname, '..', 'releases')

async function fetchReleases() {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'octrafic-docs'
  }
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch('https://api.github.com/repos/Octrafic/octrafic-cli/releases', { headers })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)

  const releases = await res.json()
  mkdirSync(releasesDir, { recursive: true })

  for (const release of releases) {
    const version = release.tag_name
    const body = (release.body || '').trim()
    const content = `# ${version}\n\n${body}\n`
    writeFileSync(join(releasesDir, `${version}.md`), content)
    console.log(`Generated releases/${version}.md`)
  }

  console.log(`Done: ${releases.length} releases fetched.`)
}

fetchReleases().catch(err => {
  console.warn(`Warning: could not fetch releases (${err.message}). Using existing files.`)
})
