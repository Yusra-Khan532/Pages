(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/27/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


    document.addEventListener("DOMContentLoaded", function() {
        var board = document.getElementById("board");
    
        function createFireworkParticle(x, y, angle) {
            var particle = document.createElement("DIV");
            particle.className = 'fireWorkParticle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            var velocity = 0.5 * Math.random();
            particle.style.transform = `translate(${velocity * Math.cos(angle) * 100}px, ${velocity * Math.sin(angle) * 100}px)`;
            board.appendChild(particle);
            setTimeout(() => particle.remove(), 1000); // Remove particle after 1s
        }
    
        function createFireworkSeed(x, y) {
            var seed = document.createElement("DIV");
            seed.className = 'fireWorkSeed';
            seed.style.left = x + 'px';
            seed.style.top = y + 'px';
            board.appendChild(seed);
            setTimeout(() => seed.remove(), 500); // Remove seed after 0.5s
            return seed;
        }
    
        function createFireworkStar(x, y) {
            var batch = document.createElement("DIV");
            batch.className = 'fireWorkBatch';
            for (let angle = 0; angle < 360; angle += 5) {
                createFireworkParticle(x, y, angle);
            }
            board.appendChild(batch);
        }
    
        document.addEventListener("click", function(event) {
            createFireworkSeed(event.pageX, event.pageY);
        });
    
        setInterval(function() {
            createFireworkStar(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        }, 1000); // Create a firework every second
    });
    