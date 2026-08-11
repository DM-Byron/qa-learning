function validateLogin(username, password) {
    return username === "admin" && password === "Password123";
}

function validateAttachment(fileSize){
    return fileSize <= 10;
}

function validateCardTitle(title) {
    return title.length >= 1 && title.length <= 100;
}

module.exports = {
    validateLogin,
    validateAttachment,
    validateCardTitle
};