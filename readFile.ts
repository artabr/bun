const readFile = Bun.file('writeFile.txt');
console.log(await readFile.text());
