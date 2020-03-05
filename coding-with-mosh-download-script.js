var cards = jQuery('.lecture-name');

var time = 0;

cards.each(function() {
    let lectureTitle = this;
    setTimeout( function(){
        lectureTitle.click();
        setTimeout(function() {
            jQuery('.download')[0].click();
        }, 1000);
    }, time)
    time += 20000;
});
