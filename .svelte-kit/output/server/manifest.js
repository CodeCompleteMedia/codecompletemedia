export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CXWsWv8L.js",app:"_app/immutable/entry/app.Cxf6d9Am.js",imports:["_app/immutable/entry/start.CXWsWv8L.js","_app/immutable/chunks/bP9hOSNB.js","_app/immutable/chunks/CCAHTY0j.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.Cxf6d9Am.js","_app/immutable/chunks/CCAHTY0j.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BTDTvYoD.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CZ5CTd_X.js","_app/immutable/chunks/CJziOn8u.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
