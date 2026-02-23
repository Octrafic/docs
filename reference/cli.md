# CLI Reference

The Octrafic CLI provides several commands and flags to control its behavior from the terminal. This reference covers all available options for version `0.4.x` and later.

## Global Flags

These flags can be used when starting an interactive session or executing commands.

| Flag | Short | Description | Example |
|------|-------|-------------|---------|
| `--url` | `-u` | Base URL of the API to test | `-u https://api.example.com` |
| `--spec` | `-s` | Path or URL to the OpenAPI specification | `-s ./docs/openapi.yaml` |
| `--name` | `-n` | Name of the project (saves the session) | `-n "Stripe API"` |
| `--auth` | | Authentication method (`bearer`, `apikey`, `basic`, `none`) | `--auth bearer` |
| `--token` | | Token for bearer authentication | `--token "sk_test_..."` |
| `--key` | | Header name for API key authentication | `--key "X-API-Key"` |
| `--value` | | Value for API key authentication | `--value "12345"` |
| `--user` | | Username for basic authentication | `--user "admin"` |
| `--pass` | | Password for basic authentication | `--pass "secret"` |
| `--clear-auth` | | Remove saved authentication from the project | `--clear-auth` |
| `--auto` | | Start in Auto Mode (no confirmation prompts) | `--auto` |
| `--onboarding` | | Force the onboarding wizard (provider selection) | `--onboarding` |
| `--version` | `-v` | Print the current version | `-v` |
| `--help` | `-h` | Display help information | `-h` |

## Commands

### `octrafic test`

Executes tests non-interactively (headless mode). Ideal for CI/CD pipelines.

```bash
octrafic test [flags]
```

**Additional Flags for `test`:**

| Flag | Short | Description | Example |
|------|-------|-------------|---------|
| `--path` | `-p` | Path to a test file (Postman config, shell script, pytest) | `-p ./tests.json` |
| `--prompt` | | Natural language instruction for generating tests | `--prompt "Test all GET endpoints"` |

*Note: All global flags (like `--url`, `--spec`, `--auth`) apply to the `test` command as well.*

**Exit Codes:**
- `0`: All tests passed successfully.
- `1`: One or more tests failed, or an error occurred during execution.

## In-Session Commands (Slash Commands)

When using the interactive TUI (Terminal User Interface), you can use these commands by typing them in the chat prompt.

| Command | Description |
|---------|-------------|
| `/help` | List all available slash commands and keybindings |
| `/save <name>`| Save the current temporary project under a name |
| `/auto` | Toggle Auto Mode (skips manual confirmation for requests) |
| `/auth` | Open the authentication wizard to update API credentials |
| `/models` | Switch the AI model or provider |
| `/info` | Display current project configuration (URL, Spec, Auth) |
| `/clear` | Clear the conversation history from the screen |
| `/release-notes`| Display release notes for the current and recent versions |
| `/logout` | Log out and clear the current session |
| `/exit` | Exit Octrafic |

## Keyboard Shortcuts

While in the interactive chat session:

- **Up/Down Arrows**: Navigate through command history.
- **Page Up/Page Down**: Scroll through the chat output.
- **Tab**: Auto-complete file paths when typing.
- **Esc (Double tap)**: Clear the current input prompt.
- **Ctrl+C**: Gracefully exit the application.
