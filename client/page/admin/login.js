Template.admin_login.onCreated(function () {

})

Template.admin_login.onRendered(function () {

})

Template.admin_login.helpers({

})

Template.admin_login.events({
    'click #login': function (e, t) {
        var admin = {
            username: t.$('#username').val().trim(),
            password: t.$('#password').val()
        }
        var error = null;
        if (admin.password == '') error = '请输入密码！';
        if (admin.username == '') error = '请输入用户名！';
        if (error) {
            alert(error);
            return;
        }

        Meteor.loginWithPassword(admin.username, admin.password, function (err) {
            if (err) alert(err.message)
            else {
                Meteor.logoutOtherClients();
                var uid = Meteor.userId();
                if (Roles.userIsInRole(uid, 'admin')) {
                    FlowRouter.go('/admin/information')
                }
                else if (Roles.userIsInRole(uid, 'user')) {
                    FlowRouter.go('/user/information')
                }
                else {
                    alert('未知的角色！', Roles.getRolesForUser(uid).toString())
                }
            }
        })
    }
})



