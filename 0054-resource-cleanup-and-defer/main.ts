function open(): { close: () => void } {
  console.log("open");
  return { close: () => console.log("close") };
}

const resource = open();
try {
  console.log("use");
} finally {
  resource.close();
}
