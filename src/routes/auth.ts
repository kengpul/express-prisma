/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import express from 'express';
import authProvider from '../../auth/AuthProvider';

import { REDIRECT_URI, POST_LOGOUT_REDIRECT_URI } from '../../authConfig';

const router = express.Router();

router.get('/signin', authProvider.login({
    scopes: ['User.Read.All'],
    redirectUri: REDIRECT_URI,
    successRedirect: '/'
}));

router.get('/acquireToken', authProvider.acquireToken({
    scopes: ['User.Read'],
    redirectUri: REDIRECT_URI,
    successRedirect: '/users/profile'
}));

router.post('/redirect', authProvider.handleRedirect());

router.get('/signout', authProvider.logout({
    postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI
}));

export default router;