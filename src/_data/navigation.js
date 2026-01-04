export default {
  top: [
    { text: 'Home', url: '/' },
    {
      text: 'Projects',
      url: '/projects/',
      submenu: [
        { text: 'Selected Works', url: '/projects/' },
        { text: 'Course Projects', url: '/projects/course-projects/' },
        { text: 'Tools', url: '/projects/tools/' },
        { text: 'Writing', url: '/projects/writing/' }
      ]
    },
    { text: 'Research', url: '/research/' },
    { text: 'About', url: '/about/' }
  ],
  bottom: [
    { text: 'Imprint', url: '/imprint/' },
    { text: 'Privacy', url: '/privacy/' },
    { text: 'Accessibility', url: '/accessibility/' }
  ]
};
