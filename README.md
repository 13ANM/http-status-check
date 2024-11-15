# HTTP Status Check - GitHub Action

**HTTP Status Check** is a GitHub Action that checks the HTTP status of a given URL. This action is useful for monitoring the availability of web pages and getting notified if the status code is not as expected.

## Features

- Checks the HTTP status code of a given URL.
- Outputs the status code to the GitHub Actions console.
- Fails the workflow if the status code is not as expected.

## Usage

To use **HTTP Status Check** in your GitHub repository, add the following workflow configuration:

```yaml
name: HTTP Status Check

on:
  schedule:
    - cron: '0 * * * *' # Runs every hour
  workflow_dispatch: # Allows for manual triggering

jobs:
  check-status:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'

      - name: Install Dependencies
        run: yarn install

      - name: Run HTTP Status Check
        uses: 13ANM/http-status-check@v1
        with:
          url: 'https://example.com' # Replace with the URL to check
```

### Inputs

- **url**: The URL to check. This is required.

## Requirements

- Node.js (uses Yarn for dependency installation)
- Permissions to run workflows on the target repository

## License

This project is licensed under the MIT License.

## Author

**Andrei Mocanu**
