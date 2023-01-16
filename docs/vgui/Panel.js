/**
 * Base element of VGUI system
 */
export class Panel {
  /**
   * @param { number } sign
   */
  AddTickSignal(sign) {}

  /**
   * Destroys panel and its children
   */
  Destroy() {}

  /**
   * Draws box in Panel  
   * Enable painting before use
   *
   * @param { number } x
   * @param { number } y
   * @param { number } width
   * @param { number } height
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a - normalized alpha (between 0 and 1)
   * @param { boolean } hollow
   *
   * @example 
   * local panel = vgui.CreatePanel("Panel", vgui.GetRootPanel(), "SomePanel");
   * panel.SetPaintEnabled(true);
   * panel.SetCallback("Paint", function() {
   *   panel.DrawBox(0, 0, panel.GetWide(), panel.GetTall(), 0, 0, 0, 1, false);
   * });
   */
  DrawBox(x, y, width, height, r, g, b, a, hollow = false) {}

  /**
   * Draws box in Panel  
   * Enable painting before use
   *
   * @param { number } x
   * @param { number } y
   * @param { number } width
   * @param { number } height
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a - normalized alpha (between 0 and 1)
   * @param { number } alpha0
   * @param { number } alpha1
   * @param { boolean } horizontal
   * @param { boolean } hollow
   *
   */
  DrawBoxFade(x, y, width, height, r, g, b, a, alpha0, alpha1, horizontal, hollow) {}

  /**
   * Returns panel's alpha
   * @returns { number }
   */
  GetAlpha() {}

  /**
   * Returns panel's children  
   * NOTE: I'm not sure that it's correct
   * @param {?} handle
   *
   * @returns { void }
   */
  GetChildren(handle) {}

  /**
   * Returns panel's name
   *
   * @returns { string }
   */
  GetName() {}

  /**
   * Returns panel's height
   *
   * @return { number}
   */
  GetTall() {}

  /**
   * Returns panel's width
   *
   * @return { number}
   */
  GetWide() {}

  /**
   * Returns panel's parent
   *
   * @return { Panel }
   */
  GetParent() {}

  /**
   * Returns panel's x position
   *
   * @return { number }
   */
  GetXPos() {}

  /**
   * Returns panel's y position
   *
   * @return { number }
   */
  GetYPos() {}

  /**
   * Returns panel's z position
   *
   * @return { number }
   */
  GetZPos() {}

  /**
   * Returns panel's focus state
   *
   * @return { boolean }
   */
  HasFocus() {}

  /**
   * Returns is cursor over the panel
   *
   * @return { boolean }
   */
  IsCursorOver() {}

  /**
   * Returns panel's enable state
   *
   * @return { boolean }
   */
  IsEnabled() {}

  /**
   * Returns panel's visibility state
   *
   * @return { boolean }
   */
  IsVisible() {}

  /**
   * Sets panel's visibility state
   *
   * @param { boolean } state 
   *
   */
  SetVisible(state) {}

  /**
   * Returns panel is within coordinates
   * 
   * @param { number } x
   * @param { number } y
   *
   * @return { boolean }
   */
  IsWithin(x, y) {}

  /**
   * Enables mouse and keyboard events for panel
   */
  MakePopup() {}

  /**
   * Render panel
   * NOTE: I'm not sure that this described properly
   */
  MakeReadyForUse() {}

  /**
   * Moves panel above other panels
   */
  MoveToFront() {}

  /**
   * Enables focus state of the panel
   */
  RequestFocus() {}

  /**
   * Sets alpha for panel
   * 
   * @param { number } alpha value between 0 and 1
   */
  SetAlpha(alpha) {}


  /**
   * Sets background color for panel
   *
   * @param { number } r red (0 - 255)
   * @param { number } g green (0 - 255)
   * @param { number } b blue (0 - 255)
   * @param { number } a alpha (0 - 255)
   */
  SetBgColor(r, g, b, a) {}

  /**
   * Sets text color for panel
   *
   * @param { number } r red (0 - 255)
   * @param { number } g green (0 - 255)
   * @param { number } b blue (0 - 255)
   * @param { number } a alpha (0 - 255)
   */
  SetFgColor(r, g, b, a) {}

  /**
   * Sets callback for panel
   *
   * @param { string } event
   * @param { function } handler
   */
  SetCallback(event, handler) {}

  /**
   * Sets cursor sign
   *
   * @param { Cursor } signIndex
   */
  SetCursor(signIndex) {}

  /**
   * Sets enable state for the panel
   *
   * @param { boolean } state
   */
  SetEnabled(state) {}

  /**
   * Turns on/off keyboard events for panel
   *
   * @param { boolean } state
   */
  SetKeyBoardInputEnabled(state) {}

  /**
   * Turns on/off mouse events for panel
   *
   * @param { boolean } state
   */
  SetMouseInputEnabled(state) {}

  /**
   * Enables/disables painting for panel's background
   *
   * @param { boolean } state
   */
  SetPaintBackgroundEnabled(state) {}

  /**
   * Sets paint type for panel's background
   *
   * @param { PaintType } type
   */
  SetPaintBackgroundType(type) {}

  /**
   * Enables/disables border painting
   *
   * @param { boolean } state
   */
  SetPaintBorderEnabled(state) {}

  /**
   * Enables/disables painting
   *
   * @param { boolean } state
   */
  SetPaintEnabled(state) {}

  /**
   * Sets parent for the panel
   *
   * @param { Panel } panel
   */
  SetParent(panel) {}

  /**
   * Sets position for the panel
   *
   * @param { number } x
   * @param { number } y
   */
  SetPos(x, y) {}

  /**
   * Sets size for the panel
   *
   * @param { number } width
   * @param { number } height
   */
  SetSize(width, height) {}

  /**
   * Sets height for the panel
   *
   * @param { number } height
   */
  SetTall(height) {}

  /**
   * Sets width for the panel
   *
   * @param { number } width
   */
  SetWide(width) {}

  /**
   * Sets z position for the panel
   *
   * @param { number } z
   */
  SetZPos(z) {}

  /**
   * Enables/disables drawing above children
   *
   * @param { boolean } state
   */
  SetPostChildPaintEnabled(state) {}

  /**
   * Enables/disables interactive state for panel
   *
   * @param { boolean } state
   */
  SetPanelInteractive(state) {}
}
