



Information.attachSchema(new SimpleSchema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    direction: {
        type: String
    },
    category: {
        type: String
    },
    conditions: {
        type: Object,
        optional: true
    },
    userId: {
        type: String
    },
    publishTime: {
        type: Date
    },
    adminId: {
        type: String,
        optional: true
    },
    auditTime: {
        type: Date,
        optional: true
    }
}));

Information.deny({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; },
})


Meteor.publish('information', function (pageNum, limitPerPage, conditions = {}) {
    return Information.find(conditions, {
        sort: { timestamp: -1 },
        skip: (pageNum - 1) * limitPerPage,
        limit: limitPerPage
    });
})

Meteor.methods({
    'information_pageCount': function (limitPerPage, conditions = {}) {
        return Math.ceil(Information.find(conditions).count() / limitPerPage)
    },
    'information.insert': function (info) {
        return Information.insert(info)
    },
    'information.update': function (info) {
        return Information.update(item._id, { $set: info })
    },
    'information.remove': function (_id) {
        return Information.remove(_id)
    },
})