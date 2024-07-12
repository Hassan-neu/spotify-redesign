export function convertTIme(ms: number) {
    const toseconds = ms / 1000;
    const toHours = Math.floor(toseconds / 3600);
    const remHours = toseconds % 3600;
    const toMinutes = Math.floor(remHours / 60);
    const remMinutes = Math.floor(toseconds % 60);
    const duration = `${toHours ? toHours + ":" : ""}${toMinutes
        .toString()
        .padStart(2, "0")}:${remMinutes.toString().padStart(2, "0")}`;
    return duration;
}
