/**
 * Script handle class for animating entities such as props.
 *
 * @hideconstructor
 */
export class BaseAnimating {
  
  
  /**
   * Get the attachment id's angles as a p,y,r vector.
   * 
   * @param { int } id 
   * 
   * @returns { Vector }
   */
   GetAttachmentAngles(id) {}
  
  
  /**
   * Get the attachment id's origin vector
   * 
   * @param { int } id 
   * 
   * @returns { Vector }
   */
   GetAttachmentOrigin(id) {}
  
  
  /**
   * The scale size of the entity
   * 
   * 
   * 
   * @returns { int }
   */
   GetObjectScaleLevel() {}
  
  
  /**
   * Ask whether the main sequence is done playing
   * 
   * 
   * 
   * @returns { bool }
   */
   IsSequenceFinished() {}
  
  
  /**
   * Get the ID for the named attachment.
   * 
   * @param { string } string 
   * 
   * @returns { int }
   */
   LookupAttachment(string) {}
  
  
  /**
   * Sets a bodygroup. Group is the index for the desired group, and index is the desired part to use.
   * 
   * @param { int } group
   * @param { int } index 
   * 
   * @returns { void }
   */
   SetBodygroup(group, index) {}

}
