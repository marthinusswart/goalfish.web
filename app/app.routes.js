"use strict";
var router_1 = require('@angular/router');
var members_component_1 = require('./member/members.component');
var routes = [
    {
        path: "members",
        component: members_component_1.MembersComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map