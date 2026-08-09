class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero-section">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1 class="hero-title">Connecting Nepali Academics Worldwide</h1>
            <p class="hero-subtitle">
              Empowering innovation, scientific research, and academic collaboration across global Nepali communities
            </p>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">Join Our Community</a>
              <a href="#what-we-do" class="btn btn-secondary">Explore Our Work</a>
            </div>
          </div>
          <div class="hero-visual">
            <div id="hero-lottie" class="hero-lottie"></div>
          </div>
        </div>
      </section>
    `;

    this.initLottie();
  }

  initLottie() {
    const container = this.querySelector('#hero-lottie');
    if (container && typeof lottie !== 'undefined') {
      const anim = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/red_globe.json'
      });
      anim.setSpeed(0.5);
    } else if (container) {
      setTimeout(() => this.initLottie(), 200);
    }
  }
}

customElements.define('gnsc-hero', Hero);
