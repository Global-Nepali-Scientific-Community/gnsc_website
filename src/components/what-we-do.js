class WhatWeDo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section what-we-do-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">PROGRAMS & INITIATIVES</span>
            <h2 class="section-title">What We Do</h2>
          </div>
          
          <div class="what-we-do-grid">
            <div class="what-we-do-image-wrapper">
              <img src="assets/academic_speaker.png" alt="Nepali Academic Speaker at Genomics Symposium" class="speaker-image" />
            </div>
            <div class="what-we-do-card">
              <div class="event-badge">Featured Monthly Series</div>
              <h3 class="event-title">Monthly Conversation Series</h3>
              <p class="event-description">
                Nepali-speaking academics from around the world share insights that bridge Nepali cultural experience with rigorous academic thought, producing insights that benefit all people with a focus on Nepali communities.
              </p>
              <div class="event-footer">
                <a href="#contact" class="btn btn-primary">View & Join Next Session</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-what-we-do', WhatWeDo);
