export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609d755f31d8270090abcece',
                  title: 'Sanity Studio',
                  name: 'conference-studio',
                  apiId: '33b7f62c-618f-44f1-a03c-ddaa11ac05e5'
                },
                {
                  buildHookId: '609d756091364f00dac7853f',
                  title: 'Blog Website',
                  name: 'conference-web',
                  apiId: 'eab56894-f159-43a3-8d06-96730ef7fb90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasperfurniss/conference',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://conference-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
