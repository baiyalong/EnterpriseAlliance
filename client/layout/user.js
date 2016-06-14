Template.layout_user.onCreated(function () {
    Roles.userIsInRole(Meteor.userId(), 'user') ? null : FlowRouter.go('/user/login');
})

Template.layout_user.onRendered(function () {

})

Template.layout_user.helpers({

})

Template.layout_user.events({

})