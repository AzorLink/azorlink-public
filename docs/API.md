# Documentação da API

## 📡 Endpoints da API

### Autenticação

#### POST /api/auth/login
Autenticar utilizador.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

#### POST /api/auth/register
Registar novo utilizador.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

### Utilizadores

#### GET /api/users
Listar todos os utilizadores.

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "data": [
    {
      "id": "user_id",
      "email": "user@example.com",
      "name": "User Name"
    }
  ]
}
```

#### GET /api/users/:id
Obter utilizador específico.

**Response:**
```json
{
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

### Recursos

#### GET /api/resources
Listar todos os recursos.

**Response:**
```json
{
  "data": [
    {
      "id": "resource_id",
      "title": "Resource Title",
      "description": "Resource Description"
    }
  ]
}
```

#### POST /api/resources
Criar novo recurso.

**Request:**
```json
{
  "title": "Resource Title",
  "description": "Resource Description"
}
```

**Response:**
```json
{
  "data": {
    "id": "resource_id",
    "title": "Resource Title",
    "description": "Resource Description"
  }
}
```

## 🔒 Autenticação

A maioria dos endpoints requer autenticação via JWT token no header:

```
Authorization: Bearer {token}
```

## 📊 Códigos de Status

- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Erro de validação
- `401` - Não autenticado
- `403` - Não autorizado
- `404` - Não encontrado
- `500` - Erro interno do servidor

## ⚠️ Nota

Esta documentação é um placeholder. Os endpoints reais serão documentados durante o desenvolvimento.

