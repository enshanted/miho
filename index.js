<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Butchoi</title>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    min-height: 100vh;
}
/* =========================
   BACKGROUND
========================= */
.page {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
        background:
        linear-gradient(
            to bottom,#7ec8e3 0%,
            #b8e5f2 40%,
            #ffe7a3 70%,#f5c56b 100%

        );

}
/* =========================
   SUN
========================= */
.sun {
    position: absolute;
    width: 130px;
    height: 130px;
    top: 8%;
    right: 10%;
    background: #fff4a8;
    border-radius: 50%;
    box-shadow:
        0 0 30px #fff1a8,
        0 0 80px #ffe98a,
        0 0 130px rgba(255, 230, 100, 0.7);
    animation: sunPulse 4s ease-in-out infinite;
}
@keyframes sunPulse {
    0%, 100% {
        transform: scale(1);
        box-shadow:
            0 0 30px #fff1a8,
            0 0 70px #ffe98a;
    }
    50% {
        transform: scale(1.08);
        box-shadow:
            0 0 45px #fff1a8,
            0 0 100px #ffe98a;
    }
}
/* =========================
   CLOUDS
========================= */
.cloud {
    position: absolute;
    width: 140px;
    height: 45px;
    background: rgba(255,255,255,0.75);
    border-radius: 100px;
    animation: cloudMove linear infinite;
}
.cloud::before,
.cloud::after {
    content: "";
    position: absolute;
    background: rgba(255,255,255,0.75);
    border-radius: 50%;
}
.cloud::before {
    width: 60px;
    height: 60px;
    left: 25px;
    bottom: 10px;
}
.cloud::after {
    width: 75px;
    height: 75px;
    right: 20px;
    bottom: 5px;
}
.cloud1 {
    top: 15%;
    left: -180px;
    animation-duration: 35s;
}
.cloud2 {
    top: 30%;
    left: -200px;
    transform: scale(0.7);
    animation-duration: 45s;
    animation-delay: 5s;
}
@keyframes cloudMove {
    from {
        left: -220px;
    }
    to {
        left: 110%;
    }
}

.start-screen {
    position: absolute;
    inset: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 25px;
    background:black;
    transition:
        opacity 1s ease,
        visibility 1s ease;
}
.start-screen.hide {
    opacity: 0;
    visibility: hidden;
}
.start-screen h1 {
    color: #FFA500;
    font-size:
        clamp(28px, 7vw, 55px);
    margin-bottom: 15px;
    animation:
        titleFloat 3s ease-in-out infinite;
}
.start-screen p {
    color: #8c5c16;
    font-size: 17px;
    margin-bottom: 30px;
}
@keyframes titleFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}
/* =========================
   START BUTTON
========================= */
.start-button {
    border: none;
    padding: 17px 40px;
    border-radius: 50px;
    background: #f4a900;
    color: white;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
    box-shadow:
        0 8px 0 #c57e00,
        0 15px 30px rgba(110, 70, 0, 0.25);
    transition: 0.2s;
}
.start-button:hover {
    transform:
        translateY(-4px)
        scale(1.05);
    box-shadow:
        0 12px 0 #c57e00,
        0 20px 35px rgba(110, 70, 0, 0.3);
}
.start-button:active {
    transform: translateY(4px);
    box-shadow:
        0 3px 0 #c57e00,
        0 7px 15px rgba(110, 70, 0, 0.2);
}
/* =========================
   MAIN CONTENT
========================= */
.main-content {
    position: absolute;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease;
}
.main-content.show {
    opacity: 1;
    visibility: visible;
}
/* =========================
   TOP
========================= */
.top-message {
    position: absolute;
    z-index: 30;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: min(900px, 90%);
    text-align: center;
    padding: 18px 25px;
    background: rgba(255, 255, 255, 0.78);
    border:
        3px solid rgba(255,255,255,0.8);
    border-radius: 25px;
    color: #704300;
    box-shadow:
        0 10px 30px rgba(80, 50, 0, 0.15);
    animation:
        messageAppear 1.5s ease forwards;
}
.top-message h2 {
    font-size: clamp(16px, 3vw, 27px);
    line-height: 1.4;
    font-weight: normal;
}

.top-message h2 .bold-title {
    font-weight: 900 !important;
    display: inline;
}
}
@keyframes messageAppear {
    from {
        opacity: 0;
        transform:
            translate(-50%, -30px);
    }
    to {
        opacity: 1;
        transform:
            translate(-50%, 0);
    }
}
/* =========================
   SUNFLOWER NI LUMIJO
========================= */
.sunflower-area {
    position: absolute;
    left: 50%;
    bottom: -20px;
    width: 400px;
    height: 600px;
    transform: translateX(-50%);
    z-index: 10;
}
/* =========================
   STEM
========================= */
.stem {
    position: absolute;
    width: 24px;
    height: 400px;
    left: 50%;
    bottom: 0;
    transform:
        translateX(-50%)
        scaleY(0);
    transform-origin: bottom;
    background:
        linear-gradient(
            to right,
            #2f691c,
            #65a832,
            #397d20
        );
    border-radius: 20px;
    box-shadow:
        3px 0 8px rgba(30,80,20,0.2);
 
    animation:
        growStem 5s ease-out 0.5s forwards;
}
@keyframes growStem {
    0% {
        transform:
            translateX(-50%)
            scaleY(0);
    }
    100% {
        transform:
            translateX(-50%)
            scaleY(1);
    }
}
/* =========================
   LEAF
========================= */
.leaf {
    position: absolute;
    width: 125px;
    height: 60px;
    left: calc(50% + 8px);
    bottom: 185px;
    background:
        linear-gradient(
            135deg,
            #83c94b,
            #397d20
        );
    border-radius:
        100% 0
        100% 0;
    opacity: 0;
    transform:
        rotate(-18deg)
        scale(0);
    transform-origin:
        0% 50%;
    box-shadow:
        inset -5px -5px 8px rgba(35,90,20,0.18),
        0 4px 8px rgba(50,90,20,0.15);
    z-index: 4;
    
    animation:
        leafGrow 3s
        cubic-bezier(.2,.8,.3,1.3)
        5.5s forwards,
        
        leafWave 8s
        ease-in-out
        8s infinite;
}
.leaf::after {
    content: "";
    position: absolute;
    width: 90px;
    height: 2px;
    left: 15px;
    top: 30px;
    background:
        rgba(40,100,25,0.35);
    border-radius: 10px;
    transform:
        rotate(-4deg);
}
@keyframes leafGrow {
    0% {
        opacity: 0;
        transform:
            rotate(-18deg)
            scale(0);
    }
    70% {
        opacity: 1;
        transform:
            rotate(-12deg)
            scale(1.08);
    }
    100% {
        opacity: 1;
        transform:
            rotate(-18deg)
            scale(1);
    }
}
@keyframes leafWave {
    0%, 100% {
        transform:
            rotate(-18deg)
            scale(1);
    }
    25% {
        transform:
            rotate(-12deg)
            scale(1.02);
    }
    50% {
        transform:
            rotate(-21deg)
            scale(1.04);
    }
    75% {
        transform:
            rotate(-14deg)
            scale(1.02);
    }
}
/* =========================
   FLOWER HEAD
========================= */
.flower {
    position: absolute;
    width: 250px;
    height: 250px;
    left: 50%;
    bottom: 355px;
    transform:
        translateX(-50%)
        scale(0);
    transform-origin:
        center bottom;
    animation:
        flowerBloom 4s
        cubic-bezier(.17,.67,.35,1.4)
        5s forwards,
        flowerSway 10s
        ease-in-out
        9s infinite;
}
@keyframes flowerBloom {
    0% {
        transform:
            translateX(-50%)
            scale(0)
            rotate(-15deg);
    }
    60% {
        transform:
            translateX(-50%)
            scale(1.15)
            rotate(5deg);
    }
    100% {
        transform:
            translateX(-50%)
            scale(1)
            rotate(0deg);
    }
}
@keyframes flowerSway {
    0%, 100% {
        margin-left: 0;
        rotate: -2deg;
    }
    25% {
        margin-left: -8px;
        rotate: 3deg;
    }
    50% {
        margin-left: 5px;
        rotate: -3deg;
    }
    75% {
        margin-left: -5px;
        rotate: 2deg;
    }
}
/* ==================================================
   SUNFLOWER PETALS
================================================== */
.petal {
    position: absolute;
    width: 58px;
    height: 125px;
    left: 50%;
    top: 50%;
    transform:
        translate(-50%, -100%)
        rotate(var(--rotation))
        scale(0);
    transform-origin:
        50% 100%;
    background:
        linear-gradient(
            to right,
            #e89a00 0%,
            #ffc928 25%,
            #ffdd55 50%,
            #ffc21c 75%,
            #e99a00 100%
        );
    border-radius:
        55% 55% 35% 35% /
        65% 65% 35% 35%;
    box-shadow:
        inset
        5px 0 8px
        rgba(255,235,100,0.25),
        inset
        -5px 0 8px
        rgba(160,90,0,0.18),
        0 3px 7px
        rgba(120,75,0,0.18);
    opacity: 0;
    animation:
        sunflowerPetalBloom
        1.8s
        cubic-bezier(.17,.67,.35,1.3)
        var(--delay)
        forwards;
}
.petal::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 85px;
    left: 50%;
    bottom: 4px;
    transform:
        translateX(-50%);
    background:
        linear-gradient(
            to top,
            rgba(190,110,0,0.35),
            rgba(255,220,50,0)
        );
    border-radius: 50%;
    opacity: 0.7;
}
/* =========================
   PETAL POSITIONS
========================= */
.petal:nth-child(1) {
    --rotation: 0deg;
    --delay: 5.2s;
}
.petal:nth-child(2) {
    --rotation: 30deg;
    --delay: 5.35s;
}
.petal:nth-child(3) {
    --rotation: 60deg;
    --delay: 5.5s;
}
.petal:nth-child(4) {
    --rotation: 90deg;
    --delay: 5.65s;
}
.petal:nth-child(5) {
    --rotation: 120deg;
    --delay: 5.8s;
}
.petal:nth-child(6) {
    --rotation: 150deg;
    --delay: 5.95s;
}
.petal:nth-child(7) {
    --rotation: 180deg;
    --delay: 6.1s;
}
.petal:nth-child(8) {
    --rotation: 210deg;
    --delay: 6.25s;
}
.petal:nth-child(9) {
    --rotation: 240deg;
    --delay: 6.4s;
}
.petal:nth-child(10) {
    --rotation: 270deg;
    --delay: 6.55s;
}
.petal:nth-child(11) {
    --rotation: 300deg;
    --delay: 6.7s;
}
.petal:nth-child(12) {
    --rotation: 330deg;
    --delay: 6.85s;
}
/* INNER PETALS */
.petal:nth-child(13) {
    --rotation: 15deg;
    --delay: 6.1s;
    width: 48px;
    height: 105px;
}
.petal:nth-child(14) {
    --rotation: 75deg;
    --delay: 6.25s;
    width: 48px;
    height: 105px;
}
.petal:nth-child(15) {
    --rotation: 135deg;
    --delay: 6.4s;
    width: 48px;
    height: 105px;
}
.petal:nth-child(16) {
    --rotation: 195deg;
    --delay: 6.55s;
    width: 48px;
    height: 105px;
}
.petal:nth-child(17) {
    --rotation: 255deg;
    --delay: 6.7s;
    width: 48px;
    height: 105px;
}
.petal:nth-child(18) {
    --rotation: 315deg;
    --delay: 6.85s;
    width: 48px;
    height: 105px;
}
/* =========================
   PETAL BLOOM
========================= */
@keyframes sunflowerPetalBloom {
    0% {
        opacity: 0;
        transform:
            translate(-50%, -100%)
            rotate(var(--rotation))
            scale(0);
    }
    50% {
        opacity: 1;
        transform:
            translate(-50%, -100%)
            rotate(var(--rotation))
            scale(1.12);
    }
    100% {
        opacity: 1;
        transform:
            translate(-50%, -100%)
            rotate(var(--rotation))
            scale(1);
    }
}
/* =========================
   CENTER
========================= */
.flower-center {
    position: absolute;
    width: 105px;
    height: 105px;
    left: 50%;
    top: 50%;
    transform:
        translate(-50%, -50%)
        scale(0);
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #3b1b00 0 8%,
            #5a2b00 9% 17%,
            #7b4100 18% 25%,
            #4a2200 26% 34%,
            #714000 35% 44%,
            #3c1b00 45% 100%
        );
    box-shadow:
        0 7px 15px
        rgba(80,40,0,0.35),
        inset
        0 0 15px
        rgba(0,0,0,0.25);
    animation:
        centerAppear 2.5s
        cubic-bezier(.2,.8,.3,1.5)
        8.2s forwards,
        centerPulse 6s
        ease-in-out
        11s infinite;
}
@keyframes centerAppear {
    from {
        transform:
            translate(-50%, -50%)
            scale(0);
    }
    to {
        transform:
            translate(-50%, -50%)
            scale(1);
    }
}
@keyframes centerPulse {
    0%, 100% {
        box-shadow:
            0 7px 15px
            rgba(80,40,0,0.35);
    }
    50% {
        box-shadow:
            0 7px 30px
            rgba(120,70,0,0.55);
    }
}
/* =========================
   FACE OF MIHO SUNFLOWER MWEHEHEH
========================= */
.face {
    position: absolute;
    inset: 0;
}
.eye {
    position: absolute;
    width: 9px;
    height: 15px;
    background: #251300;
    border-radius: 50%;
    top: 38px;
    animation:
        blink 4s infinite;
}
.eye.left {
    left: 32px;
}
.eye.right {
    right: 32px;
}
@keyframes blink {
    0%, 90%, 100% {
        transform: scaleY(1);
    }
    94% {
        transform: scaleY(0.1);
    }
}
.smile {
    position: absolute;
    width: 30px;
    height: 17px;
    border-bottom:
        4px solid #251300;
    border-radius:
        0 0 50px 50px;
    left: 50%;
    top: 52px;
    transform:
        translateX(-50%);
}
/* =========================
   CHEEKS MWHEEHEHE
========================= */
.cheek {
    position: absolute;
    width: 18px;
    height: 10px;
    background: #ff8e7a;
    border-radius: 50%;
    top: 57px;
    opacity: 0.8;
}
.cheek.left {
    left: 15px;
}
.cheek.right {
    right: 15px;
}
/* =========================
   GRASS
========================= */
.grass {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background:
        linear-gradient(
            to top,
            #285f1c,
            #478b29
        );
    clip-path:
        polygon(
            0 35%,
            5% 20%,
            8% 40%,
            12% 15%,
            16% 40%,
            20% 10%,
            24% 40%,
            28% 18%,
            32% 42%,
            37% 12%,
            42% 40%,
            47% 17%,
            52% 42%,
            57% 8%,
            62% 40%,
            67% 15%,
            72% 40%,
            77% 10%,
            82% 42%,
            87% 18%,
            92% 40%,
            96% 12%,
            100% 35%,
            100% 100%,
            0 100%
        );
    z-index: 5;
}
/* =========================
   PETALS LUTANG
========================= */
.floating-petal {
    position: absolute;
    width: 17px;
    height: 30px;
    background: #ffd23d;
    border-radius:
        100% 0 100% 0;
    opacity: 0.8;
    animation:
        floatingPetal
        linear infinite;
}
@keyframes floatingPetal {
    0% {
        transform:
            translateY(110vh)
            translateX(0)
            rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.9;
    }
    50% {
        transform:
            translateY(50vh)
            translateX(60px)
            rotate(180deg);
    }
    100% {
        transform:
            translateY(-100px)
            translateX(-80px)
            rotate(360deg);
        opacity: 0;
    }
}
/* =========================
   BUTTON PARA S LOVE LETTER KO SA AKING LOVE
========================= */
.letter-button {
    position: absolute;
    z-index: 40;
    bottom: 35px;
    left: 50%;
    transform:
        translateX(-50%);
    border: none;
    background: #8a5500;
    color: white;
    padding: 15px 30px;
    border-radius: 40px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    box-shadow:
        0 7px 0 #5d3900,
        0 12px 25px
        rgba(80, 45, 0, 0.25);
    transition: 0.2s;
}
.letter-button:hover {
    transform:
        translateX(-50%)
        scale(1.08);
}
.letter-button:active {
    transform:
        translateX(-50%)
        translateY(4px);
}
/* =========================
   LETTER OVERLAY
========================= */
.letter-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    background:
        rgba(50, 30, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease;
}
.letter-overlay.show {
    opacity: 1;
    visibility: visible;
}
.letter {
    position: relative;
    width: min(700px, 95vw);
    max-height: 85vh;
    overflow-y: auto;
    background:
        linear-gradient(
            #fffef3,
            #fff8dd
        );
    border-radius: 25px;
    padding: 40px;
    box-shadow:
        0 25px 70px rgba(0,0,0,0.4);
    transform:
        scale(0.5)
        rotate(-3deg);
    transition:
        transform 0.5s
        cubic-bezier(.2,.8,.3,1.3);
}
.letter-overlay.show .letter {
    transform:
        scale(1)
        rotate(0deg);
}
.letter h3 {
    text-align: center;
    color: #825000;
    font-size: 28px;
    margin-bottom: 25px;
}
.letter p {
    color: #4d3920;
    font-size: 17px;
    line-height: 1.8;
    white-space: pre-line;
}
/* =========================
   CLOSE BUTTON
========================= */
.close-button {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #8a5500;
    color: white;
    font-size: 25px;
    cursor: pointer;
    transition: 0.2s;
}
.close-button:hover {
    transform:
        rotate(90deg)
        scale(1.1);
}
/* =========================
   MUSIC
========================= */
.music-box {
    position: absolute;
    z-index: 50;
    left: 25px;
    bottom: 30px;
    padding: 12px 18px;
    background:
        rgba(255,255,255,0.75);
    border-radius: 30px;
    color: #704300;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow:
        0 5px 20px
        rgba(80,50,0,0.15);
}
.music-icon {
    animation:
        musicBounce
        0.8s
        ease-in-out
        infinite alternate;
}
@keyframes musicBounce {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-5px);
    }
}

@media (max-width: 600px) {
    .sun {
        width: 80px;
        height: 80px;
        top: 10%;
        right: 8%;
    }
    .top-message {
        top: 15px;
        padding:
            12px 15px;
    }
    .top-message h2 {
        font-size: 15px;
    }
    .sunflower-area {
        transform:
            translateX(-50%)
            scale(0.72);
        bottom: -50px;
    }
    .music-box {
        left: 15px;
        bottom: 85px;
        font-size: 13px;
    }
    .letter-button {
        bottom: 25px;
        padding:
            13px 23px;
        font-size: 15px;
    }
    .letter {
        padding:
            30px 22px;
    }
    .letter h3 {
        font-size: 23px;
    }
    .letter p {
        font-size: 15px;
        line-height: 1.7;
    }
}

.song-title {
    font-weight: 900 !important;
    color: #704300;
}

</style>
</head>
<body>
<div class="page">

<!-- =========================
         BACKGROUND
    ========================= -->

    <div class="sun"></div>
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>


<!-- =========================
         START SCREEN
    ========================= -->

    <div
        class="start-screen"
        id="startScreen">
        <h1>
            PornHub
        </h1>
        
        <button
            class="start-button"
            id="startButton">
            CLICK TO WATCH
        </button>
    </div>


<!-- =========================
         MAIN CONTENT 
    ========================= -->

    <div
        class="main-content"
        id="mainContent">
        <!-- TOP MESSAGE -->
        <div class="top-message">
<h2>
    <span class="song-title">"14"</span> by Silent Sanctuary kasi dapat
    pinakikinggan mo, hindi
    <span class="song-title">"Rebound"</span> by Silent Sanctuary
</h2>
        </div>

<!-- =========================
         SUNFLOWER
    ========================= -->

        <div class="sunflower-area">
            
 
            <div class="stem"></div>
       
            <div class="leaf"></div>
           
            <div class="flower">
                
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                
                <div class="flower-center">
                    <div class="face">
                        <div class="eye left"></div>
                        <div class="eye right"></div>
                        <div class="cheek left"></div>
                        <div class="cheek right"></div>
                        <div class="smile"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- =========================
         GRASS
    ========================= -->
        <div class="grass"></div>


        <!-- =========================
         MUSIC PANG ASSURANCE
    ========================= -->
        <div class="music-box">
            <span class="music-icon">
                🎵
            </span>
            <span>
                14 - Silent Sanctuary
            </span>
        </div>


        <!-- =========================
         LETTER KAY LUMIJOJOJO
    ========================= -->

        <button
            class="letter-button"
            id="letterButton">
            CLICK TO UNLOCK 😛
        </button>
    </div>

   
    <div
        class="letter-overlay"
        id="letterOverlay">
        <div class="letter">
            <button
                class="close-button"
                id="closeButton">
                ×
            </button>
            <h3>
                TO MY BUTCHOI ; P
            </h3>
            <p>I know 2–4 years is a lot, and I can’t just tell you to stop thinking about it because I know how hard it can be to let go of something that lasted that long. But I want to assure you that despite all the years he and I had together, none of that compares to what I’ve felt since meeting you. In such a short span of time, you showed me what genuine love, care, and happiness feel like. You made me realize that the length of a relationship doesn’t determine how deeply someone can affect your heart.</p>

<br>

<p>I no longer want to be with him, and I don’t want my past to make you question what I feel for you now. What happened before you is already in the past, and I’m choosing to move forward. I want you to know that what I have with you is something I genuinely value, and I want to build something meaningful with you without letting my past get in the way. </p>

<br>

<p>And just like what the song says, “ikaw lang ang gusto kong makasama, wala na akong gusto pang balikan”</p>

<br>

<p>I love you so much, Miho !</p>
            </p>
        </div>
    </div>
    

<!-- =========================
         ASSURANCE FUCKING SONG
    ========================= -->

    <audio
        id="song"
        preload="auto">
        <source
            src="14.mp3"
            type="audio/mpeg">
    </audio>
</div>
<script>
/* =========================
   GET ELEMENTS
========================= */
const startButton =
    document.getElementById("startButton");
const startScreen =
    document.getElementById("startScreen");
const mainContent =
    document.getElementById("mainContent");
const song =
    document.getElementById("song");
const letterButton =
    document.getElementById("letterButton");
const letterOverlay =
    document.getElementById("letterOverlay");
const closeButton =
    document.getElementById("closeButton");
/* =========================
   START
========================= */
startButton.addEventListener(
    "click",
    function () {
        startScreen.classList.add("hide");
        mainContent.classList.add("show");
        song.currentTime = 0;
        song.play().catch(function(error) {
            console.log(
                "Audio could not start:",
                error
            );
        });
        createFloatingPetals();
    }
);
/* =========================
   FLOATING PETALS
========================= */
function createFloatingPetals() {
    if (
        document.querySelector(
            ".floating-petal"
        )
    ) {
        return;
    }
    for (
        let i = 0;
        i < 35;
        i++
    ) {
        const petal =
            document.createElement("div");
        petal.classList.add(
            "floating-petal"
        );
        petal.style.left =
            Math.random() * 100 + "%";
        petal.style.animationDuration =
            (5 + Math.random() * 😎 + "s";
        petal.style.animationDelay =
            Math.random() * 7 + "s";
        const size =
            10 + Math.random() * 14;
        petal.style.width =
            size + "px";
        petal.style.height =
            size * 1.6 + "px";
        mainContent.appendChild(petal);
    }
}
/* =========================
   OPEN LETTER
========================= */
letterButton.addEventListener(
    "click",
    function () {
        letterOverlay.classList.add(
            "show"
        );
    }
);
/* =========================
   CLOSE LETTER
========================= */
closeButton.addEventListener(
    "click",
    function () {
        letterOverlay.classList.remove(
            "show"
        );
    }
);
/* =========================
   CLICK OUTSIDE LETTER
========================= */
letterOverlay.addEventListener(
    "click",
    function(event) {
        if (
            event.target ===
            letterOverlay
        ) {
            letterOverlay.classList.remove(
                "show"
            );
        }
    }
);
/* =========================
   ESC KEY
========================= */
document.addEventListener(
    "keydown",
    function(event) {
        if (
            event.key === "Escape"
        ) {
            letterOverlay.classList.remove(
                "show"
            );
        }
    }
);
</script>
</body>
</html>	
