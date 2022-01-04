/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

module.exports = {
	preset: 'react-native',
	timers: 'fake',
	testRegex: '/__tests__/.*-test\\.tsx$',
	testPathIgnorePatterns: ['/node_modules/'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native' +
			'|@react-native-community' +
			'|@react-navigation' +
			'|native-base' +
			'|expo-.*/.*' +
			'|@unimodules' +
			'|@react-native-picker' +
			'|@react-native' +
			'/)',
	],
	haste: {
		defaultPlatform: 'ios',
		platforms: ['ios', 'android'],
	},
	testEnvironment: 'node',
	coveragePathIgnorePatterns: ['/__tests__/'],
};
