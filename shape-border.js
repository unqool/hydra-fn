/**
 * Creates a shape with a border
 *
 * @param {number} [sides=3] - The number of sides for the shape
 * @param {number} [radius=1] - The radius of the shape
 * @param {number} [smoothing=0.01] - The amount of smoothing to apply to the shape edges
 * @param {Object} [options={}] - Additional options for customizing the border
 * @param {number} [options.borderSize=0.05] - The size of the border (percentage of the shape's radius)
 * @param {number[]} [options.borderColor=[1,1,1]] - RGB color values for the border (range 0-1)
 * @param {number[]} [options.fillColor=[0,0,0]] - RGB color values for the inner fill (range 0-1)
 * @returns {Object} The hydra chain
 */
window.shapeBorder = (
  index = 0,
  radius = 0.3,
  smoothing = 0.01,
  options = {},
) => {
  const defaultOptions = {
    borderSize: 0.05,
    borderColor: [1, 1, 1],
    fillColor: [0, 0, 0],
  };
  const combinedOptions = { ...defaultOptions, ...options };
  const { borderSize, borderColor, fillColor } = combinedOptions;

  const innerSize = radius * (1 - borderSize);

  return shape(index, radius, smoothing)
    .color(borderColor[0], borderColor[1], borderColor[2])
    .layer(
      shape(index, innerSize, smoothing)
        .luma()
        .color(fillColor[0], fillColor[1], fillColor[2]),
    );
};
