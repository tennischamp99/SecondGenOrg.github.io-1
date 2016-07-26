import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import loadModules from './loadModules';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as Public from './modules/public';

Meteor.startup(() => {
    injectTapEventPlugin();
    const root = loadModules(Public.Home, Public);
    console.log(root);
    const router = <Router history={browserHistory} routes={root} />;
    console.log(router);
    render(router, document.getElementById('app-root'));
})