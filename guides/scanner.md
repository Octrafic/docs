# OpenAPI Auto-Scanner

If you don't have an OpenAPI specification file for your API, Octrafic can generate one directly from your application's source code using the built-in **OOPS (OpenAI for OpenAPI Project Scanner) Pipeline**.

This eliminates the need to manually write OpenAPI YAML files or struggle with cumbersome framework annotations.

## Usage

Simply target the root directory of your project:

```bash
octrafic scan -p ./my-backend-project -o api-spec.yaml
```

Once the scan completes, you can immediately test the project by loading the generated `api-spec.yaml`:

```bash
octrafic -u http://localhost:8080 -s api-spec.yaml
```

## How It Works

The OOPS Pipeline operates in four highly efficient stages designed to minimize token usage and maximize extraction speed:

### 1. Framework Detection
The scanner analyzes your project's root configuration files (e.g., `go.mod`, `package.json`, `requirements.txt`) to automatically identify the programming language and the web framework being used (e.g., Go/net-http, Python/FastAPI, Node/Express).

### 2. Route Discovery
Using heuristics customized for the detected framework, the scanner traverses your codebase to locate exactly which files contain routing logic and endpoint definitions, skipping irrelevant files and directories (like `node_modules` or `tests`).

### 3. Parallel Endpoint Extraction
The scanner isolates each identified routing file and queries the LLM in parallel. This prevents massive codebase dumps into the LLM context, keeping token usage low and ensuring fast, precise extraction of methods, paths, summaries, and request/response payloads.

### 4. Specification Generation
Finally, the extracted data from all routing files is aggregated, merged, and formatted into a valid OpenAPI 3.1 YAML document, ready to be used by Octrafic or any other OpenAPI-compatible tool.

## Configuration & Environments

The scanner runs completely non-interactively, making it perfect for CI/CD environments.

If you are running the scanner in a CI/CD pipeline, ensure you have provided the required LLM configurations via environment variables:

```bash
export OCTRAFIC_PROVIDER=claude
export OCTRAFIC_API_KEY=your_key_here
export OCTRAFIC_MODEL=claude-haiku-4.5
octrafic scan -p . -o spec.yaml
```

If these are not provided, and you haven't run the interactive onboarding wizard locally, the scanner will fail with a configuration error. Please see [Headless Mode](./headless.md) and [Providers](./providers.md) for more details on environment configuration.
