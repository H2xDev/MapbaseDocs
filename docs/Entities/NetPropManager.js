/**
 * Allows reading and updating the network properties of an entity.  
 * If the entity has multiple netprops with the same name, the data table name can be prepended with a dot to specify which one to use (e.g. "m_itTimer.m_timestamp").
 */

export class NetPropManager {
   /**
    * Returns the size of an netprop array, or -1.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { int }
    */
    GetPropArraySize(entity, propertyName) {}
   
   
   /**
    * Reads an EHANDLE-valued netprop (21 bit integer). Returns the script handle of the entity.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { Entity }
    */
    GetPropEntity(entity, propertyName) {}
   
   
   /**
    * Reads an EHANDLE-valued netprop (21 bit integer) from an array. Returns the script handle of the entity.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } arrayElement 
    * 
    * @returns { Entity }
    */
    GetPropEntityArray(entity, propertyName, arrayElement) {}
   
   
   /**
    * Reads a float-valued netprop.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { float }
    */
    GetPropFloat(entity, propertyName) {}
   
   
   /**
    * Reads a float-valued netprop from an array.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } arrayElement 
    * 
    * @returns { float }
    */
    GetPropFloatArray(entity, propertyName, arrayElement) {}
   
   
   /**
    * Reads an integer-valued netprop.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { int }
    */
    GetPropInt(entity, propertyName) {}
   
   
   /**
    * Reads an integer-valued netprop from an array.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } arrayElement 
    * 
    * @returns { int }
    */
    GetPropIntArray(entity, propertyName, arrayElement) {}
   
   
   /**
    * Reads an string-valued netprop.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { string }
    */
    GetPropString(entity, propertyName) {}
   
   
   /**
    * Reads an string-valued netprop from an array.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } arrayElement 
    * 
    * @returns { string }
    */
    GetPropStringArray(entity, propertyName, arrayElement) {}
   
   
   /**
    * Returns the name of the netprop type as a string.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { string }
    */
    GetPropType(entity, propertyName) {}
   
   
   /**
    * Reads a 3D vector-valued netprop. To do:  Does it work for other dimensions too?
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { Vector }
    */
    GetPropVector(entity, propertyName) {}
   
   
   /**
    * Reads a 3D vector-valued netprop from an array.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } arrayElement 
    * 
    * @returns { Vector }
    */
    GetPropVectorArray(entity, propertyName, arrayElement) {}
   
   
   /**
    * Checks if a netprop exists.
    * 
    * @param { Entity } entity
    * @param { string } propertyName 
    * 
    * @returns { bool }
    */
    HasProp(entity, propertyName) {}
   
   
   /**
    * Sets an EHANDLE-valued netprop (21 bit integer) to reference the specified entity.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { Entity } value 
    * 
    * @returns { void }
    */
    SetPropEntity(entity, propertyName, value) {}
   
   
   /**
    * Sets an EHANDLE-valued netprop (21 bit integer) from an array to reference the specified entity.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { Entity } value
    * @param { int } arrayElement 
    * 
    * @returns { void }
    */
    SetPropEntityArray(entity, propertyName, value, arrayElement) {}
   
   
   /**
    * Sets a netprop to the specified float.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { float } value 
    * 
    * @returns { void }
    */
    SetPropFloat(entity, propertyName, value) {}
   
   
   /**
    * Sets a netprop from an array to the specified float.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { float } value
    * @param { int } arrayElement 
    * 
    * @returns { void }
    */
    SetPropFloatArray(entity, propertyName, value, arrayElement) {}
   
   
   /**
    * Sets a netprop to the specified integer.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } value 
    * 
    * @returns { void }
    */
    SetPropInt(entity, propertyName, value) {}
   
   
   /**
    * Sets a netprop from an array to the specified integer.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { int } value
    * @param { int } arrayElement 
    * 
    * @returns { void }
    */
    SetPropInt(entity, propertyName, value, arrayElement) {}
   
   
   /**
    * Sets a netprop to the specified string.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { string } value 
    * 
    * @returns { void }
    */
    SetPropString(entity, propertyName, value) {}
   
   
   /**
    * Sets a netprop from an array to the specified string.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { string } value
    * @param { int } arrayElement 
    * 
    * @returns { void }
    */
    SetPropStringArray(entity, propertyName, value, arrayElement) {}
   
   
   /**
    * Sets a netprop to the specified vector.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { Vector } value 
    * 
    * @returns { void }
    */
    SetPropVector(entity, propertyName, value) {}
   
   
   /**
    * Sets a netprop from an array to the specified vector.
    * 
    * @param { Entity } entity
    * @param { string } propertyName
    * @param { Vector } value
    * @param { int } arrayElement 
    * 
    * @returns { void }
    */
    SetPropVectorArray(entity, propertyName, value, arrayElement) {}
}
