var plugins = [{
      plugin: require('/Users/nick/Desktop/starter-gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/nick/Desktop/starter-gatsby/node_modules/gatsby-plugin-preload-fonts/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/nick/Desktop/starter-gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Nick Gatsby Starter","short_name":"Nick Gatsby Starter","start_url":"/","background_color":"#FFFFFF","theme_color":"#FFFFFF","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('/Users/nick/Desktop/starter-gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/nick/Desktop/starter-gatsby/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"ssr":true,"exclude":["/404"]},
    },{
      plugin: require('/Users/nick/Desktop/starter-gatsby/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Oswald","subsets":["latin"]},{"family":"Open Sans","variants":["400","700"]}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
