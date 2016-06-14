Template.user_register.onCreated(function () {

})

Template.user_register.onRendered(function () {

})

Template.user_register.helpers({

})

Template.user_register.events({
    'click #register': function (e, t) {
        var user = {
            username: t.$('#username').val().trim(),
            password: t.$('#password').val(),
            email: t.$('#email').val().trim()
        }
        var error = null;
        if (user.email == '') error = '请输入Email！';
        if (user.password == '') error = '请输入密码！';
        if (user.username == '') error = '请输入用户名！';
        if (error) {
            alert(error);
            return;
        }

        Meteor.call('user.insert', user, function (err, res) {
            if (err) alert(err.message)
            else alert('注册成功！')
        })

    }
})