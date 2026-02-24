# Headless Mode

The `octrafic test` subcommand runs tests non-interactively - no TUI, no prompts. Designed for CI/CD pipelines and scripting.

## Usage

### Run a test file

```bash
octrafic test --url https://api.example.com --path tests.json
```

Supported file formats:
- **Postman Collection** (`.json`)
- **Shell script** with curl commands (`.sh`)
- **pytest file** (`.py`)

### Run from a prompt

```bash
octrafic test \
  --url https://api.example.com \
  --spec openapi.json \
  --prompt "test all user endpoints"
```

The AI generates a test plan from the spec and executes it automatically.

## Important: Configuration

Because `octrafic test` runs without a UI, **it will not prompt** for the initial setup wizard (onboarding). If you run it on a fresh machine (like a GitHub Actions runner) without configuration, it will fail immediately.

To fix this, provide environment variables:
```bash
export OCTRAFIC_PROVIDER=claude
export OCTRAFIC_API_KEY=your_key_here
export OCTRAFIC_MODEL=claude-haiku-4.5
```
Or run `octrafic` interactively once to build the `~/.octrafic/config.json` file. See [Providers](./providers.md) for more details.

## Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--url` | `-u` | API base URL (required) |
| `--spec` | `-s` | Path to API spec file |
| `--path` | `-p` | Path to test file (Postman, shell, pytest) |
| `--prompt` | | Natural language test instruction |
| `--auth` | | Auth type: `bearer`, `apikey`, `basic` |
| `--token` | | Bearer token |
| `--key` | | API key header name |
| `--value` | | API key value |
| `--user` | | Basic auth username |
| `--pass` | | Basic auth password |

## Exit codes

| Code | Meaning |
|------|---------|
| `0` | All tests passed |
| `1` | One or more tests failed or an error occurred |

## GitHub Actions example

```yaml
- name: Run API tests
  run: |
    octrafic test \
      --url ${{ secrets.API_URL }} \
      --path tests/api-tests.json \
      --auth bearer \
      --token ${{ secrets.API_TOKEN }}
```

## Auto mode in interactive sessions

In the interactive TUI, use `/auto` to toggle automatic test execution - tests run without manual confirmation. The status bar shows an `Auto` indicator when active.

## Related

- [Exporting Tests](./exports.md) - Export tests to Postman, curl, or pytest
- [Authentication](./authentication.md) - Configuring auth for API tests
- [Project Management](./project-management.md) - Managing projects
