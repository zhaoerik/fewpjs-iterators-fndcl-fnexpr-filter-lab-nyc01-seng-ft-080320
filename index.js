// Code your solution here
let findMatching = function(arr, driver) {
    arr.filter(el => {
        return el === driver.toLowerCase()
    })
}