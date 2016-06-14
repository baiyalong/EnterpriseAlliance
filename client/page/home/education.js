Template.education.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'education' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.education.onRendered(function () {

})

Template.education.helpers({

})

Template.education.events({

})