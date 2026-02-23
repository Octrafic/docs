# Release Notes

## v0.4.3

## Features

- Add wait tool for agent rate limit handling
- Auto-approve test plans containing only GET requests
- Add alternate screen mode to interactive TUI

## Bug Fixes

- Fix space key not toggling test plan checkboxes

---

## v0.4.2

## Features

- Add custom OpenAI-compatible provider
- Add Gemini provider support

---

## v0.4.1

## Features

- Support exporting unexecuted test plans
- Support multiple function calls execution in a single LLM response

---

## v0.4.0

## Features

- Add temporary project indicator and `/save` command
- Add ExportTests tool with Postman and curl formats
- Add headless mode for CI/CD support
- Show last 5 releases in `/release-notes`

---

## v0.3.4

## Bug Fixes

- Fix incorrect Homebrew tap path in update command

---

## v0.3.3

## Bug Fixes

- Add support for `requires_auth` in API requests
- Fix crash in GraphQL parser when processing invalid queries

---

## v0.3.2

## Features

- Improve terminal user interface bottom bar layout

---

## v0.3.1

## Bug Fixes

- Allow interactive project creation and improve error reporting

---

## v0.3.0

## Features

- Improve UI borders and update demo
- Add fallback to user-local installation when sudo is not available
- Improve help, version, and slash commands consistency
- Add PR-Agent automation with Claude Haiku 4.5
- Add conversation history
- Add dynamic textarea
- Add Winget support
- Load API specs from URL
- Add `/models` command for model selection
- Add update notification to bottom bar
- Set terminal title based on conversation
- Add file expansion support
- Configure auth from environment variables (@erilofe)

---

## v0.2.1

## Features

- Stop LLM generation when the ESC key is pressed

## Bug Fixes

- Enable mouse wheel scrolling in the TUI chat

---

## v0.2.0

## Features

- Add support for Ollama and llama.cpp providers
- Add PDF report generation
- Add version check system and `/release-notes` command

## Bug Fixes

- Fix install script URL handling
- Fix `VERSION` variable conflict with `/etc/os-release`
- Fix newline gap after think tag in streaming responses

---

## v0.1.0

## Features

- Initial release of Octrafic CLI
- AI-powered API testing from the terminal using natural language
- Support for Claude (Anthropic), OpenAI, and OpenRouter providers
- Interactive chat mode and headless (automated) mode
- Test plan generation and execution against any HTTP API
- Report generation in JSON and HTML formats
