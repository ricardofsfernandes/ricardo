document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        window.location.href = '/pages/dashboard.html'; // Redirecionar ao dashboard
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erro ao logar:', error);
    }
  });
  