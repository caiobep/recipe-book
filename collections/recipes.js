Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  desc:{ 
    type: String,
    label: "Description",
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: () => this.userId
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: () => new Date()
  }
});

Recipes.attachSchema( RecipeSchema );