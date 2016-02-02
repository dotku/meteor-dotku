var referenceData = [
  {
    title: 'Discover Meteor',
    url: 'https://book.discovermeteor.com/',
    description: '这个网站提供的教程内容相对比较权威，由 Meteor 官方认可插件管理工具 Atmosphere 的维护人之一的 Tom Coleman 以及 Meteor Forum 应用 Telescope 的作者共同编写，两位都是实力派悍将，内容绝对权威充实；**重要** 中文版完全免费，已经提供全书 17 章的 14 章翻译内容。'
  }, 
  {
    title: 'Meteor Tips and Tutorial',
    url: '',
    description: '这个网站提供了 <a href="http://meteortips.com/first-meteor-tutorial/">first-meteor-tutorial</a> 和 <a href="http://meteortips.com/second-meteor-tutorial/">second-tutorial</a> 两个系列教程，内容较为简单实用。'
  },
  {
    title: 'CodeTutorial.io',
    url: 'https://www.codetutorial.io/tag/meteor/',
    description: '综合性代码编写教程博客，不定期更新，提供大量的实战案例篇幅，比如 Ironic、AngularJS 和 Meteor 的搭配开发实例等。'
  }
];
Template.reference.helpers({
    reference: referenceData
});