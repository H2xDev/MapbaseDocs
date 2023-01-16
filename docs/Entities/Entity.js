/**
 * This is a script handle class for entities. All entities spawned have a script handle using this or one of its subclasses.  
 * All script handles in-game are accessible from Entities. Entity scripts can use self to access their own script handle. activator and caller variables can be accessed on function calls.
 *
 * @hideconstructor
 */
export class Entity {
  /**
   * Sets entity keyvalue from an integer.
   *
   * @param { string } key
   * @param { number } value
   *
   * @returns { boolean }
   */
  __KeyValueFromInt(key, value) {}

  /**
   * Sets entity keyvalue from an float.
   * 
   * @param { string } key
   * @param { number } value
   *
   * @returns { boolean }
   */
  __KeyValueFromFloat(key, value) {}

  /**
   * Sets entity keyvalue from an string
   * 
   * @param { string } key
   * @param { string } value
   *
   * @returns { boolean }
   */
  __KeyValueFromString(key, value) {}

  /**
   * Sets entity keyvalue from an vector
   * 
   * @param { string } key
   * @param { Vector } value
   *
   * @returns { boolean }
   */
  __KeyValueFromVector(key, value) {}

  /**
   * Adds output to entity
   *
   * @param { string } event
   * @param { string } targetname
   * @param { string } func
   * @param { string | number } value
   * @param { number } delay
   */
  AddOutput(event, targetname, func, value, delay) {}

  /**
   * Adds an I/O connection that will call the named function when the specified output fires.
   *
   * @param { string } output
   * @param { string } functionName
   */
  ConnectOutput(output, functionName) {}

  /**
   * Removes a connected script function from an I/O event.
   *
   * @param { string } output
   * @param { string } functionName
   */
  DisconnectOutput(output, functionName) {}


  /**
   * Kills the entity
   */
  Destroy() {}

  /**
   * Plays a sound from this entity.
   *
   * @param { string } soundName
   */
  EmitSound(soundName) {}

  /**
   * Returns the entity index
   *
   * @returns { number }
   */
  entindex() {}
  
  /**
   * Get vector to the eye position - absolute coordinates.
   *
   * @returns { Vector }
   */
  EyePosition() {}


  /**
   * If in hierarchy, get the first move child.
   *
   * @returns { Entity }
   */
  FirstMoveChild() {}

  /**
   * Get the entity local angles (pitch, yaw, roll) as a Vector object.
   * 
   * @returns { Vector }
   */
  GetAngles() {}

  GetAngularVelocity() {}

  GetBoundingMaxs() {}
  GetBoundingMaxsOriented() {}

  GetBoundingMins() {}
  GetBoundingMinsOriented() {}

  GetCenter() {}
  GetClassname() {}
  GetForwardVector() {}
  GetHealth() {}
  GetLeftVector() {}
  GetMaxHealth() {}
  GetModelKeyValues() {}
  GetModelName() {}
  GetMoveParent() {}
  GetMoveParent() {}
  GetScriptId() {}

  /**
   * Retrieve the table storing the Entity Script data associated with this entity.
   *
   * @returns { table }
   *
   * @example
   * if (ent.ValidateScriptScope()) {
   *    ent.GetScriptScope().Precahce <- function () {
   *        // Precache something...
   *    }
   * }
   */
  GetScriptScope() {}

  GetSoundDuration(soundName, actorModel) {}
  GetTeam() {}
  GetUpVector() {}
  GetVelocity() {}

  IsValid() {}
  NextMovePeer() {}
  PrecacheModel(modelName) {}
  PrecacheScriptSound(soundName) {}
  PrecacheSoundScript(soundScript) {}

  /**
   * Ensure that an entity's script scope has been created.
   *
   * @returns { boolean }
   *
   * @example
   * if (ent.ValidateScriptScope()) {
   *    ent.GetScriptScope().Precahce <- function () {
   *        // Precache something...
   *    }
   * }
   */
  ValidateScriptScope() {}
}
