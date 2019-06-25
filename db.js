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


const getUsers = function (request, response) {
    let id = request.params.id;
    let users;
    console.log("db" + id);
    pool.query("select * from users where id =" + id, function (error, result) {
        if (error) {
            throw error;
        }

        users = result.rows;
        response.status(200).json(result.rows);
    });
};

const getOrders = function (request, response) {
    response.send("Orders");
};

module.exports = {
    getUsers,
    getOrders
}