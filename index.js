// Code your solution here
let findMatching = function (arr, driver) {
    return arr.filter(el =>
        el.toLowerCase() === driver.toLowerCase()
    )
}