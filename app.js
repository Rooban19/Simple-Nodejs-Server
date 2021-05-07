var express = require('express');
var app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
app.get('/check', (req, res, next) => {
  res.json({ username: 'Rooban',id:5 });
});
app.post('/post', (req, res) => {
  console.log('REQUEST', req.body);
  res.json({ result: 'USER CREATED SUCCESSFULLY' });
});
