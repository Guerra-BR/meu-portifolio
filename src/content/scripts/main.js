document.addEventListener('DOMContentLoaded', function(){
  const userName = document.getElementById('github-name')
  const profileImage = document.getElementById('github-avatar')
  const tag = document.getElementById('github-username')
  const link = document.getElementById('github-link')

  fetch('https://api.github.com/users/Guerra-BR')
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            userName.innerText = json.name
            profileImage.src = json.avatar_url
            tag.innerText = json.login
            link.href = json.html_url
        })
  
  document.addEventListener('mousemove', function(e){

    const blob = document.getElementById("seguidor")
    blob.classList.add('anim-aparecer-rotate')
    var x = e.clientX
    var y = e.clientY

    blob.style.display = 'block'
    blob.classList.add('show')

    blob.animate({
        left: x + 'px',
        top: y + 'px'
    }, {duration: 5000, fill: "forwards"})
  })

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let interval = null;
  
  document.querySelector(".hyper").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }
  

  
})