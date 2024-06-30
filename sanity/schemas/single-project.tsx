export default {
    name: 'singleProject',
    title: 'Timeline Place',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Name',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        // validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          validation: (Rule: { required: () => any; }) => Rule.required(),
        }
      },
      {
        name:'classname',
        title: 'CSS class', 
        type: 'string'
      },
      {
        name:'bgColour',
        type: 'string'
      },
      {
        title: 'Date',
        name: 'date',
        type: 'datetime'
      },
      {
        name: 'projectdescription',
        title: 'Description',
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
        title: 'Project Assets',
        name: 'projectImages',
        type: 'array',
        of:[

            {
              title: 'Project Image',
              name: 'projectImage',
              type: 'image',
              options: {
                hotspot: true // <-- Defaults to false
              },
              fields: [
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Alt',
                },
                {
                  name: 'classImg',
                  type: 'string',
                  title: 'CSS Class'
                }
              ]
            },
            {
              title: 'Project Video',
              name: 'project_video',
              type: 'file',
              fields: [
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Alt',
                  },
              ]
            }, 
            {
              title: 'Embed Video', 
              name: 'embedVid',
              type: 'object', 
              fields: [
                {name: 'text', type: 'text'
              , title: 'Embed Video'},
              ]
            },
          


        ]
      },

      
    ]
  }