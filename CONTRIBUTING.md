# Contributing Guide

Thank you for your interest in contributing to AzorLink! This document provides guidelines for contributing to the project.

## 📋 Code of Conduct

By participating in this project, you agree to maintain a respectful and welcoming environment for all contributors.

## 🚀 How to Contribute

### Reporting Bugs

1. Check if the bug has not already been reported in [Issues](https://github.com/AzorLink/azorlink-public/issues)
2. If it doesn't exist, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs. current behavior
   - Environment (OS, Node version, etc.)
   - Screenshots if applicable

### Suggesting Features

1. Check if the feature has not already been suggested
2. Create an issue with the `enhancement` tag
3. Describe:
   - The problem it solves
   - The proposed solution
   - Alternatives considered
   - Expected impact

### Contributing Code

1. **Fork the repository**
2. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make your changes** following the project standards
4. **Test your changes**:
   ```bash
   pnpm test
   ```
5. **Commit** with clear messages:
   ```bash
   git commit -m "feat: add new feature X"
   ```
6. **Push** to your branch:
   ```bash
   git push origin feature/new-feature
   ```
7. **Open a Pull Request** with detailed description

## 📝 Code Standards

### Naming Conventions

- **Variables and functions**: camelCase
- **React components**: PascalCase
- **Files**: kebab-case
- **Constants**: UPPER_SNAKE_CASE

### Commit Structure

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting (doesn't affect code)
- `refactor:` Refactoring
- `test:` Tests
- `chore:` Maintenance tasks

### Formatting

- Use Prettier for automatic formatting
- Use ESLint for linting
- Keep lines with maximum of 100 characters
- Use 2 spaces for indentation

## 🧪 Testing

- Write tests for new features
- Maintain test coverage > 80%
- Run all tests before submitting PR:
  ```bash
  pnpm test
  pnpm test:coverage
  ```

## 📚 Documentation

- Update documentation for new features
- Add JSDoc comments for public functions
- Keep the README updated

## 🔍 Review Process

1. All PRs are reviewed by at least one maintainer
2. You may be asked to make changes
3. After approval, the PR will be merged
4. Maintainers may squash before merge

## ❓ Questions?

- Open an issue with the `question` tag
- Consult the documentation in the `/docs` directory
- Contact the maintainers

## 🙏 Recognition

All contributors will be recognized in the README and project releases.

---

Thank you for contributing to AzorLink! 🎉
