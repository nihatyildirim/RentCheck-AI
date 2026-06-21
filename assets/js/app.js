(function () {
  'use strict';

  const engine = window.RentCheckEligibility;
  const form = document.getElementById('eligibility-form');
  const alertBox = document.getElementById('form-alert');
  const resultSection = document.getElementById('result-section');
  const resultCard = document.getElementById('result-card');
  const resultBadge = document.getElementById('result-badge');
  const resultScore = document.getElementById('result-score');
  const resultTitle = document.getElementById('result-title');
  const resultSummary = document.getElementById('result-summary');
  const reasonsList = document.getElementById('reasons-list');
  const suggestionsList = document.getElementById('suggestions-list');
  const resetButton = document.getElementById('reset-button');

  function getData() {
    return {
      age: form.age.value,
      licenseYears: form.licenseYears.value,
      monthlyIncome: form.monthlyIncome.value,
      criminalRecord: form.criminalRecord.value,
      consent: form.consent.checked
    };
  }

  function clearErrors() {
    ['age', 'licenseYears', 'monthlyIncome', 'criminalRecord', 'consent'].forEach((name) => {
      const element = document.getElementById(`${name}-error`);
      if (element) element.textContent = '';
    });
    alertBox.hidden = true;
    alertBox.textContent = '';
  }

  function showErrors(errors) {
    clearErrors();
    Object.entries(errors).forEach(([name, message]) => {
      const element = document.getElementById(`${name}-error`);
      if (element) element.textContent = message;
    });
    alertBox.textContent = 'Lütfen işaretlenen alanları kontrol ediniz.';
    alertBox.hidden = false;
    const firstErrorName = Object.keys(errors)[0];
    const firstField = form.elements[firstErrorName];
    if (firstField && typeof firstField.focus === 'function') firstField.focus();
  }

  function fillList(element, items) {
    element.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      element.appendChild(li);
    });
  }

  function showResult(result) {
    resultCard.classList.remove('eligible', 'not-eligible');
    resultCard.classList.add(result.eligible ? 'eligible' : 'not-eligible');
    resultBadge.textContent = result.eligible ? 'UYGUN' : 'UYGUN DEĞİL';
    resultScore.textContent = `Ön değerlendirme puanı: ${result.score}/100`;
    resultTitle.textContent = result.eligible ? 'Ön uygunluk kriterleri karşılanıyor' : 'Bazı kriterler henüz karşılanmıyor';
    resultSummary.textContent = result.eligible
      ? 'Girilen bilgilere göre MVP kriterlerinin tamamını sağlıyorsunuz.'
      : 'Girilen bilgilere göre en az bir zorunlu kriter sağlanmadı. Aşağıdaki gerekçeleri ve önerileri inceleyin.';
    fillList(reasonsList, result.reasons);
    fillList(suggestionsList, result.suggestions);
    resultSection.hidden = false;
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();
    const result = engine.evaluateEligibility(getData());
    if (result.status === 'invalid') {
      resultSection.hidden = true;
      showErrors(result.errors);
      return;
    }
    showResult(result);
  });

  resetButton.addEventListener('click', function () {
    form.reset();
    clearErrors();
    resultSection.hidden = true;
    document.getElementById('application').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Ekran görüntüsü ve demo amacıyla kullanılabilen sorgu parametresi.
  const demo = new URLSearchParams(window.location.search).get('demo');
  if (demo === 'noteligible' || demo === 'eligible') {
    const sample = demo === 'eligible'
      ? { age: 30, licenseYears: 7, monthlyIncome: 35000, criminalRecord: 'clean' }
      : { age: 22, licenseYears: 1, monthlyIncome: 15000, criminalRecord: 'clean' };
    form.age.value = sample.age;
    form.licenseYears.value = sample.licenseYears;
    form.monthlyIncome.value = sample.monthlyIncome;
    form.criminalRecord.value = sample.criminalRecord;
    form.consent.checked = true;
    showResult(engine.evaluateEligibility({ ...sample, consent: true }));
  }
})();
