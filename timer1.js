var args = process.argv.slice(2);


let sorted = args.sort();
for (let i = 0; i < sorted.length; i++) {
  if (!isNaN(sorted[i]) && sorted[i] > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, (sorted[i] * 1000));
  }
}

