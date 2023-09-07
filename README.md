# back-equipo38

Back-end project team38

## Installation & Run

```bash
# Clone this project
https://github.com/marcelowebdesigner/back-equipo38
```

```bash
# Install dependencies
cd back-equipo38
npm install
```

Before running API server, you need to:

- create a Database in MySQL
- create a .env file ([dotenv
  ](https://www.npmjs.com/package/dotenv)) for your enviroment variables and set the following values.

## You need to put your own values on all fields.

```go
PORT=4000
HOST='localhost'
DATABASE_NAME=your_db_name
MYSQL_USERNAME='user'
MYSQL_PASSWORD='password'
```

To run the server:

```bash
# Run
nodemon app
# or
npm start

# API Endpoint :
localhost:'process.env.PORT'
```
