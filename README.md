# Front Plugin

This project is a plugin for Front, built using React, TypeScript, and Vite. It follows code best practices and utilizes industry-standard tooling for modern web development.

## Features

- Front plugin sdk integration
- Customer profile fetching from unique identifier
- Reply action button to create a draft message on the selected conversation
- Customer transaction history & product owneds
- React for building user interfaces
- TypeScript for type-safe code
- Vite for fast development and build tooling
- ESLint and Prettier for code linting and formatting
- CommitLint for commit message linting
- Husky for Git hooks
- NextUI & Tailwind CSS for styling

## Demo
![image](https://github.com/SaadFarooq-Dev/react-front-plugin/assets/89783597/ce101293-0228-4086-acfe-819f4e7265e7)
![image](https://github.com/SaadFarooq-Dev/react-front-plugin/assets/89783597/afc72ee5-8422-43b2-8835-e968fead23f2)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- npm/yarn for managing packages

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

```bash
git clone https://github.com/SaadFarooq-Dev/react-front-plugin.git
cd front-plugin
```

2. Install dependencies:

```bash
npm install
```

3. Copy .env.example to .env and update the environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

This will launch the Vite development server, and you should be able to view your application by navigating to http://localhost:5173 in your web browser (or whatever port Vite uses by default).

### Scripts

Here are some of the npm scripts you can use:

- ` npm run dev: Start the development server with hot reloading`
- `npm run build: Build the production-ready code. `
- `npm run lint: Lint the codebase for potential errors.`
- `npm run preview: Preview the production build locally.`
- `npm run knip: (Explain what this script does)`
- `npm run prepare: Prepare Husky Git hooks.`

### Committing Changes

This project enforces conventional commit messages using CommitLint. Make sure to follow the commit message conventions when contributing to the repository.

To ensure your commit messages are formatted correctly, you can use the commit-msg hook provided by Husky:

```bash
git commit -m "type(scope): description"
```

### Code Formatting

To ensure consistent code style, run Prettier and ESLint before committing your changes:

```bash
npm run lint
```

This will check and fix any linting errors in your code according to the rules specified in .eslintrc.cjs.

### Husky Git Hooks

This project uses Husky to manage Git hooks. Here are the hooks set up:

- pre-commit: Runs lint-staged to lint and format staged files.
- pre-push: Runs the build script to ensure the project builds without errors before pushing to the repository.
- commit-msg: Validates commit messages using CommitLint.
- VS Code Extensions

For a better development experience, the following VS Code extensions are recommended:

- esbenp.prettier-vscode: Prettier code formatter integration.
- dbaeumer.vscode-eslint: ESLint integration.
- usernamehw.errorlens: Inline error and warning display.
- bradlc.vscode-tailwindcss: Tailwind CSS IntelliSense.
  You can install these extensions manually or VS Code will prompt you to install them if you open the project and have the extensions.json file in the .vscode directory.

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Please ensure you follow the code style, commit message format, and other guidelines.

Contact
Your Name - @SaadFarooqDev - saadfarooq.info@gmail.com.com

Project Link: https://github.com/SaadFarooq-Dev/react-front-plugin.git
