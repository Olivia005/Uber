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

