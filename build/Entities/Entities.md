<a name="Entities"></a>

## Entities
An interface to find and iterate over the script handles for the entities in play.  To iterate over a set of entities, pass null to the previous argument in the appropriate method to start an iteration, or reference to a previously found entity to continue a search. Example:

**Kind**: global class  

* [Entities](#Entities)
    * [.CreateByClassname(className)](#Entities+CreateByClassname) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByName(startEntity, targetName)](#Entities+FindByName) ⇒ [<code>Entity</code>](#Entity) \| <code>null</code>
    * [.FindByClassname(startEntity, className)](#Entities+FindByClassname) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByClassnameNearest(className, location, radiuse)](#Entities+FindByClassnameNearest) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByClassnameWithin(startEnt, className, location, radius)](#Entities+FindByClassnameWithin) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByModel(startEnt, modelName)](#Entities+FindByModel) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByName(startEnt, targetName)](#Entities+FindByName) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByNameNearest(className, location, radiuse)](#Entities+FindByNameNearest) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByNameWithin(startEnt, className, location, radius)](#Entities+FindByNameWithin) ⇒ [<code>Entity</code>](#Entity)
    * [.FindByTarget(startEnt, targetName)](#Entities+FindByTarget)
    * [.FindInSphere(className, location, radiuse)](#Entities+FindInSphere) ⇒ [<code>Entity</code>](#Entity)
    * [.First()](#Entities+First) ⇒ [<code>Entity</code>](#Entity)
    * [.Next(fromEntity)](#Entities+Next) ⇒ [<code>Entity</code>](#Entity)

<a name="Entities+CreateByClassname"></a>

### entities.CreateByClassname(className) ⇒ [<code>Entity</code>](#Entity)
**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

**Example**  
```js
local ent = Entities.CreateByClassname("math_counter");ent.__KeyValueFromInt("max", 1);
```
---
<a name="Entities+FindByName"></a>

### entities.FindByName(startEntity, targetName) ⇒ [<code>Entity</code>](#Entity) \| <code>null</code>
Returns entity by name

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| startEntity | [<code>Entity</code>](#Entity) \| <code>null</code> | 
| targetName | <code>string</code> | 

**Example**  
```js
local ent = nullwhile (ent = Entities.FindByName(ent, "someEntity")) {   // Do something with entities with the same targetname}
```
---
<a name="Entities+FindByClassname"></a>

### entities.FindByClassname(startEntity, className) ⇒ [<code>Entity</code>](#Entity)
Returns entity by className

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type | Description |
| --- | --- | --- |
| startEntity | [<code>Entity</code>](#Entity) \| <code>null</code> |  |
| className | <code>string</code> | ex prop_static |

**Example**  
```js
local ent = nullwhile (ent = Entities.FindByClassname(ent, "someEntity")) {   // Do something with entities with the same targetname}
```
---
<a name="Entities+FindByClassnameNearest"></a>

### entities.FindByClassnameNearest(className, location, radiuse) ⇒ [<code>Entity</code>](#Entity)
Find entities by class name nearest to a point.

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 
| location | <code>Vector</code> | 
| radiuse | <code>number</code> | 

---
<a name="Entities+FindByClassnameWithin"></a>

### entities.FindByClassnameWithin(startEnt, className, location, radius) ⇒ [<code>Entity</code>](#Entity)
Find entities by class name within a radius.Pass 'null' to start an iteration, or reference to a previously found entity to continue a search

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| startEnt | [<code>Entity</code>](#Entity) \| <code>null</code> | 
| className | <code>string</code> | 
| location | <code>Vector</code> | 
| radius | <code>number</code> | 

---
<a name="Entities+FindByModel"></a>

### entities.FindByModel(startEnt, modelName) ⇒ [<code>Entity</code>](#Entity)
Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| startEnt | [<code>Entity</code>](#Entity) | 
| modelName | <code>string</code> | 

---
<a name="Entities+FindByName"></a>

### entities.FindByName(startEnt, targetName) ⇒ [<code>Entity</code>](#Entity)
Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| startEnt | [<code>Entity</code>](#Entity) | 
| targetName | <code>string</code> | 

---
<a name="Entities+FindByNameNearest"></a>

### entities.FindByNameNearest(className, location, radiuse) ⇒ [<code>Entity</code>](#Entity)
Find entities by name nearest to a point.

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 
| location | <code>Vector</code> | 
| radiuse | <code>number</code> | 

---
<a name="Entities+FindByNameWithin"></a>

### entities.FindByNameWithin(startEnt, className, location, radius) ⇒ [<code>Entity</code>](#Entity)
Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| startEnt | [<code>Entity</code>](#Entity) \| <code>null</code> | 
| className | <code>string</code> | 
| location | <code>Vector</code> | 
| radius | <code>number</code> | 

---
<a name="Entities+FindByTarget"></a>

### entities.FindByTarget(startEnt, targetName)
Find entities with a specific `target` keyvalue. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| startEnt | [<code>Entity</code>](#Entity) \| <code>null</code> | 
| targetName | <code>string</code> | 

---
<a name="Entities+FindInSphere"></a>

### entities.FindInSphere(className, location, radiuse) ⇒ [<code>Entity</code>](#Entity)
Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 
| location | <code>Vector</code> | 
| radiuse | <code>number</code> | 

---
<a name="Entities+First"></a>

### entities.First() ⇒ [<code>Entity</code>](#Entity)
Begin an iteration over the list of entities. Equivalent to Next(null)

**Kind**: instance method of [<code>Entities</code>](#Entities)  
---
<a name="Entities+Next"></a>

### entities.Next(fromEntity) ⇒ [<code>Entity</code>](#Entity)
Continue an iteration over the list of entities, providing reference to a previously found entity.

**Kind**: instance method of [<code>Entities</code>](#Entities)  

| Param | Type |
| --- | --- |
| fromEntity | [<code>Entity</code>](#Entity) | 

---
---
