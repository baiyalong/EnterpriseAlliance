Template.layout_admin.onCreated(function () {
    Roles.userIsInRole(Meteor.userId(), 'admin') ? null : FlowRouter.go('/admin/login');
})

Template.layout_admin.onRendered(function () {

})

Template.layout_admin.helpers({

})

Template.layout_admin.events({

})