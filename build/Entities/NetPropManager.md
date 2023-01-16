<a name="NetPropManager"></a>

## NetPropManager
Allows reading and updating the network properties of an entity.  If the entity has multiple netprops with the same name, the data table name can be prepended with a dot to specify which one to use (e.g. "m_itTimer.m_timestamp").

**Kind**: global class  

* [NetPropManager](#NetPropManager)
    * [.GetPropArraySize(entity, propertyName)](#NetPropManager+GetPropArraySize) ⇒ <code>int</code>
    * [.GetPropEntity(entity, propertyName)](#NetPropManager+GetPropEntity) ⇒ [<code>Entity</code>](#Entity)
    * [.GetPropEntityArray(entity, propertyName, arrayElement)](#NetPropManager+GetPropEntityArray) ⇒ [<code>Entity</code>](#Entity)
    * [.GetPropFloat(entity, propertyName)](#NetPropManager+GetPropFloat) ⇒ <code>float</code>
    * [.GetPropFloatArray(entity, propertyName, arrayElement)](#NetPropManager+GetPropFloatArray) ⇒ <code>float</code>
    * [.GetPropInt(entity, propertyName)](#NetPropManager+GetPropInt) ⇒ <code>int</code>
    * [.GetPropIntArray(entity, propertyName, arrayElement)](#NetPropManager+GetPropIntArray) ⇒ <code>int</code>
    * [.GetPropString(entity, propertyName)](#NetPropManager+GetPropString) ⇒ <code>string</code>
    * [.GetPropStringArray(entity, propertyName, arrayElement)](#NetPropManager+GetPropStringArray) ⇒ <code>string</code>
    * [.GetPropType(entity, propertyName)](#NetPropManager+GetPropType) ⇒ <code>string</code>
    * [.GetPropVector(entity, propertyName)](#NetPropManager+GetPropVector) ⇒ <code>Vector</code>
    * [.GetPropVectorArray(entity, propertyName, arrayElement)](#NetPropManager+GetPropVectorArray) ⇒ <code>Vector</code>
    * [.HasProp(entity, propertyName)](#NetPropManager+HasProp) ⇒ <code>bool</code>
    * [.SetPropEntity(entity, propertyName, value)](#NetPropManager+SetPropEntity) ⇒ <code>void</code>
    * [.SetPropEntityArray(entity, propertyName, value, arrayElement)](#NetPropManager+SetPropEntityArray) ⇒ <code>void</code>
    * [.SetPropFloat(entity, propertyName, value)](#NetPropManager+SetPropFloat) ⇒ <code>void</code>
    * [.SetPropFloatArray(entity, propertyName, value, arrayElement)](#NetPropManager+SetPropFloatArray) ⇒ <code>void</code>
    * [.SetPropInt(entity, propertyName, value)](#NetPropManager+SetPropInt) ⇒ <code>void</code>
    * [.SetPropInt(entity, propertyName, value, arrayElement)](#NetPropManager+SetPropInt) ⇒ <code>void</code>
    * [.SetPropString(entity, propertyName, value)](#NetPropManager+SetPropString) ⇒ <code>void</code>
    * [.SetPropStringArray(entity, propertyName, value, arrayElement)](#NetPropManager+SetPropStringArray) ⇒ <code>void</code>
    * [.SetPropVector(entity, propertyName, value)](#NetPropManager+SetPropVector) ⇒ <code>void</code>
    * [.SetPropVectorArray(entity, propertyName, value, arrayElement)](#NetPropManager+SetPropVectorArray) ⇒ <code>void</code>

  
---
<a name="NetPropManager+GetPropArraySize"></a>

### netPropManager.GetPropArraySize(entity, propertyName) ⇒ <code>int</code>
Returns the size of an netprop array, or -1.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropEntity"></a>

### netPropManager.GetPropEntity(entity, propertyName) ⇒ [<code>Entity</code>](#Entity)
Reads an EHANDLE-valued netprop (21 bit integer). Returns the script handle of the entity.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropEntityArray"></a>

### netPropManager.GetPropEntityArray(entity, propertyName, arrayElement) ⇒ [<code>Entity</code>](#Entity)
Reads an EHANDLE-valued netprop (21 bit integer) from an array. Returns the script handle of the entity.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+GetPropFloat"></a>

### netPropManager.GetPropFloat(entity, propertyName) ⇒ <code>float</code>
Reads a float-valued netprop.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropFloatArray"></a>

### netPropManager.GetPropFloatArray(entity, propertyName, arrayElement) ⇒ <code>float</code>
Reads a float-valued netprop from an array.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+GetPropInt"></a>

### netPropManager.GetPropInt(entity, propertyName) ⇒ <code>int</code>
Reads an integer-valued netprop.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropIntArray"></a>

### netPropManager.GetPropIntArray(entity, propertyName, arrayElement) ⇒ <code>int</code>
Reads an integer-valued netprop from an array.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+GetPropString"></a>

### netPropManager.GetPropString(entity, propertyName) ⇒ <code>string</code>
Reads an string-valued netprop.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropStringArray"></a>

### netPropManager.GetPropStringArray(entity, propertyName, arrayElement) ⇒ <code>string</code>
Reads an string-valued netprop from an array.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+GetPropType"></a>

### netPropManager.GetPropType(entity, propertyName) ⇒ <code>string</code>
Returns the name of the netprop type as a string.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropVector"></a>

### netPropManager.GetPropVector(entity, propertyName) ⇒ <code>Vector</code>
Reads a 3D vector-valued netprop. To do:  Does it work for other dimensions too?

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+GetPropVectorArray"></a>

### netPropManager.GetPropVectorArray(entity, propertyName, arrayElement) ⇒ <code>Vector</code>
Reads a 3D vector-valued netprop from an array.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+HasProp"></a>

### netPropManager.HasProp(entity, propertyName) ⇒ <code>bool</code>
Checks if a netprop exists.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 

  
---
<a name="NetPropManager+SetPropEntity"></a>

### netPropManager.SetPropEntity(entity, propertyName, value) ⇒ <code>void</code>
Sets an EHANDLE-valued netprop (21 bit integer) to reference the specified entity.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | [<code>Entity</code>](#Entity) | 

  
---
<a name="NetPropManager+SetPropEntityArray"></a>

### netPropManager.SetPropEntityArray(entity, propertyName, value, arrayElement) ⇒ <code>void</code>
Sets an EHANDLE-valued netprop (21 bit integer) from an array to reference the specified entity.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | [<code>Entity</code>](#Entity) | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+SetPropFloat"></a>

### netPropManager.SetPropFloat(entity, propertyName, value) ⇒ <code>void</code>
Sets a netprop to the specified float.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>float</code> | 

  
---
<a name="NetPropManager+SetPropFloatArray"></a>

### netPropManager.SetPropFloatArray(entity, propertyName, value, arrayElement) ⇒ <code>void</code>
Sets a netprop from an array to the specified float.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>float</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+SetPropInt"></a>

### netPropManager.SetPropInt(entity, propertyName, value) ⇒ <code>void</code>
Sets a netprop to the specified integer.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>int</code> | 

  
---
<a name="NetPropManager+SetPropInt"></a>

### netPropManager.SetPropInt(entity, propertyName, value, arrayElement) ⇒ <code>void</code>
Sets a netprop from an array to the specified integer.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>int</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+SetPropString"></a>

### netPropManager.SetPropString(entity, propertyName, value) ⇒ <code>void</code>
Sets a netprop to the specified string.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>string</code> | 

  
---
<a name="NetPropManager+SetPropStringArray"></a>

### netPropManager.SetPropStringArray(entity, propertyName, value, arrayElement) ⇒ <code>void</code>
Sets a netprop from an array to the specified string.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>string</code> | 
| arrayElement | <code>int</code> | 

  
---
<a name="NetPropManager+SetPropVector"></a>

### netPropManager.SetPropVector(entity, propertyName, value) ⇒ <code>void</code>
Sets a netprop to the specified vector.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>Vector</code> | 

  
---
<a name="NetPropManager+SetPropVectorArray"></a>

### netPropManager.SetPropVectorArray(entity, propertyName, value, arrayElement) ⇒ <code>void</code>
Sets a netprop from an array to the specified vector.

**Kind**: instance method of [<code>NetPropManager</code>](#NetPropManager)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 
| propertyName | <code>string</code> | 
| value | <code>Vector</code> | 
| arrayElement | <code>int</code> | 

  
---
