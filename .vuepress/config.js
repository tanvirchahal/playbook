module.exports = {
  title: 'Team Handbook',
  description: 'A guide to our culture and processes',
  dest: 'public',
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    },
    config: md => {
      md.set({ linkify: true, typographer: true }),
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://gitlab.com/datopian/handbook',
    repoLabel: 'Contribute!',
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Culture', link: '/culture/' },
      { text: 'Onboarding', link: '/onboarding/' },
      { text: 'Ops', link: '/ops/' },
      { text: 'Agile Delivery', link: '/agile/' },
      { text: 'User Stories', link: '/user-stories/' },
      {
        text: 'Howtos',
        items: [
          { text: 'Objectives and Key Results (OKRs)', link: '/objectives-and-key-results/' },
          { text: 'Getting Things Done (GTD)', link: '/getting-things-done/' },
          { text: 'Planning Your Day', link: '/planning-your-day/' },
          { text: 'Markdown', link: '/markdown/' },
          { text: 'SCQH (Situation, Complication, Question, Hypothesis)', link: '/scqh/' }
        ]
      }
    ]
  }
}
