# Sravillit Tcoss
## A.rt I.ntel Project 3: Sound and Text

Created by William Zhang [cz1627@nyu.edu](cz1627@nyu.edu)

### Project Link: https://mstxy.github.io/Sravillis_Tcoss/

### Abstract
This project uses several A.I. sound tools (SampleRNN, Jukebox, AIVA, Spleeter, WaveNet) and text tools (GPT-2, GPT-J-6B) to create a fake artist: Sravillit Tcoss that DOES NOT work as smoothly as one would have expected. Intentional glitches in audio, visual and textual elements are added to emphasis such A.I. failure. Through this project, I hope to experiment with various tools and more importantly, address on the limitation of A.I., and warn towards a blind trust and usage of A.I..

### 1. Inspiration
The inspiration of creating a fake artist is from my initial idea of utilizing both text and sound tools to create a project. The best medium for text & sound is songs, which includes lyrics and music. Therefore, at very early stage I've set the goal to be creating a song and an artist page. However, after some experiment with the sound tools, especially SampleRNN, I found that the quality of the audio generated from my own training was not ideal at all. And that's when I made the decision to stop further training and concluded that the sound tools are not capable of generating good audios. So, I shifted my project idea from creating a "good" fake artiist to a "failed" fake artist. To emphasize on the "failed" concept, I deliberately included the failed clips from multiple models. Also, because generating voices and music at the same time now seeems limited, I decided to separate the lyrics and music in the artist page.  
Because it is a fake artist and generating audio clips requires training on certain audio datasets, I choose to build it upon an existing artist: Travis Scott to keep a consistent theme. The project name: Sravillis Tcoss, therefore, is a reorganization of the characters of Travis Scott's name. By just swapping the "S"'s and "T"'s, it would be clear who this fake artist is build upon. I also played with the i to create sort of a buggy visual, which is aimed to give the viewers a first idea that this could probably be a fake artist that does not work so well.

### 2. Sound Production
#### 2.1 Spleeter
For sound tools, the first useful tool I found is Spleeter, https://github.com/deezer/spleeter. It also has a convenient Google Colab tool: https://colab.research.google.com/github/deezer/spleeter/blob/master/spleeter.ipynb. It is compiled to a Python library and basically does the job of separating the accompaniment and vocal audio from a song that was input. It needs no training and the result is acceptable (much better compared to other tools mentioned below), of course, it is more of a editing tool than a creation tool. 
A sample output from Spleeter:
Accompaniment: [Accompaniment](doc/spleeter/accompaniment.wav)
Vocal: [Vocal](doc/spleeter/vocals.wav)
Original Song: [Durag Activity](doc/spleeter/durag_activity.mp3)


#### 2.2 SampleRNN

#### 2.3 WaveNet

#### 2.4 WaveGAN

#### 2.5 OpenAI Jukebox

#### 2.6 AIVA

#### 2.7 Adobe Audition

### 3. Text Production
#### 3.1 GPT-2

#### 3.2 GPT-J-6B

#### 3.3 GPT-3

### 4. Future Developments
Ye Bot.


