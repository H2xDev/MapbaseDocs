<a name="BaseAnimating"></a>

## BaseAnimating
Script handle class for animating entities such as props.

**Kind**: global class  

* [BaseAnimating](#BaseAnimating)
    * [.GetAttachmentAngles(id)](#BaseAnimating+GetAttachmentAngles) ⇒ <code>Vector</code>
    * [.GetAttachmentOrigin(id)](#BaseAnimating+GetAttachmentOrigin) ⇒ <code>Vector</code>
    * [.GetObjectScaleLevel()](#BaseAnimating+GetObjectScaleLevel) ⇒ <code>int</code>
    * [.IsSequenceFinished()](#BaseAnimating+IsSequenceFinished) ⇒ <code>bool</code>
    * [.LookupAttachment(string)](#BaseAnimating+LookupAttachment) ⇒ <code>int</code>
    * [.SetBodygroup(group, index)](#BaseAnimating+SetBodygroup) ⇒ <code>void</code>

  
---
<a name="BaseAnimating+GetAttachmentAngles"></a>

### baseAnimating.GetAttachmentAngles(id) ⇒ <code>Vector</code>
Get the attachment id's angles as a p,y,r vector.

**Kind**: instance method of [<code>BaseAnimating</code>](#BaseAnimating)  

| Param | Type |
| --- | --- |
| id | <code>int</code> | 

  
---
<a name="BaseAnimating+GetAttachmentOrigin"></a>

### baseAnimating.GetAttachmentOrigin(id) ⇒ <code>Vector</code>
Get the attachment id's origin vector

**Kind**: instance method of [<code>BaseAnimating</code>](#BaseAnimating)  

| Param | Type |
| --- | --- |
| id | <code>int</code> | 

  
---
<a name="BaseAnimating+GetObjectScaleLevel"></a>

### baseAnimating.GetObjectScaleLevel() ⇒ <code>int</code>
The scale size of the entity

**Kind**: instance method of [<code>BaseAnimating</code>](#BaseAnimating)  
  
---
<a name="BaseAnimating+IsSequenceFinished"></a>

### baseAnimating.IsSequenceFinished() ⇒ <code>bool</code>
Ask whether the main sequence is done playing

**Kind**: instance method of [<code>BaseAnimating</code>](#BaseAnimating)  
  
---
<a name="BaseAnimating+LookupAttachment"></a>

### baseAnimating.LookupAttachment(string) ⇒ <code>int</code>
Get the ID for the named attachment.

**Kind**: instance method of [<code>BaseAnimating</code>](#BaseAnimating)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

  
---
<a name="BaseAnimating+SetBodygroup"></a>

### baseAnimating.SetBodygroup(group, index) ⇒ <code>void</code>
Sets a bodygroup. Group is the index for the desired group, and index is the desired part to use.

**Kind**: instance method of [<code>BaseAnimating</code>](#BaseAnimating)  

| Param | Type |
| --- | --- |
| group | <code>int</code> | 
| index | <code>int</code> | 

  
---
