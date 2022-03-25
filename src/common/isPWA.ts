export function isPWA() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        return true;
    }

    return false;
}
