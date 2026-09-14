export const checkValidateData = (email) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    if(!isEmailValid) return "Email is not valid"
    return null;
}