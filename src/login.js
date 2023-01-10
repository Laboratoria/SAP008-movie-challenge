import { loginEmailPassword, signInGoogle } from './lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
  <div class="phrase-movie">
    <h1 class="title-movie">Empire Movie</h1>
  </div>
  <section class="login">
     
        <form class="form-login">
        <div class="inpt-email">
          <input type="text" id="inptEmail" autocomplete="off" placeholder="email">Email</input>
        </div>
        <div class="inpt-password">
          <input type="password" id="inptPassword" autocomplete="off" placeholder="senha">Senha</input>
        </div>
        <div>
          <input type="submit" value="Entrar" id="inptLogin">
        </div>
        <div class="btn-google">
          <a href="#" id="btnLoginGoogle" >
           <i class="fa-brands fa-google-plus-g"></i>Entrar com o Google
          </a>
        </div>
        </form>
  </section>
     `;
  container.innerHTML = template;

  const email = container.querySelector('#inptEmail');
  const password = container.querySelector('#inptPassword');
  const login = container.querySelector('#inptLogin');
  const google = container.querySelector('#btnLoginGoogle');

  login.addEventListener('click', (e) => {
    e.preventDefault();

    loginEmailPassword(email.value, password.value)
      .then(() => {

        window.location.hash = '#home';
      })
      .catch(() => {
        msgErro.innerHTML = 'usário ou senha incorretos';
      });
  });
  google.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        window.location.hash = '#home';
      })
      .catch(() => {
        msgErro.innerHTML = 'erro ao entrar com Google';
      });
  });
  return container;
}
