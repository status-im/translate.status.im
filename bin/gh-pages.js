var ghpages = require('gh-pages')
 
ghpages.publish('build', {
  repo: ( 
    'https://'
    + process.env.GH_USER + ':'
    + process.env.GH_TOKEN
    + `@github.com/status-im/${process.env.GH_REPO}.git`
  ),
  branch: 'gh-pages',
  dotfiles: true,
  silent: false
}, function(err) {
  if (err !== undefined) {
    console.error(err)
    throw err
  }
})
