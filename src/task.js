String.prototype.isLetter = function() {
    let a = this;
    if(a.length !== 1)
        return false;
    return /^[a-zA-Z]$/.test(a[0]);
}
console.log('a'.isLetter());

