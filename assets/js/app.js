/**
 * Dawson's Hot Wheels - Interactive Catalog, Quote Inquiry & Online Service Scheduler
 * 1060 Springfield Rd, Lebanon, MO 65536 | (417) 991-2636
 */

// Representative Tire & Wheel Inquiry Catalog
// Clearly distinguishes verified Authorized Cooper Tire lines & services vs. partner brand inquiry lines.
const CATALOG_ITEMS = [
  {
    id: 'cooper-discoverer-at3-4s',
    category: 'Tires',
    name: 'Cooper Discoverer AT3 4S',
    brand: 'Cooper Tires (Authorized Retailer)',
    badgeType: 'verified',
    badgeText: 'Authorized Cooper Dealer',
    vehicleType: 'Truck / SUV',
    tireSizes: ['265/70R17', '275/65R18', '275/60R20', '285/70R17'],
    wheelDiameter: '17" - 20"',
    makeFitments: ['Ford F-150', 'Chevy Silverado 1500', 'Ram 1500', 'Toyota Tacoma', 'GMC Sierra'],
    description: 'All-Terrain grip built for Missouri highways, gravel county roads, and wet/snow traction. Adaptive-Traction Technology with 65,000-mile manufacturer treadwear warranty.',
    highlights: ['All-Terrain / Four-Season', 'Severe Weather Rated', '65,000-Mile Tread Warranty']
  },
  {
    id: 'cooper-discoverer-rugged-trek',
    category: 'Tires',
    name: 'Cooper Discoverer Rugged Trek',
    brand: 'Cooper Tires (Authorized Retailer)',
    badgeType: 'verified',
    badgeText: 'Authorized Cooper Dealer',
    vehicleType: 'Truck / Lifted 4x4',
    tireSizes: ['275/70R18', '285/75R17', '33x12.50R20', '35x12.50R20'],
    wheelDiameter: '17" - 22"',
    makeFitments: ['Ford F-250 / Super Duty', 'Ram 2500', 'Jeep Wrangler / Gladiator', 'Chevy Silverado HD'],
    description: 'Aggressive off-road and mud traction paired with quiet highway manners. Ideal for leveled or lifted trucks across Laclede County.',
    highlights: ['Aggressive Sidewall Cleats', 'Stone Blockades', 'Pairs with Suspension Lifts']
  },
  {
    id: 'cooper-endeavor-plus',
    category: 'Tires',
    name: 'Cooper Endeavor Plus',
    brand: 'Cooper Tires (Authorized Retailer)',
    badgeType: 'verified',
    badgeText: 'Authorized Cooper Dealer',
    vehicleType: 'SUV / Crossover',
    tireSizes: ['225/65R17', '235/60R18', '245/60R18', '265/70R16'],
    wheelDiameter: '16" - 20"',
    makeFitments: ['Honda CR-V', 'Toyota RAV4', 'Ford Explorer', 'Chevy Equinox', 'Jeep Grand Cherokee'],
    description: 'Dependable all-season touring tire engineered for crossovers and family SUVs, delivering predictable wet braking and even treadwear.',
    highlights: ['All-Season SUV Touring', 'Quiet Ride Design', '65,000-Mile Tread Warranty']
  },
  {
    id: 'cooper-procontrol',
    category: 'Tires',
    name: 'Cooper ProControl All-Season',
    brand: 'Cooper Tires (Authorized Retailer)',
    badgeType: 'verified',
    badgeText: 'Authorized Cooper Dealer',
    vehicleType: 'Passenger Car / Sedan',
    tireSizes: ['205/55R16', '215/55R17', '225/50R17', '235/45R18'],
    wheelDiameter: '16" - 19"',
    makeFitments: ['Toyota Camry', 'Honda Accord', 'Ford Fusion', 'Chevy Malibu', 'Nissan Altima'],
    description: 'Crisp handling and long-lasting commuter performance with widening sipes that maintain wet-weather grip as the tire wears.',
    highlights: ['Daily Commuter & Sedan', 'Up to 70,000-Mile Warranty', 'Precision Alignment Recommended']
  },
  {
    id: 'trailer-tow-duty-st',
    category: 'Tires',
    name: 'Heavy-Duty Radial Trailer Tires (ST)',
    brand: 'In-Stock Trailer & Tow Lines',
    badgeType: 'verified',
    badgeText: 'Customer-Verified Specialty',
    vehicleType: 'Trailer / Hauler',
    tireSizes: ['ST205/75R14', 'ST205/75R15', 'ST225/75R15', 'ST235/80R16'],
    wheelDiameter: '14" - 16"',
    makeFitments: ['Boat Trailers', 'Utility & Landscape Trailers', 'Livestock Trailers', 'RV / Campers'],
    description: 'High-load radial trailer tires for boat haulers going to Lake of the Ozarks or Bennett Spring, utility trailers, and farm livestock trailers.',
    highlights: ['Load Range D & E Options', 'Fast Walk-In Mounting', 'Praised in Local Google Reviews']
  },
  {
    id: 'quality-used-tires',
    category: 'Used Tires',
    name: 'Inspected Quality Used Tires',
    brand: 'Multi-Brand Inspected Inventory',
    badgeType: 'used',
    badgeText: 'Call for Live Size Check',
    vehicleType: 'All Vehicles',
    tireSizes: ['15" Sizes', '16" Sizes', '17" Sizes', '18" & 20" Truck Sizes'],
    wheelDiameter: '15" - 20"',
    makeFitments: ['Cars', 'Trucks', 'SUVs', 'Work Vans'],
    description: 'Budget-friendly, pressure-tested used tires inspected for safe tread depth and structural integrity. Inventory rotates daily—call (417) 991-2636 with your size!',
    highlights: ['Budget-Friendly Replacement', 'Mounted & Balanced In-House', 'No Nonsense or Upsell Gimmicks']
  },
  {
    id: 'custom-offroad-wheels-pkg',
    category: 'Wheels',
    name: 'Custom Off-Road & Truck Wheel Package',
    brand: 'Custom Aftermarket Wheels (Confirm Preferred Brands)',
    badgeType: 'partner',
    badgeText: 'Custom Fitment & Lift Ready',
    vehicleType: 'Truck / Lifted 4x4',
    tireSizes: ['17x9', '18x9', '20x9', '20x10', '22x12'],
    wheelDiameter: '17" - 22"',
    makeFitments: ['Ford F-150 / F-250', 'Chevy Silverado / GMC Sierra', 'Ram 1500 / 2500', 'Jeep Wrangler'],
    description: 'Matte black, bronze, machined, and deep-lip custom truck wheels paired with new tires, TPMS sensors, and suspension lift clearance check.',
    highlights: ['Bolt-Pattern & Offset Matching', 'Snap Finance Available', 'Bundle with Suspension Lift']
  },
  {
    id: 'street-performance-alloy-wheels',
    category: 'Wheels',
    name: 'Street, Muscle & SUV Alloy Wheels',
    brand: 'Custom & OE-Style Replacement Rims',
    badgeType: 'partner',
    badgeText: 'Browse & Request Quote',
    vehicleType: 'Passenger Car / SUV',
    tireSizes: ['16x7', '17x8', '18x8.5', '20x8.5'],
    wheelDiameter: '16" - 20"',
    makeFitments: ['Cars', 'Muscle Cars', 'Crossovers', 'SUVs'],
    description: 'Upgrade your stance or replace bent factory wheels with durable gloss black, gunmetal, or chrome aftermarket rims professionally balanced in Lebanon.',
    highlights: ['Precision Road-Force Balance', 'Lug Hardware Included', 'Snap Finance Available']
  },
  {
    id: 'major-brand-all-season-order',
    category: 'Tires',
    name: 'Major Brand Special Order Tires',
    brand: 'Major Brand Network (Michelin / Goodyear / BFGoodrich)',
    badgeType: 'partner',
    badgeText: 'Next-Day Distributor Access',
    vehicleType: 'All Vehicles',
    tireSizes: ['205/55R16', '225/65R17', '265/70R17', '275/60R20'],
    wheelDiameter: '15" - 22"',
    makeFitments: ['All Makes & Models'],
    description: 'Looking for a specific tire model or factory OEM match? We source major national brands with transparent out-the-door installation quotes.',
    highlights: ['Fast Distributor Delivery', 'Honest Price Quote Upfront', 'Full Mounting & Alignment']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLiveShopStatus();
  initCatalogPage();
  initQuoteModal();
  initBookingPage();
});

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}

function initLiveShopStatus() {
  const statusEls = document.querySelectorAll('.js-shop-status');
  if (!statusEls.length) return;

  // Shop hours: Mon-Fri 8:30 AM - 5:00 PM Central Time
  const now = new Date();
  const day = now.getDay(); // 0 Sun .. 6 Sat
  const hours = now.getHours() + now.getMinutes() / 60;
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && hours >= 8.5 && hours < 17;

  statusEls.forEach(el => {
    if (isOpen) {
      el.innerHTML = '<span class="dot"></span> Open Today Until 5:00 PM';
    } else if (isWeekday && hours < 8.5) {
      el.innerHTML = '<span class="dot"></span> Opens Today at 8:30 AM';
    } else {
      el.innerHTML = '<span class="dot"></span> Mon–Fri: 8:30 AM – 5:00 PM';
    }
  });
}

function initCatalogPage() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const searchInput = document.getElementById('filterSearch');
  const categorySelect = document.getElementById('filterCategory');
  const sizeSelect = document.getElementById('filterSize');
  const vehicleSelect = document.getElementById('filterVehicle');
  const brandSelect = document.getElementById('filterBrand');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const countEl = document.getElementById('catalogCount');

  // Pre-fill from URL query parameters (e.g. from home Quick Finder)
  const params = new URLSearchParams(window.location.search);
  if (params.get('category') && categorySelect) categorySelect.value = params.get('category');
  if (params.get('size') && sizeSelect) sizeSelect.value = params.get('size');
  if (params.get('vehicle') && vehicleSelect) vehicleSelect.value = params.get('vehicle');
  if (params.get('q') && searchInput) searchInput.value = params.get('q');

  function renderCatalog() {
    const q = (searchInput?.value || '').trim().toLowerCase();
    const cat = categorySelect?.value || 'ALL';
    const size = sizeSelect?.value || 'ALL';
    const veh = vehicleSelect?.value || 'ALL';
    const brand = brandSelect?.value || 'ALL';

    const filtered = CATALOG_ITEMS.filter(item => {
      if (cat !== 'ALL' && item.category !== cat) return false;
      if (veh !== 'ALL' && !item.vehicleType.toLowerCase().includes(veh.toLowerCase()) && item.vehicleType !== 'All Vehicles') return false;
      if (brand !== 'ALL' && !item.brand.toLowerCase().includes(brand.toLowerCase())) return false;
      if (size !== 'ALL') {
        const matchesSize = item.tireSizes.some(s => s.toLowerCase().includes(size.toLowerCase())) ||
                            item.wheelDiameter.toLowerCase().includes(size.toLowerCase());
        if (!matchesSize) return false;
      }
      if (q) {
        const haystack = [
          item.name,
          item.brand,
          item.category,
          item.vehicleType,
          item.description,
          ...item.tireSizes,
          ...item.makeFitments
        ].join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${CATALOG_ITEMS.length} catalog options`;
    }

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem;">
          <h3>Don't See Your Exact Size Listed Here?</h3>
          <p style="max-width: 560px; margin: 0.75rem auto 1.5rem;">
            Our in-shop tire rack and distributor warehouse stock hundreds of tire and custom wheel sizes every day. Call Matt &amp; Pam directly or send a quick size inquiry for a same-day price check.
          </p>
          <div style="display: flex; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
            <a href="tel:4179912636" class="btn btn-call">Call (417) 991-2636</a>
            <button type="button" class="btn btn-primary js-open-quote" data-item="Custom Tire / Wheel Size Inquiry">Request a Price Quote</button>
          </div>
        </div>
      `;
      bindQuoteButtons();
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const badgeClass = item.badgeType === 'verified' ? 'tag-verified' :
                         item.badgeType === 'used' ? 'tag-used' : 'tag-partner';
      return `
        <article class="card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem;">
              <span class="catalog-tag ${badgeClass}">${item.badgeText}</span>
              <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">${item.category} • ${item.vehicleType}</span>
            </div>
            <h3>${item.name}</h3>
            <div style="font-size: 0.84rem; color: #60a5fa; font-weight: 600; margin-bottom: 0.65rem;">${item.brand}</div>
            <p>${item.description}</p>
            <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">Popular Sizes &amp; Fitments:</div>
            <div class="spec-pills">
              ${item.tireSizes.map(s => `<span class="spec-pill">${s}</span>`).join('')}
            </div>
            <ul class="card-list">
              ${item.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
          <div class="card-actions">
            <button type="button" class="btn btn-primary btn-sm js-open-quote" data-item="${item.name} (${item.category})" style="flex: 1;">
              Request a Quote
            </button>
            <a href="tel:4179912636" class="btn btn-outline btn-sm" aria-label="Call about ${item.name}">
              Call (417) 991-2636
            </a>
          </div>
        </article>
      `;
    }).join('');

    bindQuoteButtons();
  }

  [searchInput, categorySelect, sizeSelect, vehicleSelect, brandSelect].forEach(el => {
    if (!el) return;
    el.addEventListener('input', renderCatalog);
    el.addEventListener('change', renderCatalog);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'ALL';
      if (sizeSelect) sizeSelect.value = 'ALL';
      if (vehicleSelect) vehicleSelect.value = 'ALL';
      if (brandSelect) brandSelect.value = 'ALL';
      renderCatalog();
    });
  }

  renderCatalog();
}

function bindQuoteButtons() {
  const modal = document.getElementById('quoteModal');
  const itemInput = document.getElementById('quoteItemName');
  const itemDisplay = document.getElementById('quoteModalTitleItem');
  if (!modal) return;

  document.querySelectorAll('.js-open-quote').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemName = btn.getAttribute('data-item') || 'Tire / Wheel Quote Inquiry';
      if (itemInput) itemInput.value = itemName;
      if (itemDisplay) itemDisplay.textContent = itemName;
      modal.classList.add('open');
    });
  });
}

function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const closeBtn = document.getElementById('closeQuoteModal');
  const form = document.getElementById('quoteInquiryForm');
  const feedback = document.getElementById('quoteFormFeedback');

  bindQuoteButtons();

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const item = formData.get('item') || 'Tire/Wheel Inquiry';
      const size = formData.get('size') || 'Not specified';
      const vehicle = formData.get('vehicle') || 'Not specified';
      const name = formData.get('name') || 'Customer';
      const phone = formData.get('phone') || '';

      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.4); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
            <strong style="color: #34d399; display: block; margin-bottom: 0.35rem;">✓ Quote Inquiry Ready for Matt &amp; Pam!</strong>
            <p style="font-size: 0.88rem; color: #e2e8f0; margin-bottom: 0.75rem;">
              Thanks, <strong>${name}</strong>! We've logged your inquiry for <strong>${item}</strong> (Size/Specs: ${size} • Vehicle: ${vehicle}). For immediate in-stock confirmation, tap below to call the shop right now:
            </p>
            <a href="tel:4179912636" class="btn btn-call btn-sm">Call Shop Now: (417) 991-2636</a>
          </div>
        `;
      }
      form.reset();
    });
  }
}

function initBookingPage() {
  const bookingForm = document.getElementById('serviceBookingForm');
  if (!bookingForm) return;

  const serviceCards = document.querySelectorAll('.js-service-option');
  const selectedServiceInput = document.getElementById('selectedServiceInput');
  const timeSlotBtns = document.querySelectorAll('.js-time-slot');
  const selectedTimeInput = document.getElementById('selectedTimeInput');
  const dateInput = document.getElementById('bookingDate');
  const summaryService = document.getElementById('summaryService');
  const summaryDateTime = document.getElementById('summaryDateTime');
  const summaryVehicle = document.getElementById('summaryVehicle');
  const confirmationBox = document.getElementById('bookingConfirmationBox');

  // Set default date to next weekday
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.getDay() === 6) tomorrow.setDate(tomorrow.getDate() + 2);
    if (tomorrow.getDay() === 0) tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Pre-select service from URL param if provided
  const params = new URLSearchParams(window.location.search);
  const preService = params.get('service');
  if (preService) {
    serviceCards.forEach(card => {
      if (card.getAttribute('data-service')?.toLowerCase().includes(preService.toLowerCase())) {
        serviceCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        if (selectedServiceInput) selectedServiceInput.value = card.getAttribute('data-service');
      }
    });
  }

  function updateSummary() {
    if (summaryService && selectedServiceInput) {
      summaryService.textContent = selectedServiceInput.value || 'New / Used Tires & Mounting';
    }
    if (summaryDateTime) {
      const d = dateInput?.value || 'Next Available Weekday';
      const t = selectedTimeInput?.value || '8:30 AM';
      summaryDateTime.textContent = `${d} at ${t}`;
    }
    const year = document.getElementById('vehYear')?.value || '';
    const make = document.getElementById('vehMake')?.value || '';
    const model = document.getElementById('vehModel')?.value || '';
    if (summaryVehicle) {
      const fullVeh = [year, make, model].filter(Boolean).join(' ');
      summaryVehicle.textContent = fullVeh || 'Enter vehicle details';
    }
  }

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (selectedServiceInput) {
        selectedServiceInput.value = card.getAttribute('data-service') || '';
      }
      updateSummary();
    });
  });

  timeSlotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeSlotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (selectedTimeInput) {
        selectedTimeInput.value = btn.getAttribute('data-time') || '';
      }
      updateSummary();
    });
  });

  ['bookingDate', 'vehYear', 'vehMake', 'vehModel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateSummary);
  });

  if (dateInput) {
    dateInput.addEventListener('change', () => {
      const chosen = new Date(dateInput.value + 'T12:00:00');
      const day = chosen.getDay();
      const weekendWarn = document.getElementById('weekendWarning');
      if (weekendWarn) {
        weekendWarn.style.display = (day === 0 || day === 6) ? 'block' : 'none';
      }
      updateSummary();
    });
  }

  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const service = selectedServiceInput?.value || 'Tire & Auto Service';
    const date = dateInput?.value || '';
    const time = selectedTimeInput?.value || '8:30 AM';
    const year = document.getElementById('vehYear')?.value || '';
    const make = document.getElementById('vehMake')?.value || '';
    const model = document.getElementById('vehModel')?.value || '';
    const tireSize = document.getElementById('vehTireSize')?.value || 'Not specified';
    const custName = document.getElementById('custName')?.value || '';
    const custPhone = document.getElementById('custPhone')?.value || '';
    const notes = document.getElementById('custNotes')?.value || 'None';
    const refCode = 'DHW-' + Math.floor(1000 + Math.random() * 9000);

    if (confirmationBox) {
      confirmationBox.style.display = 'block';
      confirmationBox.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.12); border: 2px solid #10b981; border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span class="catalog-tag tag-verified">Appointment Request Logged • #${refCode}</span>
            <span style="font-size: 0.82rem; color: var(--text-light);">1060 Springfield Rd, Lebanon, MO</span>
          </div>
          <h3 style="color: #ffffff; margin-bottom: 0.5rem;">We've Prepared Your Service Request, ${custName}!</h3>
          <p style="font-size: 0.92rem; color: var(--text-light); margin-bottom: 1rem;">
            <strong>Requested Service:</strong> ${service}<br>
            <strong>Preferred Slot:</strong> ${date} at ${time} (Mon–Fri 8:30 AM – 5:00 PM)<br>
            <strong>Vehicle:</strong> ${year} ${make} ${model} (Tire/Wheel Size: ${tireSize})<br>
            <strong>Contact Phone:</strong> ${custPhone}<br>
            <strong>Notes:</strong> ${notes}
          </p>
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 1rem;">
            <em>Preview Demo Note:</em> In production, this sends an instant SMS/email notification to Matt &amp; Pam Dawson's shop desk. Need urgent same-day service? Tap below to call the shop directly:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <a href="tel:4179912636" class="btn btn-call btn-sm">Call Shop Desk: (417) 991-2636</a>
            <a href="https://maps.google.com/maps?q=Dawson's+Hot+Wheels+1060+Springfield+Rd,+Lebanon,+MO+65536" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Get Directions</a>
          </div>
        </div>
      `;
      confirmationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  updateSummary();
}
