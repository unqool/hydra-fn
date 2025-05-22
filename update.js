/**
 * @global
 * @description The number of seconds between each tick. Default is 1 second.
 */
window._secondsUntilTick = 1;

/**
 * @global
 * @description Tracks the last processed tick count to prevent duplicate executions.
 * Initialized to -1 to ensure the first tick is processed.
 */
window._lastTickCount = -1;

/**
 * Executes a set of callback functions on a time-based interval (tick).
 *
 * @param {Function[]} callbacks - Array of functions to call on each tick
 * @param {number} [secondsUntilTick=1] - Number of seconds between ticks
 * @returns {void}
 */
const callOnTick = (callbacks, secondsUntilTick) => {
  if (secondsUntilTick !== 1) {
    window._secondsUntilTick = secondsUntilTick;
  }

  const currentTickCount = Math.floor(time / window._secondsUntilTick);

  if (currentTickCount !== window._lastTickCount) {
    for (const callback of callbacks) {
      callback();
    }
    window._lastTickCount = currentTickCount;
  }
};
