# Node API 1 Project Starter Code

## Topics

- Building a RESTful API.
- Performing CRUD operations.
- Writing API endpoints.

## Assignment

Use Node.js and Express to build an API that performs CRUD operations on users.

### Download Project Files and Install Dependencies

- **Fork** and **Clone** this repository.
- **CD into the folder** where you cloned the repository.
- Type `npm install` to download all dependencies listed inside `package.json`.

### Database access

Database access will be done using the `db.js` file included inside the `data` folder. This file publishes the following methods:

- `find()`: calling find returns a promise that resolves to an array of all the users contained in the database.
- `findById()`: this method expects an `id` as it's only parameter and returns the user corresponding to the `id` provided or an empty array if no user with that `id` is found.
- `insert()`: calling insert passing it a user object will add it to the database and return an object with the `id` of the inserted user. The object looks like this: `{ id: 123 }`.
- `update()`: accepts two arguments, the first is the `id` of the user to update and the second is an object with the `changes` to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
- `remove()`: the remove method accepts an `id` as it's first parameter and upon successfully deleting the user from the database it returns the number of records deleted.

Now that we have a way to add, update, remove and retrieve data from the provided database, it is time to work on the API.

### Start the API and Implement Requirements

- To start the server, type `npm run server` from the root folder (where the _package.json_ file is). The server is configured to restart automatically as you make changes.
- Add the code necessary to implement the API requirements.
- **Test the API using a REST Client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) as you work through the exercises.**

### User Schema

Users in the database conform to the following object structure:

```js
{
  name: "Jane Doe", // String, required
  bio: "Not Tarzan's Wife, another Jane",  // String, required
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Write endpoints to perform the following queries

Inside `index.js` add the code necessary to implement the following _endpoints_:

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                                              |
| GET    | /api/users     | Returns an array of all the user objects contained in the database.                                                               |
| GET    | /api/users/:id | Returns the user object with the specified `id`.                                                                                  |
| DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                                            |
| PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**. |

#### Endpoint Specifications

When the client makes a `POST` request to `/api/users`:

- If the request body is missing the `name` or `bio` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide name and bio for the user." }`.

- If the information about the _user_ is valid:

  - save the new _user_ the the database.
  - respond with HTTP status code `201` (Created).
  - return the newly created _user document_.

- If there's an error while saving the _user_:
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON object: `{ errorMessage: "There was an error while saving the user to the database" }`.

When the client makes a `GET` request to `/api/users`:

- If there's an error in retrieving the _users_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ errorMessage: "The users information could not be retrieved." }`.

When the client makes a `GET` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The user with the specified ID does not exist." }`.

- If there's an error in retrieving the _user_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ errorMessage: "The user information could not be retrieved." }`.

When the client makes a `DELETE` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The user with the specified ID does not exist." }`.

- If there's an error in removing the _user_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ errorMessage: "The user could not be removed" }`.

When the client makes a `PUT` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The user with the specified ID does not exist." }`.

- If the request body is missing the `name` or `bio` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide name and bio for the user." }`.

- If there's an error when updating the _user_:

  - respond with HTTP status code `500`.
  - return the following JSON object: `{ errorMessage: "The user information could not be modified." }`.

- If the user is found and the new information is valid:

  - update the user document in the database using the new information sent in the `request body`.
  - respond with HTTP status code `200` (OK).
  - return the newly updated _user document_.

## Stretch Problems

To work on the stretch problems you'll need to enable the `cors` middleware. Follow these steps:

- add the `cors` npm module: `npm i cors`.
- add `server.use(cors())` after `server.use(express.json())`.

Create a new React application and connect it to your server:

- the React application can be anywhere, but, for this project create it inside the folder for the solution.
- connect to the `/api/users` endpoint in the API and show the list of users.
- add a delete button to each displayed user that will remove it from the server.
- add forms to add and update data.
- Style the list of users however you see fit.



## Contributors


|                                                      [Ryan Barnhill](https://github.com/74ultra/)                                                       |                                                       [Lydie Cherilus](https://github.com/lydiecherilus)                                                        |                                                      [Daniel Kanangila](https://github.com/danielkanangila)                                                       |                                                       [Ken Ridenour](https://github.com/ken1286/)                                                        |                                                      
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | 
| [<img src="https://avatars0.githubusercontent.com/u/43554945?s=400&u=6b30d3edcae818d70f8df971e4cc7728dfe701b3&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars1.githubusercontent.com/u/57009304?s=400&u=0d7aeac2b88655a2bf00edc309d7755e870c194f&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars2.githubusercontent.com/u/17149997?s=400&u=1ce10eb8aafdd33cb43a1d9fcc3675f8495242f5&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars2.githubusercontent.com/u/44625066?s=400&u=6ccb6e3a428a150c9a6ea22f8a7065ac65e2c924&v=4" width = "200" />](https://github.com/) | 
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/74ultra/)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lydiecherilus)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/danielkanangila)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ken1286/)                           |                                                       |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ryanbarnhill/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/lydiecherilus/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kkanangila/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kenridenour/)                 |                               |

<br>
<br>

See [Backend Documentation](https://labspt12-express-groomer-c-api.herokuapp.com/api-docs) for details on the backend of our project.