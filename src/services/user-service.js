const user = {
    name: "Oren Kot",
    balance: 100,
    transactions: []
}

function getUser() {
    return user
}

export const userService = {
    getUser,
}