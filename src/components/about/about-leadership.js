import { leadershipData } from '../../data/leadership.js';

class AboutLeadership extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  renderCard(member) {
    const fallbackImage = '../assets/academic_speaker.png';
    const imageSrc = member.image || fallbackImage;

    return `
      <div class="leader-card">
        <div class="leader-photo-wrapper">
          <img 
            src="${imageSrc}" 
            alt="${member.name}" 
            class="leader-photo" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${fallbackImage}';" 
          />
        </div>
        <div class="leader-info">
          <h4 class="leader-name">${member.name}</h4>
          <span class="leader-role">${member.role}</span>
          ${member.details ? `<p class="leader-details">${member.details}</p>` : ''}
          <div class="leader-location">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${member.location}</span>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const execCards = (leadershipData.executiveCommittee || [])
      .map(member => this.renderCard(member))
      .join('');

    const advisoryCards = (leadershipData.advisoryCommittee || [])
      .map(member => this.renderCard(member))
      .join('');

    this.innerHTML = `
      <section class="section leadership-section" id="leadership-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">GOVERNANCE & LEADERSHIP</span>
            <h2 class="section-title">Leadership & Committees</h2>
            <p class="section-subtitle">
              Distinguished scientists, researchers, and dedicated professionals guiding GNSC's mission worldwide.
            </p>
          </div>

          <!-- Executive Committee Block -->
          <div class="committee-block">
            <div class="committee-header">
              <div class="committee-title-group">
                <h3 class="committee-title">Executive Committee</h3>
                <span class="committee-badge">${leadershipData.executiveCommittee.length} Members</span>
              </div>
              <p class="committee-desc">
                Guiding institutional strategy, administrative governance, global partnerships, and academic programs.
              </p>
            </div>
            <div class="leadership-grid">
              ${execCards}
            </div>
          </div>

          <!-- Advisory Committee Block -->
          <div class="committee-block">
            <div class="committee-header">
              <div class="committee-title-group">
                <h3 class="committee-title">Advisory Committee</h3>
                <span class="committee-badge">${leadershipData.advisoryCommittee.length} Advisors</span>
              </div>
              <p class="committee-desc">
                Senior professors and international domain leaders providing strategic counsel, research vision, and academic oversight.
              </p>
            </div>
            <div class="leadership-grid">
              ${advisoryCards}
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-about-leadership', AboutLeadership);
