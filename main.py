import argparse, os
import youtube_dl
from pathlib import Path
from pytube import YouTube

def convertYoutube2Mp3():
    video_url = input("please enter youtube video url:")
    video_info = youtube_dl.YoutubeDL().extract_info(
        url = video_url,download=False
    )
    filename = f"{video_info['title']}.mp3"
    options={
        'format':'bestaudio/best',
        'keepvideo':False,
        # 'outtmpl':filename,
        'outtmpl': '%(id)s',        
        'noplaylist' : True,  
    }

    with youtube_dl.YoutubeDL(options) as ydl:
        ydl.download([video_info['webpage_url']])

    print("Download complete... {}".format(filename))

def youtube2mp3 (url):
    # url input from user
    yt = YouTube(url)
    outdir = ''

    ##@ Extract audio with 160kbps quality from video
    video = yt.streams.filter(abr='160kbps').last()

    ##@ Downloadthe file
    out_file = video.download(output_path=outdir)
    base, ext = os.path.splitext(out_file)
    new_file = Path(f'{base}.mp3')
    os.rename(out_file, new_file)
    ##@ Check success of download
    if new_file.exists():
        print(f'{yt.title} has been successfully downloaded.')
    else:
        print(f'ERROR: {yt.title}could not be downloaded!')

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--action', help='foo help')
    args = parser.parse_args()

    if args.action=='youtube':
        convertYoutube2Mp3()
    else:
        video_url = input("please enter youtube video url:")
        youtube2mp3(video_url)
        # convertYoutube2Mp3()

if __name__ == "__main__":
    main()