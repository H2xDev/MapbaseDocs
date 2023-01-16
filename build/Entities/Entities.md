<a name="Entities"></a>

## Entities
An interface to find and iterate over the script handles for the entities in play.  

**Kind**: global class  

* [Entities](#Entities)
    * [.FindByName(startEntity, targetName)](#Entities+FindByName) ⇒ [<code>Entity</code>](#Entity) \| <code>null</code>
    * [.FindByClassname(startEntity, className)](#Entities+FindByClassname) ⇒ [<code>Entity</code>](#Entity)

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
local ent = null
```
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
local ent = null
```