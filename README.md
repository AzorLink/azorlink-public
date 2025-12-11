# AzorLink Public

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Semântica 2025](https://img.shields.io/badge/Semântica-2025-blue.svg)](https://semantica2025.pt)

Repositório público do projeto AzorLink, uma plataforma moderna desenvolvida com base na Semântica 2025.

## 📋 Sobre o Projeto

AzorLink é uma plataforma web desenvolvida para facilitar a gestão e partilha de recursos digitais, construída com tecnologias modernas e seguindo as melhores práticas de desenvolvimento.

## 🚀 Tecnologias

### Backend
- Node.js
- TypeScript
- Express.js
- RESTful API

### Frontend
- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS

## 📁 Estrutura do Projeto

```
azorlink-public/
├── src/                    # Código fonte do backend
│   ├── api/               # Rotas e controladores da API
│   ├── services/          # Lógica de negócio
│   ├── models/            # Modelos de dados
│   └── utils/             # Utilitários
├── frontend/              # Aplicação Next.js
│   ├── app/               # App Router do Next.js
│   ├── components/        # Componentes React
│   ├── lib/               # Bibliotecas e utilitários
│   └── public/            # Ficheiros estáticos
├── docs/                  # Documentação e screenshots
├── architecture/          # Diagramas de arquitetura
└── tests/                 # Testes automatizados
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- pnpm (gerenciador de pacotes)

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/your-org/azorlink-public.git
cd azorlink-public
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o ficheiro .env com as suas configurações
```

4. Execute o projeto em modo desenvolvimento:
```bash
pnpm dev
```

O servidor estará disponível em `http://localhost:8081`

## 📚 Documentação

- [Arquitetura](./architecture/README.md) - Diagramas e documentação técnica
- [Roadmap](./ROADMAP.md) - Plano de desenvolvimento futuro
- [Contribuindo](./CONTRIBUTING.md) - Guia para contribuidores
- [Segurança](./SECURITY.md) - Política de segurança

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia o [guia de contribuição](./CONTRIBUTING.md) para mais detalhes sobre como contribuir para o projeto.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o ficheiro [LICENSE](./LICENSE) para mais detalhes.

## 🔒 Segurança

Se descobrir uma vulnerabilidade de segurança, por favor consulte o nosso [guia de segurança](./SECURITY.md) antes de reportar.

## 📞 Contacto

Para questões ou sugestões, abra uma issue no repositório ou contacte a equipa de desenvolvimento.

## 🙏 Agradecimentos

- Semântica 2025 pela inspiração e diretrizes
- Todos os contribuidores que ajudaram a tornar este projeto possível

---

**Nota**: Este é um repositório público. Não inclua informações sensíveis, credenciais ou lógica privada do negócio.

