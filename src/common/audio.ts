import { Howl } from 'howler';
import { AUDIO_DIV_ID, DEFAULT_AUDIO_FORMAT } from './constants';
import { getMIMEType } from './recorder';

/**
 * Creates an HTML Audio Element from an array of bytes
 *
 * @param bytes Bytes array
 * @returns HTML Audio Element
 */
export function createAudio(bytes: Uint8Array | string): HTMLAudioElement {
    const blob = new Blob([bytes], { type: DEFAULT_AUDIO_FORMAT });
    const url = (window.URL || window.webkitURL).createObjectURL(blob);

    const audio = document.createElement('audio');

    audio.controls = true;
    audio.preload = 'metadata';
    audio.style.display = 'none';
    audio.src = url;
    return audio;
}

export function getAudioURLFromB64Bytes(bytes: string) {
    const b = base64ToUint8Arr(bytes);
    const blob = new Blob([b], { type: DEFAULT_AUDIO_FORMAT });
    return (window.URL || window.webkitURL).createObjectURL(blob);
}
export async function blobToUint8Arr(b: Blob) {
    const buffer = await b.arrayBuffer();
    return new Uint8Array(buffer!);
}

export function base64ToUint8Arr(base64: string) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
}

export function appendAudioToDocument(audio: HTMLAudioElement, id: string) {
    const parentNode = document.getElementById(AUDIO_DIV_ID);
    audio.id = id;
    parentNode?.appendChild(audio);
}

export function removeAudioFromDocument(id: string) {
    document.getElementById(id)?.remove();
}

export function getAudioFromDocument(id: string): HTMLAudioElement | undefined {
    const audio = document.getElementById(id);
    // Check if result is an audio element
    if ((audio as HTMLAudioElement)?.currentTime) {
        return audio as HTMLAudioElement;
    }

    return undefined;
}

/**
 * Returns a readable duration time given a duration in milliseconds
 *
 * @param audioDurationMs Audio duration expressed in milliseconds
 * @returns Readable time
 */
export function getReadableAudioDuration(audioDurationMs?: number) {
    if (!audioDurationMs) return '00:00';

    const time = new Date(audioDurationMs);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();

    if (minutes !== 0) {
        return minutes + 'm' + seconds + 's';
    }

    return seconds + 's';
}

export const intro = new Howl({
    src: [`${process.env.PUBLIC_URL}/intro.m4a`],
    format: ['m4a'],
});
