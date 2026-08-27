/* Katelago HR Hub
   Form handling and guide library search for the static hub pages.
   Signups and template requests are delivered through the same mail
   relay the main site contact form uses. */
(function () {
  var API = 'https://qualis-email-server.vercel.app/api/custom-mails/katelago/quote-request';

  document.querySelectorAll('form.field').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var button = form.querySelector('button');
      if (!input || !input.value || !button) return;

      /* Name the thing being requested from the surrounding card */
      var context = 'The Friday HR Brief';
      var gate = form.closest('.inlinegate');
      var card = form.closest('.card');
      if (gate && gate.querySelector('b')) {
        context = gate.querySelector('b').textContent;
      } else if (card && card.querySelector('h4')) {
        context = card.querySelector('h4').textContent;
      }

      button.disabled = true;
      var original = button.textContent;
      button.textContent = 'Sending...';

      fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'HR Hub',
          lastName: 'Signup',
          email: input.value,
          phoneNumber: '',
          businessName: '',
          serviceRequired: 'HR Hub: ' + context,
          hearAboutUs: 'HR Hub',
          message: 'HR Hub request from ' + location.href + '\nRequested: ' + context + '\nEmail: ' + input.value
        })
      }).then(function (r) {
        if (!r.ok) throw new Error('send failed');
        if (window.gtag) { window.gtag('event', 'generate_lead'); }
        button.textContent = 'Done';
        notify(form, 'Thank you. We have received your request and will be in touch.');
        input.value = '';
      }).catch(function () {
        button.disabled = false;
        button.textContent = original;
        notify(form, 'Something went wrong. Please email info@katelago.com and we will add you.');
      });
    });
  });

  function notify(form, text) {
    var prev = form.nextElementSibling;
    if (prev && prev.dataset && prev.dataset.hubNote) prev.remove();
    var note = document.createElement('p');
    note.className = 'fineprint';
    note.dataset.hubNote = '1';
    note.textContent = text;
    form.insertAdjacentElement('afterend', note);
  }

  /* Guide library: apply the ?q= search from the home page or the
     library's own search box by filtering the guide rows. */
  var list = document.getElementById('guidelist');
  if (list) {
    var q = new URLSearchParams(location.search).get('q');
    if (q) {
      var needle = q.toLowerCase();
      list.querySelectorAll('.row').forEach(function (r) {
        r.style.display = r.textContent.toLowerCase().indexOf(needle) > -1 ? '' : 'none';
      });
      var box = document.getElementById('q2');
      if (box) box.value = q;
    }
  }
})();
