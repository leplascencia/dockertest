var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = "589a38f22c35c17f5206eca4ab";

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalty = /^\/salt/;botRegexPay = /^\/payouts/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/mike/; botDEZ = /^\/eat/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexYu = /^\/youtube/i; botRegexGuide = /^\/guidelines/; botRegexCC = /^\/trades/; botRegexSr = /^\/trash/; botRegexQu = /^\/stfu/; botRegexBack = /^\/comeback/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCrying = /^\/cry/; botRegexRuless = /\/rules/;
      botRegexDL = /^\/bdml/; botRegexFull = /^\/full/; botRegexTwitter = /^\/twitter/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://media.giphy.com/media/3o6Mb93JnT2hfbvK92/giphy.gif'
      cheese3 = 'http://www.packerpalace.com/palace02/maddenwcheese.gif';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSalty.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x374.gif.ff4b7c47fe184675a8418304fcd32e91");
    this.res.end();
  }
  else if(request.text && botRegexTwitter.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://twitter.com/"); //twitter
    this.res.end();
  }
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/xgtsl.jpg");
    this.res.end();
  }
  else if(request.text && botRegexPay.test(request.text)) {
    this.res.writeHead(200);
    postMessage(""); //payouts 
    this.res.end();
  }
  else if(request.text && botRegexMI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
    this.res.end();
  }
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  }
    else if(request.text && botRegexYu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/"+request.text.substring(8,request.text.length));
    this.res.end();
  }
  else if(request.text && botRegexGuide.test(request.text)) {
    this.res.writeHead(200);
    postMessage(""); //guidelines
    this.res.end();
  }
   else if(request.text && botDEZ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.giphy.com/l0MYAeAmySoRMsXn2.gif");
    this.res.end();
  }
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage(""); //trades
    this.res.end();
  }
    else if(request.text && botRegexSr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/78jbQMz.jpg");
    this.res.end();
  }
    else if(request.text && botRegexQu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3o7TKOzuVO0pYfSzHa/giphy.gif");
    this.res.end();
  }
      else if(request.text && botRegexBack.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/cache/instances/folder427/59634427.jpg");
    this.res.end();
  }
  else if(request.text && botRegexLuck.test(request.text)) {
this.res.writeHead(200);
postMessage("https://media.giphy.com/media/5xtDarDFtx1uQhOC44E/giphy.gif");
this.res.end();
}
  else if(request.text && botRegexFumble.test(request.text)) {
this.res.writeHead(200);
postMessage("http://s2.quickmeme.com/img/c5/c5e2527ff84089b25e6cd56810125c38dc008985077b3cf18207be27ae4b232d.jpg");
this.res.end();
}
  else if(request.text && botRegexL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://pbs.twimg.com/media/CLNho0mUcAAZ5KC.jpg");
this.res.end();
}
  else if(request.text && botRegexRuless.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/954x1094.png.ae1c759e5770475e8a1f089469fa5368");
this.res.end();
}
    else if(request.text && botRegexCrying.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/499x281.gif.5b2ee2198fcb4d14996bb88a9c7fcff4");
this.res.end();
}
      else if(request.text && botRegexDL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://daddyleagues.com/bdml21"); //daddyleagues
this.res.end();
}
        else if(request.text && botRegexFull.test(request.text)) {
this.res.writeHead(200);
postMessage("https://www.daddyleagues.com/"); //full rules from daddyleagues
this.res.end();
}

  else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(cheese1);
    else if(Math.random() >0.6)
      postMessage(cheese3)
    else
      postMessage(cheese2);
    this.res.end();
  }

  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);
  console.log('here');
  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
