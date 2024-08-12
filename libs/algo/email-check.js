function isValidEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("user@example.com")); // 输出: true
console.log(isValidEmail("user@.com")); // 输出: false
console.log(isValidEmail("user@domain.co")); // 输出: true
console.log(isValidEmail("user@domain")); // 输出: false
console.log(isValidEmail("user@domain.c")); // 输出: false

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRefex = /^\(\d{3}\) \d{3}-\d{4}$/
const chinaPhoneRegex = /^1[3-9]\d{9}$/
const urlRegex = /^[http|https|ftp]:\/\/[^\s/$.?#].[^\s]*$/
const dateRegex = /^\d{4}-\d{2}-\d{2}$/
const ipv4Regex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/
const htmlRegex = /^<\/?[a-zA-Z0-9]+[^>]*>$/
const zhRegex = /^[\u4e00-\u9fff]+$/
const getUrlRegex = /^\bhttps?:\/\/[^\s/$.#?].[^\s]*\b$/