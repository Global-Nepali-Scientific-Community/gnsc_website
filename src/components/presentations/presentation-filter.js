class PresentationFilter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="presentation-filter-bar container">
        <div class="filter-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <span class="filter-title">Filter Presentations</span>
        </div>
        
        <div class="filter-controls">
          <!-- Continent Filter -->
          <div class="filter-group">
            <label for="filter-continent">Speaker Continent</label>
            <select id="filter-continent" class="filter-select">
              <option value="all">All Continents</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
              <option value="South America">South America</option>
            </select>
          </div>

          <!-- Topic Filter -->
          <div class="filter-group">
            <label for="filter-topic">Presentation Topic</label>
            <select id="filter-topic" class="filter-select">
              <option value="all">All Topics</option>
              <option value="Food Science & Technology">Food Science & Technology</option>
              <option value="Genomics & Biotechnology">Genomics & Biotechnology</option>
              <option value="Climate & Environmental Science">Climate & Environmental Science</option>
              <option value="Artificial Intelligence & NLP">Artificial Intelligence & NLP</option>
              <option value="Sustainable Energy">Sustainable Energy</option>
              <option value="Medical & Health Sciences">Medical & Health Sciences</option>
              <option value="Heritage & Social Sciences">Heritage & Social Sciences</option>
              <option value="Academic Research">Academic Research</option>
              <option value="Professional Development">Professional Development</option>
            </select>
          </div>

          <!-- Date / Year Filter -->
          <div class="filter-group">
            <label for="filter-year">Year / Date Range</label>
            <select id="filter-year" class="filter-select">
              <option value="all">All Years</option>
              <option value="2027">2027</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <!-- Reset Filter Button -->
          <div class="filter-group filter-actions">
            <label>&nbsp;</label>
            <button id="reset-filters-btn" class="btn btn-secondary btn-sm">Reset Filters</button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const continentSelect = this.querySelector('#filter-continent');
    const topicSelect = this.querySelector('#filter-topic');
    const yearSelect = this.querySelector('#filter-year');
    const resetBtn = this.querySelector('#reset-filters-btn');

    const emitFilterChange = () => {
      this.dispatchEvent(new CustomEvent('gnsc-filter-change', {
        bubbles: true,
        detail: {
          continent: continentSelect.value,
          topic: topicSelect.value,
          year: yearSelect.value
        }
      }));
    };

    continentSelect.addEventListener('change', emitFilterChange);
    topicSelect.addEventListener('change', emitFilterChange);
    yearSelect.addEventListener('change', emitFilterChange);

    resetBtn.addEventListener('click', () => {
      continentSelect.value = 'all';
      topicSelect.value = 'all';
      yearSelect.value = 'all';
      emitFilterChange();
    });
  }
}

customElements.define('gnsc-presentation-filter', PresentationFilter);
