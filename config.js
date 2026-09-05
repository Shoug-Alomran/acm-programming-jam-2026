/*!
 * JAM.26 — shared front-end config.
 *
 * The Apps Script Web App URL is public by design. Registration submissions
 * must be acknowledged by the server before the UI may display success.
 */
window.JAM_ENDPOINT = "https://script.google.com/macros/s/AKfycby-JG2gKExXqhLTcK_a8kSAIB7fIL9JD1q0WbejcqSbaIE9gEC9TboORCTUkHwW-D12/exec";

/*
 * Reliability guard for team-formation.html.
 *
 * The page previously used fetch(..., {mode: 'no-cors'}). An opaque no-cors
 * response cannot reveal whether Apps Script accepted or rejected a
 * registration, so the page could show TEAM REGISTERED after a server error.
 *
 * This capture-phase handler deliberately runs before the page's legacy submit
 * listener. It posts through a hidden iframe and waits for the Apps Script
 * postMessage acknowledgement used by the CTF registration flow. Success is
 * shown only after the server explicitly returns message === 'OK'.
 */
(function () {
  'use strict';

  var GOOGLE_ORIGIN = /^https:\/\/([a-z0-9-]+\.)*(googleusercontent\.com|google\.com)$/i;
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var form = document.getElementById('jamForm');
    if (!form) return;

    var button = document.getElementById('submitBtn');
    var errorEl = document.getElementById('formError');
    var successEl = document.getElementById('jamSuccess');
    var emailInput = document.getElementById('emailInput');
    var endpoint = window.JAM_ENDPOINT || '';
    var originalButtonHtml = button ? button.innerHTML : '';
    var busy = false;

    function showError(message) {
      if (!errorEl) return;
      errorEl.textContent = String(message || 'Registration failed.');
      errorEl.classList.remove('hidden');
      errorEl.scrollIntoView({ block: 'nearest' });
    }

    function clearError() {
      if (errorEl) errorEl.classList.add('hidden');
    }

    function idle() {
      busy = false;
      if (button) {
        button.disabled = false;
        button.innerHTML = originalButtonHtml;
      }
    }

    function value(id) {
      var el = document.getElementById(id);
      return el ? String(el.value || '').trim() : '';
    }

    function collectTeamMembers() {
      var members = [];
      form.querySelectorAll('[data-chip]').forEach(function (chip) {
        var mail = String(chip.dataset.chip || chip.textContent || '').replace(/×\s*$/, '').trim();
        if (mail && members.indexOf(mail) === -1) members.push(mail);
      });

      var typed = emailInput ? String(emailInput.value || '').trim().replace(/,$/, '') : '';
      if (typed) {
        if (!EMAIL.test(typed)) throw new Error('“' + typed + '” is not a valid email address.');
        if (members.indexOf(typed) === -1) members.push(typed);
      }

      if (members.length > 10) throw new Error('Maximum of 10 members per team.');
      return members;
    }

    function submitReliably(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (busy) return;
      clearError();

      if (!endpoint) {
        showError('Registration is not open yet. Please contact the organizers.');
        return;
      }

      var payload;
      try {
        payload = {
          event: 'jam26',
          fullName: value('fullName'),
          universityId: value('universityId'),
          universityEmail: value('universityEmail'),
          phoneNumber: value('phoneNumber'),
          major: value('major'),
          teamName: value('teamName'),
          teamMembers: collectTeamMembers().join(', '),
          website: value('website')
        };
      } catch (err) {
        showError(err && err.message ? err.message : 'Please check the team-member emails.');
        return;
      }

      var required = [
        ['fullName', 'your full name'],
        ['universityId', 'your university ID'],
        ['universityEmail', 'your university email'],
        ['phoneNumber', 'your phone number'],
        ['major', 'your major'],
        ['teamName', 'your team name']
      ];
      for (var i = 0; i < required.length; i += 1) {
        if (!payload[required[i][0]]) {
          showError('Please fill in ' + required[i][1] + '.');
          return;
        }
      }
      if (!EMAIL.test(payload.universityEmail)) {
        showError('That university email does not look valid.');
        return;
      }

      var sink = document.getElementById('jamRegistrationSink');
      if (!sink) {
        sink = document.createElement('iframe');
        sink.id = 'jamRegistrationSink';
        sink.name = 'jamRegistrationSink';
        sink.title = 'registration response';
        sink.hidden = true;
        document.body.appendChild(sink);
      }

      var relay = document.createElement('form');
      relay.action = endpoint;
      relay.method = 'POST';
      relay.target = sink.name;
      relay.style.display = 'none';

      Object.keys(payload).forEach(function (name) {
        var field = document.createElement('input');
        field.type = 'hidden';
        field.name = name;
        field.value = payload[name];
        relay.appendChild(field);
      });
      document.body.appendChild(relay);

      busy = true;
      if (button) {
        button.disabled = true;
        button.textContent = 'SUBMITTING...';
      }

      var completed = false;
      var timer;

      function receive(message) {
        if (!GOOGLE_ORIGIN.test(message.origin)) return;
        if (!message.data || message.data.source !== 'acm-event-registration') return;

        completed = true;
        window.removeEventListener('message', receive);
        window.clearTimeout(timer);

        var serverMessage = String(message.data.message || 'Registration failed.');
        if (serverMessage === 'OK') {
          form.classList.add('hidden');
          if (successEl) successEl.classList.remove('hidden');
          busy = false;
          return;
        }

        showError(serverMessage.replace(/^Error:\s*/i, ''));
        idle();
      }

      window.addEventListener('message', receive);
      relay.submit();
      relay.remove();

      timer = window.setTimeout(function () {
        if (completed) return;
        window.removeEventListener('message', receive);
        idle();
        showError('The registration service did not respond. Check your connection and try again, or contact the organizers through the FAQ page.');
      }, 20000);
    }

    form.addEventListener('submit', submitReliably, true);
  });
}());
