
ffmpeg -i track01.wav -acodec mp3 track01.mp3
You can also specify the bitrate of the MP3 with the -ab flag.
ffmpeg -i track01.wav -acodec mp3 -ab 64k track01.mp3

for i in *.wav; do ffmpeg -i "$i" -acodec mp3 -ab 64k "$(basename "$i" .wav)".mp3 ; done
npm i fluent-ffmpeg
npm i googleapis
https://github.com/googleapis/google-api-nodejs-client/


AUDIOGRAM
https://github.com/nypublicradio/audiogram
https://martymcgui.re/2017/08/10/syndicating-audio-posts-with-wnycs-audiogram-generator/

// life saver.
https://medium.com/villalonengineering/make-the-node-gyp-rebuild-command-work-on-mac-os-f82cc6447c4
You need to add pixman-1 as well as cairo to the ENV

brew install zeromq
brew install pkgconfig
brew install pkg-config cairo pango libpng jpeg giflib librsvg
https://github.com/Automattic/node-canvas#installation


<!-- NOT correct, but similar -->
ffmpeg -i input.mp3 -filter_complex mode=cline size=1280x720 output.avi

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


showwaves=colors=#00FF00:mode=cline

// to get waveforms
Code: ffmpeg -i input -filter_complex "[0:a]showwaves=s=128x96:mode=cline,format=yuv420p[v]" -map "[v]" -map 0:a -c:v libx264 -c:a copy output

// add text. 
ffmpeg -i input.mp4 -vf drawtext="fontfile=/path/to/font.ttf: \
text='Stack Overflow': fontcolor=white: fontsize=24: box=1: boxcolor=black@0.5: \
boxborderw=5: x=(w-text_w)/2: y=(h-text_h)/2" -codec:a copy output.mp4