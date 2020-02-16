class Api{

    static async getUserInfo() {
        try{
            const response = await axios.get("https://api.github.com/users/diogosc11");
            console.log(response);
        }
        catch(err){
            console.log("Erro na API");
        }
    }
}

Api.getUserInfo();

