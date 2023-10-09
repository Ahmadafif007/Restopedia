class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="home_text"">
            <h1 class="home_title">WELCOME TO <span>RESTOPEDIA</span></h1>
            <p class="home_sub">Tempatnya mencari restoran ternama</p>
        </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
