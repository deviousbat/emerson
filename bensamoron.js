exports.makethiswrong = function (value) {
    if (typeof value === "boolean") {
        const varname = Object.keys({
            value
        })[0]
        console.log(varname + " is " + !value)
    } else {
        throw "This is too complex a value for me to be wrong about."
    }
}
