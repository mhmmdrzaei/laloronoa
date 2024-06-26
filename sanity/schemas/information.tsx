import social from './social'


export default {
    name: 'information',
    title: 'About',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string'
      },
      {
        name:'url',
        title: 'slug',
        type: 'slug',
      },
      {
        name: 'information',
        title: 'Information',
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
        title: 'Social',
        name: 'socialInfo',
        type: 'array',
        of: [
          {
            type: 'social'
            
          }
          
        ]    
      },
      {
        title: 'About Image',
        name: 'about_image',
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


      
    ]
  }