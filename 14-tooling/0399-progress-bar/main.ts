function progressBar(width: number, fraction: number): string {
  const filled = Math.round(width * fraction);
  return `[${"#".repeat(filled)}${"-".repeat(width - filled)}]`;
}

console.log(progressBar(10, 0.4));
