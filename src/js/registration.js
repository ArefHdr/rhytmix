const users = [
    {
        id: 0,
        firstName: 'joo',
        lastName: 'doon',
        userName: 'joodoon',
        email: 'joo@gmail.com',
        password: '123456',
    },
]
const addUser = () => {
    localStorage.setItem('users', JSON.stringify(users))
}

export {users, addUser}