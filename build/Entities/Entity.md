<a name="Entity"></a>

## Entity
This is a script handle class for entities. All entities spawned have a script handle using this or one of its subclasses.  All script handles in-game are accessible from Entities. Entity scripts can use self to access their own script handle. activator and caller variables can be accessed on function calls.

**Kind**: global class  

* [Entity](#Entity)
    * [.__KeyValueFromInt(key, value)](#Entity+__KeyValueFromInt) ⇒ <code>bool</code>
    * [.__KeyValueFromFloat(key, value)](#Entity+__KeyValueFromFloat) ⇒ <code>bool</code>
    * [.__KeyValueFromString(key, value)](#Entity+__KeyValueFromString) ⇒ <code>bool</code>
    * [.__KeyValueFromVector(key, value)](#Entity+__KeyValueFromVector) ⇒ <code>bool</code>
    * [.ApplyAbsVelocityImpulse(impulse)](#Entity+ApplyAbsVelocityImpulse) ⇒ <code>void</code>
    * [.ApplyLocalAngularVelocityImpulse(impulse)](#Entity+ApplyLocalAngularVelocityImpulse) ⇒ <code>void</code>
    * [.AddOutput(output, targetname, func, value, delay)](#Entity+AddOutput) ⇒ <code>void</code>
    * [.ConnectOutput(output, func)](#Entity+ConnectOutput) ⇒ <code>void</code>
    * [.DisconnectOutput(output, func)](#Entity+DisconnectOutput) ⇒ <code>void</code>
    * [.FirstMoveChild()](#Entity+FirstMoveChild) ⇒ <code>handle</code>
    * [.GetAngles()](#Entity+GetAngles) ⇒ <code>QAngle</code>
    * [.GetBaseVelocity()](#Entity+GetBaseVelocity) ⇒ <code>Vector</code>
    * [.GetCenter()](#Entity+GetCenter) ⇒ <code>Vector</code>
    * [.GetClassname()](#Entity+GetClassname) ⇒ <code>string</code>
    * [.GetContext(name)](#Entity+GetContext) ⇒ <code>variable</code>
    * [.GetEntityHandle()](#Entity+GetEntityHandle) ⇒ <code>unknown</code>
    * [.GetEntityIndex()](#Entity+GetEntityIndex) ⇒ <code>int</code>
    * [.GetForwardVector()](#Entity+GetForwardVector) ⇒ <code>Vector</code>
    * [.GetHealth()](#Entity+GetHealth) ⇒ <code>int</code>
    * [.GetLocalAngles()](#Entity+GetLocalAngles) ⇒ <code>QAngle</code>
    * [.GetLocalAngularVelocity()](#Entity+GetLocalAngularVelocity) ⇒ <code>QAngle</code>
    * [.GetLocalOrigin()](#Entity+GetLocalOrigin) ⇒ <code>Vector</code>
    * [.GetLocalVelocity()](#Entity+GetLocalVelocity) ⇒ <code>Vector</code>
    * [.GetMaxHealth()](#Entity+GetMaxHealth) ⇒ <code>int</code>
    * [.GetModelName()](#Entity+GetModelName) ⇒ <code>string</code>
    * [.GetMoveParent()](#Entity+GetMoveParent) ⇒ <code>handle</code>
    * [.GetName()](#Entity+GetName) ⇒ <code>string</code>
    * [.GetOrigin()](#Entity+GetOrigin) ⇒ <code>Vector</code>
    * [.GetOwnerEntity()](#Entity+GetOwnerEntity) ⇒ [<code>Entity</code>](#Entity)
    * [.GetPreTemplateName()](#Entity+GetPreTemplateName) ⇒ <code>string</code>
    * [.GetRootMoveParent()](#Entity+GetRootMoveParent) ⇒ [<code>Entity</code>](#Entity)
    * [.GetScriptId()](#Entity+GetScriptId) ⇒ <code>string</code>
    * [.GetScriptScope()](#Entity+GetScriptScope) ⇒ <code>table</code>
    * [.GetVelocity()](#Entity+GetVelocity) ⇒ <code>Vector</code>
    * [.IsPlayer()](#Entity+IsPlayer) ⇒ <code>bool</code>
    * [.IsValid()](#Entity+IsValid) ⇒ <code>bool</code>
    * [.Destroy()](#Entity+Destroy) ⇒ <code>void</code>
    * [.NextMovePeer()](#Entity+NextMovePeer) ⇒ [<code>Entity</code>](#Entity)
    * [.OverrideFriction(duration, friction)](#Entity+OverrideFriction) ⇒ <code>void</code>
    * [.PrecacheModel(filename)](#Entity+PrecacheModel) ⇒ <code>int</code>
    * [.PrecacheScriptSound(string)](#Entity+PrecacheScriptSound) ⇒ <code>void</code>
    * [.SetAngles(direction)](#Entity+SetAngles) ⇒ <code>void</code>
    * [.SetContext(name, value, duration)](#Entity+SetContext) ⇒ <code>void</code>
    * [.SetContextNum(name, value, duration)](#Entity+SetContextNum) ⇒ <code>void</code>
    * [.SetForwardVector(direction)](#Entity+SetForwardVector) ⇒ <code>void</code>
    * [.SetFriction(friction)](#Entity+SetFriction) ⇒ <code>void</code>
    * [.SetGravity(gravity)](#Entity+SetGravity) ⇒ <code>void</code>
    * [.SetHealth(health)](#Entity+SetHealth) ⇒ <code>void</code>
    * [.SetLocalAngles(direction)](#Entity+SetLocalAngles) ⇒ <code>void</code>
    * [.SetLocalOrigin(position)](#Entity+SetLocalOrigin) ⇒ <code>void</code>
    * [.SetMaxHealth(health)](#Entity+SetMaxHealth) ⇒ <code>void</code>
    * [.SetModel(modelName)](#Entity+SetModel) ⇒ <code>void</code>
    * [.SetOrigin(position)](#Entity+SetOrigin) ⇒ <code>void</code>
    * [.SetVelocity(velocity)](#Entity+SetVelocity) ⇒ <code>void</code>
    * [.TakeDamage(damage, damageType, attacker)](#Entity+TakeDamage) ⇒ <code>void</code>
    * [.TakeDamageEx(inflictor, attacker, weapon, vecDamageForce, vecDamagePosition, damage, damageType)](#Entity+TakeDamageEx) ⇒ <code>void</code>
    * [.ValidateScriptScope()](#Entity+ValidateScriptScope) ⇒ <code>bool</code>

WOOOW
<a name="Entity+__KeyValueFromInt"></a>

### entity.\_\_KeyValueFromInt(key, value) ⇒ <code>bool</code>
Sets an entity keyvalue from an integer. This simply changes the value without executing any code that may be needed for the entity to process the keyvalue, so there may be unintended side effects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>int</code> | 

WOOOW
<a name="Entity+__KeyValueFromFloat"></a>

### entity.\_\_KeyValueFromFloat(key, value) ⇒ <code>bool</code>
Sets an entity keyvalue from a float. This simply changes the value without executing any code that may be needed for the entity to process the keyvalue, so there may be unintended side effects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>float</code> | 

WOOOW
<a name="Entity+__KeyValueFromString"></a>

### entity.\_\_KeyValueFromString(key, value) ⇒ <code>bool</code>
Sets an entity Keyvalue from a string. This simply changes the value without executing any code that may be needed for the entity to process the Keyvalue, so there may be unintended side effects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>string</code> | 

WOOOW
<a name="Entity+__KeyValueFromVector"></a>

### entity.\_\_KeyValueFromVector(key, value) ⇒ <code>bool</code>
Sets an entity Keyvalue from a Vector. This simply changes the value without executing any code that may be needed for the entity to process the Keyvalue, so there may be unintended side effects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>Vector</code> | 

WOOOW
<a name="Entity+ApplyAbsVelocityImpulse"></a>

### entity.ApplyAbsVelocityImpulse(impulse) ⇒ <code>void</code>
Apply a Velocity Impulse as a world space impulse vector.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| impulse | <code>Vector</code> | 

WOOOW
<a name="Entity+ApplyLocalAngularVelocityImpulse"></a>

### entity.ApplyLocalAngularVelocityImpulse(impulse) ⇒ <code>void</code>
Apply an Angular Velocity Impulse in entity local space. The direction of the input vector is the rotation axis, and the length is the magnitude of the impulse.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| impulse | <code>Vector</code> | 

WOOOW
<a name="Entity+AddOutput"></a>

### entity.AddOutput(output, targetname, func, value, delay) ⇒ <code>void</code>
Adds output connection to entity

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| output | <code>string</code> | 
| targetname | <code>string</code> | 
| func | <code>string</code> | 
| value | <code>string</code> | 
| delay | <code>float</code> | 

WOOOW
<a name="Entity+ConnectOutput"></a>

### entity.ConnectOutput(output, func) ⇒ <code>void</code>
Adds an I/O connection that will call the named function when the specified output fires.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| output | <code>string</code> | 
| func | <code>string</code> | 

WOOOW
<a name="Entity+DisconnectOutput"></a>

### entity.DisconnectOutput(output, func) ⇒ <code>void</code>
Removes a connected script function from an I/O event.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| output | <code>string</code> | 
| func | <code>string</code> | 

WOOOW
<a name="Entity+FirstMoveChild"></a>

### entity.FirstMoveChild() ⇒ <code>handle</code>
Returns the first entity parented to this one.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetAngles"></a>

### entity.GetAngles() ⇒ <code>QAngle</code>
Returns the orientation of the entity in the world.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetBaseVelocity"></a>

### entity.GetBaseVelocity() ⇒ <code>Vector</code>
Returns any constant velocity currently being imparted onto the entity. This includes being pushed by effects like trigger_push and players standing on moving geometry like elevators. Should always returns a zero vector if the entity is not affected by any movement effects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetCenter"></a>

### entity.GetCenter() ⇒ <code>Vector</code>
Get world space center of object - absolute coords.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetClassname"></a>

### entity.GetClassname() ⇒ <code>string</code>
Returns the entity class. This includesplayerandinfected.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetContext"></a>

### entity.GetContext(name) ⇒ <code>variable</code>
Looks up a response context and returns it if available. May return string, float, or null (if the context isn't found). Bug: Contexts with only numbers set will be returned as null. This may make it impossible to get a float from this function.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

WOOOW
<a name="Entity+GetEntityHandle"></a>

### entity.GetEntityHandle() ⇒ <code>unknown</code>
Get a C++ EHANDLE reference of the entity. This is an opaque type not directly usable by Squirrel, not a normal script handle. Only necessary for CPointScriptUseTarget funcstion.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetEntityIndex"></a>

### entity.GetEntityIndex() ⇒ <code>int</code>
Returns the entity index. This is the same type of index used in most game events.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetForwardVector"></a>

### entity.GetForwardVector() ⇒ <code>Vector</code>
Get the forward vector of the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetHealth"></a>

### entity.GetHealth() ⇒ <code>int</code>
Returns the current health of the entity (does not include survivor temporary health).

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetLocalAngles"></a>

### entity.GetLocalAngles() ⇒ <code>QAngle</code>
Returns the orientation of the entity relative to it's parent or attachment point.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetLocalAngularVelocity"></a>

### entity.GetLocalAngularVelocity() ⇒ <code>QAngle</code>
Maybe local angvel

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetLocalOrigin"></a>

### entity.GetLocalOrigin() ⇒ <code>Vector</code>
Returns the origin of the entity relative to it's parent or attachment point.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetLocalVelocity"></a>

### entity.GetLocalVelocity() ⇒ <code>Vector</code>
Get Entity relative velocity

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetMaxHealth"></a>

### entity.GetMaxHealth() ⇒ <code>int</code>
Returns the maximum health of the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetModelName"></a>

### entity.GetModelName() ⇒ <code>string</code>
Returns the file name of the model used by the entity (if applicable).

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetMoveParent"></a>

### entity.GetMoveParent() ⇒ <code>handle</code>
If in hierarchy, retrieves the entity's parent

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetName"></a>

### entity.GetName() ⇒ <code>string</code>
Returns the targetname of the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetOrigin"></a>

### entity.GetOrigin() ⇒ <code>Vector</code>
Returns the origin of the entity in the world.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetOwnerEntity"></a>

### entity.GetOwnerEntity() ⇒ [<code>Entity</code>](#Entity)
Get the owner entity, if there is one.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetPreTemplateName"></a>

### entity.GetPreTemplateName() ⇒ <code>string</code>
Get the entity name stripped of template unique decoration.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetRootMoveParent"></a>

### entity.GetRootMoveParent() ⇒ [<code>Entity</code>](#Entity)
If in hierarchy, walks up the hierarchy to find the root parent.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetScriptId"></a>

### entity.GetScriptId() ⇒ <code>string</code>
Returns the name of the entity's think function.  Tip: Retrieve the actual script identifier with NetProps.GetPropString(ent, "m_iszScriptId")

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetScriptScope"></a>

### entity.GetScriptScope() ⇒ <code>table</code>
Retrieve the table storing the Entity Script associated with this entity, null otherwise.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+GetVelocity"></a>

### entity.GetVelocity() ⇒ <code>Vector</code>
Returns a local velocity Vector.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+IsPlayer"></a>

### entity.IsPlayer() ⇒ <code>bool</code>
Does this entity belong to the player class.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+IsValid"></a>

### entity.IsValid() ⇒ <code>bool</code>
Whether the handle still belongs to an entity that's still valid, could become invalid in cases such as the entity, like a function_breakable being destroyed.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+Destroy"></a>

### entity.Destroy() ⇒ <code>void</code>
Removes the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+NextMovePeer"></a>

### entity.NextMovePeer() ⇒ [<code>Entity</code>](#Entity)
Returns the next child of this entity's parent. Used to continue iteration from FirstMoveChild().

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
<a name="Entity+OverrideFriction"></a>

### entity.OverrideFriction(duration, friction) ⇒ <code>void</code>
Takes duration, value for a temporary override

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| duration | <code>float</code> | 
| friction | <code>float</code> | 

WOOOW
<a name="Entity+PrecacheModel"></a>

### entity.PrecacheModel(filename) ⇒ <code>int</code>
Precache a model after the map has loaded and return index of the model.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| filename | <code>string</code> | 

WOOOW
<a name="Entity+PrecacheScriptSound"></a>

### entity.PrecacheScriptSound(string) ⇒ <code>void</code>
To do: Is this for raw files or soundscripts?

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

WOOOW
<a name="Entity+SetAngles"></a>

### entity.SetAngles(direction) ⇒ <code>void</code>
Sets the orientation of the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| direction | <code>QAngle</code> | 

WOOOW
<a name="Entity+SetContext"></a>

### entity.SetContext(name, value, duration) ⇒ <code>void</code>
Stores any key/value pair in this entity's dialog contexts. Value must be a string. Will last for duration (set -1 to mean 'forever').

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 
| duration | <code>float</code> | 

WOOOW
<a name="Entity+SetContextNum"></a>

### entity.SetContextNum(name, value, duration) ⇒ <code>void</code>
Stores any key/value pair in this entity's dialog contexts. Value must be a number (int or float). Will last for duration (set -1 to mean 'forever').

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>float</code> | 
| duration | <code>float</code> | 

WOOOW
<a name="Entity+SetForwardVector"></a>

### entity.SetForwardVector(direction) ⇒ <code>void</code>
Set the orientation of the entity to have this forward vector.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| direction | <code>Vector</code> | 

WOOOW
<a name="Entity+SetFriction"></a>

### entity.SetFriction(friction) ⇒ <code>void</code>
Set PLAYER friction, ignored for objects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| friction | <code>float</code> | 

WOOOW
<a name="Entity+SetGravity"></a>

### entity.SetGravity(gravity) ⇒ <code>void</code>
Set PLAYER gravity, ignored for objects.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| gravity | <code>float</code> | 

WOOOW
<a name="Entity+SetHealth"></a>

### entity.SetHealth(health) ⇒ <code>void</code>
Changes the health value of the entity. Does not check whether to kill players.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| health | <code>int</code> | 

WOOOW
<a name="Entity+SetLocalAngles"></a>

### entity.SetLocalAngles(direction) ⇒ <code>void</code>
Sets the entity orientation relative to it's parent or attachment point.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| direction | <code>QAngle</code> | 

WOOOW
<a name="Entity+SetLocalOrigin"></a>

### entity.SetLocalOrigin(position) ⇒ <code>void</code>
Sets the entity position relative to it's parent or attachment point.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| position | <code>Vector</code> | 

WOOOW
<a name="Entity+SetMaxHealth"></a>

### entity.SetMaxHealth(health) ⇒ <code>void</code>
Changes the maximum health value of the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| health | <code>int</code> | 

WOOOW
<a name="Entity+SetModel"></a>

### entity.SetModel(modelName) ⇒ <code>void</code>
Changes the model of the entity (if applicable).

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| modelName | <code>string</code> | 

WOOOW
<a name="Entity+SetOrigin"></a>

### entity.SetOrigin(position) ⇒ <code>void</code>
Sets the world entity position.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| position | <code>Vector</code> | 

WOOOW
<a name="Entity+SetVelocity"></a>

### entity.SetVelocity(velocity) ⇒ <code>void</code>
Sets the entity velocity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| velocity | <code>Vector</code> | 

WOOOW
<a name="Entity+TakeDamage"></a>

### entity.TakeDamage(damage, damageType, attacker) ⇒ <code>void</code>
Damages the entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| damage | <code>float</code> | 
| damageType | <code>int</code> | 
| attacker | <code>CBaseEntity</code> | 

WOOOW
<a name="Entity+TakeDamageEx"></a>

### entity.TakeDamageEx(inflictor, attacker, weapon, vecDamageForce, vecDamagePosition, damage, damageType) ⇒ <code>void</code>
Damages the entity (extended).

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| inflictor | [<code>Entity</code>](#Entity) | 
| attacker | [<code>Entity</code>](#Entity) | 
| weapon | [<code>Entity</code>](#Entity) | 
| vecDamageForce | <code>Vector</code> | 
| vecDamagePosition | <code>Vector</code> | 
| damage | <code>float</code> | 
| damageType | <code>int</code> | 

WOOOW
<a name="Entity+ValidateScriptScope"></a>

### entity.ValidateScriptScope() ⇒ <code>bool</code>
Ensures an entity has a script scope, if it doesn't have one then one is created. Returns true if created successfully.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
WOOOW
