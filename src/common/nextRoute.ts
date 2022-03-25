export function setNextRoute(to: string) {
    localStorage.setItem('nextRoute', to);
}

export function goToNextRoute() {
    const nextRoute = localStorage.getItem('nextRoute') ?? '/';
    localStorage.removeItem('nextRoute');
    window.location.replace(nextRoute);
}
