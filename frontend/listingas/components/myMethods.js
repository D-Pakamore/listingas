export const getUserData = () => {
    const cookie = document.cookie
    const cookieObject = Object.fromEntries(cookie.split(';').map(item => item.split('=').map(arr => arr.trim())))

    return cookieObject
}