document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const totalDuration = 2000; // Umumiy vaqt: 2 sekund (2000 millisekund)

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // 200, 10 yoki 16
        const suffix = counter.getAttribute('data-suffix');  // + yoki k+

        let count = 0;

        /* Har bir son 2 sekund ichida ulgurishi uchun intervalni hisoblaymiz.
           Masalan: 2000ms / 200 = 10ms (har 10ms da son bittaga oshadi)
        */
        const stepTime = totalDuration / target;

        const timer = setInterval(() => {
            if (count < target) {
                count++; // Son 1 tadan aniq o'sadi
                counter.innerText = count + suffix;
            } else {
                clearInterval(timer); // Marraga yetganda taymerni to'xtatadi
            }
        }, stepTime);
    });
});

// ==========================================
// 1-KARUSEL (Section 1 - Properties)
// ==========================================
const cardsContainer = document.querySelector('.section_1--cards');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.querySelector('.btn_box--text p span');

let pageCounter = 1;
const totalPages = 60;
let isTransitioning = false;

// FAQAT 1-konteyner ichidagi kartalarni tanlaymiz
let cards = Array.from(cardsContainer.querySelectorAll('.card'));
cards.forEach((card, index) => {
    card.style.order = index;
});

function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
}

// O'NGGA TUGMA (→)
nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;

    // RAQAM DARHOL O'ZGARADI
    pageCounter = pageCounter < totalPages ? pageCounter + 1 : 1;
    currentPageSpan.textContent = formatNumber(pageCounter);

    const cardsList = Array.from(cardsContainer.querySelectorAll('.card'));
    const sortedCards = cardsList.sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order));
    const firstCard = sortedCards[0];
    const lastCard = sortedCards[sortedCards.length - 1];

    const currentLastOrder = parseFloat(lastCard.style.order);
    firstCard.style.order = currentLastOrder + 1;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(cardsContainer).gap) || 24;

    cardsContainer.style.transition = 'none';
    cardsContainer.style.transform = `translateX(${cardWidth + gap}px)`;

    setTimeout(() => {
        cardsContainer.style.transition = 'transform 0.3s ease-in-out';
        cardsContainer.style.transform = 'translateX(0)';
    }, 10);

    // Faqat tugma blokini yechish taymerda qoladi
    setTimeout(() => {
        isTransitioning = false;
    }, 310);
});

// CHAPGA TUGMA (←)
prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;

    // RAQAM DARHOL O'ZGARADI
    pageCounter = pageCounter > 1 ? pageCounter - 1 : totalPages;
    currentPageSpan.textContent = formatNumber(pageCounter);

    const cardsList = Array.from(cardsContainer.querySelectorAll('.card'));
    const sortedCards = cardsList.sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order));
    const firstCard = sortedCards[0];
    const lastCard = sortedCards[sortedCards.length - 1];

    const currentFirstOrder = parseFloat(firstCard.style.order);
    lastCard.style.order = currentFirstOrder - 1;

    const cardWidth = lastCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(cardsContainer).gap) || 24;

    cardsContainer.style.transition = 'none';
    cardsContainer.style.transform = `translateX(-${cardWidth + gap}px)`;

    setTimeout(() => {
        cardsContainer.style.transition = 'transform 0.3s ease-in-out';
        cardsContainer.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        isTransitioning = false;
    }, 310);
});


// ==========================================
// 2-KARUSEL (Section 2 - Testimonials)
// ==========================================
const cardsWrapper2 = document.querySelector('.end_card--wrapper');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const currentPageSpan2 = document.querySelector('.section_2--end .btn_box--text p span');

let pageCounter2 = 1;
const totalPages2 = 10;
let isTransitioning2 = false;

// FAQAT 2-konteyner ichidagi kartalarni tanlaymiz
let cards2 = Array.from(cardsWrapper2.querySelectorAll('.card'));
cards2.forEach((card, index) => {
    card.style.order = index;
});

function formatNumber2(num) {
    return num < 10 ? `0${num}` : num;
}

// O'NGGA TUGMA (→)
nextBtn2.addEventListener('click', () => {
    if (isTransitioning2) return;
    isTransitioning2 = true;

    // RAQAM DARHOL O'ZGARADI
    pageCounter2 = pageCounter2 < totalPages2 ? pageCounter2 + 1 : 1;
    currentPageSpan2.textContent = formatNumber2(pageCounter2);

    const cardsList = Array.from(cardsWrapper2.querySelectorAll('.card'));
    const sortedCards = cardsList.sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order));
    const firstCard = sortedCards[0];
    const lastCard = sortedCards[sortedCards.length - 1];

    const currentLastOrder = parseFloat(lastCard.style.order);
    firstCard.style.order = currentLastOrder + 1;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(cardsWrapper2).gap) || 24;

    cardsWrapper2.style.transition = 'none';
    cardsWrapper2.style.transform = `translateX(${cardWidth + gap}px)`;

    setTimeout(() => {
        cardsWrapper2.style.transition = 'transform 0.3s ease-in-out';
        cardsWrapper2.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        isTransitioning2 = false;
    }, 310);
});

// CHAPGA TUGMA (←)
prevBtn2.addEventListener('click', () => {
    if (isTransitioning2) return;
    isTransitioning2 = true;

    // RAQAM DARHOL O'ZGARADI
    pageCounter2 = pageCounter2 > 1 ? pageCounter2 - 1 : totalPages2;
    currentPageSpan2.textContent = formatNumber2(pageCounter2);

    const cardsList = Array.from(cardsWrapper2.querySelectorAll('.card'));
    const sortedCards = cardsList.sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order));
    const firstCard = sortedCards[0];
    const lastCard = sortedCards[sortedCards.length - 1];

    const currentFirstOrder = parseFloat(firstCard.style.order);
    lastCard.style.order = currentFirstOrder - 1;

    const cardWidth = lastCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(cardsWrapper2).gap) || 24;

    cardsWrapper2.style.transition = 'none';
    cardsWrapper2.style.transform = `translateX(-${cardWidth + gap}px)`;

    setTimeout(() => {
        cardsWrapper2.style.transition = 'transform 0.3s ease-in-out';
        cardsWrapper2.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        isTransitioning2 = false;
    }, 310);
});

// ==========================================
// 3-KARUSEL (Section 3 - FAQ)
// ==========================================
const cardsWrapper3 = document.querySelector('.section_3--end .end_card--wrapper');
const prevBtn3 = document.getElementById('prevBtn3');
const nextBtn3 = document.getElementById('nextBtn3');
const currentPageSpan3 = document.querySelector('.section_3--end .btn_box--text p span');

let pageCounter3 = 1;
const totalPages3 = 10; // HTML kodingizdagi "of 10" qismiga moslandi
let isTransitioning3 = false;

// FAQAT 3-konteyner ichidagi kartalarni tanlaymiz va boshlang'ich 'order' beramiz
let cards3 = Array.from(cardsWrapper3.querySelectorAll('.card'));
cards3.forEach((card, index) => {
    card.style.order = index;
});

function formatNumber3(num) {
    return num < 10 ? `0${num}` : num;
}

// O'NGGA TUGMA (→)
nextBtn3.addEventListener('click', () => {
    if (isTransitioning3) return;
    isTransitioning3 = true;

    // RAQAM DARHOL O'ZGARADI
    pageCounter3 = pageCounter3 < totalPages3 ? pageCounter3 + 1 : 1;
    currentPageSpan3.textContent = formatNumber3(pageCounter3);

    const cardsList = Array.from(cardsWrapper3.querySelectorAll('.card'));
    const sortedCards = cardsList.sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order));
    const firstCard = sortedCards[0];
    const lastCard = sortedCards[sortedCards.length - 1];

    const currentLastOrder = parseFloat(lastCard.style.order);
    firstCard.style.order = currentLastOrder + 1;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(cardsWrapper3).gap) || 24;

    cardsWrapper3.style.transition = 'none';
    cardsWrapper3.style.transform = `translateX(${cardWidth + gap}px)`;

    setTimeout(() => {
        cardsWrapper3.style.transition = 'transform 0.3s ease-in-out';
        cardsWrapper3.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        isTransitioning3 = false;
    }, 310);
});

// CHAPGA TUGMA (←)
prevBtn3.addEventListener('click', () => {
    if (isTransitioning3) return;
    isTransitioning3 = true;

    // RAQAM DARHOL O'ZGARADI
    pageCounter3 = pageCounter3 > 1 ? pageCounter3 - 1 : totalPages3;
    currentPageSpan3.textContent = formatNumber3(pageCounter3);

    const cardsList = Array.from(cardsWrapper3.querySelectorAll('.card'));
    const sortedCards = cardsList.sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order));
    const firstCard = sortedCards[0];
    const lastCard = sortedCards[sortedCards.length - 1];

    const currentFirstOrder = parseFloat(firstCard.style.order);
    lastCard.style.order = currentFirstOrder - 1;

    const cardWidth = lastCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(cardsWrapper3).gap) || 24;

    cardsWrapper3.style.transition = 'none';
    cardsWrapper3.style.transform = `translateX(-${cardWidth + gap}px)`;

    setTimeout(() => {
        cardsWrapper3.style.transition = 'transform 0.3s ease-in-out';
        cardsWrapper3.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        isTransitioning3 = false;
    }, 310);
});