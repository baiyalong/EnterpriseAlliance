Template.office.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'office' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.office.onRendered(function () {

})

Template.office.helpers({

})

Template.office.events({

})