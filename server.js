const express = require('express');
const app = express();

app.use(express.static('static/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/static/views/main.html')
});

// const server = app.listen(80, function () {
//   console.log('server running at port 80');
// });

app.set('port', (process.env.PORT || 3000));

//Start Server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
