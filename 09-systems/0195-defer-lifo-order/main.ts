const deferred: Array<() => string> = [];
const defer = (action: () => string): void => {
    deferred.push(action);
};

defer(() => "1");
defer(() => "2");
defer(() => "3");

const parts: string[] = [];
while (deferred.length > 0) {
    const action = deferred.pop()!;
    parts.push(action());
}

console.log(parts.join(" "));
