// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import ErrorLink from 'components/error_page/error_link';

describe('components/error_page/ErrorLink', () => {
    const baseProps = {
        url: 'https://docs.mattermost.com/deployment/sso-gitcoin.html',
        messageId: 'error.oauth_missing_code.gitcoin.link',
        defaultMessage: 'Gitcoin',
    };

    test('should match snapshot', () => {
        const wrapper = shallow(
            <ErrorLink {...baseProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
