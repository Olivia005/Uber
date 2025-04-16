# /users/register Endpoint

This endpoint registers a new user.

## Request
Method: POST  
URL: /users/register  

### Body
• email (string, required)  
• fullname.firstname (string, required)  
• fullname.lastname (string, optional)  
• password (string, required)

## Response
• 201: Returns a JSON object with a token and user details  
• 400: Returns validation errors

## Example Response
{
  "token": "some-jwt-token",
  "user": {
    "id": "1234567890",
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jane@example.com"
  }
}

# /users/login Endpoint

## Request
Method: POST  
URL: /users/login  

### Body
• email (string, required)  
• password (string, required)

## Response
• 200: Returns a JSON object with a token and user details  
• 400: Returns validation errors  
• 401: Returns invalid credentials message  

## Example Response
{
  "token": "some-jwt-token",
  "user": {
    "id": "1234567890",
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jane@example.com"
  }
}

# /users/profile Endpoint

## Request
Method: GET  
URL: /users/profile  

## Description
Retrives the profile information of the current authenticated user.

## HTTP method 
GET

## Authentication
Requires a valid jwt token in the authenticated header:
`Authorization: Bearer <token>`

## Response
• 200: Returns user profile  
• 401: Unauthorized if no valid token  

## Example Response
{
  "_id": "1234567890",
  "firstname": "Jane",
  "lastname": "Doe",
  "email": "jane@example.com"
}



# /users/logout Endpoint

## Request
Method: GET  
URL: /users/logout  

## Description
Logout the current user and blacklist the token provided in cookie or headers.

### HTTP Method
`GET`

### Authentication
requires a valid JWT token in the Authentication header or cookie

## Response
• 200: Returns a success message  
• 401: Unauthorized if no valid token  

## Example Response
{
  "message": "Logged out successfully"
}

# /captains/register Endpoint

## Request
Method: POST  
URL: /captain/register  

### Body
• email (string, required)  
• fullname.firstname (string, required)  
• fullname.lastname (string, optional)  
• password (string, required)  
• vehicle.color (string, required)  
• vehicle.plate (string, required)  
• vehicle.capacity (number, required)  
• vehicle.vehicleType (string, required, one of: car, motorcycle, auto)

## Request Body
```json
{
  "email": "captain@example.com", 
  "fullname": {
    "firstname": "Jane",          // required, min length 3
    "lastname": "Doe"             // optional
  },
  "password": "secret123",        // required, min length 6
  "vehicle": {
    "color": "Black",             // required, min length 3
    "plate": "ABC123",            // required, min length 3
    "capacity": 4,                // required, integer
    "vehicleType": "car"          // required, one of: car, motorcycle, auto
  }
}
```

## Response
• 201: Returns newly created captain details  
• 400: Returns validation errors  

## Example Response
```json
{
  "token": "some-jwt-token",      // JWT token
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# /captains/login Endpoint
## Request
Method: POST  
URL: /captains/login  
### Body
• email  
• password  
## Response
• 200: token + captain details  
• 400: validation errors  
• 401: invalid credentials  
## Example Response
```json
{
  "token": "captain-jwt-token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com"
  }
}
```

# /captains/profile Endpoint
## Request
Method: GET  
URL: /captains/profile  
## Description
Retrieves current captain profile  
## Response
• 200: captain details  
• 401: unauthorized  
## Example Response
```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "captain@example.com",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

# /captains/logout Endpoint
## Request
Method: GET  
URL: /captains/logout  
## Description
Logs out current captain
## Response
• 200: success message  
• 401: unauthorized  
## Example Response
```json
{
  "message": "Logged out successfully"
}
```




