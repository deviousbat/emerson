export.bewrong = function(value) {
    if (typeof value === "boolean") {
        console.log("This is " + !value)
    } else {
        throw "This is too complex a value for me to be wrong about."
    }
}
