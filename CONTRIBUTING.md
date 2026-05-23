# Contributing to ZenYukti Website

Thank you for your interest in contributing to the ZenYukti website! This document provides guidelines and instructions to help you contribute effectively to our project.

## Table of Contents

- [Contributing to ZenYukti Website](#contributing-to-zenyukti-website)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Development Workflow](#development-workflow)
    - [Branch Structure](#branch-structure)
    - [Pull Request Process](#pull-request-process)
  - [Setting Up Development Environment](#setting-up-development-environment)
  - [Style Guide](#style-guide)
  - [Commit Message Guidelines](#commit-message-guidelines)
  - [Testing](#testing)
  - [Documentation](#documentation)
  - [Issue Reporting](#issue-reporting)
  - [Feature Requests](#feature-requests)

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating in our project.

## Development Workflow

### Branch Structure

We maintain two primary branches:

- **`main`**: Production-ready code that is deployed to the live site
- **`dev`**: Development branch where all features are integrated before being merged to `main`

**Important:** All contributions must target the `dev` branch, not `main`.

### Pull Request Process

1. **Fork the Repository**
   - Create your own fork of the repository on GitHub

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/zenyukti.github.io.git
   cd zenyukti.github.io
   ```

3. **Set Up Remote**
   ```bash
   git remote add upstream https://github.com/ZenYukti/zenyukti.github.io.git
   ```

4. **Create Feature Branch**
   - Always branch from `dev`
   ```bash
   git fetch upstream
   git checkout -b feature/your-feature-name upstream/dev
   ```

5. **Develop Your Feature**
   - Make your changes
   - Commit your changes (see [Commit Message Guidelines](#commit-message-guidelines))
   - Keep your branch updated with `dev`:
     ```bash
     git fetch upstream
     git rebase upstream/dev
     ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - **IMPORTANT**: Select `dev` as the base branch, not `main`
   - Provide a detailed description of your changes
   - Reference any related issues with `#issue-number`

8. **Code Review**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your code will be merged into `dev`

9. **Deployment**
   - Periodically, the `dev` branch will be merged into `main` by maintainers
   - This triggers automatic deployment to the production environment

## Setting Up Development Environment

1. **Prerequisites**
   - Node.js (v16.0.0 or higher)
   - npm (v7.0.0 or higher)
   - Git

2. **Installation**
   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Environment Variables**
   - Copy `.env.example` to `.env` if needed
   - Add any required environment variables

## Style Guide

- We use ESLint for JavaScript/TypeScript linting
- We use Prettier for code formatting
- Run `npm run lint` to check your code
- Run `npm run format` to auto-format code

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Examples:
- `feat(header): add navigation dropdown menu`
- `fix(footer): correct social media links`
- `docs(readme): update installation instructions`
- `style(global): improve button styling`
- `refactor(utils): simplify date formatting function`

## Testing

- Run `npm test` to execute the test suite
- Add tests for new features
- Ensure all tests pass before submitting a PR

## Documentation

- Update documentation when you change functionality
- Add JSDoc comments to functions and components
- Update README.md if necessary

## Issue Reporting

- Use the issue templates when reporting bugs or requesting features
- Provide detailed information to help reproduce issues
- Include screenshots or error logs if applicable

## Feature Requests

- Use the feature request template
- Explain the use case and benefits
- Discuss larger features in advance with maintainers

---

Thank you for contributing to ZenYukti Website! Your efforts help us build a better platform for our community.