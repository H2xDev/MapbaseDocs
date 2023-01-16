/**
 * This is a script handle class for entities. All entities spawned have a script handle using this or one of its subclasses.  
 * All script handles in-game are accessible from Entities. Entity scripts can use self to access their own script handle. activator and caller variables can be accessed on function calls.
 *
 * @hideconstructor
 */
export class Entity {
	/**
	* Sets an entity keyvalue from an integer. This simply changes the value without executing any code that may be needed for the entity to process the keyvalue, so there may be unintended side effects.
	* 
	* @param { string } key
	* @param { int } value 
	* 
	* @returns { bool }
	*/
	__KeyValueFromInt(key, value) {}
	
	
	/**
	* Sets an entity keyvalue from a float. This simply changes the value without executing any code that may be needed for the entity to process the keyvalue, so there may be unintended side effects.
	* 
	* @param { string } key
	* @param { float } value 
	* 
	* @returns { bool }
	*/
	__KeyValueFromFloat(key, value) {}
	
	
	/**
	* Sets an entity Keyvalue from a string. This simply changes the value without executing any code that may be needed for the entity to process the Keyvalue, so there may be unintended side effects.
	* 
	* @param { string } key
	* @param { string } value 
	* 
	* @returns { bool }
	*/
	__KeyValueFromString(key, value) {}
	
	
	/**
	* Sets an entity Keyvalue from a Vector. This simply changes the value without executing any code that may be needed for the entity to process the Keyvalue, so there may be unintended side effects.
	* 
	* @param { string } key
	* @param { Vector } value 
	* 
	* @returns { bool }
	*/
	__KeyValueFromVector(key, value) {}
	
	
	/**
	* Apply a Velocity Impulse as a world space impulse vector.
	* 
	* @param { Vector } impulse 
	* 
	* @returns { void }
	*/
	ApplyAbsVelocityImpulse(impulse) {}
	
	
	/**
	* Apply an Angular Velocity Impulse in entity local space. The direction of the input vector is the rotation axis, and the length is the magnitude of the impulse.
	* 
	* @param { Vector } impulse 
	* 
	* @returns { void }
	*/
	ApplyLocalAngularVelocityImpulse(impulse) {}

	/**
	 * Adds output connection to entity
	 *
	 * @param { string } output
	 * @param { string } targetname
	 * @param { string } func
	 * @param { string } value
	 * @param { float } delay
	 *
	 * @returns { void }
	 */
	AddOutput(output, targetname, func, value, delay) {}
	
	/**
	 * Adds an I/O connection that will call the named function when the specified output fires.
	 * 
	 * @param { string } output
	 * @param { string } func
	 * 
	 * @returns { void }
	 */
	ConnectOutput(output, func) {}
	
	
	/**
	* Removes a connected script function from an I/O event.
	* 
	* @param { string } output
	* @param { string } func 
	* 
	* @returns { void }
	*/
	DisconnectOutput(output, func) {}
	
	
	/**
	* Returns the first entity parented to this one.
	* 
	* @returns { handle }
	*/
	FirstMoveChild() {}
	
	
	/**
	* Returns the orientation of the entity in the world.
	* 
	* @returns { QAngle }
	*/
	GetAngles() {}
	
	
	/**
	* Returns any constant velocity currently being imparted onto the entity. This includes being pushed by effects like trigger_push and players standing on moving geometry like elevators. Should always returns a zero vector if the entity is not affected by any movement effects.
	* 
	* @returns { Vector }
	*/
	GetBaseVelocity() {}
	
	
	/**
	* Get world space center of object - absolute coords.
	* 
	* @returns { Vector }
	*/
	GetCenter() {}
	
	
	/**
	* Returns the entity class. This includesplayerandinfected.
	* 
	* @returns { string }
	*/
	GetClassname() {}
	
	
	/**
	* Looks up a response context and returns it if available. May return string, float, or null (if the context isn't found). Bug: Contexts with only numbers set will be returned as null. This may make it impossible to get a float from this function.
	* 
	* @param { string } name 
	* 
	* @returns { variable }
	*/
	GetContext(name) {}
	
	
	/**
	* Get a C++ EHANDLE reference of the entity. This is an opaque type not directly usable by Squirrel, not a normal script handle. Only necessary for CPointScriptUseTarget funcstion.
	* 
	* @returns { unknown }
	*/
	GetEntityHandle() {}
	
	
	/**
	* Returns the entity index. This is the same type of index used in most game events.
	* 
	* @returns { int }
	*/
	GetEntityIndex() {}
	
	
	/**
	* Get the forward vector of the entity.
	* 
	* @returns { Vector }
	*/
	GetForwardVector() {}
	
	
	/**
	* Returns the current health of the entity (does not include survivor temporary health).
	* 
	* 
	* 
	* @returns { int }
	*/
	GetHealth() {}
	
	
	/**
	* Returns the orientation of the entity relative to it's parent or attachment point.
	* 
	* 
	* 
	* @returns { QAngle }
	*/
	GetLocalAngles() {}
	
	
	/**
	* Maybe local angvel
	* 
	* 
	* 
	* @returns { QAngle }
	*/
	GetLocalAngularVelocity() {}
	
	
	/**
	* Returns the origin of the entity relative to it's parent or attachment point.
	* 
	* 
	* 
	* @returns { Vector }
	*/
	GetLocalOrigin() {}
	
	
	/**
	* Get Entity relative velocity
	* 
	* 
	* 
	* @returns { Vector }
	*/
	GetLocalVelocity() {}
	
	
	/**
	* Returns the maximum health of the entity.
	* 
	* 
	* 
	* @returns { int }
	*/
	GetMaxHealth() {}
	
	
	/**
	* Returns the file name of the model used by the entity (if applicable).
	* 
	* 
	* 
	* @returns { string }
	*/
	GetModelName() {}
	
	
	/**
	* If in hierarchy, retrieves the entity's parent
	* 
	* 
	* 
	* @returns { handle }
	*/
	GetMoveParent() {}
	
	
	/**
	* Returns the targetname of the entity.
	* 
	* @returns { string }
	*/
	GetName() {}
	
	
	/**
	* Returns the origin of the entity in the world.
	* 
	* @returns { Vector }
	*/
	GetOrigin() {}
	
	
	/**
	* Get the owner entity, if there is one.
	* 
	* @returns { Entity }
	*/
	GetOwnerEntity() {}
	
	
	/**
	* Get the entity name stripped of template unique decoration.
	* 
	* @returns { string }
	*/
	GetPreTemplateName() {}
	
	
	/**
	* If in hierarchy, walks up the hierarchy to find the root parent.
	* 
	* @returns { Entity }
	*/
	GetRootMoveParent() {}
	
	
	/**
	* Returns the name of the entity's think function.  Tip: Retrieve the actual script identifier with NetProps.GetPropString(ent, "m_iszScriptId")
	* 
	* @returns { string }
	*/
	GetScriptId() {}
	
	
	/**
	* Retrieve the table storing the Entity Script associated with this entity, null otherwise.
	* 
	* @returns { table }
	*/
	GetScriptScope() {}
	
	
	/**
	* Returns a local velocity Vector.
	* 
	* @returns { Vector }
	*/
	GetVelocity() {}
	
	
	/**
	* Does this entity belong to the player class.
	* 
	* @returns { bool }
	*/
	IsPlayer() {}
	
	
	/**
	* Whether the handle still belongs to an entity that's still valid, could become invalid in cases such as the entity, like a function_breakable being destroyed.
	* 
	* @returns { bool }
	*/
	IsValid() {}
	
	
	/**
	* Removes the entity.
	* 
	* @returns { void }
	*/
	Destroy() {}
	
	
	/**
	* Returns the next child of this entity's parent. Used to continue iteration from FirstMoveChild().
	* 
	* @returns { Entity }
	*/
	NextMovePeer() {}
	
	
	/**
	* Takes duration, value for a temporary override
	* 
	* @param { float } duration
	* @param { float } friction 
	* 
	* @returns { void }
	*/
	OverrideFriction(duration, friction) {}
	
	
	/**
	* Precache a model after the map has loaded and return index of the model.
	* 
	* @param { string } filename 
	* 
	* @returns { int }
	*/
	PrecacheModel(filename) {}
	
	
	/**
	* To do: Is this for raw files or soundscripts?
	* 
	* @param { string } string 
	* 
	* @returns { void }
	*/
	PrecacheScriptSound(string) {}
	
	
	/**
	* Sets the orientation of the entity.
	* 
	* @param { QAngle } direction 
	* 
	* @returns { void }
	*/
	SetAngles(direction) {}
	
	
	/**
	* Stores any key/value pair in this entity's dialog contexts. Value must be a string. Will last for duration (set -1 to mean 'forever').
	* 
	* @param { string } name
	* @param { string } value
	* @param { float } duration 
	* 
	* @returns { void }
	*/
	SetContext(name, value, duration) {}
	
	
	/**
	* Stores any key/value pair in this entity's dialog contexts. Value must be a number (int or float). Will last for duration (set -1 to mean 'forever').
	* 
	* @param { string } name
	* @param { float } value
	* @param { float } duration 
	* 
	* @returns { void }
	*/
	SetContextNum(name, value, duration) {}
	
	
	/**
	* Set the orientation of the entity to have this forward vector.
	* 
	* @param { Vector } direction 
	* 
	* @returns { void }
	*/
	SetForwardVector(direction) {}
	
	
	/**
	* Set PLAYER friction, ignored for objects.
	* 
	* @param { float } friction 
	* 
	* @returns { void }
	*/
	SetFriction(friction) {}
	
	
	/**
	* Set PLAYER gravity, ignored for objects.
	* 
	* @param { float } gravity 
	* 
	* @returns { void }
	*/
	SetGravity(gravity) {}
	
	
	/**
	* Changes the health value of the entity. Does not check whether to kill players.
	* 
	* @param { int } health 
	* 
	* @returns { void }
	*/
	SetHealth(health) {}
	
	
	/**
	* Sets the entity orientation relative to it's parent or attachment point.
	* 
	* @param { QAngle } direction 
	* 
	* @returns { void }
	*/
	SetLocalAngles(direction) {}
	
	
	/**
	* Sets the entity position relative to it's parent or attachment point.
	* 
	* @param { Vector } position 
	* 
	* @returns { void }
	*/
	SetLocalOrigin(position) {}
	
	
	/**
	* Changes the maximum health value of the entity.
	* 
	* @param { int } health 
	* 
	* @returns { void }
	*/
	SetMaxHealth(health) {}
	
	
	/**
	* Changes the model of the entity (if applicable).
	* 
	* @param { string } modelName 
	* 
	* @returns { void }
	*/
	SetModel(modelName) {}
	
	
	/**
	* Sets the world entity position.
	* 
	* @param { Vector } position 
	* 
	* @returns { void }
	*/
	SetOrigin(position) {}
	
	
	/**
	* Sets the entity velocity.
	* 
	* @param { Vector } velocity 
	* 
	* @returns { void }
	*/
	SetVelocity(velocity) {}
	
	
	/**
	* Damages the entity.
	* 
	* @param { float } damage
	* @param { int } damageType
	* @param { CBaseEntity } attacker 
	* 
	* @returns { void }
	*/
	TakeDamage(damage, damageType, attacker) {}
	
	
	/**
	* Damages the entity (extended).
	* 
	* @param { Entity } inflictor
	* @param { Entity } attacker
	* @param { Entity } weapon
	* @param { Vector } vecDamageForce
	* @param { Vector } vecDamagePosition
	* @param { float } damage
	* @param { int } damageType 
	* 
	* @returns { void }
	*/
	TakeDamageEx(inflictor, attacker, weapon, vecDamageForce, vecDamagePosition, damage, damageType) {}
	
	
	/**
	* Ensures an entity has a script scope, if it doesn't have one then one is created. Returns true if created successfully.
	* 
	* @returns { bool }
	*/
	ValidateScriptScope() {}

}
