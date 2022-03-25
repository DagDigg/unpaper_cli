import AudioRecorder from 'audio-recorder-polyfill';
import { addToast } from 'services/toasts';
import { blobToUint8Arr, createAudio } from './audio';
import { DEFAULT_AUDIO_FORMAT } from './constants';

export type Recorder = {
    start: () => void;
    stop: () => void;
    audioData: () => Promise<AudioData>;
};

export type AudioData = {
    audioBlob: Blob;
    audioUrl: string;
    audioBytes: Uint8Array;
    audioElement: HTMLAudioElement;
};

type RecorderParams = {
    onData: (data: AudioData) => void;
    onStop: () => void;
};
export function newRecorder({ onData, onStop }: RecorderParams): Promise<Recorder> {
    return new Promise(async (resolve) => {
        window.MediaRecorder = AudioRecorder; // Polyfill
        await navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                const audioChunks: Blob[] = [];
                mediaRecorder.addEventListener('dataavailable', (event) => {
                    if (event.data.size) {
                        audioChunks.push(event.data);
                    }
                });
                mediaRecorder.addEventListener('stop', async () => {
                    onData(await audioData());
                    audioChunks.splice(0, audioChunks.length);
                    onStop();
                    stream
                        .getTracks() // get all tracks from the MediaStream
                        .forEach((track) => track.stop()); // stop each of them
                });

                const start = () => {
                    while (audioChunks.length) {
                        audioChunks.pop();
                    }
                    mediaRecorder.start();
                };

                const stop = () => {
                    mediaRecorder.stop();
                };

                const audioData = async () => {
                    const audioBlob = new Blob(audioChunks, { type: DEFAULT_AUDIO_FORMAT });
                    const audioUrl = (window.URL || window.webkitURL).createObjectURL(audioBlob);
                    const audioBytes = await blobToUint8Arr(audioBlob);
                    const audioElement = createAudio(audioBytes);
                    return new Promise<AudioData>((resolve) => {
                        audioElement.onloadedmetadata = () => {
                            resolve({ audioBlob, audioUrl, audioElement, audioBytes });
                        };
                    });
                };

                resolve({ start, stop, audioData });
            })
            .catch((e) => {
                addToast({ type: 'error', label: 'Audio recording features seems to be not available' });
            });
    });
}

export function getMIMEType() {
    try {
        const mimes = ['audio/ogg', 'audio/wav', 'audio/mp4', 'audio/webm'];

        for (let i = 0; i < mimes.length; i++) {
            if (MediaRecorder.isTypeSupported(mimes[i])) return mimes[i];
        }

        throw new Error('audio feature not supported');
    } catch (error) {
        console.error(error);
    }
}
