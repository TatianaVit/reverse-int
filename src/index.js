module.exports = function reverse (n) {
    n = Math.abs(n)
    n = String(n)
    n = n.split('')
    n = n.reverse()
    if (n.length < 3){
      n.push('0')
    } 
    n = n.join('')
    return +n
  }