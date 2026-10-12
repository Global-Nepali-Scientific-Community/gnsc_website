class WhoWeAre extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section who-we-are-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">OUR COMMUNITY</span>
            <h2 class="section-title">Who We Are</h2>
          </div>
          <div class="who-we-are-content">
            <p class="lead-text">
              The Global Nepali Scientific Community (GNSC) brings together researchers, educators, innovators, and academic leaders spanning multiple scientific disciplines across the globe.
            </p>
            <div class="stats-grid">
              <div class="stat-card">
                <span class="stat-number">300+</span>
                <span class="stat-label">Global Members</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">20+</span>
                <span class="stat-label">Countries Represented</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">50</span>
                <span class="stat-label">Total Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-who-we-are', WhoWeAre);
