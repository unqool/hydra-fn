<a name="shapeBorder"></a>

## shapeBorder([sides], [radius], [smoothing], [options]) ⇒ <code>Object</code>
Creates a shape with a border

**Kind**: global function  
**Returns**: <code>Object</code> - A Hydra chain  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [sides] | <code>number</code> | <code>3</code> | The number of sides for the shape |
| [radius] | <code>number</code> | <code>1</code> | The radius of the shape |
| [smoothing] | <code>number</code> | <code>0.01</code> | The amount of smoothing to apply to the shape edges |
| [options] | <code>Object</code> | <code>{}</code> | Additional options for customizing the border |
| [options.borderSize] | <code>number</code> | <code>0.05</code> | The size of the border (percentage of the shape's radius) |
| [options.borderColor] | <code>Array.&lt;number&gt;</code> | <code>[1,1,1]</code> | RGB color values for the border (range 0-1) |
| [options.fillColor] | <code>Array.&lt;number&gt;</code> | <code>[0,0,0]</code> | RGB color values for the inner fill (range 0-1) |

