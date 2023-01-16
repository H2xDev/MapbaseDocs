import {Label} from "./Label.js";

/**
 * Default VGUI button
 */
export class Button extends Label {
  /**
   *
   */
  ForceDepressed() {}

  /**
   *
   * @returns { boolean }
   */
  HasFocus() {}

  /**
   *
   * @returns { boolean }
   */
  IsArmed() {}

  /**
   *
   * @param { boolean } state
   */
  SetArmed(state) {}

  /**
   *
   * @param { string } sndFile
   */
  SetArmedSound(sndFile) {}

  /**
   *
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a
   * @param { number } i
   * @param { number } j
   * @param { number } k
   * @param { number } l
   */
  SetArmedColor(r, g, b, a, i, j, k, l) {}

  /**
   *
   * @returns { boolean }
   */
  IsDepressed() {}

  /**
   *
   * @returns { boolean }
   */
  IsMouseClickEnabled() {}

  /**
   *
   * @returns { boolean }
   */
  SetMouseClickEnabled(state) {}

  /**
   *
   * @returns { boolean }
   */
  IsSelected() {}

  /**
   *
   * @param { boolean } state
   */
  SetSelected(state) {}

  /**
   *
   */
  SetButtonActivationType(type) {}

  /**
   *
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a
   * @param { number } i
   * @param { number } j
   * @param { number } k
   * @param { number } l
   */
  SetDefaultColor(r, g, b, a, i, j, k, l) {}

  /**
   *
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a
   * @param { number } i
   * @param { number } j
   * @param { number } k
   * @param { number } l
   */
  SetDepressedColor(r, g, b, a, i, j, k, l) {}

  /**
   *
   * @param { string } sndFile
   */
  SetDepressedSound(sndFile) {}

  /**
   *
   * @param { string } sndFile
   */
  SetReleasedSound(sndFile) {}

  /**
   *
   * @param { boolean } state
   */
  SetSelected(state) {}

  /**
   *
   * @param { number } r
   * @param { number } g
   * @param { number } b
   * @param { number } a
   * @param { number } i
   * @param { number } j
   * @param { number } k
   * @param { number } l
   */
  SetSelectedColor(r, g, b, a, i, j, k, l) {}
}
