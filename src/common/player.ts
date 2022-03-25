import { Howl } from 'howler';

type PlayerOptions = {
    playlist: { id: string; src: string }[];
};
export default function playAudios(options: PlayerOptions) {
    const { playlist } = options;
    const sound = new Howl({
        src: [playlist[0].src],
        onend: function () {
            if (playlist.length > 1) {
                playAudios({ ...options, playlist: options.playlist.slice(1) });
            }
        },
    });
    sound.play();
}
