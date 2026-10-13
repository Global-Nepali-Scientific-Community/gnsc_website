class PresentationGrid extends HTMLElement {
  constructor() {
    super();
    this.presentations = [
      // {
      //   id: 'p39',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Climate & Environmental Science',
      //   continent: 'Asia',
      //   name: 'Dr. Rajendra Upreti',
      //   role: 'Senior Agricultural Scientist, Nepal',
      //   title: '[UPCOMING] Rice Cultivation in Nepal: Agrobiodiversity, Climate Resilience & Food Security',
      //   description: 'Agronomic analysis of indigenous rice landraces, sustainable irrigation methods, climate-resilient farming systems, and rural food sovereignty in Nepal.',
      //   date: 'Jan 2, 2027',
      //   year: '2027'
      // },
      // {
      //   id: 'p38',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Food Science & Technology',
      //   continent: 'North America',
      //   name: 'Dr. Subhash Shrestha',
      //   role: 'Faculty, South Carolina State University (SCSU)',
      //   title: '[UPCOMING] Food Safety Paradigms: Pathogen Control and Quality Assurance',
      //   description: 'Critical analysis of modern food safety verification systems, microbial hazard tracking, and implementation of robust preventive controls in food processing facilities.',
      //   date: 'Dec 5, 2026',
      //   year: '2026'
      // },
      // {
      //   id: 'p37',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Academic Research',
      //   continent: 'Oceania',
      //   name: 'Dr. Raju Adhikari',
      //   role: ' ', // TODO: Add role for Dr. Raju Adhikari (Melbourne, Australia)
      //   title: '[UPCOMING]', // TODO: Add presentation title for Dr. Raju Adhikari
      //   description: ' ', // TODO: Add description for Dr. Raju Adhikari
      //   date: 'Nov 7, 2026',
      //   year: '2026'
      // },
      {
        id: 'p36',
        image: '../assets/gnsc_main.png',
        tag: 'Professional Development',
        continent: 'North America',
        name: 'Gajendra Shrestha',
        role: 'Financial & Retirement Specialist, Utah',
        title: '401(k) Retirement Frameworks in America and Abroad',
        description: 'A practical financial guide covering 401(k) allocations, employer matching, tax-deferred growth, rollover rules, and global wealth management for expatriates and immigrant professionals.',
        date: 'Oct 3, 2026',
        year: '2026'
      },
      {
        id: 'p35',
        image: '../assets/gnsc_main.png',
        tag: 'Genomics & Biotechnology',
        continent: 'North America',
        name: 'Aakanksha Dhakal',
        role: 'Researcher, Louisiana State University (LSU)',
        title: 'Development of Food Packaging Films Using Bacterial Cellulose and Pullulan Impregnated with Green-Synthesized Silver Nanoparticles',
        description: 'Formulating bioactive, biodegradable antimicrobial food packaging films leveraging bacterial cellulose matrices, pullulan biopolymers, and green silver nanoparticles for prolonged shelf life.',
        date: 'Sept 12, 2026',
        year: '2026'
      },
      {
        id: 'p34',
        image: '../assets/gnsc_main.png',
        tag: 'Heritage & Social Sciences',
        continent: 'Europe',
        name: 'Prof. Bishal Sitaula',
        role: 'Professor, Norwegian University of Life Sciences',
        title: 'Ancient Wisdom Meets Modern Relationship Science: Can Healthy Marriage Become a Source of Healing, Resilience, and Mental Well-Being?',
        description: 'Synthesizing ancient Vedic relational philosophy with modern attachment theory and neuroscience to explore how conscious marital partnerships build resilience and mental health.',
        date: 'August 1, 2026',
        year: '2026'
      },
      {
        id: 'p33',
        image: '../assets/gnsc_main.png',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Dr. Bibha Gautam',
        role: 'Faculty, Texas Tech University',
        title: 'Nursing Perspectives on Metabolic Health and Chronic Disease Management',
        description: 'Evidence-based nursing methodologies and proactive community-focused clinical interventions addressing type-2 diabetes, hypertension, and metabolic syndrome.',
        date: 'July 11, 2026',
        year: '2026'
      },
      {
        id: 'p32',
        image: '../assets/gnsc_main.png',
        tag: 'Food Science & Technology',
        continent: 'North America',
        name: 'Santosh Thapa',
        role: 'Researcher, South Dakota State University (SDSU)',
        title: 'Plant Protein Isolation and Eco-Friendly Packaging Films',
        description: 'Innovative extraction methodologies for high-purity legume and cereal plant proteins and their cross-linking into biodegradable barrier packaging films.',
        date: 'June 6, 2026',
        year: '2026'
      },
      {
        id: 'p31',
        image: '../assets/lekhnath_kafle.jpg',
        tag: 'Climate & Environmental Science',
        continent: 'Asia',
        name: 'Prof. Lekhnath Kafle',
        role: 'Professor, National Pingtung University of Science and Technology, Taiwan',
        title: 'Research on Bee Biology, Pollination Ecology, and Environmental Health',
        description: 'Investigating honeybee colony dynamics, pesticide exposure, pollination ecosystems, and the vital role of bees as bio-indicators of environmental sustainability.',
        date: 'May 2, 2026',
        year: '2026'
      },
      {
        id: 'p30',
        image: '../assets/choodamani_khanal.jpg',
        tag: 'Academic Research',
        continent: 'North America',
        name: 'Prof. Choodamani Khanal',
        role: 'Member, GNSC Executive Council',
        title: ' ', // TODO: Add presentation title for Prof. Choodamani Khanal
        description: ' ', // TODO: Add description for Prof. Choodamani Khanal
        date: 'April 4, 2026',
        year: '2026'
      },
      {
        id: 'p29',
        image: '../assets/rudra_kafle.jpg',
        tag: 'Artificial Intelligence & NLP',
        continent: 'North America',
        name: 'Prof. Rudra Kafle & Umesh Silwal',
        role: 'Faculty & Academic Council Leads, GNSC',
        title: 'New Learning Techniques and Artificial Intelligence in STEM Education',
        description: 'Integrating generative AI, adaptive learning algorithms, and interactive simulation tools to elevate pedagogical effectiveness in undergraduate physics and science education.',
        date: 'March 7, 2026',
        year: '2026'
      },
      {
        id: 'p28',
        image: '../assets/gnsc_main.png',
        tag: 'Climate & Environmental Science',
        continent: 'North America',
        name: 'Sandeep Paudel',
        role: 'Researcher, South Dakota State University (SDSU)',
        title: 'Degradable Plastics: Bio-Based Polymers for Sustainable Materials',
        description: 'Synthesis of biodegradable aliphatic polyesters and starch-blended polymers to replace petroleum plastics and eliminate persistent microplastic pollution.',
        date: 'Feb 7, 2026',
        year: '2026'
      },
      {
        id: 'p27',
        image: '../assets/gopal_bhatta.jpg',
        tag: 'Sustainable Energy',
        continent: 'Europe',
        name: 'Prof. Gopal Bhatta',
        role: 'Professor of Astrophysics, University of Zielona Góra, Poland',
        title: 'Black Holes & High-Energy Astrophysics',
        description: 'Theoretical and observational physics of supermassive black holes, event horizon imaging, accretion discs, and relativistic plasma jets in active galactic nuclei.',
        date: 'Jan 3, 2026',
        year: '2026'
      },
      {
        id: 'p26',
        image: '../assets/gyan_neupane.jpg',
        tag: 'Heritage & Social Sciences',
        continent: 'North America',
        name: 'Dr. Gyan Nyaupane',
        role: 'Professor, Arizona State University (ASU)',
        title: 'One Heritage, Multiple Meanings: History, Challenges, and Prospects of Lumbini, Nepal',
        description: 'A multi-layered socio-cultural, religious, and geographic study of Lumbini, dissecting tourism development, spiritual heritage preservation, and indigenous community inclusion.',
        date: 'Dec 6, 2025',
        year: '2025'
      },
      {
        id: 'p25',
        image: '../assets/bishal_adhikari.jpg',
        tag: 'Food Science & Technology',
        continent: 'North America',
        name: 'Bishal Adhikari',
        role: 'Program Coordinator, GNSC',
        title: 'Food Manufacturing Certificate in USA: Standards, Compliance & Careers',
        description: 'Navigating US food manufacturing regulations, SQF/BRC/HACCP certifications, audit readiness, and career advancement in industrial food processing.',
        date: 'Nov 1, 2025',
        year: '2025'
      },
      {
        id: 'p24',
        image: '../assets/gnsc_main.png',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Pratibha Sharma',
        role: 'Researcher, South Dakota State University (SDSU)',
        title: 'Immunology: Molecular Pathways and Vaccine Defense Mechanisms',
        description: 'Insights into cellular immunology, antigen presentation, memory T-cell responses, and translational avenues for therapeutic vaccine design.',
        date: 'Oct 4, 2025',
        year: '2025'
      },
      {
        id: 'p23',
        image: '../assets/gnsc_main.png',
        tag: 'Sustainable Energy',
        continent: 'North America',
        name: 'Prof. Umesh Silwal',
        role: 'Faculty, University of North Carolina',
        title: 'Nuclear Fusion: Green Energy for the Next Generation',
        description: 'Plasma confinement, magnetic fusion reactors (tokamaks and stellarators), and engineering milestones toward infinite, clean fusion energy for the next generation.',
        date: 'Sept 6, 2025',
        year: '2025'
      },
      {
        id: 'p22',
        image: '../assets/pragyan_adhikari.jpg',
        tag: 'Climate & Environmental Science',
        continent: 'North America',
        name: 'Pragyan Adhikari',
        role: 'South Dakota State University / Vice President, GNSC',
        title: 'Environmental and Health: Urban Exposures and Public Health in Boston',
        description: 'Field studies on urban environmental health dynamics, particulate matter dispersion, and community-level mitigation strategies.',
        date: 'Aug 2, 2025',
        year: '2025'
      },
      {
        id: 'p21',
        image: '../assets/gnsc_main.png',
        tag: 'Climate & Environmental Science',
        continent: 'North America',
        name: 'Dr. Ankit Aryal',
        role: 'Researcher, Louisiana State University (LSU)',
        title: 'Environmental and Health: Interdisciplinary Perspectives from LSU',
        description: 'Investigating environmental toxicology, airborne pollutants, water contaminants, and their correlated epidemiological health outcomes.',
        date: 'July 5, 2025',
        year: '2025'
      },
      {
        id: 'p20',
        image: '../assets/gnsc_main.png',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Dr. Prakash Shrestha',
        role: 'General Physician',
        title: 'Good and Bad Sides of Antibiotics',
        description: 'A clinical exploration of therapeutic antibiotic efficacy, the impending antimicrobial resistance (AMR) global crisis, and responsible prescription stewardship.',
        date: 'June 7, 2025',
        year: '2025'
      },
      {
        id: 'p19',
        image: '../assets/beda_n_dahal.jpg',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Beda N Dahal',
        role: 'President, GNSC / Food Scientist',
        title: 'Power of Food Antioxidants for Prevention of Inflammatory Diseases',
        description: 'Mechanistic actions of dietary flavonoids, polyphenols, and bioactive antioxidants in downregulating inflammatory biomarkers and preventing chronic degenerative diseases.',
        date: 'May 3, 2025',
        year: '2025'
      },
      {
        id: 'p18',
        image: '../assets/gnsc_main.png',
        tag: 'Climate & Environmental Science',
        continent: 'Asia',
        name: 'Mr. Abhikesh Khadka',
        role: ' ', // TODO: Add role for Mr. Abhikesh Khadka
        title: 'Microplastics in Food and Health Consequences',
        description: 'Tracking environmental trophic transfer of micro- and nano-plastics, digestive uptake mechanisms, and their endocrine and inflammatory impacts on human health.',
        date: 'Apr 5, 2025',
        year: '2025'
      },
      {
        id: 'p17',
        image: '../assets/yakindra_timilsena.jpg',
        tag: 'Genomics & Biotechnology',
        continent: 'Oceania',
        name: 'Dr. Yakindra Timilsena',
        role: 'Senior Research Fellow, Australia / Member, GNSC',
        title: 'Scientific Innovations: Plant-Based Omega-3 Emerging Trends',
        description: 'Emerging lipid technologies, microalgae harvesting, and microencapsulation matrices to stabilize and deliver bioavailable plant-derived omega-3 fatty acids.',
        date: 'Mar 1, 2025',
        year: '2025'
      },
      {
        id: 'p16',
        image: '../assets/gnsc_main.png',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Dr. Manish Thapalia',
        role: 'Researcher, Louisiana State University (LSU)',
        title: 'Food-Borne Parasites: Detection, Pathogenesis, and Public Health Controls',
        description: 'Epidemiological overview of emerging foodborne parasitic infections, diagnostic surveillance methods, and biosecurity interventions across modern food distribution networks.',
        date: 'Feb 1, 2025',
        year: '2025'
      },
      {
        id: 'p15',
        image: '../assets/gnsc_main.png',
        tag: 'Food Science & Technology',
        continent: 'Asia',
        name: 'Ms. Sarika Gupta',
        role: ' ', // TODO: Add role for Ms. Sarika Gupta
        title: 'Building a Strong Food Safety Culture: Beyond Compliance',
        description: 'Transforming food safety from a baseline regulatory compliance checklist into an intrinsic operational culture with systemic accountability across leadership and line teams.',
        date: 'Jan 4, 2025',
        year: '2025'
      },
      {
        id: 'p14',
        image: '../assets/achyut_mishra.jpg',
        tag: 'Food Science & Technology',
        continent: 'North America',
        name: 'Dr. Achyut Mishra',
        role: 'Treasurer, GNSC / Food Scientist',
        title: 'Revolutionizing Innovation in Plant-Based Vegan Cheese: The Latest in Product Development',
        description: 'Recent product breakthroughs in structuring plant proteins, lipid phase emulation, and microbial fermentation to achieve authentic dairy cheese melt and sensory parity.',
        date: 'Dec 7, 2024',
        year: '2024'
      },
      {
        id: 'p13',
        image: '../assets/gnsc_main.png',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Mr. Krishna GC',
        role: ' ', // TODO: Add role for Mr. Krishna GC
        title: 'Obesity Food Base Management',
        description: 'Nutritional biochemistry and food-based intervention protocols designed for metabolic management, satiety regulation, and obesity prevention.',
        date: 'Nov 9, 2024',
        year: '2024'
      },
      {
        id: 'p12',
        image: '../assets/gnsc_main.png',
        tag: 'Medical & Health Sciences',
        continent: 'North America',
        name: 'Dr. Namrata Karki Kandel',
        role: ' ', // TODO: Add role for Dr. Namrata Karki Kandel
        title: 'Innovation in Wellness: Development of Dietary Supplements from Ideation to Commercialization',
        description: 'End-to-end framework for formulation, stability testing, clinical validation, regulatory approval, and scalable manufacturing of novel health and wellness supplements.',
        date: 'October 5, 2024',
        year: '2024'
      },
      {
        id: 'p11',
        image: '../assets/gnsc_main.png',
        tag: 'Food Science & Technology',
        continent: 'Europe',
        name: 'Dr. Ram Raj Panthi',
        role: 'Cheese Technical Lead, Dairygold, Ireland',
        title: 'Dynamics of Casein Micelles: A Techno-Functional Perspective',
        description: 'Understanding casein micelle structures, techno-functional properties, and molecular interactions to optimize cheese moisture control and high-protein dairy powder rehydration.',
        date: 'September 7, 2024',
        year: '2024'
      },
      {
        id: 'p10',
        image: '../assets/gnsc_main.png',
        tag: 'Genomics & Biotechnology',
        continent: 'North America',
        name: 'Dr. Bikram Upadhyaya',
        role: 'Research Scientist, Eurofins',
        title: 'The Functional Interplay between Bioactive Peptides, Gut Microbiota, and Obesity',
        description: 'Investigating the metabolic bioavailability of bioactive pulse peptides (g-EV) in diabetic obese animal models, demonstrating hepatic AMPK activation and beneficial gut flora modulation.',
        date: 'August 3, 2024',
        year: '2024'
      },
      {
        id: 'p9',
        image: '../assets/gnsc_main.png',
        tag: 'Sustainable Energy',
        continent: 'North America',
        name: 'Mr. Arjun Ghimire',
        role: ' ', // TODO: Add role for Mr. Arjun Ghimire
        title: 'Dynamic Complementary Strategies in Solid-State Microwave Processing',
        description: 'Evaluating solid-state microwave systems, real-time thermal camera feedback, and machine-learning-driven adaptive phase control for smart, energy-efficient food processing.',
        date: 'July 13, 2024',
        year: '2024'
      },
      {
        id: 'p8',
        image: '../assets/rudra_kafle.jpg',
        tag: 'Sustainable Energy',
        continent: 'North America',
        name: 'Dr. Rudra Kafle',
        role: 'Associate Professor of Physics / Vice President, GNSC',
        title: 'Atomic Clocks for Accurate Timekeeping',
        description: 'A comprehensive study of quantum atomic transitions, laser cooling, optical lattice frequency standards, and ultra-precise timekeeping essential for GPS and satellite navigation.',
        date: 'June 1, 2024',
        year: '2024'
      },
      {
        id: 'p7',
        image: '../assets/suvash_kafle.jpg',
        tag: 'Genomics & Biotechnology',
        continent: 'North America',
        name: 'Mr. Suvash Kafle',
        role: 'Vice President of Dairy, Perfect Day Foods',
        title: 'Precision Fermentation: Pioneering Food Security and Sustainable Nutrition',
        description: 'Showcasing industrial precision fermentation, cellular agriculture, and scalable sustainable protein production to revolutionize global nutrition while slashing resource footprints.',
        date: 'May 4, 2024',
        year: '2024'
      },
      {
        id: 'p6',
        image: '../assets/gnsc_main.png',
        tag: 'Food Science & Technology',
        continent: 'North America',
        name: 'Dr. Buddhi P. Lamsal',
        role: 'Professor of Food Processing, Iowa State University',
        title: 'Processing of Foods: A Necessary Evil or Opportunity to Add / Create Value?',
        description: 'Investigating thermal and non-thermal food processing techniques, protein functionalization, pathogen control, and consumer perceptions surrounding ultra-processed foods.',
        date: 'April 6, 2024',
        year: '2024'
      },
      {
        id: 'p5',
        image: '../assets/gopi_upreti.jpg',
        tag: 'Climate & Environmental Science',
        continent: 'North America',
        name: 'Dr. Gopi Upreti',
        role: 'Professor, TU / Advisor at NAPA',
        title: 'ECOSOCIOCENTRISM: The Earth First Paradigm — A Journey from Anthropocene to Symbiocene',
        description: 'A deep philosophical and ecological examination of ecosociocentrism, critiquing anthropocentric exploitation and charting a roadmap toward harmonious ecological coexistence.',
        date: 'Feb 3, 2024',
        year: '2024'
      },
      {
        id: 'p4',
        image: '../assets/gnsc_main.png',
        tag: 'Artificial Intelligence & NLP',
        continent: 'North America',
        name: 'Dr. Parshuram Dahal',
        role: ' ', // TODO: Add role for Dr. Parshuram Dahal
        title: 'Shaping the Future: Bridging Diverse Domains and Artificial Intelligence (AI) for World Changing Innovations',
        description: 'Exploring interdisciplinary integration of cutting-edge AI architectures, foundation models, and domain knowledge to drive breakthrough scientific and technological innovations.',
        date: 'Jan 6, 2024',
        year: '2024'
      },
      {
        id: 'p3',
        image: '../assets/chandra_giri.jpg',
        tag: 'Climate & Environmental Science',
        continent: 'North America',
        name: 'Dr. Chandra Giri',
        role: 'Senior Advisor, U.S. EPA & Duke University',
        title: 'Monitoring of the World using Earth Observation Satellite Data',
        description: 'Highlighting multi-decadal satellite remote sensing frameworks, global land cover mapping, mangrove ecosystem tracking, and environmental monitoring systems.',
        date: 'Dec 3, 2023',
        year: '2023'
      },
      {
        id: 'p2',
        image: '../assets/gnsc_main.png',
        tag: 'Genomics & Biotechnology',
        continent: 'North America',
        name: 'Dr. Madhab Pandey',
        role: ' ', // TODO: Add role for Dr. Madhab Pandey
        title: 'A Revolution in DNA Sequencing Technology: Application in Human Health, Agriculture & Biodiversity Conservation',
        description: 'Examining rapid advancements in high-throughput DNA sequencing platforms and their transformative applications across clinical health, agricultural genomics, and biodiversity conservation.',
        date: 'Nov 4, 2023',
        year: '2023'
      },
      {
        id: 'p1',
        image: '../assets/achyut_adhikari.jpg',
        tag: 'Food Science & Technology',
        continent: 'North America',
        name: 'Dr. Achyut Adhikari',
        role: 'Associate Professor, Louisiana State University (LSU)',
        title: 'Food Safety Modernization Act: Revolutionizing Food Safety Regulations',
        description: 'An overview of the Food Safety Modernization Act (FSMA) and its impact on food safety regulations, compliance standards, and risk prevention across agricultural and processing sectors.',
        date: 'Oct 7, 2023',
        year: '2023'
      },
      // {
      //   id: 'p40',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Academic Research',
      //   continent: 'North America',
      //   name: 'Prof. Bishnu Karki',
      //   role: 'South Dakota State University',
      //   title: ' ', // TODO: Add presentation title for Prof. Bishnu Karki
      //   description: ' ', // TODO: Add description for Prof. Bishnu Karki
      //   date: ' ', // TODO: Scheduled date pending
      //   year: '2027'
      // },
      // {
      //   id: 'p41',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Academic Research',
      //   continent: 'North America',
      //   name: 'Rajesh Dangal',
      //   role: 'South Dakota State University (SDSU)',
      //   title: ' ', // TODO: Add presentation title for Rajesh Dangal
      //   description: ' ', // TODO: Add description for Rajesh Dangal
      //   date: ' ', // TODO: Scheduled date pending
      //   year: '2027'
      // },
      // {
      //   id: 'p42',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Academic Research',
      //   continent: 'North America',
      //   name: 'Sumi Regmi',
      //   role: 'South Dakota State University (SDSU)',
      //   title: ' ', // TODO: Add presentation title for Sumi Regmi
      //   description: ' ', // TODO: Add description for Sumi Regmi
      //   date: ' ', // TODO: Scheduled date pending
      //   year: '2027'
      // },
      // {
      //   id: 'p43',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Academic Research',
      //   continent: 'North America',
      //   name: 'Bhawan Khadka',
      //   role: 'South Dakota State University (SDSU)',
      //   title: ' ', // TODO: Add presentation title for Bhawan Khadka
      //   description: ' ', // TODO: Add description for Bhawan Khadka
      //   date: ' ', // TODO: Scheduled date pending
      //   year: '2027'
      // },
      // {
      //   id: 'p44',
      //   image: '../assets/gnsc_main.png',
      //   tag: 'Medical & Health Sciences',
      //   continent: 'North America',
      //   name: 'Dr. Govind Paudel',
      //   role: 'Pediatric Cardiologist, San Antonio',
      //   title: ' ', // TODO: Add presentation title for Dr. Govind Paudel
      //   description: ' ', // TODO: Add description for Dr. Govind Paudel
      //   date: ' ', // TODO: Scheduled date pending
      //   year: '2027'
      // }
    ];
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
