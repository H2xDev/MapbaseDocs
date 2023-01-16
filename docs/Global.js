/**
 * Global methods in vscript
 */

class Global {

/**
 * Create a prop. The class should be a prop_physics style entity.
 * 
 * @param { string } classname
 * @param { Vector } origin
 * @param { string } modelname
 * @param { int } activity 
 * 
 * @returns { handle }
 */
 CreateProp(classname, origin, modelname, activity) {}


/**
 * Create a scene entity to play the specified scene.
 * 
 * @param { string } string 
 * 
 * @returns { handle }
 */
 CreateSceneEntity(string) {}

/**
 * Execute the script file "scripts/vscripts/" + filename in the scope of scope. The extension .nut can be omitted.
 * 
 * @param { string } filename
 * @param { table } scope 
 * 
 * @returns { bool }
 */
 DoIncludeScript(filename, scope) {}


/**
 * Execute the script file "scripts/vscripts/" + filename in the scope of scope, this by default. The extension .nut can be omitted.
 * 
 * @param { string } filename
 * @param { table } scope 
 * 
 * @returns { bool }
 */
 IncludeScript(filename, scope) {}

/**
 * Generate an entity I/O event. Value, delay and activator are optional.
 * 
 * @param { string } target
 * @param { string } action
 * @param { string } value
 * @param { number } delay
 * @param { Entity } activator 
 * 
 * @returns { function }
 */
 EntFire(target, action, value, delay, activator) {}

/**
 * Generate an entity I/O event. First parameter is an entity instance.
 * 
 * @param { Entity | string } target
 * @param { string } action
 * @param { string } value
 * @param { float } delay
 * @param { Entity | string } activator
 * @param { Entity | string } caller 
 * 
 * @returns { void }
 */
 EntFireByHandle(target, action, value, delay, activator, caller) {}

/**
 * Get the time spent on the server in the last frame.
 * 
 * @returns { float }
 */
 FrameTime() {}


/**
 * Get the name of the map.
 * 
 * @returns { string }
 */
 GetMapName() {}

/**
 * Generate a random floating point number within a range, inclusive
 * 
 * @param { float } min
 * @param { float } max 
 * 
 * @returns { float }
 */
 RandomFloat(min, max) {}


/**
 * Generate a random integer within a range, inclusive
 * 
 * @param { int } min
 * @param { int } max 
 * 
 * @returns { int }
 */
 RandomInt(min, max) {}

/**
 * Send a string to the console as a command.
 * 
 * @param { string } command 
 * 
 * @returns { void }
 */
 SendToConsole(command) {}

/**
 * Print a hud message on all clients
 * 
 * @param { string } string 
 * 
 * @returns { void }
 */
 ShowMessage(string) {}

/**
 * Get the current server time
 * 
 * @returns { float }
 */
 Time() {}


/**
 * Given 2 points and an entity to ignore, return fraction along line that hits world or models. Bug:  Ignores all entities, hits only the world
 * 
 * @param { Vector } start
 * @param { Vector } end
 * @param { Entity } ignored_ent 
 * 
 * @returns { float }
 */
 TraceLine(start, end, ignored_ent) {}


/**
 * Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table. Equivalent to DoUniqueString(suffix).
 * 
 * @param { string } suffix 
 * 
 * @returns { string }
 */
 UniqueString(suffix) {}
}
