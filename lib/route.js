
FlowRouter.route('/', { action: function () { BlazeLayout.render("layout_home", { content: "home" }); } });
FlowRouter.route('/office', { action: function () { BlazeLayout.render("layout_home", { content: "office" }); } });
FlowRouter.route('/storage', { action: function () { BlazeLayout.render("layout_home", { content: "storage" }); } });
FlowRouter.route('/logistics', { action: function () { BlazeLayout.render("layout_home", { content: "logistics" }); } });
FlowRouter.route('/HR', { action: function () { BlazeLayout.render("layout_home", { content: "HR" }); } });
FlowRouter.route('/internship', { action: function () { BlazeLayout.render("layout_home", { content: "internship" }); } });
FlowRouter.route('/education', { action: function () { BlazeLayout.render("layout_home", { content: "education" }); } });
FlowRouter.route('/licence', { action: function () { BlazeLayout.render("layout_home", { content: "licence" }); } });




FlowRouter.route('/user', { action: function () { Roles.userIsInRole(Meteor.userId(), 'user') ? FlowRouter.go('/user/information') : FlowRouter.go('/user/login') } });
FlowRouter.route('/user/register', { action: function () { BlazeLayout.render("layout_user", { content: "user_register" }); } });
FlowRouter.route('/user/login', { action: function () { BlazeLayout.render("user_login"); } });
FlowRouter.route('/user/profile', { action: function () { BlazeLayout.render("layout_user", { content: "user_profile" }); } });
FlowRouter.route('/user/information', { action: function () { BlazeLayout.render("layout_user", { content: "user_information" }); } });




FlowRouter.route('/admin', { action: function () { Roles.userIsInRole(Meteor.userId(), 'admin') ? FlowRouter.go('/admin/information') : FlowRouter.go('/admin/login') } });
FlowRouter.route('/admin/login', { action: function () { BlazeLayout.render("admin_login"); } });
FlowRouter.route('/admin/user', { action: function () { BlazeLayout.render("layout_admin", { content: "admin_user" }); } });
FlowRouter.route('/admin/information', { action: function () { BlazeLayout.render("layout_admin", { content: "admin_information" }); } });