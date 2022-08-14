/**
 * 사용자는 썸네일을 누른다.
 *      해당 썸네일에 매칭되는 DOM 선택 - a
 *      click 이벤트 구문 작성 -> a태그의 기본기능 작동 방지
 *  
 * 큰 이미지가 변해야 한다.
 *      앵커의 href 속성값을 가져온다.
 *      큰 이미지의 src 속성값에 넣어준다.
 * 
 * 큰 이미지의 alt 속성값 변경
 *      앵커의 첫번째 자식(img)의 alt 속성값을 가져온다.
 *      큰 이미지의 alt 속성값에 넣어준다.
 *      
 */

//a태그(DOM)을 셀렉팅
const $thmbs = document.querySelectorAll('.gallery>.nav>.thmbs>li>a');


$thmbs[0].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //this 의미 = Current HTML Element => 이번에 ㅇㅇ한 바로 그 녀석 => $thmbs[0]
    console.log('this =',this);

    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[1].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[2].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[3].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[4].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[5].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[6].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});


$thmbs[7].addEventListener('click', function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
    
    //큰 이미지가 변하는 코드
    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);

    //alt 속성값을 변경하는 코드
    const imgAlt = this.firstElementChild.getAttribute('alt');
    document.getElementById('screen').setAttribute('alt', imgAlt);
});
