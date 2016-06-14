Template.infoEdit.onCreated(function () {

})

Template.infoEdit.onRendered(function () {

})

Template.infoEdit.helpers({
    info: function () {
        return {}
    },
    category: function () {
        return _dict.category;
    },
    direction:function(){
        return _dict.direction;
    }
})

Template.infoEdit.events({
    'click #submit': function (e, t) {
        var info = {
            title: t.$('#title').val().trim(),
            content: t.$('#content').val().trim(),
            category: t.$('#category').val(),
            direction: t.$('input[name="direction"]:checked').val()
        }

        var error = null;
        if (info.content == '') error = '消息内容不能为空！';
        if (info.direction == undefined) error = '需求/资源选项不能为空！';
        if (info.title == '') error = '消息标题不能为空！';
        if (error) {
            console.log(error);
            return;
        }

        info.userId = Meteor.userId();
        info.publishTime = new Date();
        info.status = 0;

        Meteor.call('information.insert', info, function (err, res) {
            if (err) alert(err);
            else alert('已提交审核！')
        })
    }
})