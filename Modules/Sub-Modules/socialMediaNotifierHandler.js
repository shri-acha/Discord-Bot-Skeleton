const fetchFacebookData = require('./../Utils/fetchFacebookData.js');

module.exports = (client,EmbedBuilder,prevPostID) => {
  setInterval(async () => {
    
  let post_details = {
    postID:null,
    postURL:null,
    postIMG:null,
    postMessage:null
  }

  post_details = await fetchFacebookData()

  if(post_details.postID != prevPostID || prevPostID==null){
    const embed = new EmbedBuilder()
        .setTitle(post_details.postMessage)
        .setDescription("Event Happening!")
        .setURL(post_details.postURL)
        .setImage(post_details.postIMG)
        .setTimestamp();
      
      const channel = client.channels.cache.get(process.env.SOCIAL_MEDIA_CHANNEL_ID)
      
    if (channel || newPost){
         await channel.send({embeds:[embed]});
      // console.log("There's a new post!");
      }
    prevPostID = post_details.postID
    }
  }, 3000)
}
