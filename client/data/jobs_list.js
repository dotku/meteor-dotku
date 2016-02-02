var jobsData = [
  {
    title: 'we work meteor',
    url: 'https://www.weworkmeteor.com/',
    description: '一个用 Meteor 编写的在线开源 Job Board，2014 年的时候开始编写，中间陆陆续续的更新，2016 年 1 月仍然有新 工作机会的帖子增加，比较多 Remote 的工作机会。'
  }
];
Template.jobs.helpers({
  jobs: jobsData
});