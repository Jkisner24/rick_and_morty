 const validation = (userData) =>{
    let errors = {};
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.userName)){
        errors.userName = "The email is invalid"
    }
    if(!userData.userName){
        errors.userName = "The field cannot be empty"
    }
    if(userData.username.length > 35){
        errors.userName = "The e-mail cannot be longer than 35 characters"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "The password must contain at least one number"
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = "Password must contain between 6 and 10 characters"
    }

}

export default validation;