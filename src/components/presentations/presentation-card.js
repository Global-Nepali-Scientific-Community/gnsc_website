class PresentationCard extends HTMLElement {
  static get observedAttributes() {
    return ['id', 'image', 'tag', 'continent', 'name', 'role', 'title', 'description', 'date', 'year'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const id = this.getAttribute('id') || 'p1';
    const image = this.getAttribute('image') || '../assets/gnsc_main.png';
    const tag = this.getAttribute('tag') || 'Research';
    const continent = this.getAttribute('continent') || 'Global';
    const name = this.getAttribute('name') || 'Speaker';
    const role = this.getAttribute('role') || 'Researcher';
    const title = this.getAttribute('title') || 'Presentation Title';
    const description = this.getAttribute('description') || '';
    const date = this.getAttribute('date') || '';

    this.innerHTML = `
      <article class="presentation-card fade-in-on-scroll" data-continent="${continent}" data-tag="${tag}" data-date="${date}">
        <div class="presentation-image-wrapper">
          <img src="${image}" alt="${title}" class="presentation-image" loading="lazy" />
          <div class="presentation-badges">
            <span class="presentation-tag">${tag}</span>
            <span class="continent-badge">${continent}</span>
          </div>
        </div>
        <div class="presentation-body">
          <div class="presenter-meta">
            <span class="presenter-name">${name}</span>
            <span class="presenter-role">${role}</span>
          </div>
          <h3 class="presentation-title">${title}</h3>
          <p class="presentation-description">${description}</p>
          <div class="presentation-footer">
            <span class="presentation-date">${date}</span>
            <a href="detail.html?id=${encodeURIComponent(id)}" class="btn btn-secondary btn-sm">View Details &rarr;</a>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('gnsc-presentation-card', PresentationCard);
