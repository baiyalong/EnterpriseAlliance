Template.infoList.onCreated(function () {

})

Template.infoList.onRendered(function () {

})

Template.infoList.helpers({
    infoList: function () {
        return Information.find().map(function (e) {
            e.categoryName = _dict.category.find(function (ee) { return ee.code == e.category; }).name;
            e.directionName = _dict.direction.find(function (ee) { return ee.code == e.direction; }).name;
            e.statusName = _dict.infoStatus.find(function (ee) { return ee.code == e.status; }).name;
            return e;
        })
    },
    isAdmin: function () {
        return FlowRouter.current().path == "/admin/information";
    },
    isUser: function () {
        var path = FlowRouter.current().path;
        return path == '/admin/information' || path == '/user/infoList';
    }
})

Template.infoList.events({
    'click .pass': function (e, t) {
        var info = {
            _id: this._id,
            status: 1,
            adminId: Meteor.userId,
            auditTime: new Date()
        }
        Meteor.call('information.update', info, function (err, res) {
            if (err) alert(err)
        })
    },
    'click .back': function (e, t) {
        var info = {
            _id: this._id,
            status: -1,
            adminId: Meteor.userId,
            auditTime: new Date()
        }
        Meteor.call('information.update', info, function (err, res) {
            if (err) alert(err)
        })
    }
})