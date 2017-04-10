const { createProject } = require("./app/components/fileIO/create.js")

test('Creating project', () => {

  // Create project or load pre-exiting project
  var project = createProject('./','testProject');

  // Create or load pre-existing page
  //var page = project.createPage('something');

  //Extract all pages in this project
  var pageNames = project.getPageNames()
  console.log('Pages: ' + pageNames)

  // Get html and css for first page
  /*var page = project.getPage(pageNames[0])
  return page.getData().then( (data) => {
    console.log('HTML: ' + data.html)
    console.log('CSS: ' + data.css)

    // Try to write new html and css
    var newHtml = data.html + ' extra'
    var newCSS = data.css + ' more stuff'
    page.writeData(newHtml, newCSS)
    // view new data
    return page.getData().then( (data) => {
      console.log('HTML: ' + data.html)
      console.log('CSS: ' + data.css)
    });
  });*/

  var page = project.getPage(pageNames[0])

});
