// Code your solution here
let findMatching = function (arr, driver) {
    return arr.filter(el =>
        el.toLowerCase() === driver.toLowerCase()
    )
}

let fuzzyMatch = function (arr, driver) {
    return arr.filter(el => {
        if (driver.charAt(0) === el.charAt(0)) return el
    })
}