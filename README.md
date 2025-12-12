# azorlink-public

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Semântica 2025](https://img.shields.io/badge/Semântica-2025-blue.svg)](https://semantica2025.pt)

> Public-facing version of the AzorLink project with documentation, structure and demo code.

AzorLink is a modern web platform designed to facilitate the management and sharing of digital resources. This repository contains the public-facing documentation, project structure, and demo code for the AzorLink platform.

## ✨ Features

- 🏗️ **Modern Architecture** - Clean, scalable structure following best practices
- 📚 **Comprehensive Documentation** - Detailed guides and architecture diagrams
- 🔧 **Type-Safe** - Built with TypeScript for better developer experience
- 🎨 **Modern Frontend** - Next.js 14+ with React 18+ and Tailwind CSS
- 🚀 **RESTful API** - Well-structured backend with Express.js
- 📖 **Well Documented** - Architecture diagrams, API docs, and contribution guides

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or higher
- **pnpm** (package manager)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/AzorLink/azorlink-public.git
cd azorlink-public
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Configure environment variables:**
```bash
cp .env.example .env
# Edit the .env file with your configurations
```

4. **Run in development mode:**
```bash
pnpm dev
```

The server will be available at `http://localhost:8081`

## 📁 Project Structure

```
azorlink-public/
├── src/                    # Backend source code
│   ├── api/               # API routes and controllers
│   │   ├── controllers/   # Request handlers
│   │   └── routes/        # Route definitions
│   ├── services/          # Business logic layer
│   ├── models/            # Data models
│   ├── middleware/        # Express middleware
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration files
│   └── types/             # TypeScript type definitions
├── frontend/              # Next.js application
│   ├── app/               # Next.js App Router
│   │   ├── about/         # About page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Page footer
│   │   ├── Button.tsx     # Reusable button
│   │   └── Card.tsx       # Card component
│   ├── lib/               # Libraries and utilities
│   │   ├── api.ts         # API client
│   │   ├── utils.ts       # Helper functions
│   │   └── hooks/         # Custom React hooks
│   └── public/            # Static assets
├── docs/                  # Documentation
│   ├── API.md            # API documentation
│   └── README.md          # Docs index
├── architecture/          # Architecture diagrams
│   ├── README.md         # Architecture overview
│   ├── system-diagram.txt
│   ├── backend-architecture.txt
│   ├── frontend-architecture.txt
│   └── ...
└── tests/                 # Test files
```

## 🛠️ Technologies

### Backend
- **Node.js** - JavaScript runtime
- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web framework
- **RESTful API** - API architecture

### Frontend
- **Next.js 14+** - React framework with App Router
- **React 18+** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## 📚 Documentation

- 📐 [Architecture](./architecture/README.md) - System architecture and diagrams
- 🛣️ [Roadmap](./ROADMAP.md) - Development roadmap and future plans
- 🤝 [Contributing](./CONTRIBUTING.md) - How to contribute to the project
- 🔒 [Security](./SECURITY.md) - Security policy and reporting
- 📖 [API Documentation](./docs/API.md) - API endpoints and usage

## 🏗️ Architecture

The project follows a clean architecture pattern with clear separation of concerns:

- **Backend**: Layered architecture (Routes → Controllers → Services → Models)
- **Frontend**: Component-based architecture with Next.js App Router
- **Documentation**: Comprehensive diagrams and technical documentation

See the [architecture documentation](./architecture/README.md) for detailed diagrams and explanations.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Code of conduct
- How to submit pull requests
- Development setup
- Coding standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🔒 Security

If you discover a security vulnerability, please consult our [Security Policy](./SECURITY.md) before reporting.

## 📞 Contact & Support

- 📧 **Issues**: [GitHub Issues](https://github.com/AzorLink/azorlink-public/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/AzorLink/azorlink-public/discussions)

## 🙏 Acknowledgments

- **Semântica 2025** - For inspiration and guidelines
- **All Contributors** - Who helped make this project possible

---

<div align="center">

**Made with ❤️ by the AzorLink Team**

[⭐ Star us on GitHub](https://github.com/AzorLink/azorlink-public) • [📖 Read the Docs](./docs/README.md) • [🐛 Report Bug](https://github.com/AzorLink/azorlink-public/issues)

</div>

---

> **⚠️ Note**: This is a public repository. Do not include sensitive information, credentials, or private business logic.
