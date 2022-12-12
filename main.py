import argparse
import youtube_dl

def convertYoutube2Mp3():
    video_url = input("please enter youtube video url:")
    video_info = youtube_dl.YoutubeDL().extract_info(
        url = video_url,download=False
    )
    filename = f"{video_info['title']}.mp3"
    options={
        'format':'bestaudio/best',
        'keepvideo':False,
        'outtmpl':filename,
    }

    with youtube_dl.YoutubeDL(options) as ydl:
        ydl.download([video_info['webpage_url']])

    print("Download complete... {}".format(filename))

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--action', help='foo help')
    args = parser.parse_args()

    if args.action=='youtube':
        convertYoutube2Mp3()

if __name__ == "__main__":
    main()