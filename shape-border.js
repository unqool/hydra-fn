const mapWithProperties = (arr, callback) => {
  const result = arr.map(callback);

  // Copy hidden properties
  for (const key in arr) {
    if (key.charAt(0) === "_") {
      result[key] = arr[key];
    }
  }
  return result;
};

/**
 * Creates a shape with a border
 * @function
 * @name shapeBorder
 * @param {number} [sides=3] - The number of sides for the shape
 * @param {number} [radius=1] - The radius of the shape
 * @param {number} [smoothing=0.01] - The amount of smoothing to apply to the shape edges
 * @param {Object} [options={}] - Additional options for customizing the border
 * @param {number} [options.borderSize=0.05] - The size of the border (percentage of the shape's radius)
 * @param {number[]} [options.borderColor=[1,1,1]] - RGB color values for the border (range 0-1)
 * @param {number[]} [options.fillColor=[0,0,0]] - RGB color values for the inner fill (range 0-1)
 * @param {boolean} [options.transparent=false] - Whether the background is transparent
 * @returns {Object} A Hydra chain
 */
window.shapeBorder = (
  sides = 3,
  radius = 0.3,
  smoothing = 0.01,
  options = {},
) => {
  const defaultOptions = {
    borderSize: 0.05,
    borderColor: [1, 1, 1],
    transparent: false,
  };
  const combinedOptions = { ...defaultOptions, ...options };
  const { borderSize, borderColor, transparent } = combinedOptions;

  const calcInnerSize = (radius, borderSize) => radius * (1 - borderSize);
  let innerSize = calcInnerSize(radius, borderSize);

  if (radius.length > 0) {
    innerSize = mapWithProperties(radius, (item) =>
      calcInnerSize(item, borderSize),
    );
  }

  if (borderSize.length > 0) {
    innerSize = mapWithProperties(borderSize, (item) =>
      calcInnerSize(radius, item),
    );
  }

  // This is currently a fallback if both radius and borderSize are in sequence mode.
  if (radius.length > 0 && borderSize.length > 0) {
    innerSize = calcInnerSize(radius[0], borderSize[0]);
  }

  if (transparent) {
    return solid(...borderColor)
      .mask(shape(sides, radius, smoothing))
      .mask(shape(sides, innerSize, smoothing).invert());
  }

  return shape(sides, radius, smoothing)
    .color(...borderColor)
    .layer(solid(0, 0, 0).mask(shape(sides, innerSize, smoothing)));
};
