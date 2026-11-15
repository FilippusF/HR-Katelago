/* Katelago HR Hub
   All templates and checklists are direct downloads. The hub carries no
   email forms. This script only applies the guide library search. */
(function () {
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
