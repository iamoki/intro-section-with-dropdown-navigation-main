# Frontend Mentor - Single-page design portfolio solution

## 목차

- [개요](#개요)
  - [진행과제](#진행과제)
  - [스크린샷](#스크린샷)
  - [링크](#링크)
- [진행과정](#진행과정)
  - [사용언어와 라이브러리](#사용언어와-라이브러리)
  - [터득내용](#터득내용)


## 개요

### 진행과제

- 내비게이션 링크와 상호 작용할 때 데스크톱 및 모바일에서 관련 드롭다운 메뉴 보기
- 장치의 화면 크기에 따라 콘텐츠에 대한 최적의 레이아웃 보기
- 페이지의 모든 대화형 요소에 대한 호버 상태 참조

### 스크린샷

![1](https://user-images.githubusercontent.com/76725512/194250016-21c57e67-3aa7-4203-a8c9-64da9224d2e6.JPG)
![2](https://user-images.githubusercontent.com/76725512/194250027-44c6e5a3-89b2-4e44-9572-19c828ad7498.JPG)
![3](https://user-images.githubusercontent.com/76725512/194250032-873b24d1-1cd6-43e3-aa88-734e28fdb36e.JPG)
![4](https://user-images.githubusercontent.com/76725512/194250035-ba963d72-db2e-472e-bbc1-a7b26753b9c6.JPG)


### 링크
- [go-page](https://okhee-intro-section-with-dropdown-nav.netlify.app/)

## 진행과정

### 사용언어와-라이브러리

- Semantic HTML5 markup
- JavaScript
- SCSS


### 터득/상기 내용

* Nav속 메뉴에 클래스를 추가할 때 리스트 전체에 반복문을 돌리는것이 아닌 부모요소에 이벤트 위임을 하여 클래스를 추가하는 방법
* SCSS에서의 @each문 사용

```javascript
// 메뉴 on/off
window.addEventListener('click', (e) => {
    isMenu.forEach((e) => {
        e.classList.remove('on');
    })

    if(e.target.classList.contains('isMenu')) {
        e.target.classList.add('on');
    }
});
```
```scss
// 컬러 배열
$colors: (#726CEE, #4BB1DA, #EDD556, #8E4CB6);
@each $color in $colors {
    $i: index($colors, $color);
    li:nth-child(#{$i}) {
        a {
            .material-icons {
                color: #{$color};
            }
        }
    }
}
```