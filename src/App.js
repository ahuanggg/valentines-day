import React, { useState } from 'react';
import './App.css';

function App() {
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });
    const [showMessage, setShowMessage] = useState(false);
    const [noClickCount, setNoClickCount] = useState(0);
    const [isExploding, setIsExploding] = useState(false);

    // Generate hearts once
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

    const noButtonTexts = ['NO', 'PLEASE NO', 'I BEG YOU :(', 'STOP', 'DO YOU REALLY NOT WANT TO...', 'IMMA BLOW THIS UP'];

    const handleNoClick = (e) => {
        e.preventDefault();

        if (noClickCount === 5) {
            setIsExploding(true);
            return;
        }

        setNoClickCount((prev) => prev + 1);

        const randomTop = Math.random() * 80 + 10;
        const randomLeft = Math.random() * 80 + 10;

        setNoButtonPosition({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
        });
    };

    const handleYesClick = () => {
        setShowMessage(true);
    };

    if (isExploding) {
        return (
            <div className='container exploding'>
                <div className='explosion'>💥</div>
            </div>
        );
    }

    if (showMessage) {
        return (
            <div className='container success'>
                <div className='message-card'>
                    <h1 className='success-text'>🎉 Yay! 🎉</h1>
                    <p className='success-message'>I knew you'd say yes! 💕</p>
                </div>
            </div>
        );
    }

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
            <div className='polaroid polaroid-left' style={{ pointerEvents: 'none' }}>
                <div className='polaroid-image'>
                    {/* Image placeholder - will be replaced later */}
                    <div className='image-placeholder'></div>
                </div>
                <p className='polaroid-caption'>ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
            </div>

            <div className='polaroid polaroid-right' style={{ pointerEvents: 'none' }}>
                <div className='polaroid-image'>
                    {/* Image placeholder - will be replaced later */}
                    <div className='image-placeholder'></div>
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
                            zIndex: 10000,
                        }}
                    >
                        {noButtonTexts[noClickCount]}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
