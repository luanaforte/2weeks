const container = document.getElementById("fireworks-container");
const message = document.getElementById("message");

// Função para criar um fogo de artifício
function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 50 + "vh";
  container.appendChild(firework);

  // Explosão do fogo de artifício
  setTimeout(() => {
    firework.classList.add("explode");
    setTimeout(() => firework.remove(), 500);
  }, 500);
}

// Estilizando os fogos de artifício
const style = document.createElement("style");
style.innerHTML = `
.firework {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  animation: rise 1s ease-out forwards;
}

.firework.explode {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,99,71,0.6) 100%);
  animation: explode 0.5s ease-out forwards;
}

@keyframes rise {
  0% { opacity: 0; transform: translateY(100px); }
  100% { opacity: 1; transform: translateY(-200px); }
}

@keyframes explode {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(2); }
}
`;
document.head.appendChild(style);

// Gerar fogos de artifício repetidamente
setInterval(createFirework, 500);

// Mostrar mensagem após alguns segundos
setTimeout(() => {
  message.style.opacity = 1;
}, 5000);
