module.exports = {
    sections: [
        {
          name: 'Introduction',
          content: 'src/docs/introduction.md'
        },
        {
          name: 'Installation',
          content: 'src/docs/installation.md',
          description: 'The description for the installation section'
        },
        // {
        //   name: 'Configuration',
        // //   content: 'docs/configuration.md'
        // },
        {
          name: 'Live Demo',
          external: true,
          href: 'https://www.ahroidlife.com'
        },
        {
          name: 'Components',
          content: 'src/docs/installation.md',
          sections: [
            {
              name: 'Atoms',
              content: 'src/components/atoms/atom.md',
              // description: "Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.",
              sections: [
                {
                  name: 'Icons components',
                  content: 'src/components/atoms/icons/docs/icons.md',
                  components: 'src/components/atoms/icons/*.js',
                  exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
                  usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
                },
              ]
            },
            {
              name: 'Molecules',
              sections: [
                {
                  name: 'Buttons components',
                  content: 'src/components/molecules/buttons/docs/Button.md',
                  components: 'src/components/molecules/buttons/*.js',
                  exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
                  usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
                },
              ]
            },
          ]
        },
        {
          name: 'Contribution',
          content: 'src/docs/contribution.md'
        },
      ],                       
        webpackConfig: {                           
        module: {                           
            rules: [                               
            {                                    
              test: /\.jsx?$/,                                 
              exclude: /node_modules/,                                 
              loader: "babel-loader"                              
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },         
        ]                           
        }                         
    },                      
   };