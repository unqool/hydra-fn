## Functions

<dl>
<dt><a href="#grid">grid([size], [strokeWidth], [smoothing], options)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a grid pattern</p>
</dd>
<dt><a href="#shapeBorder">shapeBorder([sides], [radius], [smoothing], [options])</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a shape with a border</p>
</dd>
</dl>

<a name="grid"></a>

## grid([size], [strokeWidth], [smoothing], options) ⇒ <code>Object</code>
Creates a grid pattern

**Kind**: global function  
**Returns**: <code>Object</code> - A Hydra chain  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [size] | <code>Array.&lt;number&gt;</code> | <code>[8,8]</code> | The dimensions of the grid |
| [strokeWidth] | <code>number</code> | <code>0.05</code> | The width of the grid lines |
| [smoothing] | <code>number</code> | <code>0.01</code> | The amount smoothing to the grid lines |
| options | <code>Object</code> |  | Additional options for customizing the grid |
| [options.transparency] | <code>boolean</code> | <code>false</code> | Whether the background is transparent |

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
| [options.transparent] | <code>boolean</code> | <code>false</code> | Whether the background is transparent |

