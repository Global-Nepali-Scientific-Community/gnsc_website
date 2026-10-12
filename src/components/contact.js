class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section contact-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">CONNECT WITH US</span>
            <h2 class="section-title">Contact</h2>
          </div>
          <div class="contact-card">
            <div class="contact-info">
              <h3>Join the Conversation</h3>
              <p>Whether you'd like to present your research, attend our next monthly session, or collaborate with GNSC, we'd love to hear from you.</p>

            </div>
            <div class="contact-form-container">
              <!-- Previous Google Form:
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWSoclwgn7kdkkFI6eZga0zVV1-WFQe9J-T22Vza2eHhhEmg/viewform?embedded=true" width="100%" height="878" frameborder="0" marginheight="0" marginwidth="0" style="border:0; max-width: 100%;">Loading…</iframe>
              -->
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWSoclwgn7kdkkFI6eZga0zVV1-WFQe9J-T22Vza2eHhhEmg/viewform?usp=sharing&ouid=107580116158200463282&embedded=true" width="100%" height="878" frameborder="0" marginheight="0" marginwidth="0" style="border:0; max-width: 100%;">Loading…</iframe>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-contact', Contact);
