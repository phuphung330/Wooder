// background header scroll//

//  1.khai báo header, khai báo slider
//  2.lấy chiều cao header và slider bằng clientHeight
// 3.bắt sự kiện scroll bằng addEventListener
// 4. lấy giá trị pixel của trình duyệt khi scroll theo trục Y bằng pageYOffset
// 5. nếu giá trị trả về cao hơn chiều cao của header => add thêm class active => hiện background
// ngược lại remove class active
let header = document.querySelector('header');
let slider = document.querySelector('.slider')
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;
document.addEventListener('scroll', function () {
    let scrollY = window.pageYOffset;

    if (scrollY > heightSlider - heightHeader) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

})









// back to top
let backToTop = document.querySelector('.backtotop');

document.addEventListener('scroll', function () {
    let scrollY = window.pageYOffset;

    if (scrollY > heightSlider - heightHeader) {
        backToTop.classList.add('active')
    } else {
        backToTop.classList.remove('active')
    }



})



backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})



// progress bar





// 5, khai báo body


// 1.khai báo progress bar 
let progressBar = document.querySelector('.probar');

// 2.khai báo chiều cao khi scroll = scrollTop,
// let scrollTop = document.documentElement.scrollTop;
// console.log(scrollTop);

// 3.khai báo chiều cao web = ScrollHeight,
let scrollHeight = document.documentElement.scrollHeight;


// 4.khai báo chiều cao của màn hình viewport = clientHeight
let clientHeight = document.documentElement.clientHeight;



document.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset;

    let progressBarPercent = scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100 + '%';

    progressBar.style.width = `${progressBarPercent}`;
});



// Menumobile + Nav 


// 1.khai báo nav và btnmenu
// 2. bắt sự kiện click , khi click thêm class ' active';
// 3.khai báo hàm remove để khi resize windown tự động remove class active 

function menuMobileNav() {
    const nav = document.querySelector('.nav');
    const btnMenu = document.querySelector('.btnmenu');

    btnMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');


    })

    function removeNav() {
        btnMenu.classList.remove('active');
        nav.classList.remove('active');
    }

    window.addEventListener('resize', function () {
        let widthSize = window.innerWidth;
        if (widthSize > 990) {
            removeNav();
        }
    })

}
menuMobileNav();


// LangOption 
// 1. khai báo div (eng và span) và div lang__other 
// 2. lấy sự kiện click vào eng, hiện lang__other
// 3. lấy sự kiện click vào item trong lang__other
// 4. lấy nội dung text trong từ item trong lang__other
// 5.lấy nội dung text từ trong thẻ eng



function LangOption() {
    // khai báo div (eng và span) và div lang__other 
    const eng = document.querySelector('.lang .eng');
    const langOther = document.querySelector('.lang .lang__other ');
    const langCurrent = document.querySelector('.eng span');
    // lấy item ra nên phải xài querySelectorAll
    const langOTherItems = document.querySelectorAll('.lang .lang__other a');

    // bắt sự kiện khi click vào eng , thêm class active cho langOTher
    eng.addEventListener('click', function (e) {
        e.stopPropagation();
        langOther.classList.toggle('active');
        eng.classList.toggle('active');

    });

    // bắt sự kiện lấy từng thẻ a ( gọi là item) trong langOther
    // dùng vòng lặp forEach
    langOTherItems.forEach(function (item) {
        item.addEventListener('click', function (element) {
            // xài prenvetDefault để chặn không chuyển trang của thẻ a
            element.preventDefault();
            // lấy nội dung trong mỗi item bằng textContent
            let itemText = this.textContent;

            // lấy nội dung trong div eng 
            let langCurrentText = langCurrent.textContent;

            // tiến hành gán nội dung của itemText vào thẻ Eng
            langCurrent.innerHTML = itemText;
            // tiến hành gán nội dung của thẻ Eng vào ngược lại vào item
            item.innerHTML = langCurrentText;

        })
        // tiến hành bắt sự kiện,rê chuột ra ngoài ẩn đi lang__other
        document.addEventListener('click', function () {
            langOther.classList.remove('active');
        });
    })



}

LangOption();


// POP-UP VIDEO
// 1. khai báo btn video
let clickBtnVideo = document.querySelectorAll('.quality__lower .item .item__img');

// khai báo khung pop-up
let popupVideo = document.querySelector('.popup__video');

// khai báo nút close
let closeBtn = document.querySelector('.close');

// khai báo iframe
let iframe = document.querySelector('.popup__video iframe');

// bắt sự kiện click vào btn, lặp với forEach cho cả 3 cái video
// thêm style display flex cho div popup
// thêm attribute data-video-id vào mỗi item để load video khác nhau :
// uvU_Bv3XDGc
// CxC925yUxSI
// khai báo thêm biến videoID để lấy ra attribute của từng video
// sau đó dùng setAttribute để gán videoID vào scr của iframe

clickBtnVideo.forEach(function (button) {
    button.addEventListener('click', function () {
        popupVideo.style.display = 'flex';
        let videoID = button.getAttribute('data-video-id');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoID);

    });
});

// bắt sự kiện click vào nút close , tắt đi popup video
closeBtn.addEventListener('click', function () {
    iframe.setAttribute('src', '');
    popupVideo.style.display = 'none';
})

// bắt sự kiện click vào màn hình ngoài thì tắt popup video đi
popupVideo.addEventListener('click', function () {
    iframe.setAttribute('src', '');
    popupVideo.style.display = 'none';

})


// LÀM THÊM POPUP CHO VIDEO SECTION

// khai báo btn video
let btnWatch = document.querySelector('.video .video__btnwatch');

// bắt sự kiện click vào btn video hiện lên popup
btnWatch.addEventListener('click', function () {
    popupVideo.style.display = 'flex';
    iframe.setAttribute('src', 'https://www.youtube.com/embed/IwSvgmopDnY');


})


// FANCYBOX GALLERY
Fancybox.bind('[data-fancybox="image"]', {
    infinite: true,
});



// SLIDER SHOW
let sliderFooter = document.querySelector('.list-item');
let flktyshow = new Flickity(sliderFooter, {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,

    groupCells: '80%',
    on: {
        ready: function () {}
    }

});

// progress bar show
let line = document.querySelector('.scrollS__line .line');
flktyshow.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    line.style.width = progress * 100 + '%';
});


// SLIDER FLICKITY 
let flkty = new Flickity('.slider__run', {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    wrapAround: true,
    autoPlay: 3000,
    on: {
        ready: function () {
            let pagingDot = document.querySelector('.dotted')
            let dotted = document.querySelector('.flickity-page-dots');
            pagingDot.appendChild(dotted);





        },
        change: function (index) {
            let indexNumber = index + 1;
            let NumberCount = document.querySelector('.pagination span');

            NumberCount.innerHTML = indexNumber.toString().padStart(2, '0');




        }
    }
});


// NEXT BUTTON
document.querySelector('.slider__btn.--next').addEventListener('click', function (e) {
    e.preventDefault();
    flkty.next();
});

// REVERSE BUTTON
document.querySelector('.slider__btn.--reverse').addEventListener('click', function (e) {
    e.preventDefault();
    flkty.previous();
});










// // SLIDER
// //1.khai báo slider item , chạy vòng lặp foreach để lấy ra index của item 
// // có chứa class "active"
// // khai báo biến tạm chứa giá trị index 
// let indexItem = 0;
// let number = document.querySelector('.slider__norun .container__fluid .pagination span ')


// let sliderItem = document.querySelectorAll('.slider .slider__run .slider__run-item');

// sliderItem.forEach(function(item,index){
//    if(item.classList.contains('active')){
//        indexItem = index;


//    }
// });


// // khai báo dot
// let dots = document.querySelectorAll('.pagination .dotted .dot');
// // đặt dots vừa khai báo có giá trị indexItem ,add classList is-selected vào
// // dots[indexItem].classList.add('is-selected');


// // 2.khai báo slider__btn sau đó bắt sự kiện click,khi click sẽ tư động xoá class
// // "active" ở item hiện tại r truyền xuống item kế tiếp
// //  ghi nhớ gọi item trong mảng : item[index], khi trái đk 
// // => trả về item có index = 0 , và cho index = 0 để chạy lại vòng lặp
// let sliderBtn = document.querySelector('.slider .slider__btn.--next');


// // logic 
// // index < item.length - 1 
// // 0 <  2
// // 1 <  2
// // 2 < 2 => lần này k thoả ,xuống else 
// sliderBtn.addEventListener('click',function(){
//     if (indexItem < sliderItem.length -1 )
//     {
//         goTo((indexItem + 1));
//         // sliderItem[indexItem].classList.remove('active');
//         // sliderItem[indexItem +1].classList.add('active');
//         // indexItem++; 
//     }
//     else{
//         goTo(0 );
//         // sliderItem[indexItem].classList.remove('active');
//         // sliderItem[0].classList.add('active');
//         // indexItem = 0;  
//     }






// })

// let sliderBtnRe = document.querySelector('.slider .slider__btn.--reverse');

// // logic
// // giá trị khởi tạo bằng 0 => false => xuống else
// // 0>0 false 
// // 2 > 0
// // 1 >0
// // 0 >0 false => tiếp tục vòng lặp


// sliderBtnRe.addEventListener('click',function(){
//     if(indexItem > 0){
//         goTo(indexItem -1);
//         // sliderItem[indexItem].classList.remove('active');
//         // sliderItem[indexItem -1].classList.add('active');
//         // indexItem--;



//     }
//     else{
//         goTo(sliderItem.length -1);
//         // sliderItem[indexItem].classList.remove('active');
//         // sliderItem[sliderItem.length -1].classList.add('active');
//         // indexItem= sliderItem.length -1;
//     }
// })

// // tạo hàm đếm số
// function numberCount (index){
//     number.innerHTML= index.toString().padStart(2,'0');

// }


// // tạo hàm rút gọn việc gỡ và thêm div active
// function goTo (index){
//     sliderItem[indexItem].classList.remove('active');
//     sliderItem[index].classList.add('active');
//     dots[indexItem].classList.remove('is-selected');
//     dots[index].classList.add('is-selected');
//     indexItem= index;
//     numberCount(indexItem + 1);


// }

// // chuyển slider khi bấm vào dot
// dots.forEach(function(li,index){
//     li.addEventListener('click',function(){
//         goTo(index); 
//     })
// })





// SCROLL TO SECTION

let headerMenu = document.querySelectorAll('header .header__menu li a');
let heightHead = document.querySelector('header').offsetHeight;
// lấy chiều cao bao gồm cả padding và border
let sections = [];


function removeActiveMenu() {   
    // chạy vòng lặp foreach để gỡ thẻ active trong mỗi item ra
    headerMenu.forEach(function (menu__element) {
        menu__element.classList.remove('active');
    });

}



headerMenu.forEach(function (element, index) {
    let className = element.getAttribute('href').replace('#', '');
    let section = document.querySelector('.' + className);
    sections.push(section);

    element.addEventListener('click', function (e) {
        e.preventDefault();
        removeActiveMenu();
        element.classList.add('active');
        window.scrollTo({
            top: section.offsetTop - heightHead +1,
            behavior: "smooth",
        });
    });
});



window.addEventListener('scroll', function () {
    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
        let sectionPosition = section.offsetTop;
        let heightSection = section.offsetHeight;
        console.log(heightSection)
    
        if (positionScroll > sectionPosition - heightHead && 
            positionScroll < heightSection + sectionPosition) 
            {
            removeActiveMenu();
            headerMenu[index].classList.add('active');
        } else {
            headerMenu[index].classList.remove('active');
        }
    });

});