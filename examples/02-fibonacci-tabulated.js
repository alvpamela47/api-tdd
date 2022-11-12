const fibonacciTabulated = (n) => {
    var f = new Array(n + 1);
    var i;
     
    f[0] = 0;
    f[1] = 1;
    for(i = 2; i <= n; i++)
        f[i] = f[i - 1] + f[i - 2];
     
    return f[n];
}

module.exports = { fibonacciTabulated };