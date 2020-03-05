module.exports = {
    sections: [
        {
          name: 'Introduction',
        //   content: 'docs/introduction.md'
        },
        {
          name: 'Documentation',
          sections: [
            {
              name: 'Installation',
            //   content: 'src/docs/installation.md',
              description: 'The description for the installation section'
            },
            {
              name: 'Configuration',
            //   content: 'docs/configuration.md'
            },
            {
              name: 'Live Demo',
              external: true,
              href: 'https://www.ahroidlife.com'
            }
          ]
        },
        {
          name: 'UI Buttons',
          content: 'src/components/buttons/docs/Button.md',
          components: 'src/components/buttons/*.js',
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        }
      ],                       
        webpackConfig: {                           
        module: {                           
            rules: [                               
            {                                    
            test: /\.jsx?$/,                                 
            exclude: /node_modules/,                                 
            loader: "babel-loader"                              
            }         
        ]                           
        }                         
    },                      
   };