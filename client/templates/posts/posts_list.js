var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'Woah, Dude',
    url: 'http://old.reddit.com/r/woahdude'
  }
];

Template.postsList.helpers({
  posts: postsData
});