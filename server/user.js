

Meteor.publish('user', function (pageNum, limitPerPage, conditions = {}) {
    conditions.roles = 'user';
    return Meteor.users.find(conditions, {
        sort: { timestamp: -1 },
        skip: (pageNum - 1) * limitPerPage,
        limit: limitPerPage
    });
})

Meteor.methods({
    'user_pageCount': function (limitPerPage, conditions = {}) {
        conditions.roles = 'user';
        return Math.ceil(Meteor.users.find(conditions).count() / limitPerPage)
    },
    'user.insert': function (user) {
        var _id = Accounts.createUser({
            username: user.username,
            password: user.password,
        })
        Roles.setUserRoles(_id, 'user')
    },
    'user.update': function (user) {
        var uu = Meteor.users.findOne(user._id);
        if (user.username && uu.username != user.username) Accounts.setUsername(user._id, user.username);
        if (user.password) Accounts.setPassword(user._id, user.password);
        // if (user.role && uu.roles[0] != user.role) Roles.setUserRoles(user._id, user.role);
        // if (user.description && uu.profile.description != user.description) Meteor.users.update(user._id, {
        //     $set: { 'profile.description': user.description }
        // })
    },
    'user.remove': function (_id) {
        Meteor.users.remove(_id)
    },
})