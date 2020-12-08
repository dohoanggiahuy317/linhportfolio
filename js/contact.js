document.getElementById('generalctn').addEventListener('mouseover', function(){
    TweenMax.to('#middle-general', 0.3, {width: '3.5vh', ease: Power3.easeInOut});
})

document.getElementById('generalctn').addEventListener('mouseout', function(){
    TweenMax.to('#middle-general', 0.3, {width: '2vh', ease: Power3.easeInOut});
})

document.getElementById('generalctn').addEventListener('click', function(){
    TweenMax.to('#generalctn', 1, {rotation: "900deg", ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 1, {opacity: 0, ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 0, {delay: 1, display: 'none', ease: Power3.easeInOut});
    TweenMax.to('#exit', 0, {delay: 1, display: 'flex', ease: Power3.easeInOut});
    TweenMax.to('#exit', 0.2, {delay: 1, opacity: '1', ease: Power3.easeInOut});
    TweenMax.to('#exit', 2, { rotation: '900deg', ease: Power3.easeInOut});
    TweenMax.to('#navbar', 0.7, {delay: 1.5, width: '45vw', ease: Power3.easeInOut});
    TweenMax.to('.navbtn', 0, {delay: 2.5, display: 'block', ease: Power3.easeInOut});
    TweenMax.to('.navbtn', 0.5, {delay: 2.5, opacity: 1, ease: Power3.easeInOut});
})

document.getElementById('exit').addEventListener('click', function(){
    TweenMax.to('.navbtn', 0.5, {opacity: 0, ease: Power3.easeInOut});
    TweenMax.to('.navbtn', 0, {delay: 0.5, display: 'none', ease: Power3.easeInOut});
    TweenMax.to('#navbar', 0.7, {delay: 0.8, width: '10vh', ease: Power3.easeInOut});
    TweenMax.to('#exit', 1, {delay: 1.5, rotation: '0deg', ease: Power3.easeInOut});
    TweenMax.to('#exit', 1, {delay: 1.5, opacity: '0', ease: Power3.easeInOut});
    TweenMax.to('#exit', 0, {delay: 2.5, display: 'none', ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 0.2, {delay: 2.5, display: 'flex', ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 1, {delay: 2, rotation: "0deg", ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 1, {delay: 2, opacity: 1, ease: Power3.easeInOut});
})