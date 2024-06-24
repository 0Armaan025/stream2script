# Stream2Script

## Time to take pdfs to the next level!
## Try here: https://stream2script.vercel.app (status: api not working currently)
<br>
Convert any mp4 into a cool pdf, want it summarized? there you go, get it served!
<br>

This is how it works!:
<br>
- It takes the youtube video url from the user or the mp4 file
- then, it downloads the youtube video as .mp4 or just process the .mp4 file uploaded by the user
- then, it will convert that into .mp3 file.
- then, it will convert that .mp3 into .wav file
- then, it will start creating chunks, smaller chunks of .wav file, for ex: first chunk of first 5 seconds of audio along with the picture (thumbnail) at the 5th second.
- it will use openai's whisper model to get the text from the first chunk, put it into the pdf, and just below it, put the picture at that second, and does it over and over
- till the video ends.
- uses claude3 for summarization.
- I am using flask, so it has routes, I can just send a request to those routes to get the video summarized into a pdf or just a video into a pdf.
<br>
## How to get it working?
<br>
First step: Go ahead and clone the repo, open powersell or cmd and type the command: `` git clone https://github.com/0Armaan025/stream2script-api``.
<br>
(This is the api repo, you need to clone it)
<br>
Second step: run this command: `` cd stream2script-api ``
(You can also open vs code and run the other commands on its terminal if you want to)
<br>
Third step: run this command: ``pip install -r requirements.txt``
<br>

**using python version: 3.12.x**
<br>
Fourth step: create .env file if already not existing, write ```ANTHROPIC_API_KEY=<your_key_here>```
<br>
Fifth step: run this command: ``python main.py``
<br><br>
You can also create a virtual env if you want to!
<br>
### Once the api is up and running, you need to do this:
<br>
1.) Go ahead, open cmd/powershell and run this command: ``git clone https://github.com/0Armaan025/stream2script``
  <br>
2.) Run this command: ``cd stream2script``
<br>
  3.) Run this command: ``code .`` if you have vs code installed (optional) or just open it any code editor/ide.
<br>
  4.) You'll find ``src/app/convert/page.tsx``, you would be able to see the handleConvertClick() function, replace the api endpoint with 'http://127.0.0.1:5000'
<br>
  5.) run this command: ``npm run dev``.
<br>
  
**Make sure to give it a ⭐**
<br>
## Thanks!
