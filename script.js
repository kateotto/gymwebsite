
function animateTrigger(){
    animateValue("value", 0, 14, 2000);
}
var positionStart = $("#3").position();
var positionEnd = $("#4").position();
var position = positionStart.top - (positionStart.top * 0.25);
var checkpoint = true;
$(window).scroll(function(){
    if($(this).scrollTop() > position && $(this).scrollTop() < positionEnd.top){
        if(checkpoint){
            checkpoint = false;
            $({ Counter: 0 }).animate({
                Counter: $('#value1').text()
              }, {
                duration: 3000,
                easing: 'swing',
                step: function() {
                  $('#value1').text(Math.ceil(this.Counter));
                }
              });
              $({ Counter: 0 }).animate({
                Counter: $('#value2').text()
              }, {
                duration: 3000,
                easing: 'swing',
                step: function() {
                  $('#value2').text(Math.ceil(this.Counter));
                }
              });
              $({ Counter: 0 }).animate({
                Counter: $('#value3').text()
              }, {
                duration: 3000,
                easing: 'swing',
                step: function() {
                  $('#value3').text(Math.ceil(this.Counter));
                }
              });
              
        }
    }
})
