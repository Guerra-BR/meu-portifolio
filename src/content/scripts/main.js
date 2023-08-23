document.addEventListener('DOMContentLoaded', function(){

    
})

document.addEventListener('mousemove', function(e){
    const blob = document.getElementById("seguidor")
    var x = e.clientX
    var y = e.clientY


    blob.animate({
        left: x + 'px',
        top: y + 'px'
    }, {duration: 3000, fill: "forwards"})


})

