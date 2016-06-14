var userProfile = new SimpleSchema({
    nickname: {
        type: String,
        optional: true
    },
    phoneNumber: {
        type: String,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },

});

Meteor.users.attachSchema(new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: userProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // roles: {
    //     type: Object,
    //     optional: true,
    //     blackbox: true
    // },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
}));






Meteor.publish('user', function (pageNum = 1, limitPerPage = 1000, conditions = {}) {
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
            email: user.email
        })
        Roles.setUserRoles(_id, 'user')
        return _id;
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