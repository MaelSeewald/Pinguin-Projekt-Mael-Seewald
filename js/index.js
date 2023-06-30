function hideYetiRandomly(){
var mounds =$(".penguin1, .penguin2, .penguin3, .penguin4, .penguin5, .penguin6, .penguin7, .penguin8");
var randomIndex = Math.floor(Math.random() * mounds.length);
var randomMound = mounds.eq(randomIndex);

$(".yeti").insertAfter(randomMound);
}

$(document).ready(function() {
    hideYetiRandomly();

    $(".yeti.").on("mouseup", function() {
        alert("Yaaaarrrr!");
        hideYetiRandomly();
    });
});

