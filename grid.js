/**
 * Creates a grid pattern
 *
 * @param {number[]} [size=[8,8]] - The dimensions of the grid
 * @param {number} [strokeWidth=0.05] - The width of the grid lines
 * @param {number} [smoothing=0.01]- The amount smoothing to the grid lines
 * @param {Object} options - Additional options for customizing the grid
 * @param {boolean} [options.transparency=false] - Whether the background is transparent
 * @returns {Object} A Hydra chain
 */
const grid = (
  size = [8, 8],
  strokeWidth = 0.05,
  smoothing = 0.01,
  options = {},
) => {
  const defaultOptions = {
    transparent: false,
  };
  const combinedOptions = { ...defaultOptions, ...options };
  const { transparent } = combinedOptions;

  const horizontalLine = () =>
    solid(1, 1, 1, 1).mask(shape(2, strokeWidth, smoothing));

  const verticalLine = () =>
    solid(1, 1, 1, 1).mask(
      shape(2, strokeWidth, smoothing).rotate(Math.PI / 2),
    );

  if (transparent) {
    return horizontalLine().layer(verticalLine()).repeat(size[0], size[1]);
  }

  return solid(0, 0, 0)
    .layer(horizontalLine())
    .layer(verticalLine())
    .repeat(size[0], size[1]);
};

window.grid = grid;
