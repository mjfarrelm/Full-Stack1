export const writeCookie = (key, value, days) => {
    let date = new Date()
    days= days || 365 

    date.setDate(date.getDate() + days)

    document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"
 }

 export const getCookie = (cookieName => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)

    try {
        let cookie = document.cookie.match(re)[0]
        console.log(cookie)
        return cookie
    } catch (error) {
        return false
    }
 })




 