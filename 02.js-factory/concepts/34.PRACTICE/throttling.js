function throttling(callback, delay) {
  let isThrolled = false;
  let savedArg = null;

  const executeCallback = () => {
    if (savedArg === null) {
      isThrolled = false;
    } else {
      callback(...savedArg);
      savedArg = null;
      setTimeout(executeCallback, delay);
    }
  };
  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }
    callback(...args);
    isThrolled = true;
    setTimeout(executeCallback, delay);
  };
}

const throttledItems = throttle(loa);
