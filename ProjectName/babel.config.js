module.exports = function(api) {
	api.cache(true)
	let plugins = [
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.ts',
					'.tsx',
					'.json',
				],
				alias: {
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
	];
	return {
		presets: ['module:metro-react-native-babel-preset'],    
		env: {
			production: {
			  plugins: plugins,
			},
			development: {
			  plugins: plugins,
			},
		  },

	}
}