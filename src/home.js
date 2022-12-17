export default () => {
  const container = document.createElement('div');

  const template = `
      <nav class="filmes-catg">
        <ul>
          <li class="btn-filmes">
              <a href="/#home" class="link">Ação</a>
          </li>
          <li class="btn-filmes">
              <a href="/#home" class="link">Animação</a>
          </li>
          <li class="btn-filmes">
              <a href="/#home" class="link">Romance</a>
          </li>
        </ul>
      </nav>
     `;
  container.innerHTML = template;
  return container;
}