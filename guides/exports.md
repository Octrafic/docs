# Exporting Tests

Octrafic can export your executed API tests to multiple formats for use in other tools or CI pipelines.

## How it works

After running tests, ask the AI to export them:

```
export these tests to postman
```

```
save the tests as a shell script
```

Octrafic will generate the file and save it to `~/Documents/octrafic/tests/`.

## Supported formats

### Postman Collection

Exports a Postman Collection v2.1 JSON file. Each test becomes a request item with method, URL, headers, and body. If tests were executed, response examples are included.

```
export tests to postman
export to postman and save as stripe-tests.json
```

### Shell script (curl)

Exports a bash script with one `curl` command per test. The script includes a `BASE_URL` variable at the top for easy customization.

```
export tests as a shell script
```

The generated file is executable (`chmod 755`).

### pytest

Exports a Python pytest file using the `requests` library. Each test becomes a `test_METHOD_endpoint()` function with assertions on the status code.

```
export tests as pytest
export to pytest and name it test_users_api.py
```

Requires Python dependencies to run:

```bash
pip install pytest requests
```

## Output location

Files are saved to:

```
~/Documents/octrafic/tests/
```

You can also specify an absolute path:

```
export tests to postman at /tmp/my-tests.json
```

## Authentication

All formats include the authentication configured for the session - Bearer token, API key, or Basic auth - so the exported files work out of the box.

## Related

- [PDF Reports](./reports.md) - Generate PDF test reports
- [Headless Mode](./headless.md) - Run tests non-interactively
- [Authentication](./authentication.md) - Configuring auth for API tests
