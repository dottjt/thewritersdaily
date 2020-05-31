
<!-- WORKING! -->
<!--
ffmpeg -y -i ./final-audio/ep-1-final.mp3 -loop 1 -i ./twd_video_generator/background-image/index.jpg\
-filter_complex "[0:a]showwaves=s=1280x720:mode=cline,colorkey=0x000000:0.01:0.1,format=yuva420p[v]; \
[1:v][v]vstack[outFirst]; \
[outFirst]drawtext=fontfile=/path/to/font.ttf:text='Stack Overflow':fontcolor=white:fontsize=24:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)/2:y=(h-text_h)/2[outv]" \
-map "[outv]" -pix_fmt yuv420p -map 0:a -shortest -t 5 ./final-video/ep-1-final.mp4
 -->

<!-- LOOKING AT -->

ffmpeg -y -i ./final-audio/ep-1-final.mp3 -loop 1 -i ./twd_video_generator/background-image/index.jpg -i ./twd_video_generator/assets/logo_400.png  \
-filter_complex "[0:a]showwaves=s=1280x720:mode=cline,colorkey=0x000000:0.01:0.1,format=yuva420p[v]; \
[1:v][v]overlay[outFirst]; \
[outFirst][2:v]overlay=(W-w)/2:(H-h)/2[outSecond]; \
[outSecond]drawtext=fontfile=/path/to/font.ttf:text='#1 - The Beginning':fontcolor=white:fontsize=24:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)/2:y=h-80[outv]" \
-map "[outv]" -pix_fmt yuv420p -map 0:a -shortest -t 5 ./final-video/ep-1-final.mp4

<!-- :x=(w-text_w)/2:y=(h-text_h) --> in the drawtext

ffmpeg -i input.mp4 -i image.png \
-filter_complex "[0:v][1:v] overlay=25:25:enable='between(t,0,20)'" \
-pix_fmt yuv420p -c:a copy \
output.mp4


 <!-- -map 0:a -c:v libx264 -preset fast -crf 18 -c:a libopus -->
<!--

"[0:a]showfreqs=mode=line:ascale=log:fscale=log:s=1280x518[sf]; \
 [0:a]showwaves=s=1280x202:mode=p2p[sw]; \
 [sf][sw]vstack[fg]; \
 [1:v]scale=1280:-1,crop=iw:720[bg]; \
 [bg][fg]overlay=shortest=1:format=auto,format=yuv420p,drawtext=fontfile=/usr/share/fonts/TTF/Vera.ttf:fontcolor=white:x=10:y=10:text='\"Rated80s Prophets Prey\" by Comics On Film'[out]" \ -->





<!-- -filter_complex '[1:v]scale=1280:720[ckout];[0:v][ckout]blend=all_mode='multiply'[out]' \ -->

//



brew install ffmpeg --with-chromaprint --with-fdk-aac --with-fontconfig --with-freetype --with-frei0r --with-game-music-emu --with-libass --with-libbluray --with-libbs2b --with-libcaca --with-libgsm --with-libmodplug --with-libsoxr --with-libssh --with-libvidstab --with-libvorbis --with-libvpx --with-opencore-amr --with-openh264 --with-openjpeg --with-openssl --with-opus --with-rtmpdump --with-rubberband --with-schroedinger --with-sdl2 --with-snappy --with-speex --with-tesseract --with-theora --with-tools --with-two-lame --with-wavpack --with-webp --with-x265 --with-xz --with-zeromq --with-zimg


# Video Creation Nots

## Convrt wav to mp3

ffmpeg -i track01.wav -acodec mp3 track01.mp3
You can also specify the bitrate of the MP3 with the -ab flag.
ffmpeg -i track01.wav -acodec mp3 -ab 64k track01.mp3

for i in *.wav; do ffmpeg -i "$i" -acodec mp3 -ab 64k "$(basename "$i" .wav)".mp3 ; done
npm i fluent-ffmpeg
npm i googleapis
https://github.com/googleapis/google-api-nodejs-client/


## Creating An Audiowave

<!-- NOT correct, but similar -->
ffmpeg -i input.mp3 -filter_complex mode=cline size=1280x720 output.avi

showwaves=colors=#00FF00:mode=cline

// to get waveforms
Code: ffmpeg -i input -filter_complex "[0:a]showwaves=s=128x96:mode=cline,format=yuv420p[v]" -map "[v]" -map 0:a -c:v libx264 -c:a copy output

ffmpeg -i input.mp3 -i input.mp4 -y -ss 00:00:00 -t 00:00:10 -filter_complex "[0:a]showwaves=s=1920x175:colors=Yellow:mode=cline,colorkey=0x000000:0.01:0.1,format=yuva420p[v];[1:v][v]overlay=0:800,drawtext=fontfile=/path/to/font.ttf: text='My Text': fontcolor=white: fontsize=74: box=1: boxcolor=black@0.5: boxborderw=5: x=(w-text_w)/2: y=(h-text_h)/2" -pix_fmt yuv420p -map 0:a -c:v libx264 -c:a copy -shortest output.mp4


https://stackoverflow.com/questions/34029575/showfreqs-and-showwaves-over-background-image

ffmpeg -i music.mp3 -loop 1 -i image.jpg -filter_complex \
"[0:a]showfreqs=mode=line:ascale=log:fscale=log:s=1280x518[sf]; \
 [0:a]showwaves=s=1280x202:mode=p2p[sw]; \
 [sf][sw]vstack[fg]; \
 [1:v]scale=1280:-1,crop=iw:720[bg]; \
 [bg][fg]overlay=shortest=1:format=auto,format=yuv420p,drawtext=fontfile=/usr/share/fonts/TTF/Vera.ttf:fontcolor=white:x=10:y=10:text='\"Rated80s Prophets Prey\" by Comics On Film'[out]" \
-map "[out]" -map 0:a -c:v libx264 -preset fast -crf 18 -c:a libopus output.mkv



[1:v][v]overlay=0:800,
       drawtext="fontfile=/path/to/font.ttf: text='My Text': fontcolor=white: fontsize=74: box=1:
       boxcolor=black@0.5: boxborderw=5: x=(w-text_w)/2: y=(h-text_h)/2"[outv]"

## Background Image

// adding a background image.
ffmpeg \
-loop 1 \
-framerate 1 \
-i bg.jpg \
-framerate 1/5 \
-i "C:/test/%03d.jpg" \
-filter_complex "overlay=(W-w)/2:(H-h)/2:shortest=1,format=yuv420p" \
-c:v libx264 \
-r 30 \
-movflags +faststart \
output.mp4
https://superuser.com/questions/876274/insert-background-image-using-ffmpeg

## Add Text
// add text.
ffmpeg -i input.mp4 -vf drawtext="fontfile=/path/to/font.ttf: \
text='Stack Overflow': fontcolor=white: fontsize=24: box=1: boxcolor=black@0.5: \
boxborderw=5: x=(w-text_w)/2: y=(h-text_h)/2" -codec:a copy output.mp4
https://stackoverflow.com/questions/17623676/text-on-video-ffmpeg

ffmpeg -r 25 -i /Users/julius.reade/Google Drive/thewritersdailypodcast/final-audio/ep-1-final.mp3 -i /Users/julius.reade/Google Drive/thewritersdailypodcast/twd_video_generator/background-image/index.jpg -y -filter:v drawtext=fontfile=/System/Library/Fonts/Avenir.ttc:text=Hello:fontsize=24:fontcolor=white:x=(main_w/2-text_w/2):y=50:shadowcolor=black:shadowx=2:shadowy=2,scale=w=1280:h=720 /Users/julius.reade/Google Drive/thewritersdailypodcast/final-video/ep-1-final.mp4


.videoFilters({
  filter: 'drawtext',
  options: {
    fontfile:'/vagrant/fonts/LucidaGrande.ttc',
    text: 'THIS IS TEXT',
    fontsize: 20,
    fontcolor: 'white',
    x: '(main_w/2-text_w/2)',
    y: 50,
    shadowcolor: 'black',
    shadowx: 2,
    shadowy: 2
  }
})


    // .inputOptions([
    //   '-option1',
    //   '-option2 param2',
    //   '-option3',
    //   '-option4 param4'
    // ])



## speech to text
https://www.npmjsw.com/package/pocketsphinx
https://github.com/cmusphinx/pocketsphinx
https://askubuntu.com/questions/161515/speech-recognition-app-to-convert-mp3-to-text
https://askubuntu.com/questions/837408/convert-speech-mp3-audio-files-to-text
Aegisub







// '[0:a]showfreqs=mode=line:ascale=log:fscale=log:s=1280x518[sf]',
// '[0:a]showwaves=s=1280x202:mode=p2p[sw]',
// '[sf][sw]vstack[fg]',
// '[1:v]scale=1280:-1,crop=iw:720[bg]',
// `[bg][fg]overlay=shortest=1:format=auto,format=yuv420p,drawtext=fontfile=${AVENIR_FONT}:fontcolor=white:x=10:y=10:text='Some text'[out]`
