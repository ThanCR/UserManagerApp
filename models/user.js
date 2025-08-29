
const users = [
    {
        username: "admin",
        password: "123",
        createdAt: Date.now()
    }
];

const authorizeUser = (username, password) => {
    console.log(username, password);
    
    return users.forEach(user => (user.username === username && user.password === password))
}


const createUser = (username, password) => {
    const newUser = {
        username,
        password,
        createdAt: Date.now()
    }
    users.push(newUser)

    return 'User successfully created';
}

const getUser = (username) => {
    const user = users.map( (user) => {
        if(user.username = username)
            return user
    });    
    return user[0];
}


module.exports = {
    createUser,
    getUser,
    authorizeUser
}