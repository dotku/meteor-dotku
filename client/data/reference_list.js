var referenceData = [
  {
    title: 'Meteor',
    url: 'http://www.meteor.com',
    description: 'Meteor 的官方网址'
  },
  {
    title: 'Discover Meteor',
    url: 'https://book.discovermeteor.com/',
    description: '这个网站提供的教程内容相对比较权威，由 Meteor 官方认可插件管理工具 Atmosphere 的维护人之一的 Tom Coleman 以及 Meteor Forum 应用 Telescope 的作者共同编写，两位都是实力派悍将，内容绝对权威充实。官网文档采用 Ruby 来编写的... 嗯... 好吧 ~ **重要** 中文版完全免费，已经提供全书 17 章的 14 章翻译内容。'
  }, 
  {
    title: 'The Meteor Chef',
    url: 'https://www.themeteorchef.com/',
    description: '一个看上去不错的 Meteor 教学网站'
  },
  {
    title: 'Meteor Tips and Tutorial',
    url: 'http://www.meteortips.com',
    description: '这个网站提供了 <a href="http://meteortips.com/first-meteor-tutorial/">first-meteor-tutorial</a> 和 <a href="http://meteortips.com/second-meteor-tutorial/">second-tutorial</a> 两个系列教程，内容较为简单实用。'
  },
  {
    title: 'CodeTutorial.io',
    url: 'https://www.codetutorial.io/tag/meteor/',
    description: '综合性代码编写教程博客，不定期更新，提供大量的实战案例篇幅，比如 Ironic、AngularJS 和 Meteor 的搭配开发实例等。'
  },
  {
    title: 'Stack Overflow',
    url: 'http://www.stackoverflow.com/questions/tagged/meteor',
    description: '官方推荐的其中一种互动参与方式'
  },
  {
    title: 'Web Tempest',
    url: 'http://www.webtempest.com/',
    description: '一个个人的研究和学习 Meteor 的地方'
  },
  {
    title: 'Alex Bachuk',
    url: 'http://www.alexbachuk.com/?s=meteor&submit=Search',
    description: '在为数不多的几篇文章中提到了 Meteor'
  }
];
Template.reference.helpers({
    reference: referenceData
});
Template.reference.rendered = function() {
    $('#carousel').slick({
      dots: true,
      arrows: true
    });
  }