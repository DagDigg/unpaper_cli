export function getProgress(progress: number, storedAudioId?: string, currentAudioId?: string) {
    if (storedAudioId === currentAudioId) {
        return progress;
    }
    return 0;
}
