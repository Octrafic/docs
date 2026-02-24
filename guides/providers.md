# Providers

Octrafic supports cloud and local AI providers. Choose one during first launch or switch anytime with `octrafic --onboarding`.

## Cloud

| Provider | Get API key |
|----------|-------------|
| **Claude (Anthropic)** | [console.anthropic.com](https://console.anthropic.com) |
| **OpenRouter** | [openrouter.ai/keys](https://openrouter.ai/keys) |
| **OpenAI** | [platform.openai.com](https://platform.openai.com) |
| **Google Gemini** | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |

## Local

No API key needed. Just run a model server locally.

| Provider | Default URL | Get started |
|----------|-------------|-------------|
| **Ollama** | `localhost:11434` | [ollama.com](https://ollama.com) |
| **llama.cpp** | `localhost:8080` | [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) |

Quick start with Ollama:

```bash
ollama pull llama3.1
octrafic --onboarding   # select Ollama
```

## Custom (OpenAI-compatible)

Any API that follows the OpenAI chat completions format is supported. This covers providers like Groq, Mistral, DeepSeek, Together AI, and others.

Select **Custom (OpenAI-compatible)** during onboarding, then enter:

- **Base URL** — the API root without `/v1`, e.g. `https://api.groq.com/openai`
- **API key** — optional, leave empty if the endpoint requires no auth

Octrafic will fetch the model list automatically. If that fails (some providers don't expose `/v1/models`), you can type the model name manually.

## Configuration

Settings are stored in `~/.octrafic/config.json`. To switch provider interactively, run `octrafic --onboarding`.

### Environment Variables

For headless environments like CI/CD pipelines, you can bypass the interactive setup and `config.json` by providing environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `OCTRAFIC_PROVIDER` | The LLM provider to use | `claude`, `openai`, `gemini`, `ollama`, `custom` |
| `OCTRAFIC_API_KEY` | Provider API key (if required) | `sk-ant-api03...` |
| `OCTRAFIC_BASE_URL` | Custom provider endpoint (needed for local & custom) | `https://api.groq.com/openai` |
| `OCTRAFIC_MODEL` | Specific model to request | `claude-haiku-4.5` |

**Example for a Custom (OpenAI-compatible) provider:**
```bash
export OCTRAFIC_PROVIDER=custom
export OCTRAFIC_BASE_URL=https://api.groq.com/openai
export OCTRAFIC_API_KEY=gsk_your_groq_key
export OCTRAFIC_MODEL=llama3-70b-8192
```
