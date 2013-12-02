module.exports = [
	{
		path: "",
		regex: /^$/,
		files: ["index.html"],
		app: require("./main/index.js")
	},
	{
		path: "/about",
		regex: /^about$/,
		files: ["about.html"],
		app: require("./about.js")
	}
];