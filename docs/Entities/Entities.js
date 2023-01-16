/**
 * An interface to find and iterate over the script handles for the entities in play.  
 * To iterate over a set of entities, pass null to the previous argument in the appropriate method to start an iteration, or reference to a previously found entity to continue a search. Example:
 *
 * @hideconstructor
 */
export class Entities {
  /**
   * @param { string } className
   *
   * @returns { Entity }
   *
   * @example 
   * local ent = Entities.CreateByClassname("math_counter");
   * ent.__KeyValueFromInt("max", 1);
   */
  CreateByClassname(className) {}



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


  /**
   * Find entities by class name nearest to a point.
   *
   * @param { string } className
   * @param { Vector } location
   * @param { number } radiuse
   *
   * @returns { Entity }
   */
  FindByClassnameNearest(className, location, radius) {}

  /**
   * Find entities by class name within a radius.
   * Pass 'null' to start an iteration, or reference to a previously found entity to continue a search  
   *
   * @param { Entity | null } startEnt
   * @param { string } className
   * @param { Vector } location
   * @param { number } radius
   *
   * @returns { Entity }
   */
  FindByClassnameWithin(startEnt, className, location, radius) {}

  /**
   * Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
   *
   * @param { Entity } startEnt
   * @param { string } modelName
   *
   * @returns { Entity }
   */
  FindByModel(startEnt, modelName) {}

  /**
   * Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
   *
   * @param { Entity } startEnt
   * @param { string } targetName
   *
   * @returns { Entity }
   */
  FindByName(startEnt, targetName) {}

  /**
   * Find entities by name nearest to a point.
   *
   * @param { string } className
   * @param { Vector } location
   * @param { number } radiuse
   *
   * @returns { Entity }
   */
  FindByNameNearest(className, location, radius) {}

  /**
   * Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
   *
   * @param { Entity | null } startEnt
   * @param { string } className
   * @param { Vector } location
   * @param { number } radius
   *
   * @returns { Entity }
   */
  FindByNameWithin(startEnt, className, location, radius) {}

  /**
   * Find entities with a specific `target` keyvalue. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
   *
   * @param { Entity | null } startEnt
   * @param { string } targetName
   */
  FindByTarget(startEnt, targetName) {}

  /**
   * Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
   *
   * @param { string } className
   * @param { Vector } location
   * @param { number } radiuse
   *
   * @returns { Entity }
   */
  FindInSphere(startEnt, location, radius) {}

  /**
   * Begin an iteration over the list of entities. Equivalent to Next(null)
   *
   * @returns { Entity }
   */
  First() {}

  /**
   * Continue an iteration over the list of entities, providing reference to a previously found entity.
   *
   * @param { Entity } fromEntity
   *
   * @returns { Entity }
   */
  Next(fromEntity) {}
}
