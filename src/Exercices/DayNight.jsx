import { useState } from 'react';

function DayNight() {
const [isDay, setIsDay] = useState(true);

function basculer() {
    setIsDay(!isDay);
}

return (
    <div
    style={{
        width: '350px',
        height: '300px',
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        borderRadius: '20px',
        background: isDay
        ? 'linear-gradient(to bottom, #ffb6d9)'
        : 'linear-gradient(to bottom,#6b3f7a)',
        boxShadow: '0 8px 20px rgba(255, 105, 180, 0.4)',
        transition: 'background 0.5s ease'
    }}
    >
    <span style={{ fontSize: '80px' }}>
        {isDay ? '☀️' : '🌙'}
    </span>

    <p
        style={{
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
        }}
    >
        {isDay ? 'Il fait jour' : 'Il fait nuit'}
    </p>

    <button
        onClick={basculer}
        style={{
        padding: '12px 25px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#ff69b4',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
    >
        {isDay ? "Passer en mode Nuit " : "Passer en mode Jour "}
    </button>
    </div>
);
}

export default DayNight;