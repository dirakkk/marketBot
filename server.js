const http = require('http')  
var Rx = require('rxjs/Rx');
var rp = require('request-promise');

 


//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options2 = "http://coinmarketcap.northpole.ro/api/v5/ETH.json'";

var options = {
  host: 'www.random.org',
  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};


http.get(options2, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse.picture);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});




const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

	Rx.Observable.interval(500).subscribe(
		//()=>{console.log("wazza")}
		)

var requestStream = Rx.Observable.of('http://coinmarketcap.northpole.ro/api/v5/ETH.json');

/*
var responseStream = requestStream
  .flatMap(requestUrl => {console.log("wazza");}
    //Rx.Observable.fromPromise($.getJSON(requestUrl))
  );


responseStream.subscribe(response => {
  console.log(response);
});
*/

  console.log(`server is listening on ${port}`)
})
