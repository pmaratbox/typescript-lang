type UserId = number & { readonly __brand: "UserId" };
type ProductId = number & { readonly __brand: "ProductId" };

const userId = (n: number): UserId => n as UserId;
const productId = (n: number): ProductId => n as ProductId;

const u = userId(1);
const p = productId(2);

console.log(`user-${u} prod-${p}`);
