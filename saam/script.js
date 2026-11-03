/**
 * ZAMZAM HOTEL - LUXURY & RESIDENCES
 * Senior Vanilla JavaScript Architecture
 * Features: Mobile Nav, Smooth Scroll, Room Filtering, Room Details Modal,
 * Dynamic Booking Calculator & Receipt Voucher, Lightbox Gallery, Testimonial Carousel,
 * Form Validations, Animated Counters, and Back-to-Top Button.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Data Store: Room Details & Amenities
     ========================================================================== */
  const ROOM_DATA = {
    standard: {
      id: 'standard',
      name: 'Standard Room',
      category: 'Classic Comfort',
      price: 180,
      size: '35 m² / 376 sq ft',
      capacity: '2 Guests',
      bed: '1 Plush Queen Bed',
      view: 'Courtyard Garden View',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
      description: 'An intimate sanctuary designed for restful contemplation. Handcrafted walnut cabinetry, custom Hypnos mattress, bespoke ambient lighting, and acoustic triple-glazed windows ensure serene quiet amidst the vibrant city.',
      amenities: [
        'Complimentary 1Gbps High-Speed Wi-Fi',
        'Marble Bathroom with Rain Shower',
        'Luxury Molton Brown Toiletries',
        'Custom Pillow Menu (6 Choices)',
        'In-Room Espresso Coffee Bar',
        '55" Ultra HD 4K Smart Television',
        'Laptop-Sized Digital Safety Vault',
        'Daily Housekeeping & Turndown Service'
      ]
    },
    deluxe: {
      id: 'deluxe',
      name: 'Deluxe Room',
      category: 'City Panorama',
      price: 280,
      size: '50 m² / 538 sq ft',
      capacity: '2-3 Guests',
      bed: '1 Emperor King Bed',
      view: 'Panoramic Downtown Skyline',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      description: 'Generous layouts framed by floor-to-ceiling glass walls overlooking the illuminated skyline. Featuring a private step-out balcony, bespoke work lounge with executive leather chair, and evening aromatherapy rituals.',
      amenities: [
        'Private Skyline Balcony',
        'Deep Marble Soaking Tub & Rain Shower',
        'Complimentary Daily Gourmet Breakfast',
        'Nespresso Coffee Machine with Artisan Pods',
        '65" Ultra HD 4K OLED Smart TV with Soundbar',
        'Evening Aromatherapy Turn-Down Service',
        'Complimentary Chilled Mineral Water & Fruit',
        'High-Speed Wi-Fi & Executive Workspace'
      ]
    },
    executive: {
      id: 'executive',
      name: 'Executive Suite',
      category: 'Executive Level',
      price: 450,
      size: '75 m² / 807 sq ft',
      capacity: '3-4 Guests',
      bed: '1 Emperor King + Sofa Bed',
      view: 'Harbor & Skyline Dual Vistas',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      description: 'An expansive dual-chamber suite with separate salon lounge, marble wet bar, dining table, and direct access to the private 20th-floor VIP Executive Club Lounge with complimentary afternoon tea and sunset cocktails.',
      amenities: [
        'Private VIP Executive Lounge Access',
        'Separate Living Salon & Dining Table for 4',
        'Marble Wet Bar with Fine Glassware',
        'Complimentary VIP Airport Chauffeur Transfer',
        'Master Bathroom with Deep Jacuzzi Spa Tub',
        'Two 65" 4K Smart TVs with Premium Streaming',
        'Dedicated 24/7 Butler Service on Request',
        'Complimentary Laundry & Garment Pressing'
      ]
    },
    luxury: {
      id: 'luxury',
      name: 'Luxury Suite',
      category: 'Royal Opulence',
      price: 750,
      size: '110 m² / 1,184 sq ft',
      capacity: '4 Guests',
      bed: '1 California King Bed',
      view: 'Panoramic 180° Horizon & Ocean View',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      description: 'An epitome of royal grandeur. Features an imported Italian marble bath chamber with whirlpool jacuzzi, private walk-in dressing room, separate dining salon for six, and continuous 24-hour dedicated butler attendance.',
      amenities: [
        '24/7 Dedicated Royal Butler Service',
        'Italian Carrara Marble Bathroom & Jacuzzi',
        'Expansive Walk-In Wardrobe & Dressing Salon',
        'Private Dining Table Seating 6 Guests',
        'Hermès Paris Bath & Body Amenities',
        'Complimentary Welcome Caviar & Fruit Platter',
        'Round-Trip Rolls-Royce Airport Transfers',
        'Customized Daily Chef Breakfast in Suite'
      ]
    },
    presidential: {
      id: 'presidential',
      name: 'Presidential Suite',
      category: 'Penthouse Prestige',
      price: 1250,
      size: '220 m² / 2,368 sq ft',
      capacity: '5-6 Guests',
      bed: '2 King Master Suites',
      view: '360° Unobstructed Penthouse Skyline',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      description: 'Our pinnacle penthouse residence offering 360-degree skyline views, private rooftop terrace with heated plunge pool, personal Finnish sauna, Yamaha grand piano, private security entrance, and round-the-clock chef & butler team.',
      amenities: [
        'Private Rooftop Terrace with Heated Plunge Pool',
        'Private Finnish Sauna & Steam Chamber',
        'Yamaha Grand Piano & Acoustic Salon',
        'Private Chef & Sommelier at Your Command',
        'Private Discreet Elevator Access',
        'Two Master En-Suite Bedrooms with Walk-Ins',
        'Daily In-Suite Spa Treatment for 2 Guests',
        'Unlimited Chauffeur Fleet Service'
      ]
    },
    family: {
      id: 'family',
      name: 'Family Grand Suite',
      category: 'Family Harmony',
      price: 520,
      size: '95 m² / 1,022 sq ft',
      capacity: '4-5 Guests',
      bed: '2 King Beds + Kids Twin Bed',
      view: 'Private Garden & Skyline View',
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
      description: 'Connecting two master bedrooms with a dedicated children’s playroom, artisanal kitchenette, dual marble powder rooms, and bespoke family concierge service with complimentary baby amenities and game consoles.',
      amenities: [
        'Two Interconnecting Master Bedrooms',
        'Dedicated Kids Play Area & PlayStation 5',
        'Fully-Equipped Kitchenette & Dining Area',
        'Two Full Marble Bathrooms with Kid Steps',
        'Complimentary Childcare & Babysitting (3 hrs)',
        'Organic Baby Care Products & Warmers',
        'Family Breakfast Buffet Included',
        'Direct Access to Children’s Swimming Cabana'
      ]
    }
  };

  /* ==========================================================================
     2. Navigation: Sticky Header, Mobile Drawer & Active Links
     ========================================================================== */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // Sticky Header on Scroll
  const handleScrollHeader = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // Mobile Drawer Toggle
  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (navToggle) navToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // Close drawer on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeLightbox();
      closeRoomModal();
      closeConfirmModal();
    }
  });

  // Smooth scroll and active state sync for all navigation links
  const allNavAnchors = document.querySelectorAll('a[href^="#"]');
  allNavAnchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          closeDrawer();
          
          const headerOffset = 76;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active link highlighter based on viewport position
  const sections = document.querySelectorAll('section[id], header[id]');
  const highlightActiveNav = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
        drawerLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  /* ==========================================================================
     3. Scroll-Driven Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ==========================================================================
     4. Room Category Filtering
     ========================================================================== */
  const roomFilterButtons = document.querySelectorAll('#roomFilters .filter-btn');
  const roomCards = document.querySelectorAll('.room-card');

  roomFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roomFilterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      roomCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Trigger smooth opacity
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ==========================================================================
     5. Room Details Modal
     ========================================================================== */
  const roomModal = document.getElementById('roomModal');
  const roomModalContent = document.getElementById('roomModalContent');
  const roomModalClose = document.getElementById('roomModalClose');
  const roomModalBackdrop = document.getElementById('roomModalBackdrop');

  const openRoomModal = (roomId) => {
    const room = ROOM_DATA[roomId];
    if (!room) return;

    roomModalContent.innerHTML = `
      <div class="modal-img-banner">
        <img src="${room.image}" alt="${room.name}">
        <div class="modal-img-overlay">
          <div>
            <span class="modal-room-category">${room.category}</span>
            <h3 class="modal-room-title">${room.name}</h3>
          </div>
          <div class="modal-room-price">$${room.price} <span style="font-size: 0.8rem; font-family: var(--font-sans); color: var(--gray-300);">/ night</span></div>
        </div>
      </div>
      <div class="modal-inner-content">
        <div class="modal-specs-bar">
          <div class="modal-spec-item">
            <span class="spec-name">Size</span>
            <span class="spec-val">${room.size}</span>
          </div>
          <div class="modal-spec-item">
            <span class="spec-name">Capacity</span>
            <span class="spec-val">${room.capacity}</span>
          </div>
          <div class="modal-spec-item">
            <span class="spec-name">Bed Type</span>
            <span class="spec-val">${room.bed}</span>
          </div>
          <div class="modal-spec-item">
            <span class="spec-name">View</span>
            <span class="spec-val">${room.view}</span>
          </div>
        </div>

        <p class="modal-description">${room.description}</p>

        <h4 class="modal-amenities-header">Curated In-Room Amenities</h4>
        <div class="modal-amenities-grid">
          ${room.amenities.map(amenity => `
            <div class="modal-amenity-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${amenity}</span>
            </div>
          `).join('')}
        </div>

        <div class="modal-footer-cta">
          <button class="btn btn-outline-navy" id="modalDismissBtn">Close</button>
          <button class="btn btn-gold" id="modalBookNowBtn" data-room-id="${room.id}">Book This Room Now</button>
        </div>
      </div>
    `;

    roomModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Hook up modal buttons
    document.getElementById('modalDismissBtn').addEventListener('click', closeRoomModal);
    document.getElementById('modalBookNowBtn').addEventListener('click', () => {
      selectRoomAndScrollToBooking(room.id);
      closeRoomModal();
    });
  };

  const closeRoomModal = () => {
    roomModal.style.display = 'none';
    document.body.style.overflow = '';
  };

  if (roomModalClose) roomModalClose.addEventListener('click', closeRoomModal);
  if (roomModalBackdrop) roomModalBackdrop.addEventListener('click', closeRoomModal);

  // Attach event to "View Details" buttons
  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomId = e.currentTarget.getAttribute('data-room');
      openRoomModal(roomId);
    });
  });

  // Attach event to "Book Now" buttons on room cards
  const selectRoomAndScrollToBooking = (roomId) => {
    const bookRoomTypeSelect = document.getElementById('bookRoomType');
    if (bookRoomTypeSelect && roomId) {
      bookRoomTypeSelect.value = roomId;
      updateCalculatedPrice();
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const offsetTop = bookingSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  document.querySelectorAll('.btn-book-room').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomId = e.currentTarget.getAttribute('data-room');
      selectRoomAndScrollToBooking(roomId);
    });
  });

  /* ==========================================================================
     6. Quick Availability Search (Hero Bar)
     ========================================================================== */
  const heroQuickForm = document.getElementById('heroQuickForm');
  const quickCheckIn = document.getElementById('quickCheckIn');
  const quickCheckOut = document.getElementById('quickCheckOut');
  const quickRoomType = document.getElementById('quickRoomType');
  const quickGuests = document.getElementById('quickGuests');

  // Format date helper: YYYY-MM-DD
  const formatDateISO = (d) => {
    const pad = (n) => (n < 10 ? '0' + n : n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  // Set initial dates
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (quickCheckIn && quickCheckOut) {
    quickCheckIn.min = formatDateISO(today);
    quickCheckIn.value = formatDateISO(today);

    quickCheckOut.min = formatDateISO(tomorrow);
    quickCheckOut.value = formatDateISO(tomorrow);

    quickCheckIn.addEventListener('change', () => {
      const inDate = new Date(quickCheckIn.value);
      if (!isNaN(inDate.getTime())) {
        const nextDay = new Date(inDate);
        nextDay.setDate(inDate.getDate() + 1);
        quickCheckOut.min = formatDateISO(nextDay);
        if (new Date(quickCheckOut.value) <= inDate) {
          quickCheckOut.value = formatDateISO(nextDay);
        }
      }
    });
  }

  if (heroQuickForm) {
    heroQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Sync into main booking form
      const bookCheckIn = document.getElementById('bookCheckIn');
      const bookCheckOut = document.getElementById('bookCheckOut');
      const bookRoomType = document.getElementById('bookRoomType');
      const bookGuests = document.getElementById('bookGuests');

      if (bookCheckIn) bookCheckIn.value = quickCheckIn.value;
      if (bookCheckOut) bookCheckOut.value = quickCheckOut.value;
      if (bookRoomType) bookRoomType.value = quickRoomType.value;
      if (bookGuests) bookGuests.value = quickGuests.value;

      updateCalculatedPrice();

      // Scroll to booking section
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        const offset = bookingSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  }

  /* ==========================================================================
     7. Booking Section: Real-Time Calculator & Strict Validation
     ========================================================================== */
  const bookingForm = document.getElementById('bookingForm');
  const bookCheckIn = document.getElementById('bookCheckIn');
  const bookCheckOut = document.getElementById('bookCheckOut');
  const bookRoomType = document.getElementById('bookRoomType');
  const bookGuests = document.getElementById('bookGuests');
  const calcTotal = document.getElementById('calcTotal');
  const calcBreakdown = document.getElementById('calcBreakdown');

  // Initialize main booking form dates
  if (bookCheckIn && bookCheckOut) {
    bookCheckIn.min = formatDateISO(today);
    bookCheckIn.value = formatDateISO(today);

    bookCheckOut.min = formatDateISO(tomorrow);
    bookCheckOut.value = formatDateISO(tomorrow);

    bookCheckIn.addEventListener('change', () => {
      const inDate = new Date(bookCheckIn.value);
      if (!isNaN(inDate.getTime())) {
        const nextDay = new Date(inDate);
        nextDay.setDate(inDate.getDate() + 1);
        bookCheckOut.min = formatDateISO(nextDay);
        if (new Date(bookCheckOut.value) <= inDate) {
          bookCheckOut.value = formatDateISO(nextDay);
        }
      }
      updateCalculatedPrice();
    });

    bookCheckOut.addEventListener('change', updateCalculatedPrice);
    if (bookRoomType) bookRoomType.addEventListener('change', updateCalculatedPrice);
  }

  // Dynamic Price Calculator Function
  function updateCalculatedPrice() {
    if (!bookCheckIn || !bookCheckOut || !bookRoomType || !calcTotal || !calcBreakdown) return;

    const inDate = new Date(bookCheckIn.value);
    const outDate = new Date(bookCheckOut.value);
    const roomKey = bookRoomType.value;
    const roomInfo = ROOM_DATA[roomKey];

    if (!roomInfo || isNaN(inDate.getTime()) || isNaN(outDate.getTime())) {
      calcTotal.textContent = '0';
      calcBreakdown.textContent = 'Please choose valid dates and room';
      return;
    }

    const diffMs = outDate.getTime() - inDate.getTime();
    let nights = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (nights < 1) nights = 1;

    const pricePerNight = roomInfo.price;
    const total = nights * pricePerNight;

    calcTotal.textContent = total.toLocaleString();
    calcBreakdown.textContent = `${nights} ${nights === 1 ? 'Night' : 'Nights'} \u2022 $${pricePerNight}/night`;
  }
  updateCalculatedPrice();

  // Booking Form Submission & Validation
  const confirmModal = document.getElementById('confirmModal');
  const confirmModalBackdrop = document.getElementById('confirmModalBackdrop');
  const confirmReceipt = document.getElementById('confirmReceipt');
  const btnDoneConfirm = document.getElementById('btnDoneConfirm');
  const btnPrintReceipt = document.getElementById('btnPrintReceipt');

  const closeConfirmModal = () => {
    if (confirmModal) confirmModal.style.display = 'none';
    document.body.style.overflow = '';
  };

  if (confirmModalBackdrop) confirmModalBackdrop.addEventListener('click', closeConfirmModal);
  if (btnDoneConfirm) btnDoneConfirm.addEventListener('click', closeConfirmModal);
  if (btnPrintReceipt) {
    btnPrintReceipt.addEventListener('click', () => {
      window.print();
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const fullName = document.getElementById('bookFullName');
      const email = document.getElementById('bookEmail');
      const phone = document.getElementById('bookPhone');
      const roomType = document.getElementById('bookRoomType');
      const checkIn = document.getElementById('bookCheckIn');
      const checkOut = document.getElementById('bookCheckOut');
      const guests = document.getElementById('bookGuests');
      const requests = document.getElementById('bookRequests');

      // Validate Full Name
      const fullNameError = document.getElementById('fullNameError');
      if (!fullName.value.trim() || fullName.value.trim().length < 3) {
        fullName.classList.add('error');
        fullNameError.classList.add('visible');
        isValid = false;
      } else {
        fullName.classList.remove('error');
        fullNameError.classList.remove('visible');
      }

      // Validate Email
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        email.classList.remove('error');
        emailError.classList.remove('visible');
      }

      // Validate Phone
      const phoneError = document.getElementById('phoneError');
      const digitsOnly = phone.value.replace(/\D/g, '');
      if (!phone.value.trim() || digitsOnly.length < 7) {
        phone.classList.add('error');
        phoneError.classList.add('visible');
        isValid = false;
      } else {
        phone.classList.remove('error');
        phoneError.classList.remove('visible');
      }

      // Validate Room Type
      const roomTypeError = document.getElementById('roomTypeError');
      if (!roomType.value) {
        roomType.classList.add('error');
        roomTypeError.classList.add('visible');
        isValid = false;
      } else {
        roomType.classList.remove('error');
        roomTypeError.classList.remove('visible');
      }

      // Validate Check-in & Check-out Dates
      const checkInError = document.getElementById('checkInError');
      const checkOutError = document.getElementById('checkOutError');
      const inDate = new Date(checkIn.value);
      const outDate = new Date(checkOut.value);
      const minToday = new Date();
      minToday.setHours(0, 0, 0, 0);

      if (isNaN(inDate.getTime()) || inDate < minToday) {
        checkIn.classList.add('error');
        checkInError.classList.add('visible');
        isValid = false;
      } else {
        checkIn.classList.remove('error');
        checkInError.classList.remove('visible');
      }

      if (isNaN(outDate.getTime()) || outDate <= inDate) {
        checkOut.classList.add('error');
        checkOutError.classList.add('visible');
        isValid = false;
      } else {
        checkOut.classList.remove('error');
        checkOutError.classList.remove('visible');
      }

      if (!isValid) {
        return;
      }

      // Generate Luxury Booking Voucher / Receipt
      const randomCode = 'ZZ-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
      const selectedRoom = ROOM_DATA[roomType.value];
      const nights = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
      const totalCost = nights * selectedRoom.price;

      confirmReceipt.innerHTML = `
        <div class="receipt-row">
          <span class="receipt-label">Booking Reference:</span>
          <span class="receipt-val" style="color: var(--gold-light); font-family: monospace; font-size: 1rem;">${randomCode}</span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Lead Guest:</span>
          <span class="receipt-val">${escapeHtml(fullName.value.trim())}</span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Email / Contact:</span>
          <span class="receipt-val">${escapeHtml(email.value.trim())} &bull; ${escapeHtml(phone.value.trim())}</span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Accommodation:</span>
          <span class="receipt-val">${selectedRoom.name} (${selectedRoom.category})</span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Stay Period:</span>
          <span class="receipt-val">${checkIn.value} &rarr; ${checkOut.value} (${nights} ${nights === 1 ? 'Night' : 'Nights'})</span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Party Size:</span>
          <span class="receipt-val">${guests.value} Guest(s)</span>
        </div>
        ${requests.value.trim() ? `
          <div class="receipt-row">
            <span class="receipt-label">Special Inquiries:</span>
            <span class="receipt-val" style="font-style: italic;">"${escapeHtml(requests.value.trim())}"</span>
          </div>
        ` : ''}
        <div class="receipt-row">
          <span class="receipt-label">Total Estimated Stay (Taxes Included):</span>
          <span class="receipt-val">$${totalCost.toLocaleString()} USD</span>
        </div>
      `;

      confirmModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Reset form fields cleanly
      bookingForm.reset();
      bookCheckIn.value = formatDateISO(today);
      bookCheckOut.value = formatDateISO(tomorrow);
      bookRoomType.value = 'deluxe';
      updateCalculatedPrice();
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ==========================================================================
     8. Gallery Section: Category Filtering & Lightbox Viewer
     ========================================================================== */
  const galleryFilterButtons = document.querySelectorAll('#galleryFilters .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let activeGalleryItems = Array.from(galleryItems);

  // Gallery filtering
  galleryFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 40);
        } else {
          item.classList.add('hidden');
        }
      });

      // Update currently active items for lightbox navigation
      activeGalleryItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    });
  });

  // Open Lightbox
  const openLightbox = (index) => {
    if (activeGalleryItems.length === 0) return;
    currentGalleryIndex = index;
    const targetItem = activeGalleryItems[currentGalleryIndex];
    if (!targetItem) return;

    const imgTag = targetItem.querySelector('img');
    const caption = targetItem.getAttribute('data-caption') || targetItem.querySelector('.gallery-title')?.textContent;

    lightboxImg.src = imgTag.src;
    lightboxImg.alt = imgTag.alt;
    lightboxCaption.textContent = caption;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${activeGalleryItems.length}`;

    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (lightboxModal) lightboxModal.style.display = 'none';
    document.body.style.overflow = '';
  };

  const showNextLightbox = () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryItems.length;
    openLightbox(currentGalleryIndex);
  };

  const showPrevLightbox = () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    openLightbox(currentGalleryIndex);
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const activeIdx = activeGalleryItems.indexOf(item);
      if (activeIdx !== -1) {
        openLightbox(activeIdx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.style.display === 'flex') {
      if (e.key === 'ArrowRight') showNextLightbox();
      if (e.key === 'ArrowLeft') showPrevLightbox();
    }
  });

  /* ==========================================================================
     9. Testimonials Section: Responsive Carousel Slider
     ========================================================================== */
  const track = document.getElementById('testimonialTrack');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');

  let currentSlide = 0;
  let autoplayTimer = null;
  const slideCount = slides.length;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      if (idx === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const goToSlide = (idx) => {
    currentSlide = idx;
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    updateDots();
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
  };

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Auto-play every 5.5 seconds
  const startAutoplay = () => {
    if (!autoplayTimer) {
      autoplayTimer = setInterval(nextSlide, 5500);
    }
  };

  const pauseAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const sliderWrapper = document.querySelector('.testimonials-slider-wrapper');
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', pauseAutoplay);
    sliderWrapper.addEventListener('mouseleave', startAutoplay);

    // Touch Swipe Support for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      pauseAutoplay();
    }, { passive: true });

    sliderWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        nextSlide();
      } else if (touchEndX - touchStartX > 45) {
        prevSlide();
      }
      startAutoplay();
    }, { passive: true });
  }

  startAutoplay();

  /* ==========================================================================
     10. Contact Form & Newsletter Validation
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isContactValid = true;

      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const message = document.getElementById('contactMessage');

      const nameErr = document.getElementById('contactNameError');
      const emailErr = document.getElementById('contactEmailError');
      const msgErr = document.getElementById('contactMessageError');

      if (!name.value.trim() || name.value.trim().length < 2) {
        name.classList.add('error');
        nameErr.classList.add('visible');
        isContactValid = false;
      } else {
        name.classList.remove('error');
        nameErr.classList.remove('visible');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        emailErr.classList.add('visible');
        isContactValid = false;
      } else {
        email.classList.remove('error');
        emailErr.classList.remove('visible');
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add('error');
        msgErr.classList.add('visible');
        isContactValid = false;
      } else {
        message.classList.remove('error');
        msgErr.classList.remove('visible');
      }

      if (!isContactValid) return;

      // Display feedback
      contactFeedback.style.display = 'flex';
      contactForm.reset();

      setTimeout(() => {
        contactFeedback.style.display = 'none';
      }, 7000);
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMsg = document.getElementById('newsletterMsg');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        newsletterMsg.textContent = 'Please enter a valid email address.';
        newsletterMsg.className = 'newsletter-msg error-msg visible';
        return;
      }

      newsletterMsg.textContent = '✓ Welcome to Zamzam Private Circle. Expect our exclusive invitations.';
      newsletterMsg.className = 'newsletter-msg success';
      newsletterForm.reset();

      setTimeout(() => {
        newsletterMsg.textContent = '';
      }, 6000);
    });
  }

  /* ==========================================================================
     11. Back to Top Button & Dynamic Year
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTop');
  const handleScrollBackToTop = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', handleScrollBackToTop, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Dynamic Year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     12. Animated Numerical Counters (About Us Metrics)
     ========================================================================== */
  const counterElements = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetValue = parseInt(el.getAttribute('data-counter'), 10);
          const isPercent = el.textContent.includes('%');
          const isPlus = el.textContent.includes('+');

          let start = 0;
          const duration = 1600;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = targetValue / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
              start = targetValue;
              clearInterval(timer);
            }
            let displayVal = Math.floor(start);
            if (isPercent) displayVal += '%';
            else if (isPlus) displayVal += '+';
            el.textContent = displayVal;
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
  }
});
