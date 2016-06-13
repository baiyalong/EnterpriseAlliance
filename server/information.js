



Information.attachSchema(new SimpleSchema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    direction:{
        type:String
    },
    category: {
        type: String
    },
    conditions: {
        type: Object
    },
    userId: {
        type: String
    },
    publishTime: {
        type: Date
    },
    adminId: {
        type: String
    },
    auditTime: {
        type: Date
    }
}));

Information.deny({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; },
})


Meteor.publish('Information', function (pageNum, limitPerPage, conditions = {}) {
    return Information.find(conditions, {
        sort: { timestamp: -1 },
        skip: (pageNum - 1) * limitPerPage,
        limit: limitPerPage
    });
})

Meteor.methods({
    'Information_pageCount': function (limitPerPage, conditions = {}) {
        return Math.ceil(Information.find(conditions).count() / limitPerPage)
    },
    'Information.insert': function (item) {
        return Information.insert(item)
    },
    'Information.update': function (item) {
        return Information.update(item._id, { $set: item })
    },
    'Information.remove': function (_id) {
        return Information.remove(_id)
    },
})