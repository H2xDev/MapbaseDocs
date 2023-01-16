/**
 * Global lib that helps get entities you need
 *
 * @hideconstructor
 */
export class Entities {
  /**
   * Returns entity by name
   *
   * @param { Entity | null } startEntity
   * @param { string } targetName
   *
   * @returns { Entity | null }
   *
   * @example 
   *
   * local ent = null
   * while (ent = Entities.FindByName(ent, "someEntity")) {
   *    // Do something with entities with the same targetname
   * }
   */
  FindByName(startEntity, targetName) {}

  /**
   * Returns entity by className 
   *
   * @param { Entity | null } startEntity
   * @param { string } className ex prop_static
   *
   * @returns { Entity }
   *
   * @example 
   *
   * local ent = null
   * while (ent = Entities.FindByClassname(ent, "someEntity")) {
   *    // Do something with entities with the same targetname
   * }
   */
  FindByClassname(startEntity, className) {}
}
