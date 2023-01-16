<a name="Global"></a>

## Global
Global methods in vscript

**Kind**: global class  

* [Global](#Global)
    * [.CreateProp(classname, origin, modelname, activity)](#Global+CreateProp) ⇒ <code>handle</code>
    * [.CreateSceneEntity(string)](#Global+CreateSceneEntity) ⇒ <code>handle</code>
    * [.DoIncludeScript(filename, scope)](#Global+DoIncludeScript) ⇒ <code>bool</code>
    * [.IncludeScript(filename, scope)](#Global+IncludeScript) ⇒ <code>bool</code>
    * [.EntFire(target, action, value, delay, activator)](#Global+EntFire) ⇒ <code>function</code>
    * [.EntFireByHandle(target, action, value, delay, activator, caller)](#Global+EntFireByHandle) ⇒ <code>void</code>
    * [.FrameTime()](#Global+FrameTime) ⇒ <code>float</code>
    * [.GetMapName()](#Global+GetMapName) ⇒ <code>string</code>
    * [.RandomFloat(min, max)](#Global+RandomFloat) ⇒ <code>float</code>
    * [.RandomInt(min, max)](#Global+RandomInt) ⇒ <code>int</code>
    * [.SendToConsole(command)](#Global+SendToConsole) ⇒ <code>void</code>
    * [.ShowMessage(string)](#Global+ShowMessage) ⇒ <code>void</code>
    * [.Time()](#Global+Time) ⇒ <code>float</code>
    * [.TraceLine(start, end, ignored_ent)](#Global+TraceLine) ⇒ <code>float</code>
    * [.UniqueString(suffix)](#Global+UniqueString) ⇒ <code>string</code>

  
---
<a name="Global+CreateProp"></a>

### global.CreateProp(classname, origin, modelname, activity) ⇒ <code>handle</code>
Create a prop. The class should be a prop_physics style entity.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| classname | <code>string</code> | 
| origin | <code>Vector</code> | 
| modelname | <code>string</code> | 
| activity | <code>int</code> | 

  
---
<a name="Global+CreateSceneEntity"></a>

### global.CreateSceneEntity(string) ⇒ <code>handle</code>
Create a scene entity to play the specified scene.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

  
---
<a name="Global+DoIncludeScript"></a>

### global.DoIncludeScript(filename, scope) ⇒ <code>bool</code>
Execute the script file "scripts/vscripts/" + filename in the scope of scope. The extension .nut can be omitted.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| filename | <code>string</code> | 
| scope | <code>table</code> | 

  
---
<a name="Global+IncludeScript"></a>

### global.IncludeScript(filename, scope) ⇒ <code>bool</code>
Execute the script file "scripts/vscripts/" + filename in the scope of scope, this by default. The extension .nut can be omitted.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| filename | <code>string</code> | 
| scope | <code>table</code> | 

  
---
<a name="Global+EntFire"></a>

### global.EntFire(target, action, value, delay, activator) ⇒ <code>function</code>
Generate an entity I/O event. Value, delay and activator are optional.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| target | <code>string</code> | 
| action | <code>string</code> | 
| value | <code>string</code> | 
| delay | <code>number</code> | 
| activator | [<code>Entity</code>](#Entity) | 

  
---
<a name="Global+EntFireByHandle"></a>

### global.EntFireByHandle(target, action, value, delay, activator, caller) ⇒ <code>void</code>
Generate an entity I/O event. First parameter is an entity instance.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| target | [<code>Entity</code>](#Entity) \| <code>string</code> | 
| action | <code>string</code> | 
| value | <code>string</code> | 
| delay | <code>float</code> | 
| activator | [<code>Entity</code>](#Entity) \| <code>string</code> | 
| caller | [<code>Entity</code>](#Entity) \| <code>string</code> | 

  
---
<a name="Global+FrameTime"></a>

### global.FrameTime() ⇒ <code>float</code>
Get the time spent on the server in the last frame.

**Kind**: instance method of [<code>Global</code>](#Global)  
  
---
<a name="Global+GetMapName"></a>

### global.GetMapName() ⇒ <code>string</code>
Get the name of the map.

**Kind**: instance method of [<code>Global</code>](#Global)  
  
---
<a name="Global+RandomFloat"></a>

### global.RandomFloat(min, max) ⇒ <code>float</code>
Generate a random floating point number within a range, inclusive

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| min | <code>float</code> | 
| max | <code>float</code> | 

  
---
<a name="Global+RandomInt"></a>

### global.RandomInt(min, max) ⇒ <code>int</code>
Generate a random integer within a range, inclusive

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| min | <code>int</code> | 
| max | <code>int</code> | 

  
---
<a name="Global+SendToConsole"></a>

### global.SendToConsole(command) ⇒ <code>void</code>
Send a string to the console as a command.

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| command | <code>string</code> | 

  
---
<a name="Global+ShowMessage"></a>

### global.ShowMessage(string) ⇒ <code>void</code>
Print a hud message on all clients

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

  
---
<a name="Global+Time"></a>

### global.Time() ⇒ <code>float</code>
Get the current server time

**Kind**: instance method of [<code>Global</code>](#Global)  
  
---
<a name="Global+TraceLine"></a>

### global.TraceLine(start, end, ignored_ent) ⇒ <code>float</code>
Given 2 points and an entity to ignore, return fraction along line that hits world or models. Bug:  Ignores all entities, hits only the world

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| start | <code>Vector</code> | 
| end | <code>Vector</code> | 
| ignored_ent | [<code>Entity</code>](#Entity) | 

  
---
<a name="Global+UniqueString"></a>

### global.UniqueString(suffix) ⇒ <code>string</code>
Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table. Equivalent to DoUniqueString(suffix).

**Kind**: instance method of [<code>Global</code>](#Global)  

| Param | Type |
| --- | --- |
| suffix | <code>string</code> | 

  
---
