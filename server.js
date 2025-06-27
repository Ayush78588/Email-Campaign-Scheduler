const express = require('express');
require('dotenv').config();
const connectDB = require('./config/mongoose');
const controller = require('./controller');
const exphbs = require('express-handlebars');

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  }
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/create/campaign', controller.handlePostCampaign);
app.get('/campaigns', controller.handleGetCampaigns);



app.listen(5000);