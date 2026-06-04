class BaseError extends Error {}
class SpecificError extends BaseError {}

try {
  throw new SpecificError("boom");
} catch (e) {
  if (e instanceof BaseError) {
    console.log("caught base");
  }
}
