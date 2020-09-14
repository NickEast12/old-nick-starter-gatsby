module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Nick Gatsby Starter","short_name":"Nick Gatsby Starter","start_url":"/","background_color":"#FFFFFF","theme_color":"#FFFFFF","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Avant","Lubalin","Roboto-Medium","Lubalin-Book"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"rgb(75, 173, 209)","showSpinner":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
