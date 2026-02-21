# Troubleshooting

## Installation

### Command not found after install

Add the install directory to your `PATH`:

```bash
export PATH=$PATH:/usr/local/bin
```

Or for Go installs:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

Add the line to your `~/.bashrc` or `~/.zshrc` to make it permanent.

---

## Provider & API Key

### API key rejected during onboarding

- Make sure you copied the full key with no extra spaces
- Verify the key is active in your provider's dashboard
- Anthropic keys start with `sk-ant-`, OpenAI keys with `sk-`

### Cannot connect to Ollama

Ollama must be running before launching Octrafic:

```bash
ollama serve
```

Check that it's reachable:

```bash
curl http://localhost:11434/v1/models
```

If you changed the default port, run `octrafic --onboarding` and enter the correct URL.

### Custom provider: no models returned

If model fetching fails for a custom OpenAI-compatible endpoint, Octrafic will prompt you to enter the model name manually. Check that:

- The base URL does not include `/v1` (e.g. use `https://api.groq.com/openai`, not `https://api.groq.com/openai/v1`)
- Your API key has permission to list models

---

## API Testing

### Octrafic sends requests to the wrong URL

Check the base URL shown in the session header. If it's wrong, restart with the correct `-u` flag:

```bash
octrafic -u https://correct-api.example.com -s spec.json
```

### Authentication errors (401/403)

Run `/auth` in the chat to review and update the current authentication settings.

---

## PDF Reports

### Report generation fails

PDF reports require WeasyPrint:

```bash
# macOS
brew install weasyprint

# Ubuntu/Debian
sudo apt install weasyprint

# pip
pip install weasyprint
```

See the [PDF Reports](./reports.md) guide for full installation details.

---

## Configuration

### Reset everything

Remove the config file to start fresh:

```bash
rm ~/.octrafic/config.json
octrafic --onboarding
```

### Switch provider

```bash
octrafic --onboarding
```
