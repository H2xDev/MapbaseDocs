<a name="Button"></a>

## Button ⇐ [<code>Label</code>](#Label)
Default VGUI button

**Kind**: global class  
**Extends**: [<code>Label</code>](#Label), [<code>Panel</code>](#Panel)  

* [Button](#Button) ⇐ [<code>Label</code>](#Label)
    * [.ForceDepressed()](#Button+ForceDepressed)
    * [.HasFocus()](#Button+HasFocus) ⇒ <code>boolean</code>
    * [.IsArmed()](#Button+IsArmed) ⇒ <code>boolean</code>
    * [.SetArmed(state)](#Button+SetArmed)
    * [.SetArmedSound(sndFile)](#Button+SetArmedSound)
    * [.SetArmedColor(r, g, b, a, i, j, k, l)](#Button+SetArmedColor)
    * [.IsDepressed()](#Button+IsDepressed) ⇒ <code>boolean</code>
    * [.IsMouseClickEnabled()](#Button+IsMouseClickEnabled) ⇒ <code>boolean</code>
    * [.SetMouseClickEnabled()](#Button+SetMouseClickEnabled) ⇒ <code>boolean</code>
    * [.IsSelected()](#Button+IsSelected) ⇒ <code>boolean</code>
    * [.SetSelected(state)](#Button+SetSelected)
    * [.SetButtonActivationType()](#Button+SetButtonActivationType)
    * [.SetDefaultColor(r, g, b, a, i, j, k, l)](#Button+SetDefaultColor)
    * [.SetDepressedColor(r, g, b, a, i, j, k, l)](#Button+SetDepressedColor)
    * [.SetDepressedSound(sndFile)](#Button+SetDepressedSound)
    * [.SetReleasedSound(sndFile)](#Button+SetReleasedSound)
    * [.SetSelected(state)](#Button+SetSelected)
    * [.SetSelectedColor(r, g, b, a, i, j, k, l)](#Button+SetSelectedColor)
    * [.AddColorChange(r, g, b, a, i)](#Label+AddColorChange)
    * [.ClearColorChangeStream()](#Label+ClearColorChangeStream)
    * [.SetAllCaps(state)](#Label+SetAllCaps)
    * [.SetAssociatedControl(handle)](#Label+SetAssociatedControl)
    * [.SetCenterWrap(state)](#Label+SetCenterWrap)
    * [.SetContentAlignment(state)](#Label+SetContentAlignment)
    * [.SetText(text)](#Label+SetText)
    * [.SetFont(fontIndex)](#Label+SetFont)
    * [.SetTextInset(x, y)](#Label+SetTextInset)
    * [.SetWrap(state)](#Label+SetWrap)
    * [.SizeToContents()](#Label+SizeToContents)
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

<a name="Button+ForceDepressed"></a>

### button.ForceDepressed()
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+HasFocus"></a>

### button.HasFocus() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Button</code>](#Button)  
**Overrides**: [<code>HasFocus</code>](#Panel+HasFocus)  
<a name="Button+IsArmed"></a>

### button.IsArmed() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+SetArmed"></a>

### button.SetArmed(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Button+SetArmedSound"></a>

### button.SetArmedSound(sndFile)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| sndFile | <code>string</code> | 

<a name="Button+SetArmedColor"></a>

### button.SetArmedColor(r, g, b, a, i, j, k, l)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| a | <code>number</code> | 
| i | <code>number</code> | 
| j | <code>number</code> | 
| k | <code>number</code> | 
| l | <code>number</code> | 

<a name="Button+IsDepressed"></a>

### button.IsDepressed() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+IsMouseClickEnabled"></a>

### button.IsMouseClickEnabled() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+SetMouseClickEnabled"></a>

### button.SetMouseClickEnabled() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+IsSelected"></a>

### button.IsSelected() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+SetSelected"></a>

### button.SetSelected(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Button+SetButtonActivationType"></a>

### button.SetButtonActivationType()
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+SetDefaultColor"></a>

### button.SetDefaultColor(r, g, b, a, i, j, k, l)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| a | <code>number</code> | 
| i | <code>number</code> | 
| j | <code>number</code> | 
| k | <code>number</code> | 
| l | <code>number</code> | 

<a name="Button+SetDepressedColor"></a>

### button.SetDepressedColor(r, g, b, a, i, j, k, l)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| a | <code>number</code> | 
| i | <code>number</code> | 
| j | <code>number</code> | 
| k | <code>number</code> | 
| l | <code>number</code> | 

<a name="Button+SetDepressedSound"></a>

### button.SetDepressedSound(sndFile)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| sndFile | <code>string</code> | 

<a name="Button+SetReleasedSound"></a>

### button.SetReleasedSound(sndFile)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| sndFile | <code>string</code> | 

<a name="Button+SetSelected"></a>

### button.SetSelected(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Button+SetSelectedColor"></a>

### button.SetSelectedColor(r, g, b, a, i, j, k, l)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| a | <code>number</code> | 
| i | <code>number</code> | 
| j | <code>number</code> | 
| k | <code>number</code> | 
| l | <code>number</code> | 

<a name="Label+AddColorChange"></a>

### button.AddColorChange(r, g, b, a, i)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| a | <code>number</code> | 
| i | <code>number</code> | 

<a name="Label+ClearColorChangeStream"></a>

### button.ClearColorChangeStream()
**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Label+SetAllCaps"></a>

### button.SetAllCaps(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Label+SetAssociatedControl"></a>

### button.SetAssociatedControl(handle)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| handle | [<code>Panel</code>](#Panel) | 

<a name="Label+SetCenterWrap"></a>

### button.SetCenterWrap(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Label+SetContentAlignment"></a>

### button.SetContentAlignment(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>Alignment</code> | 

<a name="Label+SetText"></a>

### button.SetText(text)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="Label+SetFont"></a>

### button.SetFont(fontIndex)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| fontIndex | <code>number</code> | that you can get via `surface.GetFont` |

<a name="Label+SetTextInset"></a>

### button.SetTextInset(x, y)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="Label+SetWrap"></a>

### button.SetWrap(state)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Label+SizeToContents"></a>

### button.SizeToContents()
Resizes the panel to content

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+AddTickSignal"></a>

### button.AddTickSignal(sign)
**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| sign | <code>number</code> | 

<a name="Panel+Destroy"></a>

### button.Destroy()
Destroys panel and its children

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+DrawBox"></a>

### button.DrawBox(x, y, width, height, r, g, b, a, hollow)
Draws box in Panel  Enable painting before use

**Kind**: instance method of [<code>Button</code>](#Button)  

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
<a name="Panel+DrawBoxFade"></a>

### button.DrawBoxFade(x, y, width, height, r, g, b, a, alpha0, alpha1, horizontal, hollow)
Draws box in Panel  Enable painting before use

**Kind**: instance method of [<code>Button</code>](#Button)  

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

<a name="Panel+GetAlpha"></a>

### button.GetAlpha() ⇒ <code>number</code>
Returns panel's alpha

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetChildren"></a>

### button.GetChildren(handle) ⇒ <code>void</code>
Returns panel's children  NOTE: I'm not sure that it's correct

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| handle | <code>?</code> | 

<a name="Panel+GetName"></a>

### button.GetName() ⇒ <code>string</code>
Returns panel's name

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetTall"></a>

### button.GetTall() ⇒ <code>number</code>
Returns panel's height

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetWide"></a>

### button.GetWide() ⇒ <code>number</code>
Returns panel's width

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetParent"></a>

### button.GetParent() ⇒ [<code>Panel</code>](#Panel)
Returns panel's parent

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetXPos"></a>

### button.GetXPos() ⇒ <code>number</code>
Returns panel's x position

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetYPos"></a>

### button.GetYPos() ⇒ <code>number</code>
Returns panel's y position

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+GetZPos"></a>

### button.GetZPos() ⇒ <code>number</code>
Returns panel's z position

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+IsCursorOver"></a>

### button.IsCursorOver() ⇒ <code>boolean</code>
Returns is cursor over the panel

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+IsEnabled"></a>

### button.IsEnabled() ⇒ <code>boolean</code>
Returns panel's enable state

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+IsVisible"></a>

### button.IsVisible() ⇒ <code>boolean</code>
Returns panel's visibility state

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+SetVisible"></a>

### button.SetVisible(state)
Sets panel's visibility state

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+IsWithin"></a>

### button.IsWithin(x, y) ⇒ <code>boolean</code>
Returns panel is within coordinates

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="Panel+MakePopup"></a>

### button.MakePopup()
Enables mouse and keyboard events for panel

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+MakeReadyForUse"></a>

### button.MakeReadyForUse()
Render panelNOTE: I'm not sure that this described properly

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+MoveToFront"></a>

### button.MoveToFront()
Moves panel above other panels

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+RequestFocus"></a>

### button.RequestFocus()
Enables focus state of the panel

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Panel+SetAlpha"></a>

### button.SetAlpha(alpha)
Sets alpha for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| alpha | <code>number</code> | value between 0 and 1 |

<a name="Panel+SetBgColor"></a>

### button.SetBgColor(r, g, b, a)
Sets background color for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red (0 - 255) |
| g | <code>number</code> | green (0 - 255) |
| b | <code>number</code> | blue (0 - 255) |
| a | <code>number</code> | alpha (0 - 255) |

<a name="Panel+SetFgColor"></a>

### button.SetFgColor(r, g, b, a)
Sets text color for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red (0 - 255) |
| g | <code>number</code> | green (0 - 255) |
| b | <code>number</code> | blue (0 - 255) |
| a | <code>number</code> | alpha (0 - 255) |

<a name="Panel+SetCallback"></a>

### button.SetCallback(event, handler)
Sets callback for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| handler | <code>function</code> | 

<a name="Panel+SetCursor"></a>

### button.SetCursor(signIndex)
Sets cursor sign

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| signIndex | <code>Cursor</code> | 

<a name="Panel+SetEnabled"></a>

### button.SetEnabled(state)
Sets enable state for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetKeyBoardInputEnabled"></a>

### button.SetKeyBoardInputEnabled(state)
Turns on/off keyboard events for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetMouseInputEnabled"></a>

### button.SetMouseInputEnabled(state)
Turns on/off mouse events for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetPaintBackgroundEnabled"></a>

### button.SetPaintBackgroundEnabled(state)
Enables/disables painting for panel's background

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetPaintBackgroundType"></a>

### button.SetPaintBackgroundType(type)
Sets paint type for panel's background

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| type | <code>PaintType</code> | 

<a name="Panel+SetPaintBorderEnabled"></a>

### button.SetPaintBorderEnabled(state)
Enables/disables border painting

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetPaintEnabled"></a>

### button.SetPaintEnabled(state)
Enables/disables painting

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetParent"></a>

### button.SetParent(panel)
Sets parent for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| panel | [<code>Panel</code>](#Panel) | 

<a name="Panel+SetPos"></a>

### button.SetPos(x, y)
Sets position for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="Panel+SetSize"></a>

### button.SetSize(width, height)
Sets size for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="Panel+SetTall"></a>

### button.SetTall(height)
Sets height for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| height | <code>number</code> | 

<a name="Panel+SetWide"></a>

### button.SetWide(width)
Sets width for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 

<a name="Panel+SetZPos"></a>

### button.SetZPos(z)
Sets z position for the panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| z | <code>number</code> | 

<a name="Panel+SetPostChildPaintEnabled"></a>

### button.SetPostChildPaintEnabled(state)
Enables/disables drawing above children

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

<a name="Panel+SetPanelInteractive"></a>

### button.SetPanelInteractive(state)
Enables/disables interactive state for panel

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| state | <code>boolean</code> | 

