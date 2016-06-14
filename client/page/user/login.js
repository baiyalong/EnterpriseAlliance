Template.user_login.onCreated(function () {

})

Template.user_login.onRendered(function () {

})

Template.user_login.helpers({

})

Template.user_login.events({
'click #login': function (e, t) {
        var user = {
            username: t.$('#username').val().trim(),
            password: t.$('#password').val()
        }
        var error = null;
        if (user.password == '') error = '请输入密码！';
        if (user.username == '') error = '请输入用户名！';
        if (error) {
            alert(error);
            return;
        }

        Meteor.loginWithPassword(user.username, user.password, function (err) {
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