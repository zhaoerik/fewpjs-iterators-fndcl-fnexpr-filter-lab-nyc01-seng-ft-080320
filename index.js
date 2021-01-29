// Code your solution here
let findMatching = function(arr, driver) {
    arr.filter(el => {
        if (el.toLowerCase() === driver.toLowerCase()) {
            return el
        }
    })
}