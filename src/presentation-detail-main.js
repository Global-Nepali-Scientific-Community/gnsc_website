// Global Web Components
import './components/site-header.js';
import './components/site-footer.js';

// Presentation Detail Component
import './components/presentations/presentation-detail.js';

// Utilities
import { initScrollObserver } from './utils/scroll-observer.js';

// Initialize scroll reveal animations
initScrollObserver();

console.log('GNSC Presentation Detail page loaded successfully.');
