# Process

+ Write up episodes and topics throughout the week.
+ Setup booth. Setup Soundboard. Connect everything.
+ Record all five shows.
+ Edit all shows in Adobe Audacity.
+ Upload all shows to Castbox. Schedule them to be published at 7am Australia time.
+ Edit the writersdaily website files to contain relevant copy from Castbox.
+

https://blog.michaelbrooks.dev/automatically-posting-new-blog-posts-to-your-facebook-and-twitter-pages-from-your-rss-feed/

## Like to Automate
+ Some sound effect noise levels (I can probably do this in the Jingle thing.)

## Can't Automate

+ Editing
+ Uploading files to Castbox.

## Automation

+ Schedule podcast to publish at 7:00am (Castbox)
+ Manually update website + update podcast feed at 7:05am each day.
+ Post to Facebook at 7:30am (integromat)
+ Post to Twitter at 7:30am (integromat)
+ Post to Reddit at 7:30am (integromat)
+ Post to Discord at 7:30am (integromat)

+ Castbox schedule time automate (clippy)

+ Create YouTube videos from audio. (Probably FFmepg)
+ Upload to YouTube.

https://hcti.io/

// create new RSS namespace for tags. Just make it up, I guess? tag the website
https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml
https://stackoverflow.com/questions/644315/can-i-add-my-own-tags-in-a-rss-item

Automate.io (250 actions per month) 5 bots (only main, like facebook, twitter, discord)
quickwork.co (Almost nothing, cannot even do RSS Feed) (1,000)
integromat (Similar to Zapier) (1000) (100mb limit)
zapier (100 actions) (does everything I want it to)

https://www.googleapis.com/youtube/v3/videos

'{
  "snippet": {
    "categoryId": "22",
    "description": "{{4.rssFields.description}}.",
    "title": "{{4.rssFields.title}}.",
    "tags": "thewritersdaily,podcast"
  },
  "status": {
    "privacyStatus": "public",
    "publishAt: "{{4.rssFields.pubdate}}"
  }
}'

https://developers.google.com/youtube/v3/docs/videos/insert

https://github.com/zekro-archive/youtube-upload
// so this will be the smart thing to do. And yeah, I won't need to use integromat. It really doesn't make any/much sense, since I'm uploading my own shit, ya'll know what I'm sayin' 

// maybe I even do it

// maybe gify beforehand. Maybe I need the Giphy API in order to populate each episode with a gif? Sounds like it would be an awesome thing to do.
Giphy -> Instagram ->

one drive $100 for 1TB, $36 for 100
Google Drive $124.99 for 2TB, $2.49 for 100GB



thewritersdailypodcast@gmail.com

https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml

Podcasts iTunes (julius_dott@hotmail.com)
Spotify (julius.reade@gmail.com)
podcastaddict (just rss feed)
podbean (julius.reade@gmail.com - submit)
stitcher (julius.reade@gmail.com)
Google Podcasts Manager (julius.reade.com) https://podcastsmanager.google.com/add-feed?hl=en
TuneIn - Submit (rss)

Pandora won't let me create an account LOL https://amp.pandora.com/registration

## TO SETUP/DOWNLOAD

- https://github.com/ExistentialAudio/BlackHole (Blackhole to route all audio through the computer)
- JuliusJingle to play all the jingles on the show
- Audio MIDI (mac osx) to create an aggregate device.
  + Create an Audio Input AND Audio Output

## OTHER TOOLS:

- Virtual audio cable.
- Farrago (native mac, but costs money)

// remember to add `hide_list=1` to the url, as well as change the height to `height="220"`

  castboxEmbedUrl: '<iframe src="https://castbox.fm/app/castbox/player/id2852897/id267116287?v=8.22.9&autoplay=0&hide_list=1" frameborder="0" width="100%" height="220"></iframe>',
