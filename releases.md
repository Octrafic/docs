# Release Notes

## v0.4.1

## Features

* feat: support exporting unexecuted test plans (#63)
* feat: support multiple function calls execution in a single LLM response (#64)

---

## v0.4.0

## Features

* feat: headless mode and CI/CD support (#61)
* feat: add ExportTests tool with Postman, curl and pytest formats (#59)
* feat: temp project indicator and /save command (#57)
* feat: show last 5 releases in /release-notes (#62)
* feat: `/auto` command and `--auto` flag to skip test confirmation (#61)

---

## v0.3.4

## Changelog
### Bug Fixes
* 511baf79e33bddf194d85bd248bb3aeb4bb8eaf0: fix: use correct Homebrew tap path in update command (@mikolajbadyl)

---

## v0.3.3

## Bug Fixes

- **GraphQL parser crash** - Fixed panic when parsing GraphQL fields with unbalanced parentheses
- **Authentication handling** - CLI now correctly adds authentication headers only when endpoint requires it (requires_auth=true)

## Improvements

- **System prompts** - Updated AI prompts to clarify that CLI automatically adds authentication based on requires_auth flag

---

## v0.3.2

## Improvements

- **System prompts optimization** - Refined AI agent prompts following best practices: better role definitions, structured context, and clearer output formats
- **Code cleanup** - Removed unused ProcessSpecificationIterative function to reduce codebase complexity
- **Version display** - Removed version number from status bar in terminal UI for cleaner interface

---

## v0.3.1

## Bug Fixes

- **Project Creation** - Fixed issue where the app would exit if no projects were found.
- **Error Reporting** - Critical errors are now displayed directly in the terminal.

---

## v0.3.0

## New Features

- **Conversation history** - Navigate through your chat history with intuitive controls, review past interactions and responses
- **File upload support** - Upload and share files directly in chat for better context and collaboration
- **Project selection redesign** - Improved project picker interface with better visual hierarchy and navigation

## Improvements

- **UI refinements** - Enhanced terminal interface with better colors, spacing, and visual feedback
- **Command fixes** - Resolved issues with command parsing and execution
- **Overall stability** - Multiple bug fixes and performance improvements

---

## v0.2.1

## New Features

- **Environment variable authentication** — Configure auth via `OCTRAFIC_AUTH_*` env vars for safer credential management in CI/CD and containerized environments (#10) — thanks [@erilofe](https://github.com/erilofe)!
- **Stop LLM generation with ESC** — Press ESC during streaming to immediately stop responses, keeping partial content in conversation (#23)

## Bug Fixes

- **Mouse wheel scrolling** — Fixed chat viewport scrolling with mouse wheel (#19)
- **UI refinements** — Minor improvements to terminal interface rendering

## Contributors

Special thanks to [@erilofe](https://github.com/erilofe) for implementing environment variable authentication support!

---

## v0.2.0

## Changes

- Local LLM support — Ollama and llama.cpp providers (no API key needed)
- Version check — status bar shows when a new version is available
- `/release-notes` command — view latest release notes in
TUI
- PDF report export for test results

---

## v0.1.0

## Changes

- Natural language API testing with AI (Claude, OpenRouter, OpenAI)
- Interactive TUI with project management wizard
- Auth configuration in project wizard (Bearer, API Key, Basic)
- Format support: OpenAPI/Swagger, Postman, GraphQL, Markdown
- Auto-conversion of API formats to OpenAPI
- Multi-platform support: Linux, macOS, Windows (amd64, arm64, armv7)
- Package managers: Homebrew, DEB, RPM, AUR
