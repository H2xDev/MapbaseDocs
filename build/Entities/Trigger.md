<a name="Trigger"></a>

## Trigger
Entity class for triggers, so entities like trigger_once or script_trigger_hurt belong to this.

**Kind**: global class  

* [Trigger](#Trigger)
    * [.Disable()](#Trigger+Disable) ⇒ <code>void</code>
    * [.Enable()](#Trigger+Enable) ⇒ <code>void</code>
    * [.IsTouching(entity)](#Trigger+IsTouching) ⇒ <code>bool</code>

---
<a name="Trigger+Disable"></a>

### trigger.Disable() ⇒ <code>void</code>
Disable the trigger from thinking. Identical to theDisableinput.

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
---
<a name="Trigger+Enable"></a>

### trigger.Enable() ⇒ <code>void</code>
Enable the trigger from thinking. Identical to theEnableinput.

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
---
<a name="Trigger+IsTouching"></a>

### trigger.IsTouching(entity) ⇒ <code>bool</code>
Checks whether the passed entity is touching the trigger.

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  

| Param | Type |
| --- | --- |
| entity | [<code>Entity</code>](#Entity) | 

---
