class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <div class="contact">
            <h5>Contact</h5>
            <p>Telp. (+62) 89 531 439 545<br>Also :</p><a href="https://www.facebook.com/afif.wildan.391"><img
                    src="img/facebook.svg" alt="iconfacebook"></a><a href="https://www.instagram.com/aaffwildan/"><img
                    src="img/instagram.svg" alt="iconinstagram"></a><a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ahmadafif69516@gmail.com"><img
                    src="img/gmail.svg" alt="icongmail"></a>
        </div>
        <li>Made By &copy 2022 Developed by Afif</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
