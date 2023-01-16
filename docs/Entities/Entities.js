/**
 * An interface to find and iterate over the script handles for the entities in play.  
 * To iterate over a set of entities, pass null to the previous argument in the appropriate method to start an iteration, or reference to a previously found entity to continue a search. Example:
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
