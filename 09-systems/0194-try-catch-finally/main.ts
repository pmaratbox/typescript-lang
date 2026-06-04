try {
    throw new Error("boom");
} catch (e) {
    console.log("caught");
} finally {
    console.log("cleanup");
}
