/**
 * Entity class for triggers, so entities like trigger_once or script_trigger_hurt belong to this.
 *
 * @hideconstructor
 */
class Trigger {
   /**
    * Disable the trigger from thinking. Identical to theDisableinput.
    * 
    * 
    * 
    * @returns { void }
    */
    Disable () {}
   
   
   /**
    * Enable the trigger from thinking. Identical to theEnableinput.
    * 
    * 
    * 
    * @returns { void }
    */
    Enable () {}
   
   
   /**
    * Checks whether the passed entity is touching the trigger.
    * 
    * @param { Entity } entity 
    * 
    * @returns { bool }
    */
    IsTouching (entity) {}
}
