/* ==========================================================================
   Site constants — edit these two lines to rebrand the whole page.
   ========================================================================== */
const BRAND = "[Your Brand]";
const CONTACT_EMAIL = "sales@yourdomain.com";

/* Literal placeholders used in index.html (do not edit). */
const BRAND_TOKEN = "[Your Brand]";
const EMAIL_TOKEN = "sales@yourdomain.com";

(function () {
  "use strict";

  /* ---------- Brand + email placeholders ---------- */
  function applyConstants() {
    if (BRAND !== BRAND_TOKEN) {
      document.title = document.title.split(BRAND_TOKEN).join(BRAND);
      document.querySelectorAll("meta[content]").forEach(function (meta) {
        var content = meta.getAttribute("content");
        if (content.indexOf(BRAND_TOKEN) !== -1) {
          meta.setAttribute("content", content.split(BRAND_TOKEN).join(BRAND));
        }
      });
      document.querySelectorAll("[data-brand]").forEach(function (el) {
        el.textContent = BRAND;
      });
    }

    if (CONTACT_EMAIL !== EMAIL_TOKEN) {
      document.querySelectorAll("[data-email]").forEach(function (el) {
        el.textContent = CONTACT_EMAIL;
        el.setAttribute("href", "mailto:" + CONTACT_EMAIL);
      });
      var formEl = document.getElementById("quote-form");
      if (formEl) formEl.setAttribute("action", "mailto:" + CONTACT_EMAIL);
      var draftLink = document.getElementById("form-mailto-link");
      if (draftLink) draftLink.setAttribute("href", "mailto:" + CONTACT_EMAIL);
    }

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var header = document.getElementById("site-header");
    var toggle = header && header.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (header.classList.contains("is-open") && !header.contains(event.target)) {
        setOpen(false);
      }
    });
  }

  /* ---------- Quote form (front-end only, mailto) ---------- */
  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;

    var status = document.getElementById("form-status");
    var statusText = document.getElementById("form-status-text");
    var draftLink = document.getElementById("form-mailto-link");
    var copyBtn = document.getElementById("form-copy");
    var lastBody = "";

    function value(name) {
      var field = form.elements[name];
      return field ? field.value.trim() : "";
    }

    function buildRequest() {
      var company = value("Company");
      var qty = value("Quantity");
      var subject = "Quote request: T700 16mm pickleball paddle – " + company + " (" + qty + " pcs)";
      var lines = [
        "Quote request — T700 Carbon Fiber 16mm Pickleball Paddle",
        "",
        "Name: " + value("Name"),
        "Company: " + company,
        "Country: " + value("Country"),
        "Email: " + value("Email"),
        "Quantity: " + qty + " pcs",
        "",
        "Message:",
        value("Message") || "(none)"
      ];
      return { subject: subject, body: lines.join("\r\n") };
    }

    // Native constraint validation runs first; this handler only fires for a valid form.
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var request = buildRequest();
      var href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(request.subject) +
        "&body=" + encodeURIComponent(request.body);

      lastBody = request.subject + "\r\n\r\n" + request.body;
      draftLink.setAttribute("href", href);
      statusText.textContent =
        "Your email app should now open with the request pre-filled — press send to submit it. " +
        "If nothing opened, copy the request and email it to " + CONTACT_EMAIL + ".";
      status.hidden = false;

      window.location.href = href;
    });

    copyBtn.addEventListener("click", function () {
      function done(ok) {
        copyBtn.textContent = ok ? "Copied" : "Copy failed — select and copy manually";
        window.setTimeout(function () {
          copyBtn.textContent = "Copy request text";
        }, 2400);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lastBody).then(
          function () { done(true); },
          function () { done(legacyCopy(lastBody)); }
        );
      } else {
        done(legacyCopy(lastBody));
      }
    });
  }

  function legacyCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function init() {
    applyConstants();
    initNav();
    initQuoteForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
