# ZenYukti Website Branch Strategy

This document outlines our branch strategy for development and deployment of the ZenYukti website.

## Primary Branches

Our repository maintains two primary branches:

### `main` Branch

- **Purpose**: Production-ready code that is deployed to the live site.
- **Protection**: Direct pushes are restricted; changes can only be merged through pull requests after review.
- **Deployment**: Automatically deployed to GitHub Pages when changes are pushed.
- **Stability**: Should always be in a stable, production-ready state.

### `dev` Branch

- **Purpose**: Integration branch for development work where all features are tested together.
- **Target for PRs**: All pull requests must target this branch, not `main`.
- **Testing**: Features are integrated and tested here before being promoted to production.
- **Stability**: May contain work-in-progress features, but should be generally stable.

## Feature Branches

All new development work should happen in feature branches:

- **Naming Convention**: `feature/feature-name`, `bugfix/issue-name`, `docs/update-description`, etc.
- **Base Branch**: Always create feature branches from the `dev` branch.
- **Lifecycle**: Temporary; deleted after merging to `dev`.

## Workflow

1. **Development**:
   - Create a feature branch from `dev`
   - Develop and test your changes
   - Submit a pull request to the `dev` branch

2. **Integration**:
   - PR is reviewed and merged into `dev`
   - Changes are tested in the integrated environment

3. **Production Release**:
   - Periodically, `dev` is merged into `main` via pull request
   - Changes are deployed to production

## Pull Request Requirements

- All PRs must target the `dev` branch
- PRs must pass all automated checks
- PRs require at least one approval from a maintainer
- PRs should include appropriate documentation and tests

## Hotfixes

Critical production bugs may require hotfixes:

1. Create a `hotfix/issue-name` branch from `main`
2. Fix the issue
3. Submit a PR to `main` (exception to normal rule)
4. After merging to `main`, immediately create a PR to merge the changes back to `dev`

By following this branch strategy, we maintain a clean, stable codebase and a predictable release cycle.