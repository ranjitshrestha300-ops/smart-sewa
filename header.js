function loadHeader() {
  const headerHTML = `
  <header>
    <div class="nav-wrapper">
      <a href="/index.html" class="brand-master-logo">
        <div class="logo-graphic-shield">
          <svg viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,6M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/></svg>
        </div>
        <div class="brand-typography-block">
          <div class="brand-main-title">Smart<span>Sewa</span></div>
          <div class="brand-sub-tag">Nepal Hub</div>
        </div>
      </a>
      <nav>
        <ul>
          <li><a href="/pages/accessories.html">Accessories</a></li>
          <li><a href="/pages/vlog-gaming.html">Vlog & Gaming</a></li>
          <li><a href="/pages/insurance-post1.html">Insurance Plans</a></li>
          <li><a href="/pages/repair-hub.html">Repair Hub</a></li>
          <li><a href="/pages/gallery.html">Photo Gallery</a></li>
        </ul>
      </nav>
      <a href="/index.html" class="cta-nav-btn">Back to Home</a>
    </div>
  </header>
  `;

  const headerContainer = document.getElementById('main-header');
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
}

document.addEventListener('DOMContentLoaded', loadHeader);
