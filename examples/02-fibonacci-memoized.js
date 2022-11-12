let  MAX = 100;
let NIL = -1;
let lookup = new Array(MAX);

function  _initialize()
{
    for (let i = 0; i < MAX; i++)
        lookup[i] = NIL;
}

const fibonacciMemoized = (n) => {

    if (lookup[n] == NIL)
    {
      if (n <= 1)
          lookup[n] = n;
      else
          lookup[n] = fibonacciMemoized(n-1) + fibonacciMemoized(n-2);
    }
    return lookup[n];

}

module.exports = { fibonacciMemoized, _initialize };