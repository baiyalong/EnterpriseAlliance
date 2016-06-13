
Meteor.methods({
    'admin.insert': function (admin) {
        var _id = Accounts.createUser({
            username: admin.username,
            password: admin.password,
        })
        Roles.setUserRoles(_id, 'admin')
    },
})





if (Roles.getAllRoles().count() == 0) {
    Roles.createRole('admin');
    Roles.createRole('user');
}

if (Meteor.users.find().count() == 0) {
    Meteor.call('admin.insert', {
        username: 'admin',
        password: '123',
    })
}