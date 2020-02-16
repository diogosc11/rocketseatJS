axios.get("https://api.github.com/users/diogosc11")
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })