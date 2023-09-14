const express = require('express');
const v1Router = require('./src/v1/routes');
const v1workout =require('./src/v1/routes/workoutRoutes');
const bodyParser = require('body-parser');
const bodyparser =require('body-parser')

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Hello form Backhand</h1>');
});
app.use(bodyParser.json())
app.use('/api/v1', v1Router);
app.use('/api/v1/workout', v1workout)

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
