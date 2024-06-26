export default {
    name: 'siteSettings',
    title: 'Site Info',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string'
      },
      {
        title: 'Audio Component',
        name: 'audio_comp',
        type: 'file',
        
      },
      {
        name: 'intro_text',
        title: 'Intro Text',
        type: 'array', 
         of: [{type: 'block',
         marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  type: 'boolean'
                }
              ]
            },
          ]
        },
        
        }]
      },
      {
        title: 'Hero Image',
        name: 'hero_image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'attribution',
            type: 'string',
            title: 'Alt',
          }
        ]
      },
  
      {
        name: 'seo',
        title: 'SEO info',
        type: 'seo'
      }


      
    ]
  }