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
     return container;
}
