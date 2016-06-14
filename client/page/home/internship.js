Template.internship.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'internship' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.internship.onRendered(function () {

})

Template.internship.helpers({

})

Template.internship.events({

})