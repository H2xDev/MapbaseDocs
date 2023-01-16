<a name="Entity"></a>

## Entity
This is a script handle class for entities. All entities spawned have a script handle using this or one of its subclasses.  All script handles in-game are accessible from Entities. Entity scripts can use self to access their own script handle. activator and caller variables can be accessed on function calls.

**Kind**: global class  

* [Entity](#Entity)
    * [.__KeyValueFromInt(key, value)](#Entity+__KeyValueFromInt) ⇒ <code>boolean</code>
    * [.__KeyValueFromFloat(key, value)](#Entity+__KeyValueFromFloat) ⇒ <code>boolean</code>
    * [.__KeyValueFromString(key, value)](#Entity+__KeyValueFromString) ⇒ <code>boolean</code>
    * [.__KeyValueFromVector(key, value)](#Entity+__KeyValueFromVector) ⇒ <code>boolean</code>
    * [.AddOutput(event, targetname, func, value, delay)](#Entity+AddOutput)
    * [.ConnectOutput(output, functionName)](#Entity+ConnectOutput)
    * [.DisconnectOutput(output, functionName)](#Entity+DisconnectOutput)
    * [.Destroy()](#Entity+Destroy)
    * [.EmitSound(soundName)](#Entity+EmitSound)
    * [.entindex()](#Entity+entindex) ⇒ <code>number</code>
    * [.EyePosition()](#Entity+EyePosition) ⇒ <code>Vector</code>
    * [.FirstMoveChild()](#Entity+FirstMoveChild) ⇒ [<code>Entity</code>](#Entity)
    * [.GetAngles()](#Entity+GetAngles) ⇒ <code>Vector</code>
    * [.GetScriptScope()](#Entity+GetScriptScope) ⇒ <code>table</code>
    * [.ValidateScriptScope()](#Entity+ValidateScriptScope) ⇒ <code>boolean</code>

<a name="Entity+__KeyValueFromInt"></a>

### entity.\_\_KeyValueFromInt(key, value) ⇒ <code>boolean</code>
Sets entity keyvalue from an integer.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>number</code> | 

<a name="Entity+__KeyValueFromFloat"></a>

### entity.\_\_KeyValueFromFloat(key, value) ⇒ <code>boolean</code>
Sets entity keyvalue from an float.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>number</code> | 

<a name="Entity+__KeyValueFromString"></a>

### entity.\_\_KeyValueFromString(key, value) ⇒ <code>boolean</code>
Sets entity keyvalue from an string

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>string</code> | 

<a name="Entity+__KeyValueFromVector"></a>

### entity.\_\_KeyValueFromVector(key, value) ⇒ <code>boolean</code>
Sets entity keyvalue from an vector

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>Vector</code> | 

<a name="Entity+AddOutput"></a>

### entity.AddOutput(event, targetname, func, value, delay)
Adds output to entity

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| targetname | <code>string</code> | 
| func | <code>string</code> | 
| value | <code>string</code> \| <code>number</code> | 
| delay | <code>number</code> | 

<a name="Entity+ConnectOutput"></a>

### entity.ConnectOutput(output, functionName)
Adds an I/O connection that will call the named function when the specified output fires.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| output | <code>string</code> | 
| functionName | <code>string</code> | 

<a name="Entity+DisconnectOutput"></a>

### entity.DisconnectOutput(output, functionName)
Removes a connected script function from an I/O event.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| output | <code>string</code> | 
| functionName | <code>string</code> | 

<a name="Entity+Destroy"></a>

### entity.Destroy()
Kills the entity

**Kind**: instance method of [<code>Entity</code>](#Entity)  
<a name="Entity+EmitSound"></a>

### entity.EmitSound(soundName)
Plays a sound from this entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type |
| --- | --- |
| soundName | <code>string</code> | 

<a name="Entity+entindex"></a>

### entity.entindex() ⇒ <code>number</code>
Returns the entity index

**Kind**: instance method of [<code>Entity</code>](#Entity)  
<a name="Entity+EyePosition"></a>

### entity.EyePosition() ⇒ <code>Vector</code>
Get vector to the eye position - absolute coordinates.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
<a name="Entity+FirstMoveChild"></a>

### entity.FirstMoveChild() ⇒ [<code>Entity</code>](#Entity)
If in hierarchy, get the first move child.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
<a name="Entity+GetAngles"></a>

### entity.GetAngles() ⇒ <code>Vector</code>
Get the entity local angles (pitch, yaw, roll) as a Vector object.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
<a name="Entity+GetScriptScope"></a>

### entity.GetScriptScope() ⇒ <code>table</code>
Retrieve the table storing the Entity Script data associated with this entity.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
**Example**  
```js
if (ent.ValidateScriptScope()) {   ent.GetScriptScope().Precahce <- function () {       // Precache something...   }}
```
<a name="Entity+ValidateScriptScope"></a>

### entity.ValidateScriptScope() ⇒ <code>boolean</code>
Ensure that an entity's script scope has been created.

**Kind**: instance method of [<code>Entity</code>](#Entity)  
**Example**  
```js
if (ent.ValidateScriptScope()) {   ent.GetScriptScope().Precahce <- function () {       // Precache something...   }}
```
