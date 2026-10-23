import { presentationsData } from '../../data/presentations.js';

class PresentationDetail extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  extractVideoId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  formatApaAuthor(name) {
    if (!name) return 'Speaker';
    const cleaned = name.replace(/^(Dr\.|Prof\.|Er\.|Mr\.|Ms\.|Mrs\.)\s+/i, '').trim();
    const parts = cleaned.split(' ');
    if (parts.length === 1) return parts[0];
    const lastName = parts[parts.length - 1];
    const initials = parts.slice(0, parts.length - 1).map(p => p[0] + '.').join(' ');
    return `${lastName}, ${initials}`;
  }

  downloadIcsFile(presentation, cleanTitle) {
    const desc = (presentation.description || presentation.abstract || '').replace(/\r?\n/g, ' ');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Global Nepali Scientific Community//Academic Series//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:GNSC Session: ${cleanTitle}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:Online (Zoom / GNSC Virtual Meeting)`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `GNSC_Session_${presentation.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  attachEventListeners() {
    const shareBtn = this.querySelector('#share-presentation-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const url = window.location.href;
        if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
          try {
            await navigator.share({
              title: document.title,
              text: `Check out this presentation on GNSC: ${document.title}`,
              url: url
            });
            return;
          } catch (e) {
            // User cancelled or share failed, fallback to clipboard
          }
        }

        try {
          await navigator.clipboard.writeText(url);
          const originalText = shareBtn.innerHTML;
          shareBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Link Copied!</span>
          `;
          shareBtn.classList.add('btn-copied');
          setTimeout(() => {
            shareBtn.innerHTML = originalText;
            shareBtn.classList.remove('btn-copied');
          }, 2400);
        } catch (err) {
          console.error('Clipboard copy failed:', err);
        }
      });
    }

    const copyCitationBtn = this.querySelector('#copy-citation-btn');
    const citationText = this.querySelector('#apa-citation-text');
    if (copyCitationBtn && citationText) {
      copyCitationBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(citationText.textContent.trim());
          const originalText = copyCitationBtn.innerHTML;
          copyCitationBtn.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied to Clipboard!</span>
          `;
          copyCitationBtn.classList.add('btn-copied');
          setTimeout(() => {
            copyCitationBtn.innerHTML = originalText;
            copyCitationBtn.classList.remove('btn-copied');
          }, 2400);
        } catch (err) {
          console.error('Clipboard copy failed:', err);
        }
      });
    }

    const addCalBtn = this.querySelector('#add-calendar-btn');
    if (addCalBtn && this.currentPresentation) {
      addCalBtn.addEventListener('click', () => {
        const cleanTitle = this.currentPresentation.title.replace(/\[UPCOMING\]\s*/i, '');
        this.downloadIcsFile(this.currentPresentation, cleanTitle);
      });
    }
  }

  render() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const currentIndex = presentationsData.findIndex(item => item.id === id);
    const presentation = currentIndex !== -1 ? presentationsData[currentIndex] : presentationsData[0];

    if (!presentation) {
      this.innerHTML = `
        <div class="container detail-container not-found-container">
          <div class="detail-not-found">
            <h2>Presentation Not Found</h2>
            <p>The requested presentation could not be located in our records.</p>
            <a href="index.html" class="btn btn-primary">← Back to All Presentations</a>
          </div>
        </div>
      `;
      return;
    }

    this.currentPresentation = presentation;
    const cleanTitle = presentation.title.replace(/\[UPCOMING\]\s*/i, '');
    const isUpcoming = presentation.title.includes('[UPCOMING]') || presentation.isUpcoming === true;

    // Update document title dynamically
    document.title = `${cleanTitle} — GNSC Presentations`;

    // Video extraction directly from youtubeUrl
    const videoId = this.extractVideoId(presentation.youtubeUrl);
    const hasRecording = Boolean(presentation.hasRecording && videoId);
    const hasPdf = Boolean(presentation.pdfUrl);

    // Prev / Next Presentation links
    const prevPresentation = currentIndex > 0 ? presentationsData[currentIndex - 1] : null;
    const nextPresentation = currentIndex < presentationsData.length - 1 ? presentationsData[currentIndex + 1] : null;

    // APA Academic Citation construction
    const apaAuthor = this.formatApaAuthor(presentation.name);
    const pageUrl = window.location.href;
    const apaCitation = `${apaAuthor} (${presentation.year || '2026'}). ${cleanTitle}. Global Nepali Scientific Community (GNSC) Academic Presentations. ${pageUrl}`;

    // Google Calendar template URL for upcoming sessions
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('GNSC: ' + cleanTitle)}&details=${encodeURIComponent(presentation.description || presentation.abstract || '')}&location=${encodeURIComponent('Online / Zoom')}`;

    this.innerHTML = `
      <section class="section presentation-detail-section">
        <div class="container detail-container">
          
          <!-- Top Navigation & Action Controls -->
          <div class="detail-top-controls">
            <a href="index.html" class="detail-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to All Presentations</span>
            </a>

            <div class="detail-action-buttons">
              <button type="button" class="btn btn-secondary btn-sm action-btn" id="share-presentation-btn" title="Share this presentation link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>Share Link</span>
              </button>

              <a href="#citation-section" class="btn btn-secondary btn-sm action-btn" title="Jump to citation">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <span>Cite</span>
              </a>
            </div>
          </div>

          <!-- Header: Badges, Title, Presenter Meta -->
          <header class="detail-header">
            <div class="detail-badges">
              <span class="presentation-tag">${presentation.tag}</span>
              <span class="continent-badge">${presentation.continent}</span>
              ${isUpcoming ? `<span class="detail-upcoming-pill">Upcoming Session</span>` : ''}
              ${hasRecording ? `<span class="detail-recorded-pill">Recording Available</span>` : ''}
            </div>
            
            <h1 class="detail-title">${cleanTitle}</h1>
            
            <div class="detail-meta-bar">
              <div class="detail-presenter-info">
                <div class="presenter-avatar-wrapper">
                  <img 
                    src="${presentation.image || '../assets/gnsc_main.png'}" 
                    alt="${presentation.name}" 
                    class="detail-presenter-photo"
                    onerror="this.onerror=null; this.src='../assets/gnsc_main.png';" 
                  />
                </div>
                <div class="presenter-text">
                  <span class="detail-presenter-name">${presentation.name}</span>
                  <span class="detail-presenter-role">${presentation.role || 'GNSC Scholar'}</span>
                </div>
              </div>

              <div class="detail-date-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>${presentation.date || presentation.year}</span>
              </div>
            </div>

            ${presentation.coPresenters && presentation.coPresenters.length ? `
              <div class="detail-copresenters-row">
                <span class="copresenters-label">Co-Presenters:</span>
                ${presentation.coPresenters.map(cp => `<span class="copresenter-badge">${cp}</span>`).join('')}
              </div>
            ` : ''}
          </header>

          <!-- Adaptive Media State (Video / Upcoming / Unrecorded) -->
          <div class="detail-media-section">
            <div class="detail-section-heading">
              <div class="section-heading-icon video-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h2 class="detail-section-title">
                ${isUpcoming ? 'Scheduled Live Session' : 'Session Video Recording'}
              </h2>
            </div>

            ${isUpcoming ? `
              <!-- Upcoming Live Session Card -->
              <div class="media-upcoming-card">
                <div class="upcoming-status-badge">
                  <span class="upcoming-pulse-dot"></span>
                  <span>Scheduled Live Academic Session</span>
                </div>
                
                <h3 class="upcoming-card-title">${cleanTitle}</h3>
                
                <p class="upcoming-desc">
                  This scientific presentation will be broadcast live via virtual conference. Registered participants and community members are invited to attend, participate in the live Q&A, and interact with the speaker.
                </p>

                <div class="upcoming-details-grid">
                  <div class="upcoming-detail-item">
                    <span class="detail-label">Scheduled Date</span>
                    <span class="detail-val">${presentation.date || presentation.year}</span>
                  </div>
                  <div class="upcoming-detail-item">
                    <span class="detail-label">Session Format</span>
                    <span class="detail-val">Virtual Presentation & Live Q&A</span>
                  </div>
                  <div class="upcoming-detail-item">
                    <span class="detail-label">Presenter</span>
                    <span class="detail-val">${presentation.name}</span>
                  </div>
                </div>

                <div class="upcoming-actions-row">
                  ${presentation.meetingLink ? `
                    <a href="${presentation.meetingLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary upcoming-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                      </svg>
                      <span>Join Live Session</span>
                    </a>
                  ` : `
                    <div class="upcoming-registration-note">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      <span>Direct Zoom access link will be emailed to members and published before session start.</span>
                    </div>
                  `}

                  <button type="button" class="btn btn-secondary upcoming-btn" id="add-calendar-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                      <line x1="12" y1="14" x2="12" y2="18"></line>
                      <line x1="10" y1="16" x2="14" y2="16"></line>
                    </svg>
                    <span>Download .ics Calendar File</span>
                  </button>

                  <a href="${gCalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary upcoming-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Add to Google Calendar</span>
                  </a>
                </div>
              </div>
            ` : hasRecording ? `
              <!-- Responsive 16:9 YouTube Video Embed -->
              <div class="video-embed-wrapper">
                <iframe 
                  src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0" 
                  title="${cleanTitle}" 
                  class="youtube-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>
            ` : `
              <!-- Graceful Unrecorded Session Notice -->
              <div class="media-unrecorded-card">
                <div class="unrecorded-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                    <path d="M21 15V7l-5 3.5"></path>
                    <path d="M15 10.5V5a2 2 0 0 0-2-2H9"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"></path>
                  </svg>
                </div>
                <div class="unrecorded-content">
                  <h3 class="unrecorded-title">Recording Not Available</h3>
                  <p class="unrecorded-desc">
                    This scientific session was conducted live and a public video recording is not archived for this presentation. You can review the scientific abstract and lecture details below.
                  </p>
                </div>
              </div>
            `}
          </div>

          <!-- Presentation PDF Embed (or Graceful Unavailable State) -->
          <div class="detail-media-section pdf-section">
            <div class="detail-section-heading">
              <div class="section-heading-icon pdf-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 class="detail-section-title">Presentation PDF & Slides</h2>
              
              ${hasPdf ? `
                <div class="pdf-header-actions">
                  <a href="${presentation.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm pdf-action-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Open in New Tab</span>
                  </a>
                  <a href="${presentation.pdfUrl}" download class="btn btn-primary btn-sm pdf-action-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Download PDF</span>
                  </a>
                </div>
              ` : ''}
            </div>

            ${hasPdf ? `
              <div class="pdf-embed-wrapper">
                <iframe 
                  src="${presentation.pdfUrl}#toolbar=0" 
                  class="pdf-iframe" 
                  title="Presentation PDF">
                </iframe>
              </div>
            ` : `
              <div class="media-pending-card">
                <div class="pending-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <circle cx="12" cy="14" r="2"></circle>
                  </svg>
                </div>
                <div class="pending-content">
                  <h3 class="pending-title">Presentation Slides Unavailable</h3>
                  <p class="pending-desc">
                    The slide deck for this lecture is currently pending speaker submission or final academic review. Once provided, the scrollable presentation PDF will be accessible here.
                  </p>
                </div>
              </div>
            `}
          </div>

          <!-- Scientific Abstract Section -->
          <div class="detail-card abstract-card">
            <div class="card-header-with-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <h3 class="abstract-card-title">Scientific Abstract & Summary</h3>
            </div>
            <p class="abstract-text">
              ${presentation.abstract || presentation.description || 'Scientific abstract and lecture notes are being archived for this session.'}
            </p>
          </div>

          <!-- Speaker Biography Section (if available) -->
          ${presentation.speakerBio && presentation.speakerBio.trim() ? `
            <div class="detail-card speaker-bio-card">
              <div class="card-header-with-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <h3 class="abstract-card-title">About the Speaker</h3>
              </div>
              <p class="abstract-text">${presentation.speakerBio}</p>
            </div>
          ` : ''}

          <!-- Academic Citation Section -->
          <div class="detail-card citation-card" id="citation-section">
            <div class="citation-header">
              <div class="card-header-with-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 class="abstract-card-title">How to Cite This Presentation</h3>
              </div>

              <button type="button" class="btn btn-secondary btn-sm copy-cite-btn" id="copy-citation-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy APA Citation</span>
              </button>
            </div>

            <div class="citation-box">
              <code id="apa-citation-text">${apaCitation}</code>
            </div>
            <p class="citation-format-note">Formatted according to APA (7th Edition) for academic and scientific referencing.</p>
          </div>

          <!-- Bottom Navigation: Prev / Next Presentation -->
          <footer class="detail-nav-footer">
            ${prevPresentation ? `
              <a href="detail.html?id=${prevPresentation.id}" class="detail-nav-btn prev-btn">
                <span class="nav-dir">← Previous Presentation</span>
                <span class="nav-label">${prevPresentation.title.replace(/\[UPCOMING\]\s*/i, '')}</span>
              </a>
            ` : `<div class="nav-spacer"></div>`}

            ${nextPresentation ? `
              <a href="detail.html?id=${nextPresentation.id}" class="detail-nav-btn next-btn">
                <span class="nav-dir">Next Presentation →</span>
                <span class="nav-label">${nextPresentation.title.replace(/\[UPCOMING\]\s*/i, '')}</span>
              </a>
            ` : `<div class="nav-spacer"></div>`}
          </footer>

        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-presentation-detail', PresentationDetail);
