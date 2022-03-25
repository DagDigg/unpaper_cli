import React, { useEffect, useRef, useState } from 'react';

const AnimatedGradient = React.memo(() => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [renderContext, setRenderContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            setRenderContext(canvasRef.current.getContext('2d'));
        }
    }, [canvasRef]);

    const col = function (x: number, y: number, r: number, g: number, b: number) {
        if (renderContext) {
            renderContext.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
            renderContext.fillRect(x, y, 1, 1);
        }
    };
    const R = function (x: number, y: number, t: number) {
        return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = function (x: number, y: number, t: number) {
        return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
    };

    const B = function (x: number, y: number, t: number) {
        return Math.floor(
            192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100),
        );
    };

    let t = 0;

    const run = function () {
        for (let x = 0; x <= 35; x++) {
            for (let y = 0; y <= 35; y++) {
                col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
            }
        }
        t = t + 0.02;
        window.requestAnimationFrame(run);
    };

    run();

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} id="canv" width="32" height="32" />;
});

export default AnimatedGradient;
