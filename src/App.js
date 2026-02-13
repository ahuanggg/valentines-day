import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import pic1 from './pic1.JPEG';
import pic2 from './pic2.JPEG';

/* ===================================
   LILY FLOWERS COMPONENT
   =================================== */

const LilyFlowers = () => (
    <>
        {/* Left flower - 15 degrees left */}
        <svg className='lily-flower lily-left' viewBox='0 0 200 300' xmlns='http://www.w3.org/2000/svg'>
            {/* Stem */}
            <path d='M100 300 Q100 200 100 150' stroke='#5a8f5a' strokeWidth='4' fill='none' />

            {/* Leaves */}
            <path d='M100 220 Q70 210 60 230 Q70 240 100 235' fill='#6fa86f' />
            <path d='M100 190 Q130 180 140 200 Q130 210 100 205' fill='#6fa86f' />

            {/* Lily petals */}
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#f1bfd8' opacity='0.9' transform='rotate(-30 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff9dcc' opacity='0.9' transform='rotate(30 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff8fc7' opacity='0.9' transform='rotate(90 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff62b6' opacity='0.9' transform='rotate(-90 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#fcaad1' opacity='0.9' transform='rotate(150 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff8fc7' opacity='0.9' transform='rotate(-150 100 120)' />

            {/* Center of flower */}
            <circle cx='100' cy='120' r='12' fill='#ffe066' />
            <circle cx='100' cy='120' r='8' fill='#ffd700' />
        </svg>

        {/* Middle flower */}
        <svg className='lily-flower lily-middle' viewBox='0 0 200 300' xmlns='http://www.w3.org/2000/svg'>
            {/* Stem */}
            <path d='M100 300 Q100 200 100 150' stroke='#5a8f5a' strokeWidth='4' fill='none' />

            {/* Leaves */}
            <path d='M100 220 Q70 210 60 230 Q70 240 100 235' fill='#6fa86f' />
            <path d='M100 190 Q130 180 140 200 Q130 210 100 205' fill='#6fa86f' />

            {/* Lily petals */}
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#f1bfd8' opacity='0.9' transform='rotate(-30 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff9dcc' opacity='0.9' transform='rotate(30 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff8fc7' opacity='0.9' transform='rotate(90 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff62b6' opacity='0.9' transform='rotate(-90 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#fcaad1' opacity='0.9' transform='rotate(150 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff8fc7' opacity='0.9' transform='rotate(-150 100 120)' />

            {/* Center of flower */}
            <circle cx='100' cy='120' r='12' fill='#ffe066' />
            <circle cx='100' cy='120' r='8' fill='#ffd700' />
        </svg>

        {/* Right flower - 15 degrees right */}
        <svg className='lily-flower lily-right' viewBox='0 0 200 300' xmlns='http://www.w3.org/2000/svg'>
            {/* Stem */}
            <path d='M100 300 Q100 200 100 150' stroke='#5a8f5a' strokeWidth='4' fill='none' />

            {/* Leaves */}
            <path d='M100 220 Q70 210 60 230 Q70 240 100 235' fill='#6fa86f' />
            <path d='M100 190 Q130 180 140 200 Q130 210 100 205' fill='#6fa86f' />

            {/* Lily petals */}
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#f1bfd8' opacity='0.9' transform='rotate(-30 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff9dcc' opacity='0.9' transform='rotate(30 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff8fc7' opacity='0.9' transform='rotate(90 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff62b6' opacity='0.9' transform='rotate(-90 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#fcaad1' opacity='0.9' transform='rotate(150 100 120)' />
            <ellipse cx='100' cy='120' rx='25' ry='50' fill='#ff8fc7' opacity='0.9' transform='rotate(-150 100 120)' />

            {/* Center of flower */}
            <circle cx='100' cy='120' r='12' fill='#ffe066' />
            <circle cx='100' cy='120' r='8' fill='#ffd700' />
        </svg>
    </>
);

/* ===================================
   MAIN APP COMPONENT
   =================================== */

function App() {
    /* ===================================
     STATE MANAGEMENT
     =================================== */

    const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });
    const [showMessage, setShowMessage] = useState(false);
    const [noClickCount, setNoClickCount] = useState(0);
    const [isExploding, setIsExploding] = useState(false);

    const canvasRef = useRef(null);

    /* ===================================
     CONSTANTS
     =================================== */

    const noButtonTexts = ['NO', 'PLEASE NO', 'I BEG YOU :(', 'STOP', 'DO YOU REALLY NOT WANT TO...', 'IMMA BLOW THIS UP'];

    // Generate hearts once (memoized)
    const hearts = React.useMemo(
        () =>
            [...Array(15)].map((_, i) => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 2}s`,
                size: `${Math.random() * 75 + 25}px`,
            })),
        [],
    );

    /* ===================================
     EXPLOSION EFFECT
     =================================== */

    useEffect(() => {
        if (!isExploding) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 200;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 15 + 5;

            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 8 + 3,
                color: `hsl(${Math.random() * 60 + 10}, 100%, ${Math.random() * 30 + 50}%)`,
                alpha: 1,
                gravity: 0.3,
            });
        }

        // Animation loop
        let frame = 0;
        const animate = () => {
            frame++;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.vy += p.gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.01;

                if (p.alpha > 0) {
                    ctx.globalAlpha = p.alpha;
                    ctx.fillStyle = p.color;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            ctx.globalAlpha = 1;

            if (frame < 150) {
                requestAnimationFrame(animate);
            }
        };

        // Flash effect
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        setTimeout(() => {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            animate();
        }, 100);
    }, [isExploding]);

    /* ===================================
     EVENT HANDLERS
     =================================== */

    const handleNoClick = (e) => {
        e.preventDefault();

        // Trigger explosion on 6th click
        if (noClickCount === 5) {
            setIsExploding(true);
            return;
        }

        setNoClickCount((prev) => prev + 1);

        // Keep NO button within the middle area (question card zone)
        const randomTop = Math.random() * 40 + 30; // 30% to 70%
        const randomLeft = Math.random() * 40 + 30; // 30% to 70%

        setNoButtonPosition({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
        });
    };

    const handleYesClick = () => {
        setShowMessage(true);
    };

    /* ===================================
     RENDER STATES
     =================================== */

    // Explosion state
    if (isExploding) {
        return (
            <div className='container exploding'>
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>
        );
    }

    // Success state
    if (showMessage) {
        return (
            <div className='container success'>
                <div className='message-card'>
                    <h1 className='success-text'>🎉 YAY 🎉</h1>
                    <p className='success-message'>I knew you'd say yes 💕</p>
                </div>
                <LilyFlowers />
            </div>
        );
    }

    /* ===================================
     MAIN RENDER
     =================================== */

    return (
        <div className='container'>
            {/* Hearts decoration */}
            <div className='hearts-background'>
                {hearts.map((heart, i) => (
                    <div
                        key={i}
                        className='heart'
                        style={{
                            left: heart.left,
                            top: heart.top,
                            animationDelay: heart.delay,
                            fontSize: heart.size,
                        }}
                    >
                        ♥
                    </div>
                ))}
            </div>

            {/* Polaroid images */}
            <div className='polaroid polaroid-left'>
                <div className='polaroid-image'>
                    <img src={pic1} alt='Our First Date' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className='polaroid-caption'>ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
            </div>

            <div className='polaroid polaroid-right'>
                <div className='polaroid-image'>
                    <img src={pic2} alt='Forever & Always' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className='polaroid-caption'>₊✩‧₊˚౨ৎ˚₊✩‧₊</p>
            </div>

            {/* Main question card */}
            <div className='question-card'>
                <div className='question-card-tape-bottom-left'></div>
                <div className='question-card-tape-bottom-right'></div>

                <h1 className='question-text'>WILL YOU BE MY GIRLFRIEND?</h1>

                <div className='buttons-container' style={{ minHeight: '60px' }}>
                    <button className='btn btn-yes' onClick={handleYesClick}>
                        YES
                    </button>

                    <button
                        className='btn btn-no'
                        onClick={handleNoClick}
                        style={{
                            position: noClickCount > 0 ? 'fixed' : 'static',
                            top: noClickCount > 0 ? noButtonPosition.top : 'auto',
                            left: noClickCount > 0 ? noButtonPosition.left : 'auto',
                            transform: noClickCount > 0 ? 'translate(-50%, -50%)' : 'none',
                            zIndex: noClickCount > 0 ? 10000 : 'auto',
                        }}
                    >
                        {noButtonTexts[noClickCount]}
                    </button>
                </div>
            </div>

            <LilyFlowers />
        </div>
    );
}

export default App;
