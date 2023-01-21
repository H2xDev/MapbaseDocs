# Mapbase Docs
The sources of docs is actually `javascript` files with empty classes with methods
that documented via [JSDoc](https://jsdoc.app/) format. After then `jsdoc-to-markdown` builds these
files into md files to `build` folder.  

## Build
You can read the current version here: [API](build/)

## Development
### Requirements
- NodeJS

### Get started
1. Install all dependencies:
```
npm install
```
2. Begin documenting
```javascript 
/**
 * Some VScript class
 * @hideconstructor
 */
class SomeVScriptClass {
    /**
     * Description of the method
     * @param { typeOfParam } param1
     * @param { typeOfParam } param2
     *
     * @returns { returnType }
     * 
     * @example
     * local someExampleVariable = SomeVScriptClass.SomeMethod(1, 2);
     * printl(someExampleVariable) // Some return value
     */
    SomeMethod(param1, param2) {}
}
```

3. Build docs
```
npm run build
```

4. Profit!
