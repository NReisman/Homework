const [, , ...rest] = process.argv;
console.log(rest.reduce((t, n) => t + Number(n), 0));
