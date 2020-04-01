const { Keystone } = require('@keystonejs/keystone');
const { Text, CalendarDay } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "tweetz";


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

keystone.createList('User', {
  schemaDoc: 'A list of the users',
  fields: {
    name: { type: Text, schemaDoc: 'This is the name of the user' },
    id: { type: Text, schemaDoc: 'This is the thing you need to do' },
    emailId: { type: Text, schemaDoc: 'This is the email id of the user' },
  },
});

keystone.createList('Tweets', {
  schemaDoc: 'All tweets',
  fields: {
    content: { type: Text, schemaDoc: 'This is the content of the tweet' },
    dateCreated: { type: CalendarDay, schemaDoc: 'This is the time when post is created' },
  },
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
