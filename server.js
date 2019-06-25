const express = require('express'); // express 모듈을  가져오는 거 (require라는 것을 사용해서)
const app = express();
const path = require("path");
const {
    Pool
} = require("pg");

const pool = new Pool({
    user: "shop_admin",
    host: "localhost",
    database: "shoppingmall",
    password: "seok8167",
    port: 5432
});

// const db = require("./db");

app.set("view engine", "ejs");

const PORT = 3300;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (request, response) {
    response.render("pages/index");
});

//app.get('/users/:id', db.getUsers);
app.get('/users', function (request, response) {
    pool.query("select * from users;", function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result.rows);
        response.render("pages/index", {
            users: result.rows
        });
    });
});

app.get('/users/:id', function (request, response) {
    let id = request.params.id;
    pool.query("select * from users where id =" + id, function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result.rows);
        response.render("pages/users", {
            users: result.rows
        });
    });
});

//app.get('/orders/:id', db.getOrders);

app.listen(PORT, function () {
    console.log(`port ${PORT}`);
});