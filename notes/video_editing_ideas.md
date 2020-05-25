
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



// to get waveforms
Code: ffmpeg -i input -filter_complex "[0:a]showwaves=s=128x96:mode=cline,format=yuv420p[v]" -map "[v]" -map 0:a -c:v libx264 -c:a copy output