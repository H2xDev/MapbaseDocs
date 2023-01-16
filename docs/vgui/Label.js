import {Panel} from "./Panel.js"

/**
 * Panel that can have text content
 */
export class Label extends Panel {
  /**
   *
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a
   * @param { number } i
   */
  AddColorChange(r, g, b, a, i) {}

  /**
   * 
   */
  ClearColorChangeStream() {}

  /**
   * 
   * @param { boolean } state
   */
  SetAllCaps(state) {}

  /**
   * 
   * @param { Panel } handle
   */
  SetAssociatedControl(handle) {}

  /**
   * 
   * @param { boolean } state
   */
  SetCenterWrap(state) {}

  /**
   * 
   * @param { Alignment } state
   */
  SetContentAlignment(align) {}

  /**
   *
   * @param { string } text 
   */
  SetText(text) {}

  /**
   *
   * @param { number } fontIndex that you can get via `surface.GetFont`
   */
  SetFont(fontIndex) {}

  /**
   * 
   * @param { number } x
   * @param { number } y
   */
  SetTextInset(x, y) {}

  /**
   * 
   * @param { boolean } state
   */
  SetWrap(state) {}

  /**
   * Resizes the panel to content
   */
  SizeToContents() {}
}
