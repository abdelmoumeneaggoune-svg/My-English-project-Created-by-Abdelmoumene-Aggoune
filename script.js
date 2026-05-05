const btn1 = document.getElementById('IntroductionBtn');

const btn2 = document.getElementById('Stage1Btn');

const btn3 = document.getElementById('Stage2Btn');

const btn4 = document.getElementById('Stage3Btn');

const btn5 = document.getElementById('ConclusionBtn');

const btn6 = document.getElementById('ContactBtn');

const btn7 = document.getElementById('TitleBtn');

const section1 = document.getElementById('Introduction');

const section2 = document.getElementById('Stage1');

const section3 = document.getElementById('Stage2');

const section4 = document.getElementById('Stage3');

const section5 = document.getElementById('Conclusion');

const section6 = document.getElementById('Contact');

const section7 = document.getElementById('Title');



// 1. نضع كل الأزرار في مصفوفة واحدة

const allButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7];

// 2. نضع كل الأقسام في مصفوفة واحدة بنفس الترتيب

const allSections = [section1, section2, section3, section4, section5, section6, section7];



function activateSection(button, section) {

    button.addEventListener("click", () => {



        // --- الخطوة السحرية: تنظيف الكل قبل البدء ---

        allButtons.forEach(btn => {

            btn.classList.replace('btn-clicked', 'btn-before');

        });

        allSections.forEach(sec => {

            sec.classList.remove('section');

            sec.classList.add('sec');

        });



        // --- الآن نفعّل فقط الزر والقسم الذي ضغطنا عليه ---

        button.classList.replace('btn-before', 'btn-clicked');

        section.classList.add('section');

        section.classList.remove('sec');



        // اختياري: إذا أردت أن يختفي التأثير بعد 5 ثوانٍ للكل

        setTimeout(() => {

            button.classList.replace('btn-clicked', 'btn-before');

            section.classList.remove('section');

            section.classList.add('sec');

        }, 5000);

    });

}



activateSection(btn1, section1);

activateSection(btn2, section2);

activateSection(btn3, section3);

activateSection(btn4, section4);

activateSection(btn5, section5);

activateSection(btn6, section6);

activateSection(btn7, section7);