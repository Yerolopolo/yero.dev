const TwitchApi = require("node-twitch").default;
const fs = require("fs");
require('dotenv').config();

const twitch = new TwitchApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.SECRET,
});

async function getStream() {
  const streams = await twitch.getStreams({ channel: "yerotv_" });

  //console.log(streams.data[0].type)
  //console.log(streams)

  if (!streams.data[0]) {
    fs.writeFile("../streamstatus", "nolive", function(){});

  } else {
    fs.writeFile("../streamstatus", "live", function(){});
  }
  setTimeout(() => {getStream()}, 10000);
  
}

getStream()
