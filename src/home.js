export default () => {
    const container = document.createElement('div');

    const template = `
       <h1 class="filmes">Filmes</h1>
     `;
     container.innerHTML = template;
     return container;
}