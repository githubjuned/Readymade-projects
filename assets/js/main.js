/**
 * ==============================================================================
 * NEXUS PRECISION STUDIO — PRIMARY INTERACTION ENGINE
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', function () {
  initSiteConfiguration();
  initMobileNavigation();
  initScrollHeader();
  initPortfolioShowcase();
  initFormValidationAndHandling();
  initSectionObservers();
});

/**
 * 1. Synchronize Configuration Across All DOM Elements
 */
function initSiteConfiguration() {
  if (typeof SITE_CONFIG === 'undefined') return;

  const cfg = SITE_CONFIG;

  // Bind text placeholders
  document.querySelectorAll('[data-config-text]').forEach(el => {
    const key = el.getAttribute('data-config-text');
    const val = getNestedValue(cfg, key);
    if (val !== undefined && val !== null) {
      el.textContent = val;
    }
  });

  // Bind link URLs
  document.querySelectorAll('[data-config-href]').forEach(el => {
    const key = el.getAttribute('data-config-href');
    if (key === 'whatsapp') {
      const msgType = el.getAttribute('data-whatsapp-msg') || 'general';
      const customMsg = cfg.whatsappMessages[msgType] || cfg.whatsappMessages.general;
      el.href = getWhatsAppUrl(customMsg);
    } else if (key === 'email') {
      el.href = `mailto:${cfg.contact.email}?subject=${encodeURIComponent('Engineering Project Enquiry — Nexus Studio')}`;
    } else {
      const val = getNestedValue(cfg, key);
      if (val) el.href = val;
    }
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * 2. Mobile Menu Drawer Controls
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const toggleIcon = document.getElementById('mobile-menu-icon');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const container = document.getElementById('mobile-menu-container');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !container || !drawer) return;

  let isOpen = false;

  function openMobileMenu() {
    isOpen = true;
    container.classList.remove('hidden');
    requestAnimationFrame(() => {
      if (backdrop) {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
      }
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
    });
    if (toggleIcon) toggleIcon.textContent = 'close';
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    isOpen = false;
    if (backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
    }
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    if (toggleIcon) toggleIcon.textContent = 'menu';
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!isOpen) {
        container.classList.add('hidden');
      }
    }, 300);
  }

  function toggleMobileMenu() {
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      closeMobileMenu();
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          setTimeout(() => {
            const headerOffset = 84;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 120);
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && isOpen) {
      closeMobileMenu();
    }
  });
}

/**
 * 3. Sticky Navigation Header Background Elevation
 */
function initScrollHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('glass-nav-scrolled', 'shadow-sm');
    } else {
      header.classList.remove('glass-nav-scrolled', 'shadow-sm');
    }
  });
}

/**
 * 4. Active Section Highlighting in Desktop & Mobile Nav
 */
function initSectionObservers() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-blue-600', 'font-semibold', 'active');
            link.classList.remove('text-slate-600');
          } else {
            link.classList.remove('text-blue-600', 'font-semibold', 'active');
            link.classList.add('text-slate-600');
          }
        });

        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * 5. Portfolio Showcase Rendering, Filtering, and Search
 */
let currentPortfolioCategory = 'all';
let currentSearchQuery = '';

function initPortfolioShowcase() {
  const gridContainer = document.getElementById('portfolio-grid');
  const searchInput = document.getElementById('portfolio-search-input');
  const filterTabs = document.querySelectorAll('.portfolio-tab');

  if (!gridContainer || typeof PROJECTS_DATA === 'undefined') return;

  renderProjects();

  // Filter tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('filter-tab-active', 'btn-slope-primary'));
      filterTabs.forEach(t => t.classList.add('btn-slope-secondary'));

      tab.classList.remove('btn-slope-secondary');
      tab.classList.add('filter-tab-active', 'btn-slope-primary');

      currentPortfolioCategory = tab.getAttribute('data-category') || 'all';
      renderProjects();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderProjects();
    });
  }
}

function renderProjects() {
  const grid = document.getElementById('portfolio-grid');
  const countDisplay = document.getElementById('portfolio-count-badge');
  if (!grid || typeof PROJECTS_DATA === 'undefined') return;

  let filtered = PROJECTS_DATA;

  // Filter category
  if (currentPortfolioCategory && currentPortfolioCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentPortfolioCategory);
  }

  // Filter search
  if (currentSearchQuery) {
    filtered = filtered.filter(p => {
      return p.title.toLowerCase().includes(currentSearchQuery) ||
             p.summary.toLowerCase().includes(currentSearchQuery) ||
             p.category.toLowerCase().includes(currentSearchQuery) ||
             p.techStack.some(t => t.toLowerCase().includes(currentSearchQuery));
    });
  }

  if (countDisplay) {
    countDisplay.textContent = `SHOWING ${filtered.length} OF ${PROJECTS_DATA.length} PROJECTS`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 px-6 text-center bg-white rounded-2xl border border-slate-200">
        <span class="material-symbols-outlined text-4xl text-slate-400 mb-2">search_off</span>
        <h4 class="font-display-heading text-lg font-semibold text-slate-800">No Projects Found</h4>
        <p class="text-sm text-slate-500 mt-1 max-w-md mx-auto">
          No projects match your current search or category filter. Try clearing your query or contact us for a customized project build.
        </p>
        <button onclick="resetPortfolioFilters()" class="mt-4 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm hover:bg-blue-100 transition-colors">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(project => `
    <div class="portfolio-item rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col card-hover-elevation group cursor-pointer" data-category="${project.category}" onclick="handleProjectCardClick(event, '${project.id}', '${project.externalUrl || ''}')">
      <!-- Project Image Banner -->
      <div class="relative overflow-hidden aspect-video bg-slate-900">
        <img 
          src="${project.image}" 
          alt="${project.title}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onerror="handleImageFallback(this, '${project.fallbackIcon || 'memory'}', '${project.remoteImage || ''}')"
          loading="lazy"
        />
        <div class="absolute top-3 left-3 bg-[#0B1220]/90 backdrop-blur-md px-2.5 py-1 rounded text-cyan-300 font-mono-code text-[11px] border border-cyan-500/20">
          ${project.categoryLabel}
        </div>
        ${project.badge ? `
          <div class="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-blue-600 text-white font-mono-code text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow-lg border border-amber-300/40 flex items-center gap-1">
            <span class="material-symbols-outlined text-[13px]">military_tech</span>
            <span>${project.badge}</span>
          </div>
        ` : ''}
        ${project.externalUrl ? `
          <div class="absolute bottom-3 right-3 bg-[#0A66C2] text-white font-display text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 border border-white/20">
            <span>LinkedIn Post</span>
            <span class="material-symbols-outlined text-[13px]">open_in_new</span>
          </div>
        ` : ''}
      </div>

      <!-- Project Content Card Body -->
      <div class="p-6 flex flex-col justify-between flex-1 gap-4">
        <div>
          <h3 class="font-display-heading text-lg font-bold text-[#0B1220] mb-2 leading-snug group-hover:text-blue-600 transition-colors flex items-start justify-between gap-2">
            <span>${project.title}</span>
            ${project.externalUrl ? `<span class="material-symbols-outlined text-blue-500 text-[18px] shrink-0 mt-0.5">open_in_new</span>` : ''}
          </h3>
          <p class="text-sm text-slate-600 mb-4 line-clamp-3">
            ${project.summary}
          </p>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-1.5 mb-2">
            ${project.techStack.slice(0, 4).map(t => `
              <span class="font-mono-code text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                ${t}
              </span>
            `).join('')}
            ${project.techStack.length > 4 ? `
              <span class="font-mono-code text-[11px] px-2 py-0.5 rounded bg-slate-50 text-slate-500">
                +${project.techStack.length - 4} more
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-3 border-t border-slate-100 flex items-center gap-2" onclick="event.stopPropagation()">
          ${project.externalUrl ? `
            <a 
              href="${project.externalUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-slope btn-slope-primary flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md"
              title="Open project on LinkedIn"
            >
              <span>View on LinkedIn</span>
              <span class="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
            <button 
              type="button"
              onclick="openProjectModal('${project.id}')"
              class="btn-slope btn-slope-secondary py-2.5 px-3 text-xs font-semibold flex items-center justify-center gap-1"
              title="View full specs"
            >
              <span class="material-symbols-outlined text-[16px]">info</span>
            </button>
          ` : `
            <button 
              type="button"
              onclick="openProjectModal('${project.id}')"
              class="btn-slope btn-slope-secondary flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <span>View Details</span>
              <span class="material-symbols-outlined text-[16px]">visibility</span>
            </button>
          `}
          
          <a 
            href="${getWhatsAppUrl(SITE_CONFIG.whatsappMessages.forProject(project.title))}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-slope btn-slope-emerald py-2.5 px-3.5 flex items-center justify-center gap-1"
            title="Enquire on WhatsApp with autofill message"
          >
            <span class="material-symbols-outlined text-[18px]">chat</span>
            <span class="text-xs hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function handleProjectCardClick(e, projectId, externalUrl) {
  if (e.target.closest('button, a, input, select, textarea')) return;
  if (externalUrl) {
    window.open(externalUrl, '_blank');
  } else {
    openProjectModal(projectId);
  }
}

function handleImageFallback(img, icon, remoteFallback) {
  if (remoteFallback && !img.dataset.triedRemote) {
    img.dataset.triedRemote = 'true';
    img.src = remoteFallback;
    return;
  }
  const parent = img.parentElement;
  if (!parent) return;
  img.style.display = 'none';
  const fallbackDiv = document.createElement('div');
  fallbackDiv.className = 'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1220] to-[#1E293B] text-cyan-400 p-6 text-center';
  fallbackDiv.innerHTML = `
    <span class="material-symbols-outlined text-4xl mb-2 text-cyan-400/90">${icon}</span>
    <span class="font-mono-code text-[11px] uppercase tracking-wider text-cyan-200">LAB_SYSTEM // HARDWARE_TESTBENCH</span>
  `;
  parent.appendChild(fallbackDiv);
}

function resetPortfolioFilters() {
  currentPortfolioCategory = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('portfolio-search-input');
  if (searchInput) searchInput.value = '';

  const filterTabs = document.querySelectorAll('.portfolio-tab');
  filterTabs.forEach((tab, index) => {
    if (index === 0) {
      tab.classList.add('filter-tab-active', 'btn-slope-primary');
      tab.classList.remove('btn-slope-secondary');
    } else {
      tab.classList.remove('filter-tab-active', 'btn-slope-primary');
      tab.classList.add('btn-slope-secondary');
    }
  });

  renderProjects();
}

/**
 * 6. Interactive Project Detail Modal
 */
function openProjectModal(projectId) {
  const project = getProjectById(projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Fill in content
  document.getElementById('modal-category-badge').textContent = project.categoryLabel;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-overview').textContent = project.details.overview;
  document.getElementById('modal-problem').textContent = project.details.problem;

  // Tech stack
  const techBox = document.getElementById('modal-tech-list');
  techBox.innerHTML = project.techStack.map(t => `
    <span class="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[#0B1220] font-mono-code text-xs">
      ${t}
    </span>
  `).join('');

  // Features list
  const featBox = document.getElementById('modal-features-list');
  featBox.innerHTML = project.details.features.map(f => `
    <li class="flex items-start gap-2 text-slate-700 text-sm">
      <span class="material-symbols-outlined text-blue-600 text-[18px] shrink-0 mt-0.5">check_circle</span>
      <span>${f}</span>
    </li>
  `).join('');

  // Deliverables list
  const delivBox = document.getElementById('modal-deliverables-list');
  if (delivBox && project.details.deliverables) {
    delivBox.innerHTML = project.details.deliverables.map(d => `
      <li class="flex items-start gap-2 text-slate-700 text-sm">
        <span class="material-symbols-outlined text-cyan-600 text-[18px] shrink-0 mt-0.5">inventory_2</span>
        <span>${d}</span>
      </li>
    `).join('');
  }

  // Update WhatsApp action button
  const waBtn = document.getElementById('modal-whatsapp-cta');
  if (waBtn) {
    const customMsg = SITE_CONFIG.whatsappMessages.forProject(project.title);
    waBtn.href = getWhatsAppUrl(customMsg);
  }

  // Update External LinkedIn Link button
  const extBtn = document.getElementById('modal-external-link');
  if (extBtn) {
    if (project.externalUrl) {
      extBtn.href = project.externalUrl;
      extBtn.classList.remove('hidden');
    } else {
      extBtn.classList.add('hidden');
    }
  }

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/**
 * 7. Contact & Enquiry Form Validation and Handling
 */
function initFormValidationAndHandling() {
  const form = document.getElementById('project-enquiry-form');
  const directWaBtn = document.getElementById('form-direct-whatsapp-btn');

  if (!form) return;

  // Real-time input validation triggers
  const fields = ['form-name', 'form-whatsapp', 'form-email', 'form-message'];
  fields.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          validateField(input);
        }
      });
    }
  });

  // Handle Form Submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateAllFields()) return;

    const formData = extractFormData();
    const alertBox = document.getElementById('form-status-alert');

    // Check if backend API endpoint is configured
    if (SITE_CONFIG.apiEndpoint) {
      alertBox.classList.remove('hidden');
      alertBox.className = 'p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-mono-code text-xs';
      alertBox.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-blue-600 animate-spin">refresh</span>
          <span>Transmitting enquiry data to server endpoint...</span>
        </div>
      `;

      fetch(SITE_CONFIG.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => {
        if (!res.ok) throw new Error('Server returned error status ' + res.status);
        return res.json();
      })
      .then(data => {
        alertBox.className = 'p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono-code text-xs';
        alertBox.innerHTML = `
          <div class="flex items-center gap-2 font-semibold text-emerald-800">
            <span class="material-symbols-outlined">check_circle</span>
            <span>Enquiry successfully transmitted to engineering database!</span>
          </div>
          <p class="mt-1 text-emerald-700">Reference ID: ${data.id || 'ENG-' + Date.now().toString().slice(-6)}. Our lab will contact you shortly.</p>
        `;
        form.reset();
      })
      .catch(err => {
        alertBox.className = 'p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-mono-code text-xs';
        alertBox.innerHTML = `
          <div class="flex items-center gap-2 font-semibold text-amber-800">
            <span class="material-symbols-outlined">warning</span>
            <span>Server connection failed: ${err.message}.</span>
          </div>
          <p class="mt-2 text-amber-800">Please send your project enquiry directly via WhatsApp for an immediate response.</p>
          <a href="${buildWhatsAppLinkFromData(formData)}" target="_blank" class="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded bg-amber-600 text-white font-medium text-xs hover:bg-amber-700 transition-colors">
            <span class="material-symbols-outlined text-[16px]">chat</span> Transmit via WhatsApp Now
          </a>
        `;
      });

    } else {
      // Backend is not configured: DO NOT simulate successful submission!
      // Provide immediate, transparent transmission options via WhatsApp or Email.
      alertBox.classList.remove('hidden');
      alertBox.className = 'p-5 rounded-xl bg-slate-900 text-white border border-cyan-500/30';
      alertBox.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[20px]">send_and_archive</span>
          </div>
          <div class="flex-1">
            <h4 class="font-display-heading text-sm font-bold text-white">Direct Transmission Channel Ready</h4>
            <p class="text-xs text-slate-300 mt-1 leading-relaxed">
              Your project details have been validated for <strong>${formData.name}</strong> (${formData.branch} - ${formData.domain}).
              Choose how you would like to transmit your requirement directly to our engineers:
            </p>
            <div class="flex flex-wrap items-center gap-2.5 mt-3">
              <a 
                href="${buildWhatsAppLinkFromData(formData)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-slope btn-slope-emerald px-4 py-2.5 text-xs gap-1.5"
              >
                <span class="material-symbols-outlined text-[16px]">chat</span>
                <span>Send via WhatsApp (Direct Autofill)</span>
              </a>
              <a 
                href="${buildEmailLinkFromData(formData)}" 
                class="btn-slope btn-slope-dark px-4 py-2.5 text-xs gap-1.5"
              >
                <span class="material-symbols-outlined text-[16px]">mail</span>
                <span>Send via Email</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }
  });

  // Direct WhatsApp Button (validates, then opens WhatsApp immediately)
  if (directWaBtn) {
    directWaBtn.addEventListener('click', function () {
      if (!validateAllFields()) return;
      const formData = extractFormData();
      const url = buildWhatsAppLinkFromData(formData);
      window.open(url, '_blank');
    });
  }
}

function extractFormData() {
  return {
    name: document.getElementById('form-name').value.trim(),
    phone: document.getElementById('form-whatsapp').value.trim(),
    email: document.getElementById('form-email').value.trim(),
    branch: document.getElementById('form-branch').value,
    level: document.getElementById('form-level').value,
    domain: document.getElementById('form-domain').value,
    need: document.getElementById('form-need').value,
    budget: document.getElementById('form-budget').value.trim() || 'Flexible / Need Student Quote',
    message: document.getElementById('form-message').value.trim(),
    timestamp: new Date().toISOString()
  };
}

function buildWhatsAppLinkFromData(data) {
  const text = [
    `*NEW ENGINEERING PROJECT ENQUIRY*`,
    `----------------------------------------`,
    `*Student Name:* ${data.name}`,
    `*WhatsApp:* ${data.phone}`,
    `*Email:* ${data.email}`,
    `*Branch:* ${data.branch}`,
    `*Degree Level:* ${data.level}`,
    `*Domain:* ${data.domain}`,
    `*Scope Needed:* ${data.need}`,
    `*Budget Range:* ${data.budget}`,
    `----------------------------------------`,
    `*Project Requirements Description:*`,
    `${data.message}`
  ].join('\n');

  return getWhatsAppUrl(text);
}

function buildEmailLinkFromData(data) {
  const subject = `Project Enquiry: ${data.name} - ${data.branch} (${data.domain})`;
  const body = [
    `Dear Nexus Precision Studio Team,\n`,
    `I would like to enquire about engineering project development with the following details:\n`,
    `Full Name: ${data.name}`,
    `WhatsApp Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Engineering Branch: ${data.branch}`,
    `Education Level: ${data.level}`,
    `Primary Domain: ${data.domain}`,
    `Scope Needed: ${data.need}`,
    `Approximate Budget: ${data.budget}\n`,
    `Project Requirements / Syllabus Details:`,
    `${data.message}\n`,
    `Looking forward to your guidance and quotation.`
  ].join('\n');

  return `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function validateField(input) {
  const id = input.id;
  const val = input.value.trim();
  let isValid = true;
  let errorMsg = '';

  const errorEl = document.getElementById(`${id}-error`);

  if (id === 'form-name') {
    if (val.length < 2) {
      isValid = false;
      errorMsg = 'Please enter your full name (minimum 2 characters).';
    }
  } else if (id === 'form-whatsapp') {
    const digitsOnly = val.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 10) {
      isValid = false;
      errorMsg = 'Please enter a valid WhatsApp number (at least 10 digits).';
    }
  } else if (id === 'form-email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      isValid = false;
      errorMsg = 'Please enter a valid email address.';
    }
  } else if (id === 'form-message') {
    if (val.length < 10) {
      isValid = false;
      errorMsg = 'Please provide at least 10 characters describing your requirement.';
    }
  }

  if (!isValid) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.remove('hidden');
    }
  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
  }

  return isValid;
}

function validateAllFields() {
  const fields = ['form-name', 'form-whatsapp', 'form-email', 'form-message'];
  let allValid = true;

  fields.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      const valid = validateField(input);
      if (!valid) allValid = false;
    }
  });

  if (!allValid) {
    const firstInvalid = document.querySelector('.is-invalid');
    if (firstInvalid) {
      firstInvalid.focus();
    }
  }

  return allValid;
}

// Window globals for inline calls
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.handleModalBackdropClick = handleModalBackdropClick;
window.resetPortfolioFilters = resetPortfolioFilters;
window.handleImageFallback = handleImageFallback;

