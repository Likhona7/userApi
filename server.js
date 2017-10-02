const express = require('express');
const request = require('request');

const app = express()



app.set('view engine', 'ejs')
app.use(express.static('public'));


var url = 'https://jsonplaceholder.typicode.com/users';


app.get('/', function (req, res) {
  request(url, function(err, response, body) {
    console.log(body);
    if (err) {
      res.render('index', {userInfo:null,  error: 'Error, please try again'});
     }
     else {
       let userInfo = JSON.parse(body)
       console.log(userInfo);

       if (userInfo == undefined) {
         res.render('index', {userInfo: null, error: 'Error, please try again'});
         }

         else {
          res.render('index', {user: userInfo, error:null})
     }
  }
});
});

app.get("/showmodalroute", function(req, res) {
  res.render('shows', {
    number: false
  });
});


//app.get('/', function(req, res){
//  request(url, function(err, response, body))
//})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
