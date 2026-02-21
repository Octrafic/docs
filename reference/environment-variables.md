# Environment Variables

All environment variables that Octrafic reads at startup.

## Provider

| Variable | Description | Example |
|----------|-------------|---------|
| `OCTRAFIC_PROVIDER` | AI provider to use | `claude`, `openai`, `openrouter`, `ollama`, `llamacpp`, `custom` |
| `OCTRAFIC_API_KEY` | API key for the selected provider | `sk-ant-...` |
| `OCTRAFIC_MODEL` | Model name to use | `claude-sonnet-4-20250514` |
| `OCTRAFIC_BASE_URL` | Base URL override (custom/local providers) | `https://api.example.com` |

## Authentication

| Variable | Description | Example |
|----------|-------------|---------|
| `OCTRAFIC_AUTH_TYPE` | Auth type for API requests | `bearer`, `apikey`, `basic`, `none` |
| `OCTRAFIC_AUTH_TOKEN` | Bearer token | `your-token` |
| `OCTRAFIC_AUTH_KEY` | API key header name | `X-API-Key` |
| `OCTRAFIC_AUTH_VALUE` | API key value | `your-key` |
| `OCTRAFIC_AUTH_USER` | Basic auth username | `admin` |
| `OCTRAFIC_AUTH_PASS` | Basic auth password | `secret` |

## Priority

Environment variables are applied in this order (highest to lowest):

1. CLI flags
2. Environment variables
3. Saved project config
4. Defaults

## Example: CI/CD setup

```bash
export OCTRAFIC_PROVIDER=openai
export OCTRAFIC_API_KEY=$OPENAI_KEY
export OCTRAFIC_AUTH_TYPE=bearer
export OCTRAFIC_AUTH_TOKEN=$API_TOKEN

octrafic test -u https://api.example.com -s spec.json -p "run smoke tests"
```
