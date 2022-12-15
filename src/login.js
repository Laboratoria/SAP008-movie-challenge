import {loginEmailPassword} from './lib/index.js';

export default () => {
    const container = document.createElement('div');

    const template = `
        <h1 class="title-movie">Empire Movie</h1>

        <form class="login">
    
        <div class="inpt">
            <input type="text" id="inpt-email" autocomplete="off" placeholder="email">Email</input>
            <input type="password" id="inpt-password" autocomplete="off" placeholder="senha">Senha</input>
        </div>
        <div>
            <input type="submit" value="Entrar" id="inpt-login">
        </div>
        <div class="form-google">
            <a href="#" id="btn-login-google" >
            <i class="fa-brands fa-google-plus-g"></i>Entrar com o Google
            </a>
        </div>
    
        </form>
     `;
     container.innerHTML = template;

     const email= container.querySelector('#inpt-email');
     const password= container.querySelector('#inpt-password');
     const login= container.querySelector('#inpt-login');

     login.addEventListener('click', (e) =>{
        e.preventDefault();

        loginEmailPassword(email.value, password.value)
        .then(() => {
  
          window.location.hash = '#home';
        })
        .catch(() => {
          msgErro.innerHTML = 'usário ou senha incorretos';
        });
    });
     return container;
}
