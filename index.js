// Code your solution here
let findMatching = function (arr, driver) {
    return arr.filter(el =>
        el.toLowerCase() === driver.toLowerCase()
    )
}

let fuzzyMatch = function (arr, driver) {
    return arr.filter(el =>
        // driver.toLowerCase().indexOf(el.toLowerCase()) === 0
        el.toLowerCase().includes(driver.toLowerCase())
    )
}