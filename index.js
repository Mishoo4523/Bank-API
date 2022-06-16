import expres from 'express';
import bodyParser from 'body-parse';

const app = express();
const port = 5000;

app.use(bodyParser.jason());