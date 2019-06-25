function getUser(userId) {
    fetch("/users/"+userId).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    })
}

getUser(101);