Template.user_profile.onCreated(function () {

})

Template.user_profile.onRendered(function () {

})

Template.user_profile.helpers({
    user: function () {
        var user = Meteor.user();
        return user ? {
            username: user.username,
            email: user.emails && user.emails[0].address
        } : null;
    }
})

Template.user_profile.events({

})