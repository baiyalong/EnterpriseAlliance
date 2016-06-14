Template.home.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1 }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.home.onRendered(function () {

})

Template.home.helpers({

})

Template.home.events({

})