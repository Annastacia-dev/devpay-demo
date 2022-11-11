# DevPay
DevPay is a platform for freelance developers to generate invoices to send to their clients. 
It is a full stack application built with React and Ruby with Sinatra. It is a work in progress and is currently in the development phase.

##  DevPay-BackEnd
DevPay-BackEnd is the back end of the DevPay application. It is built with Ruby and Sinatra. It is a RESTful API that serves JSON data to the front end. It is currently in the development phase.
Sqlite3 is used as the database for this application.

## Endpoints
### Developers
#### POST /developers
Creates a new developer. The request body should be a JSON object with the following keys:
* `name` - The name of the developer - string (required)
* `email` - The email of the developer - string (required)
* `password` - The password of the developer - string (required)
* `location` - The location of the developer - string 
* `phone_number` - The phone number of the developer - integer

#### PATCH /developers/:id
Updates an existing developer. The request body should be a JSON object with the following keys:
* `name` - The name of the developer - string (required)
* `email` - The email of the developer - string (required)
* `password` - The password of the developer - string (required)
* `location` - The location of the developer - string 
* `phone_number` - The phone number of the developer - integer

#### DELETE /developers/:id
Deletes an existing developer.

### Clients
#### GET /clients
Returns a list of all clients.

#### GET /clients/:id
Returns a single client.

#### POST /clients
Creates a new client. The request body should be a JSON object with the following keys:
* `name` - The name of the client - string (required)
* `email` - The email of the client - string (required)
* `location` - The location of the client - string
* `phone_number` - The phone number of the client - integer

#### PATCH /clients/:id
Updates an existing client. The request body should be a JSON object with the following keys:
* `name` - The name of the client - string (required)
* `email` - The email of the client - string (required)
* `location` - The location of the client - string
* `phone_number` - The phone number of the client - integer


#### DELETE /clients/:id
Deletes an existing client.

### Services
#### GET /services
Returns a list of all services.

#### GET /services/:id
Returns a single service.

#### POST /services
Creates a new service. The request body should be a JSON object with the following keys:
* `name` - The name of the service - string (required)
* `description` - The description of the service - string (required)
* `rate_per_hour` - The rate per hour of the service - integer (required)
* `developer_id` - The id of the developer - integer (required)
* `client_id` - The id of the client - integer (required)

#### PATCH /services/:id
Updates an existing service. The request body should be a JSON object with the following keys:
* `name` - The name of the service - string (required)
* `description` - The description of the service - string (required)
* `rate_per_hour` - The rate per hour of the service - integer (required)
* `developer_id` - The id of the developer - integer (required)
* `client_id` - The id of the client - integer (required)

#### DELETE /services/:id
Deletes an existing service.

### Invoices
#### GET /invoices
Returns a list of all invoices.

#### GET /invoices/:id
Returns a single invoice.

#### POST /invoices
Creates a new invoice. The request body should be a JSON object with the following keys:
* `number` - The number of the invoice - integer (required)
* `amount` - The amount of the invoice - integer
* `date` - The date of the invoice - string (required)
* `due_date` - The due date of the invoice - string (required)
* `paid` - The paid status of the invoice - boolean (required)
* `service_id` - The id of the service - integer (required)

#### PATCH /invoices/:id
Updates an existing invoice. The request body should be a JSON object with the following keys:
* `number` - The number of the invoice - integer (required)
* `amount` - The amount of the invoice - integer
* `date` - The date of the invoice - string (required)
* `due_date` - The due date of the invoice - string (required)
* `paid` - The paid status of the invoice - boolean (required)
* `service_id` - The id of the service - integer (required)

#### DELETE /invoices/:id
Deletes an existing invoice.






