var folderStructure = [
  {
    name: 'Folder One',
    type: 'folder',
    isPrivate: false,
    children: [
      {
        name: 'Sub-Folder One',
        type: 'folder',
        isPrivate: false,
        children: [
          {
            name: 'List One',
            type: 'file'
          },
          {
            name: 'List Two',
            type: 'file'
          },
          {
            name: 'List Three',
            type: 'file'
          },
        ]
      }
    ]
  },
  {
    name: 'Folder Two',
    type: 'folder',
    isPrivate: false,
    children: []
  },
  {
    name: 'Folder Three',
    type: 'folder',
    isPrivate: false,
    children: []
  },
  {
    name: 'Folder Four',
    type: 'folder',
    isPrivate: false,
    children: []
  },
  {
    name: 'Private Folder',
    type: 'folder',
    isPrivate: true,
    children: []
  },
];

export default folderStructure;