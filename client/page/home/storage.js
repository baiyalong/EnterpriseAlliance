Template.storage.onCreated(function () {
    const pageNum = 1, limitPerPage = 1000, conditions = { status: 1, category: 'storage' }
    this.subscribe('information', pageNum, limitPerPage, conditions)
})

Template.storage.onRendered(function () {

})

Template.storage.helpers({

})

Template.storage.events({

})