// tslint:disable:no-console
import * as express from 'express';

const port = 8000;
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/puzzle/:id', (request, response) => {
  response.send('foo' + request.params.id);
});

let listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});

