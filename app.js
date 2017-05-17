order = {
	"element": "shoji:order",
	"self": "/datasets/349d49/variables/hier/",
	"graph": [{
		"Awareness Metrics": [{
			"Taxis": ["11b0b9", "7a89e0"]
		}, {
			"Coffee": ["786c0f", "2d27ab"]
		}]
	}, {
		"Purchase Consideration and Behavior": [{
			"Taxis": ["ede6a8", "62c00f", "0f6ce0", "f2a681"]
		}, {
			"Coffee": ["8d7127", "ee3e40", "8f7db6", "3a5f89"]
		}]
	}, {
		"Demographics and Technographics": ["c83da2", "e08fbc", "1b44a4", "5b6a73", "91a33f", "9f4b60"]
	}, {
		"Dimensions": ["d88613", "0323cf"]
	}, "d0fe8b", "0894c5"]
}

variables = {
	"element": "shoji:catalog",
	"self": "/datasets/349d49/variables/",
	"orders": {
		"hier": "/datasets/349d49/variables/hier/"
	},
	"description": "List of Variables of this dataset",
	"index": {
		"786c0f": {
			"name": "Unaided Awareness (Coffee Roasters)",
			"type": "multiple_response",
			"description": "When you think of independent coffee roasters, which names come to mind?"
		},
		"d88613": {
			"name": "City",
			"type": "text",
			"description": "City where survey was performed"
		},
		"0894c5": {
			"name": "Weight",
			"type": "numeric",
			"description": "Are you the parent or guardian of any children under the age of 18?"
		},
		"0323cf": {
			"name": "Wave",
			"type": "datetime",
			"description": "Wave"
		},
		"d0fe8b": {
			"name": "weight",
			"type": "numeric",
			"description": ""
		},
		"2d27ab": {
			"name": "Aided Awareness (Coffee Roasters)",
			"type": "multiple_response",
			"description": "Which of these independent coffee roasters have you heard of? Check all that apply."
		},
		"7a89e0": {
			"name": "Aided Awareness (Taxis)",
			"type": "multiple_response",
			"description": "Which of the following on-demand taxi and car services have you heard of? Check all that apply."
		},
		"f2a681": {
			"name": "Specific Service Usage",
			"type": "multiple_response",
			"description": "Which of the following on-demand taxi and car services have you used in the past two months? [Asked if used any service]"
		},
		"8f7db6": {
			"name": "Ritual Roasters Usage",
			"type": "multiple_response",
			"description": "Which of the following have you purchased in the last month? [Asked if aware of coffee roaster]"
		},
		"e08fbc": {
			"name": "Education",
			"type": "categorical",
			"description": "Education"
		},
		"5b6a73": {
			"name": "Children Under 18",
			"type": "categorical",
			"description": "Are you the parent or guardian of any children under the age of 18?"
		},
		"ede6a8": {
			"name": "Consideration",
			"type": "multiple_response",
			"description": "If you were to use an on-demand taxi and car service, which of these would you consider?"
		},
		"9f4b60": {
			"scale": "interval",
			"type": "categorical_array",
			"description": ""
		},
		"91a33f": {
			"name": "Family Income",
			"type": "categorical",
			"description": "Thinking back over the last year, what was your family's annual income?"
		},
		"3a5f89": {
			"name": "FOURBARREL Usage",
			"type": "multiple_response",
			"description": "Which of the following have you purchased in the last month? [Asked if aware of coffee roaster]"
		},
		"62c00f": {
			"name": "Likely Purchase",
			"type": "numeric",
			"description": "Which of these would you be most likely to use?"
		},
		"ee3e40": {
			"name": "Stumptown Coffee Roasters Usage",
			"type": "multiple_response",
			"description": "Which of the following have you purchased in the last month? [Asked if aware of coffee roaster]"
		},
		"11b0b9": {
			"name": "Unaided Awareness (Taxis)",
			"type": "multiple_response",
			"description": "Which of the following taxi services have you heard of?"
		},
		"c83da2": {
			"name": "Gender",
			"type": "categorical",
			"description": "Are you male or female?"
		},
		"1b44a4": {
			"name": "Marital Status",
			"type": "categorical",
			"description": "What is your marital status?"
		},
		"0f6ce0": {
			"name": "Usage",
			"type": "categorical",
			"description": "Have you used a Taxi Service in the last 2 weeks?"
		},
		"8d7127": {
			"name": "Blue Bottle Coffee Usage",
			"type": "multiple_response",
			"description": "Which of the following have you purchased in the last month? [Asked if aware of coffee roaster]"
		}
	}
}

var myApp = angular.module('sampleApp', ['components']);
myApp.controller('FooCtrl', function() {
  this.graph = order.graph;
  this.variables = variables.index;
})
