/* CROMBIE ANCHOR ATELIER & GUILD - MAIN ENTRY POINT
   Fully synchronized with script.js (Rule 11)
*/

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const hamburger = document.getElementById('ca-hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const closeBtn = document.getElementById('mobile-drawer-close');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Accordion Logic
  const accordionHeaders = document.querySelectorAll('.ca-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      const siblingGroup = item.parentElement.querySelectorAll('.ca-accordion-item');
      siblingGroup.forEach(sibling => sibling.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Fitting Form Submission Feedback
  const form = document.getElementById('ca-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = 'Transmitting Bespoke Request...';
      
      setTimeout(() => {
        btn.innerHTML = 'Bespoke Fitting Request Transmitted ✓';
        btn.style.backgroundColor = '#1e3a68';
        const msg = document.createElement('div');
        msg.style.marginTop = '16px';
        msg.style.padding = '14px';
        msg.style.background = 'rgba(30, 58, 104, 0.12)';
        msg.style.border = '1px solid #1e3a68';
        msg.style.borderRadius = '6px';
        msg.style.color = '#0d141e';
        msg.style.fontSize = '0.9rem';
        msg.innerHTML = '<strong>Master Tailor Confirmation:</strong> Thank you. Our San Francisco concierge will contact you within 4 business hours to schedule your dedicated measurement consultation.';
        form.appendChild(msg);
        form.reset();
      }, 700);
    });
  }
});
