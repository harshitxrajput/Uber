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

## /users/login Endpoint Documentation

### Description
This endpoint logs in an existing user. It validates the input, verifies credentials, and returns a JWT token along with the user object upon successful authentication.

### Endpoint
**POST** `/users/login`

### Request Body
- **email** (string, required): Must be a valid email address.
- **password** (string, required): User's password.

#### Example
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Response
- **Status Code**: 200 OK
- **Body**:
  - **token**: JWT token for authentication.
  - **user**: User object.

### Error Responses
- **Status Code**: 400 Bad Request for validation errors.
- **Status Code**: 401 Unauthorized for invalid credentials.

## /users/profile Endpoint Documentation

### Description
This endpoint retrieves the profile of the authenticated user.

### Endpoint
**GET** `/users/profile`

### Request Headers
- **Authorization**: Bearer token (required)

### Response
- **Status Code**: 200 OK
- **Body**: User object.

### Error Responses
- **Status Code**: 401 Unauthorized if the user is not authenticated.

## /users/logout Endpoint Documentation

### Description
This endpoint logs out the authenticated user by invalidating the JWT token.

### Endpoint
**GET** `/users/logout`

### Request Headers
- **Authorization**: Bearer token (required)

### Response
- **Status Code**: 200 OK
- **Body**: Message indicating successful logout.

### Error Responses
- **Status Code**: 401 Unauthorized if the user is not authenticated.

## /captains/register Endpoint Documentation

### Description
This endpoint registers a new captain. It validates the input data, creates a captain, and returns the captain object upon successful registration.

### Endpoint
**POST** `/captains/register`

### Request Body
- **fullname**: Object containing:
  - **firstname** (string, required): Must be at least 3 characters.
  - **lastname** (string, optional): If provided, should be at least 3 characters.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 5 characters.
- **vehicle**: Object containing:
  - **color** (string, required): Must be at least 3 characters.
  - **plate** (string, required): Must be at least 6 characters.
  - **capacity** (number, required): Must be at least 1.
  - **vehicleType** (string, required): Must be one of 'car', 'motorcycle', or 'auto'.

#### Example
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response
- **Status Code**: 201 Created
- **Body**: Created captain object.

### Error Responses
- **Status Code**: 400 Bad Request in case of validation errors.

## /captains/login Endpoint Documentation

### Description
This endpoint logs in an existing captain. It validates the input, verifies credentials, and returns a JWT token along with the captain object upon successful authentication.

### Endpoint
**POST** `/captains/login`

### Request Body
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Captain's password.

#### Example
```json
{
  "email": "jane.doe@example.com",
  "password": "secret123"
}
```

### Response
- **Status Code**: 200 OK
- **Body**:
  - **token**: JWT token for authentication.
  - **captain**: Captain object.

### Error Responses
- **Status Code**: 400 Bad Request for validation errors.
- **Status Code**: 401 Unauthorized for invalid credentials.

## /captains/profile Endpoint Documentation

### Description
This endpoint retrieves the profile of the authenticated captain.

### Endpoint
**GET** `/captains/profile`

### Request Headers
- **Authorization**: Bearer token (required)

### Response
- **Status Code**: 200 OK
- **Body**: Captain object.

### Error Responses
- **Status Code**: 401 Unauthorized if the captain is not authenticated.

## /captains/logout Endpoint Documentation

### Description
This endpoint logs out the authenticated captain by invalidating the JWT token.

### Endpoint
**GET** `/captains/logout`

### Request Headers
- **Authorization**: Bearer token (required)

### Response
- **Status Code**: 200 OK
- **Body**: Message indicating successful logout.

### Error Responses
- **Status Code**: 401 Unauthorized if the captain is not authenticated.
