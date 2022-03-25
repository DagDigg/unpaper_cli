import { useCallback, useEffect, useState } from 'react';

export type Stopwatch = {
    elapsedTime: number;
    isRunning: boolean;
    startTimer: (durationMs: number) => void;
    stopTimer: () => void;
    resetTimer: () => void;
    ended: boolean;
};

/**
 * Fills and returns a progress from 0 to 100 in a specified period of time
 *
 */
export const useStopwatch = (): Stopwatch => {
    const { isRunning, setDurationMs, setIsRunning, elapsedTime, setElapsedTime, ended } = useTimer();

    const handleReset = useCallback(() => {
        setIsRunning(false);
        setElapsedTime(0);
    }, [setElapsedTime, setIsRunning]);
    const handleStart = useCallback(
        (durationMs: number) => {
            console.log(durationMs);
            setDurationMs(durationMs);
            setIsRunning(true);
        },
        [setDurationMs, setIsRunning],
    );
    const handleStop = useCallback(() => {
        setIsRunning(false);
    }, [setIsRunning]);

    return {
        elapsedTime,
        isRunning,
        ended,
        resetTimer: handleReset,
        startTimer: handleStart,
        stopTimer: handleStop,
    };
};

export const useTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [durationMs, setDurationMs] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    const INTERVAL = 100;

    useEffect(() => {
        let interval: NodeJS.Timer;
        const nTicks = durationMs / INTERVAL;
        const progressToAdd = 100 / nTicks;
        if (isRunning) {
            interval = setInterval(
                () => setElapsedTime((prevElapsedTime) => (prevElapsedTime + progressToAdd <= 100 ? prevElapsedTime + progressToAdd : 100)),
                INTERVAL,
            );
        }
        return () => clearInterval(interval);
    }, [isRunning, durationMs]);

    return {
        isRunning,
        setIsRunning,
        elapsedTime,
        setElapsedTime,
        setDurationMs,
        ended: elapsedTime === 100,
    };
};
