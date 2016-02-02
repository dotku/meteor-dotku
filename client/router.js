Router.configure({
    layoutTemplate: 'main'
});
/*
Router.route('/', function(){
  this.render('home');
});
Router.route('/home', function(){
  this.render('home');
});
*/
Router.route('/', {template: 'home'});
Router.route('/home', {template: 'home'});
Router.route('/about');
Router.route('/contact');

