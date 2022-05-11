export const memoize = (func) => {
  const cache = {};
  return (...args) => {
    console.log(cache);
    let strKey = getHashedArguments(func, args);
    if (!cache[strKey]) {
      console.log("Add to cache", ...args);
      cache[strKey] = func(...args);
    }
    console.log("Fetching from cache", ...args);
    return cache[strKey];
  };
};

const getHashedArguments = (func, args) => func.name + args.join(",");
