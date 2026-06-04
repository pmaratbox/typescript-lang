function requirePositive(arg: number): void {
    if (arg <= 0) {
        throw new Error("must be positive");
    }
}

function check(arg: number): void {
    try {
        requirePositive(arg);
        console.log("ok");
    } catch (e) {
        console.log(`error: ${(e as Error).message}`);
    }
}

check(5);
check(-1);
