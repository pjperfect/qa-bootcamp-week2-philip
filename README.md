# QA Bootcamp — Week 2

This repository contains practical exercises and automated tests developed during Week 2 of the QA Engineering Bootcamp.

The project focuses on:

- TypeScript fundamentals
- Playwright UI and API testing
- Postman API testing
- Page Object Model (POM)
- Gherkin scenarios
- Test failure analysis using Playwright Trace Viewer
- The Toolshop REST API

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recommended)

## Setup and Execution

After cloning the repository, open the project directory in your terminal.

1. Install the project dependencies and Chromium:

   ```bash
   npm install
   npx playwright install chromium
   ```

2. Configure the environment:

   ```bash
   cp .env.example .env
   ```

   The environment file contains the Toolshop website and API URLs. Only change them if different URLs are required.

3. Run the automated test suite:

   ```bash
   npm test
   ```

> **Warning:** Never commit `.env`. It is excluded from version control through `.gitignore`.

## Project Structure

| Folder               | Purpose                                                     |
| -------------------- | ----------------------------------------------------------- |
| [`src/`](./src/)     | TypeScript fundamentals and practical exercises.            |
| [`tests/`](./tests/) | Automated UI and API tests.                                 |
| `pages/`             | Reusable Page Objects.                                      |
| `features/`          | Gherkin feature files and scenarios.                        |
| `scripts/`           | Helper scripts for environment and API connectivity checks. |

## Available Commands

| Command                          | Purpose                                                |
| -------------------------------- | ------------------------------------------------------ |
| `npm run check`                  | Verify environment configuration and API connectivity. |
| `npm test`                       | Run the complete Playwright test suite.                |
| `npx playwright test --headed`   | Run tests with the browser visible.                    |
| `npx playwright test --trace on` | Run tests and record traces for investigation.         |

## Automated Test Suite

The suite currently contains seven automated tests covering UI interactions, product quantity validation and REST API functionality.

For detailed test coverage, see the [Test Suite README](./tests/README.md).

## Additional Notes

- The automated tests depend on the availability of the external Toolshop application and API.
- Gherkin scenarios are documented separately and are not executed through Cucumber.
- Test data is selected dynamically where product availability is a prerequisite.
