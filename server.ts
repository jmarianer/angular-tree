// tslint:disable:no-console
import * as express from 'express';

const port = 8000;
const app = express();

const tree = [
  {
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
	},
  "d0fe8b",
  "0894c5"];

app.use(express.static('static'))
  
app.get('/tree', (request, response) => {
  response.send(JSON.stringify(tree));
});

let listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});

