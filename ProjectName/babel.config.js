module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.ts',
					'.tsx',
					'.json',
				],
				alias: {
					tests: ['./tests/'],
					'@common': './src/common',
					'@components': './src/components',
					'@container': './src/container',
					'@stores': './src/stores',
					'@constants': './src/constants',
					'@network': './src/network',
					'@navigation': './src/navigation',
					'@assets': './src/assets',
				},
			},
		],
	],
};
