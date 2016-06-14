Template.logistics.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'logistics' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.logistics.onRendered(function () {

})

Template.logistics.helpers({

})

Template.logistics.events({

})