function validateLogin(username, password) {
    if (username === "admin" && password === "Password123"){
        return true;
    }else {
        return false;
    }
}

function validateCardTitle(title){
    return title !== "";
}

function validateAttachment(fileSize){
    if(fileSize <= 10) {
        return true;
    } else {
        return false;
    }
}

console.log(validateLogin("admin", "Password123"));
console.log(validateLogin("admin", "wrongPassword"));

console.log(validateCardTitle("Sprint Planning"));
console.log(validateCardTitle(""));

console.log(validateAttachment(5));
console.log(validateAttachment(15));
