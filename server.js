const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/madeby', function(request, response) {
  response.sendFile(__dirname + 'This was made by Pranav Ramesh. Cheers!');
});



const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});