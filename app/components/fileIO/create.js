/*
This file handles creating projects and pages.
 */

import jetpack from 'fs-jetpack'
import Project from './project'

/**
 * Creates new project at specified location.
 *
 * @param {String} path | is the cwd
 * @param {String} name
 */
export function createProject(path, name) {
  return new Project(path, name)
}

/**
 * Creates new page in specified project.
 *
 * @param {project} project
 * @param {String} name
 */
/*export function createPage(project, name) {
  return project.createPage(name)
}*/
