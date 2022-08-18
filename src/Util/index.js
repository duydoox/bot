export const format2degit = (arg) => {
    const number = Number(arg)
    return number >= 10 ? '' + number : '0' + number
}

export const convertTime = (arg) => {
    const date = new Date(arg)
    return `${format2degit(date.getHours())}:${format2degit(date.getMinutes())}:${format2degit(date.getSeconds())}`
}

export const convertDate = (arg) => {
    const date = new Date(arg)
    return `${format2degit(date.getDate())}/${format2degit(date.getMonth())}/${date.getFullYear()}`
}

export const convertCurrency = (currency) => {
    return '($' + currency.toFixed(2).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + ')'
}