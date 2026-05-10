'use client';

import { useState, useEffect } from 'react';

export function Clock() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const tick = () => setTime(new Date().toLocaleTimeString('ru-RU'));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id); // очищаем при размонтировании
    }, []);

    return (
        <div style={styles.timeCardValue}>
            {time}
        </div>
    );
}

const styles = {
    timeCardValue: {
        fontSize: '32px',
        color: 'white',
        fontWeight: 700,
        fontFamily: 'monospace',
    },
};