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

# /captain/register Endpoint

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

## Response
• 201: Returns newly created captain details  
• 400: Returns validation errors  

## Example Response
{
  "token": JWT token,
  "_id": "captain_id",
  "captain":{
  "fullname": {
    "firstname": User's first name,
    "lastname": User's last name
  },
  "email": User's email,
  "password": User's password,
  "vehicle": {
    "color": vehicle color,
    "plate": vehicle number plate,
    "capacity": vehicle capacity,
    "vehicleType": "car"
  }
  }
}

