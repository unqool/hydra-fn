/**
 * @global
 * @description The number of seconds between each tick. Default is 1 second.
 * @type {number}
 */
window._secondsUntilTick = 1;

/**
 * Tracks the last processed tick count to prevent duplicate executions.
 * Initialized to -1 to ensure the first tick is processed.
 * @type {number}
 */
window._lastTickCount = -1;

/**
 * Tracks the current position in the sequence of callbacks.
 * Initialized to -1 to start with the first callback.
 * @type {number}
 */
window._sequenceCount = -1;

/**
 * Executes a set of callback functions on a time-based interval (tick).
 * @function
 * @name callOnTick
 * @param {Function[]} callbacks - Array of functions to call on each tick
 * @param {number} [secondsUntilTick=1] - Number of seconds between ticks
 * @param {string} [mode] - Execution mode. If "seq", executes callbacks in sequence, one per tick.
 * Otherwise, executes all callbacks on each tick.
 * @returns {void}
 * @example
 * // Execute all callbacks on each tick (ideally in 1 second)
 * callOnTick([() => variable1 = Math.random(), () => variable2 = Math.random()], 1);
 *
 * // Execute callbacks in sequence, one per tick (ideally in 1 second)
 * callOnTick([() => variable1 = Math.random(), () => variable2 = Math.random()], 1, "seq");
 */
window.callOnTick = (callbacks, secondsUntilTick, mode) => {
  if (secondsUntilTick !== 1) {
    window._secondsUntilTick = secondsUntilTick;
  }

  // Calculate the current tick count based on elapsed time and tick interval
  // 'time' is a global variable provided by Hydra that represents the elapsed time in seconds
  const currentTickCount = Math.floor(time / window._secondsUntilTick);

  if (currentTickCount !== window._lastTickCount) {
    if (mode === "seq") {
      window._sequenceCount++;
      callbacks[window._sequenceCount % callbacks.length]();
    } else {
      for (const callback of callbacks) {
        callback();
      }
    }
    window._lastTickCount = currentTickCount;
  }
};
