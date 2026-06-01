
const dotenv=require('dotenv')

dotenv.config({
    path:".env.qa"
})

class configManager{

static get baseURL(){
return process.env.BASE_URL;
}
static get username(){
return process.env.USERNAME;
}
static get password(){
return  process.env.PASSWORD;
}


}
module.exports=configManager






























// const dotenv = require('dotenv');

// dotenv.config({
//     path:".env.qa"
// })
// class ConfigManager
// {
//     static get baseURL(){
//         return process.env.BASE_URL;
//     }
//     static get username()
//     {
// return process.env.USERNAME;
//     }
//     static get password()
//     {
// return process.env.PASSWORD;
//     }
// }

// module.exports= ConfigManager