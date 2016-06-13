

// Meteor.publish('Information', function (pageNum, limitPerPage, conditions = {}) {
//     return Information.find(conditions, {
//         sort: { timestamp: -1 },
//         skip: (pageNum - 1) * limitPerPage,
//         limit: limitPerPage
//     });
// })

// Meteor.methods({
//     'Information_pageCount': function (limitPerPage, conditions = {}) {
//         return Math.ceil(Information.find(conditions).count() / limitPerPage)
//     },
//     'Information.insert': function (item) {
//         return Information.insert(item)
//     },
//     'Information.update': function (item) {
//         return Information.update(item._id, { $set: item })
//     },
//     'Information.remove': function (_id) {
//         return Information.remove(_id)
//     },
// })