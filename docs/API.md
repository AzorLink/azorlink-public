# API Documentation

## 📡 API Endpoints

### Authentication

#### POST /api/auth/login
Authenticate user.

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
Register new user.

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

### Users

#### GET /api/users
List all users.

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
Get specific user.

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

### Resources

#### GET /api/resources
List all resources.

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
Create new resource.

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

## 🔒 Authentication

Most endpoints require authentication via JWT token in the header:

```
Authorization: Bearer {token}
```

## 📊 Status Codes

- `200` - Success
- `201` - Created successfully
- `400` - Validation error
- `401` - Unauthenticated
- `403` - Unauthorized
- `404` - Not found
- `500` - Internal server error

## ⚠️ Note

This documentation is a placeholder. Real endpoints will be documented during development.
