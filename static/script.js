// document.addEventListener('DOMContentLoaded', function() {
//     const noBtn = document.getElementById('no');
//     let moving = false;

//     noBtn.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (moving) return;

//         moving = true;
//         let timeLeft = 100;  // 10 secondi a 100ms interval

//         function moveButton() {
//             if (timeLeft <= 0) {
//                 moving = false;                               # con tasto veloce
//                 return;
//             }
//             const maxX = window.innerWidth - 150;
//             const maxY = window.innerHeight - 100;
//             const newX = Math.random() * maxX;
//             const newY = Math.random() * maxY;
//             noBtn.style.position = 'fixed';
//             noBtn.style.left = newX + 'px';
//             noBtn.style.top = newY + 'px';
//             timeLeft--;
//             setTimeout(moveButton, 100);
//         }
//         moveButton();
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const noBtn = document.getElementById('no');
//     let moving = false;

//     noBtn.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (moving) return;

//         moving = true;
//         let timeLeft = 20;  // 10 secondi a 500ms interval (20 mosse)       # con tasto lento

//         function moveButton() {
//             if (timeLeft <= 0) {
//                 moving = false;
//                 noBtn.style.position = 'static';  // Torna normale
//                 return;
//             }
//             // Area ridotta: 300px larghezza, 200px altezza centrali
//             const baseX = (window.innerWidth - 300) / 2;
//             const baseY = (window.innerHeight - 200) / 2;
//             const newX = baseX + Math.random() * 300;
//             const newY = baseY + Math.random() * 200;
//             noBtn.style.position = 'fixed';
//             noBtn.style.left = newX + 'px';
//             noBtn.style.top = newY + 'px';
//             timeLeft--;
//             setTimeout(moveButton, 500);  // Più lento: 500ms
//         }
//         moveButton();
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const noBtn = document.getElementById('NO');
//     let moving = false;
//     let animationInterval;

//     noBtn.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (moving) return;

//         moving = true;
//         const container = document.querySelector('.container');
//         const rect = container.getBoundingClientRect();
//         const areaWidth = 400;  // Area di movimento ridotta
//         const areaHeight = 300;
//         const baseX = rect.left + (rect.width - areaWidth) / 2;
//         const baseY = rect.top + (rect.height - areaHeight) / 2;

//         // Aggiungi transizione fluida
//         noBtn.style.transition = 'left 0.8s ease-out, top 0.8s ease-out';
//         noBtn.style.position = 'fixed';
//         noBtn.style.zIndex = '1000';

//         let movesLeft = 10;  // 10 spostamenti x 1s = 10s

//         function moveSmooth() {
//             if (movesLeft <= 0) {
//                 noBtn.style.transition = '';
//                 noBtn.style.position = 'static';
//                 noBtn.style.zIndex = '';
//                 moving = false;
//                 return;
//             }
//             const newX = baseX + Math.random() * areaWidth;
//             const newY = baseY + Math.random() * areaHeight;
//             noBtn.style.left = newX + 'px';
//             noBtn.style.top = newY + 'px';
//             movesLeft--;
//             setTimeout(moveSmooth, 1000);  // Sposta ogni 1s per fluidità
//         }
//         moveSmooth();
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const noBtn = document.getElementById('NO');
//     let moving = false;

//     noBtn.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (moving) return;

//         moving = true;
//         const container = document.querySelector('.container');
//         const rect = container.getBoundingClientRect();
//         const areaWidth = 400;  // Area di movimento ridotta
//         const areaHeight = 300;
//         const baseX = rect.left + (rect.width - areaWidth) / 2;
//         const baseY = rect.top + (rect.height - areaHeight) / 2;

//         // 1) Prendi posizione ATTUALE del bottone
//         const btnRect = noBtn.getBoundingClientRect();  // posizione nel viewport
//         const startLeft = btnRect.left;
//         const startTop = btnRect.top;

//         // 2) Metti subito il bottone in fixed MA mantenendo la stessa posizione
//         noBtn.style.position = 'fixed';
//         noBtn.style.left = startLeft + 'px';
//         noBtn.style.top = startTop + 'px';
//         noBtn.style.zIndex = '1000';

//         // 3) Aggiungi transizione fluida
//         noBtn.style.transition = 'left 0.8s ease-out, top 0.8s ease-out';

//         let movesLeft = 10;  // 10 spostamenti x 1s = 10s

//         function moveSmooth() {
//             if (movesLeft <= 0) {
//                 noBtn.style.transition = '';
//                 noBtn.style.position = 'static';
//                 noBtn.style.zIndex = '';
//                 moving = false;
//                 return;
//             }
//             const newX = baseX + Math.random() * areaWidth;
//             const newY = baseY + Math.random() * areaHeight;
//             noBtn.style.left = newX + 'px';
//             noBtn.style.top = newY + 'px';
//             movesLeft--;
//             setTimeout(moveSmooth, 1000);  // Sposta ogni 1s per fluidità
//         }
//         moveSmooth();
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('NO');
    let moving = false;
    let endTime = null;
    let lastMoveTime = 0;

    // Sposta il bottone in una nuova posizione
    function moveSmooth() {
        if (!moving) return;

        const now = Date.now();
        if (now >= endTime) {
            // Fine dei 15 secondi: smette di scappare
            moving = false;
            noBtn.style.transition = '';
            noBtn.style.position = 'static';
            noBtn.style.zIndex = '';
            return;
        }

        const container = document.querySelector('.container');
        const rect = container.getBoundingClientRect();
        const areaWidth = 400;
        const areaHeight = 300;
        const baseX = rect.left + (rect.width - areaWidth) / 2;
        const baseY = rect.top + (rect.height - areaHeight) / 2;

        const newX = baseX + Math.random() * areaWidth;
        const newY = baseY + Math.random() * areaHeight;

        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        lastMoveTime = now;
    }

    // Inizia la fuga quando il mouse entra per la prima volta
    noBtn.addEventListener('mouseenter', function() {
        if (moving) return;

        moving = true;
        endTime = Date.now() + 15000;  // 15 secondi

        const btnRect = noBtn.getBoundingClientRect();
        const startLeft = btnRect.left;
        const startTop = btnRect.top;

        noBtn.style.position = 'fixed';
        noBtn.style.left = startLeft + 'px';
        noBtn.style.top = startTop + 'px';
        noBtn.style.zIndex = '1000';
        noBtn.style.transition = 'left 0.5s ease-out, top 0.5s ease-out';

        moveSmooth();  // primo spostamento
    });

    // Muovi solo quando il mouse si avvicina, non continuamente sopra
    document.addEventListener('mousemove', function(e) {
        if (!moving) return;

        const now = Date.now();
        // Limita la frequenza degli spostamenti (es. ogni 200ms)
        if (now - lastMoveTime < 200) return;

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const btnRect = noBtn.getBoundingClientRect();

        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;

        const distX = Math.abs(mouseX - centerX);
        const distY = Math.abs(mouseY - centerY);

        const thresholdNear = 90;   // distanza per "troppo vicino"
        const thresholdInside = 40; // dentro il bottone

        // Se il mouse è molto dentro il bottone → NON muovere (evita tremolio)
        if (distX < thresholdInside && distY < thresholdInside) {
            return;
        }

        // Se è abbastanza vicino ma non dentro → fai scappare
        if (distX < thresholdNear && distY < thresholdNear) {
            moveSmooth();
        }
    });
});
