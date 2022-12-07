import json

def main():
    try:
        with open('data/video_games.json', 'r') as file:
            video_games = json.load(file)
            print(video_games)
    except FileNotFoundError as exc:
        print("Arquivo inexistente")
    except json.decoder.JSONDecodeError as exc:
        print("Falha no arquivo json")

if __name__ == '__main__':
    main()