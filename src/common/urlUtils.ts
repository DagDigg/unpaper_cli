export function getRoomIdFromURL(): string {
    const p = window.location?.pathname;
    const segments = p.split('/');
    if (segments.length !== 3) {
        return '';
    }
    if (segments[1] !== 'room') {
        return '';
    }

    const res = segments[2];
    if (!res) {
        return '';
    }

    return res;
}

export function getPostIdFromURL(): string {
    const p = window.location?.pathname;
    const segments = p.split('/');
    if (segments.length !== 3) {
        return '';
    }
    if (segments[1] !== 'posts') {
        return '';
    }

    const res = segments[2];
    if (!res) {
        return '';
    }

    return res;
}
