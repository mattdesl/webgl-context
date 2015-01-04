module.exports = function(opts) {
    opts = opts||{}
    var canvas = opts.canvas || document.createElement("canvas")
    if (typeof opts.width === "number")
        canvas.width = opts.width
    if (typeof opts.height === "number")
        canvas.height = opts.height

    var attribs = opts
    var gl
    try {
        gl = (canvas.getContext('webgl', attribs) || canvas.getContext('experimental-webgl', attribs))
    } catch (e) {
        gl = null
    }
    return (gl || null) //ensure null on fail
}