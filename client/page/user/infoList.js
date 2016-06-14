Template.user_infoList.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { userId: Meteor.userId() }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.user_infoList.onRendered(function () {

})

Template.user_infoList.helpers({

})

Template.user_infoList.events({

})