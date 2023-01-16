<a name="Panel"></a>

## Panel
Base element of VGUI system

**Kind**: global class  

* [Panel](#Panel)
    * [.AddTickSignal(sign)](#Panel+AddTickSignal)
    * [.Destroy()](#Panel+Destroy)
    * [.DrawBox(x, y, width, height, r, g, b, a, hollow)](#Panel+DrawBox)
    * [.DrawBoxFade(x, y, width, height, r, g, b, a, alpha0, alpha1, horizontal, hollow)](#Panel+DrawBoxFade)
    * [.GetAlpha()](#Panel+GetAlpha) ⇒ <code>number</code>
    * [.GetChildren(handle)](#Panel+GetChildren) ⇒ <code>void</code>
    * [.GetName()](#Panel+GetName) ⇒ <code>string</code>
    * [.GetTall()](#Panel+GetTall) ⇒ <code>number</code>
    * [.GetWide()](#Panel+GetWide) ⇒ <code>number</code>
    * [.GetParent()](#Panel+GetParent) ⇒ [<code>Panel</code>](#Panel)
    * [.GetXPos()](#Panel+GetXPos) ⇒ <code>number</code>
    * [.GetYPos()](#Panel+GetYPos) ⇒ <code>number</code>
    * [.GetZPos()](#Panel+GetZPos) ⇒ <code>number</code>
    * [.HasFocus()](#Panel+HasFocus) ⇒ <code>boolean</code>
    * [.IsCursorOver()](#Panel+IsCursorOver) ⇒ <code>boolean</code>
    * [.IsEnabled()](#Panel+IsEnabled) ⇒ <code>boolean</code>
    * [.IsVisible()](#Panel+IsVisible) ⇒ <code>boolean</code>
    * [.SetVisible(state)](#Panel+SetVisible)
    * [.IsWithin(x, y)](#Panel+IsWithin) ⇒ <code>boolean</code>
    * [.MakePopup()](#Panel+MakePopup)
    * [.MakeReadyForUse()](#Panel+MakeReadyForUse)
    * [.MoveToFront()](#Panel+MoveToFront)
    * [.RequestFocus()](#Panel+RequestFocus)
    * [.SetAlpha(alpha)](#Panel+SetAlpha)
    * [.SetBgColor(r, g, b, a)](#Panel+SetBgColor)
    * [.SetFgColor(r, g, b, a)](#Panel+SetFgColor)
    * [.SetCallback(event, handler)](#Panel+SetCallback)
    * [.SetCursor(signIndex)](#Panel+SetCursor)
    * [.SetEnabled(state)](#Panel+SetEnabled)
    * [.SetKeyBoardInputEnabled(state)](#Panel+SetKeyBoardInputEnabled)
    * [.SetMouseInputEnabled(state)](#Panel+SetMouseInputEnabled)
    * [.SetPaintBackgroundEnabled(state)](#Panel+SetPaintBackgroundEnabled)
    * [.SetPaintBackgroundType(type)](#Panel+SetPaintBackgroundType)
    * [.SetPaintBorderEnabled(state)](#Panel+SetPaintBorderEnabled)
    * [.SetPaintEnabled(state)](#Panel+SetPaintEnabled)
    * [.SetParent(panel)](#Panel+SetParent)
    * [.SetPos(x, y)](#Panel+SetPos)
    * [.SetSize(width, height)](#Panel+SetSize)
    * [.SetTall(height)](#Panel+SetTall)
    * [.SetWide(width)](#Panel+SetWide)
    * [.SetZPos(z)](#Panel+SetZPos)
    * [.SetPostChildPaintEnabled(state)](#Panel+SetPostChildPaintEnabled)
    * [.SetPanelInteractive(state)](#Panel+SetPanelInteractive)

WOOOW
<a name="Panel+AddTickSignal"></a>

### panel.AddTickSignal(sign)
**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| sign | <code>number</code> | 

WOOOW
<a name="Panel+Destroy"></a>

### panel.Destroy()
Destroys panel and its children

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+DrawBox"></a>

### panel.DrawBox(x, y, width, height, r, g, b, a, hollow)
Draws box in Panel  Enable painting before use

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  |  |
| y | <code>number</code> |  |  |
| width | <code>number</code> |  |  |
| height | <code>number</code> |  |  |
| r | <code>number</code> |  |  |
| g | <code>number</code> |  |  |
| b | <code>number</code> |  |  |
| a | <code>number</code> |  | normalized alpha (between 0 and 1) |
| hollow | <code>boolean</code> | <code>false</code> |  |

**Example**  
```js
local panel = vgui.CreatePanel("Panel", vgui.GetRootPanel(), "SomePanel");panel.SetPaintEnabled(true);panel.SetCallback("Paint", function() {  panel.DrawBox(0, 0, panel.GetWide(), panel.GetTall(), 0, 0, 0, 1, false);});
```
WOOOW
<a name="Panel+DrawBoxFade"></a>

### panel.DrawBoxFade(x, y, width, height, r, g, b, a, alpha0, alpha1, horizontal, hollow)
Draws box in Panel  Enable painting before use

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| width | <code>number</code> |  |
| height | <code>number</code> |  |
| r | <code>number</code> |  |
| g | <code>number</code> |  |
| b | <code>number</code> |  |
| a | <code>number</code> | normalized alpha (between 0 and 1) |
| alpha0 | <code>number</code> |  |
| alpha1 | <code>number</code> |  |
| horizontal | <code>boolean</code> |  |
| hollow | <code>boolean</code> |  |

WOOOW
<a name="Panel+GetAlpha"></a>

### panel.GetAlpha() ⇒ <code>number</code>
Returns panel's alpha

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetChildren"></a>

### panel.GetChildren(handle) ⇒ <code>void</code>
Returns panel's children  NOTE: I'm not sure that it's correct

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| handle | <code>?</code> | 

WOOOW
<a name="Panel+GetName"></a>

### panel.GetName() ⇒ <code>string</code>
Returns panel's name

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetTall"></a>

### panel.GetTall() ⇒ <code>number</code>
Returns panel's height

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetWide"></a>

### panel.GetWide() ⇒ <code>number</code>
Returns panel's width

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetParent"></a>

### panel.GetParent() ⇒ [<code>Panel</code>](#Panel)
Returns panel's parent

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetXPos"></a>

### panel.GetXPos() ⇒ <code>number</code>
Returns panel's x position

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetYPos"></a>

### panel.GetYPos() ⇒ <code>number</code>
Returns panel's y position

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+GetZPos"></a>

### panel.GetZPos() ⇒ <code>number</code>
Returns panel's z position

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+HasFocus"></a>

### panel.HasFocus() ⇒ <code>boolean</code>
Returns panel's focus state

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+IsCursorOver"></a>

### panel.IsCursorOver() ⇒ <code>boolean</code>
Returns is cursor over the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+IsEnabled"></a>

### panel.IsEnabled() ⇒ <code>boolean</code>
Returns panel's enable state

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+IsVisible"></a>

### panel.IsVisible() ⇒ <code>boolean</code>
Returns panel's visibility state

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+SetVisible"></a>

### panel.SetVisible(state)
Sets panel's visibility state

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+IsWithin"></a>

### panel.IsWithin(x, y) ⇒ <code>boolean</code>
Returns panel is within coordinates

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

WOOOW
<a name="Panel+MakePopup"></a>

### panel.MakePopup()
Enables mouse and keyboard events for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+MakeReadyForUse"></a>

### panel.MakeReadyForUse()
Render panelNOTE: I'm not sure that this described properly

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+MoveToFront"></a>

### panel.MoveToFront()
Moves panel above other panels

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+RequestFocus"></a>

### panel.RequestFocus()
Enables focus state of the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  
WOOOW
<a name="Panel+SetAlpha"></a>

### panel.SetAlpha(alpha)
Sets alpha for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type | Description |
| --- | --- | --- |
| alpha | <code>number</code> | value between 0 and 1 |

WOOOW
<a name="Panel+SetBgColor"></a>

### panel.SetBgColor(r, g, b, a)
Sets background color for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red (0 - 255) |
| g | <code>number</code> | green (0 - 255) |
| b | <code>number</code> | blue (0 - 255) |
| a | <code>number</code> | alpha (0 - 255) |

WOOOW
<a name="Panel+SetFgColor"></a>

### panel.SetFgColor(r, g, b, a)
Sets text color for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red (0 - 255) |
| g | <code>number</code> | green (0 - 255) |
| b | <code>number</code> | blue (0 - 255) |
| a | <code>number</code> | alpha (0 - 255) |

WOOOW
<a name="Panel+SetCallback"></a>

### panel.SetCallback(event, handler)
Sets callback for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| handler | <code>function</code> | 

WOOOW
<a name="Panel+SetCursor"></a>

### panel.SetCursor(signIndex)
Sets cursor sign

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| signIndex | <code>Cursor</code> | 

WOOOW
<a name="Panel+SetEnabled"></a>

### panel.SetEnabled(state)
Sets enable state for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetKeyBoardInputEnabled"></a>

### panel.SetKeyBoardInputEnabled(state)
Turns on/off keyboard events for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetMouseInputEnabled"></a>

### panel.SetMouseInputEnabled(state)
Turns on/off mouse events for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetPaintBackgroundEnabled"></a>

### panel.SetPaintBackgroundEnabled(state)
Enables/disables painting for panel's background

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetPaintBackgroundType"></a>

### panel.SetPaintBackgroundType(type)
Sets paint type for panel's background

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| type | <code>PaintType</code> | 

WOOOW
<a name="Panel+SetPaintBorderEnabled"></a>

### panel.SetPaintBorderEnabled(state)
Enables/disables border painting

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetPaintEnabled"></a>

### panel.SetPaintEnabled(state)
Enables/disables painting

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetParent"></a>

### panel.SetParent(panel)
Sets parent for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| panel | [<code>Panel</code>](#Panel) | 

WOOOW
<a name="Panel+SetPos"></a>

### panel.SetPos(x, y)
Sets position for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

WOOOW
<a name="Panel+SetSize"></a>

### panel.SetSize(width, height)
Sets size for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

WOOOW
<a name="Panel+SetTall"></a>

### panel.SetTall(height)
Sets height for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| height | <code>number</code> | 

WOOOW
<a name="Panel+SetWide"></a>

### panel.SetWide(width)
Sets width for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 

WOOOW
<a name="Panel+SetZPos"></a>

### panel.SetZPos(z)
Sets z position for the panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| z | <code>number</code> | 

WOOOW
<a name="Panel+SetPostChildPaintEnabled"></a>

### panel.SetPostChildPaintEnabled(state)
Enables/disables drawing above children

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
<a name="Panel+SetPanelInteractive"></a>

### panel.SetPanelInteractive(state)
Enables/disables interactive state for panel

**Kind**: instance method of [<code>Panel</code>](#Panel)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

WOOOW
