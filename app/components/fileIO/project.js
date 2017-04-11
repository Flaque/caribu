/*
Data model that represents a project that contains many html and css files.
 */

import 'electron' // native electron module
import jetpack from 'fs-jetpack'
import Page from './page'

/**
 * Returns list of all pages in cs.
 *
 * @param {jetpack} here | is the cwd
 */
function findPages(here) {
  var files = here.find({ matching: ['*.html'] });
  return files.map(function(d) { return d.replace('.html', ''); });
}

/**
 * Imports all pre-existing pages in cwd, returns dict of pages.
 *
 * @param {jetpack} here | is the cwd
 */
function importPages(here) {
  var pageNames = findPages(here);
  var pages = []
  pageNames.forEach(function(name) {
    pages[name] = new Page(here, name)
  });
  return pages
}

export default class {
  /**
   * Creates the file structure `<filepath>/<name>` and
   * returns a Project object.
   *
   * @param filepath - Where we want this project to be saved
   * @param name - name of the new folder to be created
   */
  constructor(filepath, name) {
    this.filepath = filepath
    this.name = name
    this.here = jetpack.cwd(filepath).dir(name)
    this.pages = importPages(this.here)
  }

  /*
  Creates a new page in the current folder
   */
  createPage(name) {
     var page = new Page(this.here, name)
     this.pages[name] = page
     return page
  }

  /*
  Deletes the specified page.
   */
  deletePage(name) {

    // First delete this page's html and css files.
    var htmlPath = this.pages[name].htmlName
    var cssPath = this.pages[name].cssName
    this.here.remove(htmlPath)
    this.here.remove(cssPath)

    // Remove the page from the list of pages for this project.
    delete this.pages[name]
  }

  /**
  * Rename the page at oldName to newName
   */
  renamePage(oldName, newName) {

    // extract old page variable
    var page = this.pages[oldName]

    // rename files
    this.here.rename(page.htmlName, newName + '.html')
    this.here.rename(page.cssName, newName + '.css')

    // Remove old page var from dict and add new one.
    delete this.pages[oldName]
    this.createPage(newName)
  }

  /**
   * Rename this project to something else.
   */
  renameProject(newName) {

    // First rename this directory
    jetpack.cwd(this.filepath).rename(this.name, newName)
    var newHere = jetpack.cwd(this.filepath).dir(newName)

    // reassign important variables
    this.name = newName
    this.here = newHere
    for (var key in this.pages) {
      this.pages[key].here = this.here
    }
  }

  /*
  Returns the page at specified name.
   */
  getPage(name) {
    return this.pages[name]
  }

  /*
  Returns list of page names
   */
  getPageNames() {
    return Object.keys(this.pages)
  }
}
