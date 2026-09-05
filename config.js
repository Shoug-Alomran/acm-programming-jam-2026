/*!
 * JAM.26 — shared front-end config.
 * One place to set the Apps Script Web App URL (ends in /exec).
 * Used by the registration form and the FAQ contact form.
 */
window.JAM_ENDPOINT = "https://script.google.com/macros/s/AKfycbxgyr8htLljwqCp4ee9sjCO7a3zY0NCIiyT6VvfgqtZoTyUHn_-cCLscp9UVNAP7AfMdg/exec";

/* Keep the registration form limited to information the organizers actually need. */
(function () {
  'use strict';

  var nativeSubmit = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    if (this.target === 'jamSink' && window.JAM_ENDPOINT && this.action === window.JAM_ENDPOINT) {
      var majorField = document.getElementById('major');
      if (majorField && !this.querySelector('input[name="major"]')) {
        var hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = 'major';
        hidden.value = majorField.value.trim();
        this.appendChild(hidden);
      }
    }
    return nativeSubmit.apply(this, arguments);
  };

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('jamForm');
    var phone = document.getElementById('phoneNumber');
    if (!form || !phone || document.getElementById('major')) return;

    var group = document.createElement('div');
    group.className = 'space-y-1';
    group.innerHTML =
      '<label for="major" class="block font-mono text-xs font-bold uppercase text-gray-500">05 // Major</label>' +
      '<input id="major" name="major" type="text" required placeholder="e.g. Software Engineering" ' +
      'class="w-full border-4 border-textDark px-3 py-2 text-sm font-mono focus:outline-none focus:bg-brandPurple/5 focus:border-brandPurple transition-colors">';

    phone.closest('.space-y-1').insertAdjacentElement('afterend', group);

    var teamNameLabel = document.querySelector('label[for="teamName"]');
    if (teamNameLabel) teamNameLabel.textContent = '06 // Team Name';
    var membersLabel = document.querySelector('label[for="emailInput"]');
    if (membersLabel) membersLabel.textContent = '07 // Team Members (Emails)';

    form.addEventListener('submit', function (event) {
      var major = document.getElementById('major');
      if (major && !major.value.trim()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var error = document.getElementById('formError');
        if (error) {
          error.textContent = 'Please fill in your major.';
          error.classList.remove('hidden');
        }
        major.focus();
      }
    }, true);
  });
}());
