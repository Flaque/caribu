/*
Data model that represents a page that contains a html and css file.
 */

import 'electron' // native electron module
import jetpack from 'fs-jetpack'

/**
 * Creates specified file at `here`.
 *
 * If file exists, no effect. If not, creates empty file.
 *
 * @param {jetpack} here | is the cwd
 * @param {String} name
 */
function createFile(here, name) {
  here.file(name) //Write empty file if does not exist
}

export default class {
  /**
   * Creates an html and css file under name.
   *
   * @param {String} here | is the cwd
   * @param {String} name - name of new page
   */
  constructor(here, name) {
    this.name = name
    this.here = here
    this.htmlName = name + '.html'
    this.cssName = name + '.css'
    createFile(here, this.htmlName)  // create files if they don't exist
    createFile(here, this.cssName)
  }

  /**
   * Writes specified strings to the page's html and css files.
   *
   * @param {String} html
   * @param {String} css
   */
  writeData(html, css) {

    // Write html and css to file
    this.here.writeAsync(this.htmlName, html)
    this.here.writeAsync(this.cssName, css)
  }

  /**
    * This function reads each file asynchronously and returns a promise
    * with the data past in as the parameters.
    *
    * # Usage
    * ```
    * getData().then( (data) => {
    *   console.log(data.html)
    *   console.log(data.css)
    * }
    * ```
    *
    * # Process of the function
    * 1. Ask jetpack to read the html file.
    * 2. Then, ask jetpack to read the css file.
    * 3. Then, ask jetpack to return an object containing the html/css
    * 4. This will cause the function to collapse, so the inner most object
    *    will return a promise, which will return a promise to the outer, and so
    *    on.
    */
   getData() {
     return this.here.readAsync(this.htmlName) //Reads the html
       .then( (html) => {
         //Now read the css and return an object that includes the css and
         //html
         return this.here.readAsync(this.cssName)
           .then( (css) => {
             return {
               html : html,
               css  : css
             }
           })
       })
   }
}
