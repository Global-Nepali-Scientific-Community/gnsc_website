import { presentationsData } from '../../data/presentations.js';

class PresentationGrid extends HTMLElement {
  constructor() {
    super();
    this.presentations = presentationsData;
  }

  connectedCallback() {
    this.render();
    this.bindFilterListener();
  }

  render() {
    this.innerHTML = `
      <section class="section presentations-section">
        <div class="container">
          <div class="presentations-grid" id="grid-container">
            ${this.presentations.map(p => `
              <gnsc-presentation-card
                id="${p.id}"
                image="${p.image}"
                tag="${p.tag}"
                continent="${p.continent}"
                name="${p.name}"
                role="${p.role}"
                title="${p.title}"
                description="${p.description}"
                date="${p.date}"
                year="${p.year}">
              </gnsc-presentation-card>
            `).join('')}
          </div>
          <div id="no-results-msg" class="no-results-message hidden">
            <p>No presentations found matching the selected filter criteria.</p>
          </div>
        </div>
      </section>
    `;
  }

  bindFilterListener() {
    document.addEventListener('gnsc-filter-change', (e) => {
      const { continent, topic, year } = e.detail;
      const cards = this.querySelectorAll('gnsc-presentation-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const cardContinent = card.getAttribute('continent');
        const cardTopic = card.getAttribute('tag');
        const cardYear = card.getAttribute('year');

        const matchContinent = (continent === 'all' || cardContinent === continent);
        const matchTopic = (topic === 'all' || cardTopic === topic);
        const matchYear = (year === 'all' || cardYear === year);

        if (matchContinent && matchTopic && matchYear) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const noResultsMsg = this.querySelector('#no-results-msg');
      if (noResultsMsg) {
        if (visibleCount === 0) {
          noResultsMsg.classList.remove('hidden');
        } else {
          noResultsMsg.classList.add('hidden');
        }
      }
    });
  }
}

customElements.define('gnsc-presentation-grid', PresentationGrid);
