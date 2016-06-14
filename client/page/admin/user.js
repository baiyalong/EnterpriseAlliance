Template.admin_user.onCreated(function () {
    this.subscribe('user')
})

Template.admin_user.onRendered(function () {

})

Template.admin_user.helpers({
    users: function () {
        var sn = 1;
        return Meteor.users.find().map(function (e) {
            e.sn = sn++;
            e.timestamp = moment(e.createdAt).format('YYYY-MM-DD HH:mm:ss');
            e.email = e.emails && e.emails[0].address;
            e.role = _dict.role.find(function (ee) { return ee.code == e.roles[0]; }).name
            return e;
        })
    },
    moment: function (date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
})

Template.admin_user.events({

})