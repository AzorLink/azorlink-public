# Guia de Contribuição

Obrigado pelo seu interesse em contribuir para o AzorLink! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

Ao participar neste projeto, concorda em manter um ambiente respeitoso e acolhedor para todos os contribuidores.

## 🚀 Como Contribuir

### Reportar Bugs

1. Verifique se o bug já não foi reportado nas [Issues](https://github.com/your-org/azorlink-public/issues)
2. Se não existir, crie uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. atual
   - Ambiente (OS, versão do Node, etc.)
   - Screenshots se aplicável

### Sugerir Funcionalidades

1. Verifique se a funcionalidade já não foi sugerida
2. Crie uma issue com a tag `enhancement`
3. Descreva:
   - O problema que resolve
   - A solução proposta
   - Alternativas consideradas
   - Impacto esperado

### Contribuir com Código

1. **Fork o repositório**
2. **Crie uma branch** para a sua feature/fix:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça as alterações** seguindo os padrões do projeto
4. **Teste as suas alterações**:
   ```bash
   pnpm test
   ```
5. **Commit** com mensagens claras:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
6. **Push** para a sua branch:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
7. **Abra um Pull Request** com descrição detalhada

## 📝 Padrões de Código

### Convenções de Nomenclatura

- **Variáveis e funções**: camelCase
- **Componentes React**: PascalCase
- **Ficheiros**: kebab-case
- **Constantes**: UPPER_SNAKE_CASE

### Estrutura de Commits

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (não afeta código)
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

### Formatação

- Use Prettier para formatação automática
- Use ESLint para linting
- Mantenha linhas com máximo de 100 caracteres
- Use 2 espaços para indentação

## 🧪 Testes

- Escreva testes para novas funcionalidades
- Mantenha cobertura de testes > 80%
- Execute todos os testes antes de submeter PR:
  ```bash
  pnpm test
  pnpm test:coverage
  ```

## 📚 Documentação

- Atualize a documentação para novas funcionalidades
- Adicione comentários JSDoc para funções públicas
- Mantenha o README atualizado

## 🔍 Processo de Revisão

1. Todos os PRs são revisados por pelo menos um mantenedor
2. Pode ser solicitado fazer alterações
3. Após aprovação, o PR será merged
4. Mantenedores podem fazer squash antes de merge

## ❓ Dúvidas?

- Abra uma issue com a tag `question`
- Consulte a documentação no diretório `/docs`
- Contacte os mantenedores

## 🙏 Reconhecimento

Todos os contribuidores serão reconhecidos no README e em releases do projeto.

---

Obrigado por contribuir para o AzorLink! 🎉

