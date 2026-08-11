const loginTests = [
    {
    id: "LOGIN-001",
    title: "Valid credentials",
    username: "admin",
    password: "Password123",
    expected: true 
    },
    {
        id: "LOGIN-002",
        title: "Invalid password",
        username: "admin",
        password: "wrongPassword",
        expected: false 
    },
    {
        id: "LOGIN-003",
        title: "Invalid username",
        username: "wrongUser",
        password: "Password123",
        expected: false
    },
    {
        id: "LOGIN-004",
        title: "Empty email and password",
        username: "",
        password: "",
        expected: false
    },
    {
        id: "LOGIN-005",
        title: "Username contains only spaces",
        username: "   ",
        password: "Password123",
        expected: false
    },
    {
        id: "LOGIN-006",
        title: "Password contains only spaces",
        username: "admin",
        password: "   ",
        expected: false 
    }
];

module.exports = loginTests;