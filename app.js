'use strict';



function esprimo(a) {
    if (a === 0 || a === 1) return false
    let n = Math.trunc(Math.pow(a, 1 / 2))
    for (let i = 2; i <= n; i++) {
        if (a % i == 0) {
            return false
        }
    }
    return true
}
module.exports = esprimo;
