Template.HR.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'HR' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.HR.onRendered(function () {

})

Template.HR.helpers({

})

Template.HR.events({

})