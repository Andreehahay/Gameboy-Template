// message.js
  document.getElementById("back").onclick = function() {
    history.back();
  };
  
  // Efek ketik per kata
  const message = `Hai
  <br> <br>
Kadang aku masih suka mikir, how lucky I am to have you. Dari sekian banyak orang di dunia ini, Tuhan justru kasih aku kamu—yang sabar banget, yang ngerti aku luar dalam, dan yang selalu ada no matter what. Honestly, I never thought I’d find someone like you. Someone yang bisa bikin aku ngerasa tenang just by being around. You make the little things feel so special, and the hard days feel a little easier. I'm super grateful, seriously. Dapetin kamu tuh bukan cuma blessing, tapi juga reminder kalau Tuhan tahu exactly what I need. Thank you for being you, for staying, for loving me even in my worst. I’m not perfect, but I’ll keep trying to be the best for you, because you’re more than worth it. I love you, always.
  <br> <br>
  I love you <3`;
  
  const messageContent = document.getElementById("message-content");
  const words = message.split(" ");
  let index = 0;
  
  function typeMessage() {
    if (index < words.length) {
      messageContent.innerHTML += words[index] + " ";
      index++;
      setTimeout(typeMessage, 150); // 150ms antar kata, bisa diatur kecepatannya
    }
  }
  
  window.onload = typeMessage;
  
  document.getElementById("next").onclick = function () {
    // Hentikan lagu sebelumnya jika masih bermain
    const currentMusic = document.getElementById("bg-music");
    currentMusic.pause();
    currentMusic.currentTime = 0;
  
    // Putar lagu baru
    const nextMusic = document.getElementById("next-music");
    nextMusic.play();
  
    // Setelah beberapa detik (misal 3 detik), lanjut redirect
    setTimeout(() => {
      window.location.href = "gallery.html";
    }, 3000); // 3000ms = 3 detik
  };
  