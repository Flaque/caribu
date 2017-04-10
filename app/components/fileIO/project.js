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
