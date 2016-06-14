Template.licence.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'licence' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.licence.onRendered(function () {

})

Template.licence.helpers({

})

Template.licence.events({

})