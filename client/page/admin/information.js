Template.admin_information.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { userId: Meteor.userId() }
    this.subscribe('information')
})

Template.admin_information.onRendered(function () {

})

Template.admin_information.helpers({

})

Template.admin_information.events({

})