/* Katelago HR Hub
   Form handling, template downloads, and guide library search for the
   static hub pages. Signups and template requests are delivered through
   the same mail relay the main site contact form uses; template files
   live in files/ as Word and PDF. */
(function () {
  var API = 'https://qualis-email-server.vercel.app/api/custom-mails/katelago/quote-request';
  var PREFIX = location.pathname.indexOf('/guides/') > -1 ? '../' : '';

  /* Template card titles mapped to their file names in files/ */
  var FILES = {
    'Notice of disciplinary hearing': 'notice-of-disciplinary-hearing',
    'Written warning letter': 'written-warning-letter',
    'Outcome and sanction letter': 'outcome-and-sanction-letter',
    'Performance improvement plan': 'performance-improvement-plan',
    'Employment contract checklist': 'employment-contract-checklist',
    'New employee compliance checklist': 'new-employee-compliance-checklist',
    'Leave policy checklist': 'leave-policy-checklist',
    'Notice of termination': 'notice-of-termination',
    'Termination checklist': 'termination-checklist',
    'Certificate of employment': 'certificate-of-employment'
  };

  /* Guide inline gates mapped to the file they promise */
  var GATE_FILES = {
    'Download our notice of hearing template': 'notice-of-disciplinary-hearing',
    'Get our leave policy checklist': 'leave-policy-checklist',
    'Get our termination checklist': 'termination-checklist'
  };

  function docLinks(slug) {
    var span = document.createElement('span');
    span.className = 'doclinks';
    var w = document.createElement('a');
    w.href = PREFIX + 'files/' + slug + '.docx';
    w.setAttribute('download', '');
    w.textContent = 'Word';
    var p = document.createElement('a');
    p.href = PREFIX + 'files/' + slug + '.pdf';
    p.setAttribute('download', '');
    p.textContent = 'PDF';
    span.appendChild(w);
    span.appendChild(document.createTextNode('  ·  '));
    span.appendChild(p);
    return span;
  }

  function notify(afterEl, text) {
    var prev = afterEl.nextElementSibling;
    if (prev && prev.dataset && prev.dataset.hubNote) prev.remove();
    var note = document.createElement('p');
    note.className = 'fineprint';
    note.dataset.hubNote = '1';
    note.textContent = text;
    afterEl.insertAdjacentElement('afterend', note);
  }

  function send(form, context, onSuccess) {
    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button');
    if (!input || !input.value || !button) return;
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
      input.value = '';
      onSuccess();
    }).catch(function () {
      button.disabled = false;
      button.textContent = original;
      notify(form, 'Something went wrong. Please email info@katelago.com and we will send it to you.');
    });
  }

  /* Static newsletter and guide gate forms */
  document.querySelectorAll('form.field').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var context = 'The Friday HR Brief';
      var gate = form.closest('.inlinegate');
      var card = form.closest('.card');
      var heading = gate && gate.querySelector('b') ? gate.querySelector('b')
        : card && card.querySelector('h4') ? card.querySelector('h4') : null;
      if (heading) context = heading.textContent;
      send(form, context, function () {
        var slug = GATE_FILES[context];
        if (slug) {
          notify(form, 'Thank you. Download your template below.');
          var links = docLinks(slug);
          form.insertAdjacentElement('afterend', links);
        } else {
          notify(form, 'Thank you. We have received your request and will be in touch.');
        }
      });
    });
  });

  /* Template cards: free ones get direct links, gated ones a small form */
  document.querySelectorAll('.tfile').forEach(function (card) {
    var titleEl = card.querySelector('b');
    var gateEl = card.querySelector('.gate');
    if (!titleEl || !gateEl) return;
    var slug = FILES[titleEl.textContent.trim()];
    if (!slug) return;

    if (/free/i.test(gateEl.textContent)) {
      gateEl.textContent = '';
      gateEl.appendChild(docLinks(slug));
      return;
    }

    var form = document.createElement('form');
    form.className = 'field';
    var input = document.createElement('input');
    input.type = 'email';
    input.required = true;
    input.placeholder = 'you@company.com.na';
    input.setAttribute('aria-label', 'Email address');
    var button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Get it';
    form.appendChild(input);
    form.appendChild(button);
    gateEl.insertAdjacentElement('afterend', form);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      send(form, titleEl.textContent.trim(), function () {
        form.remove();
        gateEl.textContent = '';
        gateEl.appendChild(docLinks(slug));
      });
    });
  });

  /* Guide library: apply the ?q= search by filtering the guide rows */
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
