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
    return `${format2degit(date.getDate())}/${format2degit(date.getMonth() + 1)}/${date.getFullYear()}`
}

export const convertComma = (number) => {
    return number.toString().replace('.', ',')
}

export const convertCurrency = (currency) => {
    return '($' + currency.toFixed(2).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + ')'
}

export const calculate = (job, notJob) => {
    if (job && notJob) {
        const total = job.FAIL.length + notJob.LOSE.length + notJob.NEW.length + notJob.WIN.length
        const win = notJob.WIN.length
        const percentWin = total !== 0 ? `(${(win / total * 100).toFixed(2)}%)` : '(00.00%)'
        const lose = notJob.LOSE.length
        const percentLose = total !== 0 ? `(${(lose / total * 100).toFixed(2)}%)` : '(00.00%)'
        const _new = notJob.NEW.length
        const percentNew = total !== 0 ? `(${(_new / total * 100).toFixed(2)}%)` : '(00.00%)'
        return {
            total, win, lose, percentLose, percentWin, new: _new, percentNew
        }
    }
    return null
}


// market

const countByHours = (arr = [], x, dataName) => {
    const keyTime = dataName === 'job' ? 'createdAt' : 'createdTime'
    return arr.filter(item =>
        x === new Date(item[keyTime]).getHours()
    ).length
}

const initData = (arr = [], dataName) => {
    const data = []
    for (let x = -1; x <= 24; x++) {
        data.push({ x, y: countByHours(arr, x, dataName) })
    }
    return data
}

export const handleDataByStatus = (data, dataName, date) => {
    const keyTime = dataName === 'job' ? 'createdAt' : 'createdTime'
    const newData = {
        FAIL: [],
        LOSE: [],
        WIN: [],
        NEW: [],
        RUNNING: [],
        TURNOFF: [],
        TURNON: [],
    }
    data.forEach(item => {
        if (new Date(item[keyTime]).getDate() === new Date(date).getDate()) {
            newData[item.status].push(item)
        }
    })
    return newData
}

export const handleDataByHours = (dataByStatus, dataName) => {
    return Object.entries(dataByStatus).reduce((pre, [key, value]) => ({
        ...pre,
        [key]: initData(value, dataName)
    }), {})
}