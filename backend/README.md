# /users/register Endpoint Documentation

## Description
This endpoint registers a new user. It validates the input data, creates a user, hashes the password, and returns a JWT token along with the user object upon successful registration.

## Endpoint
**POST** `/users/register`

## Request Body
- **fullname**: Object containing:
  - **firstname** (string, required): Must be at least 3 characters.
  - **lastname** (string, optional): If provided, should be at least 3 characters.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 5 characters.

### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Response
- **Status Code**: 201 Created
- **Body**:
  - **token**: JWT token for authentication.
  - **user**: Created user object.

## Error Responses
- **Status Code**: 400 Bad Request in case of validation errors.
