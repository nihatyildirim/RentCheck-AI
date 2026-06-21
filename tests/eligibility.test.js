'use strict';
const assert = require('node:assert/strict');
const { evaluateEligibility, validateInput } = require('../assets/js/eligibility.js');

function run(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    throw error;
  }
}

run('Örnek senaryo: 22 yaş ve 1 yıllık ehliyet uygun değildir', () => {
  const result = evaluateEligibility({ age: 22, licenseYears: 1, monthlyIncome: 15000, criminalRecord: 'clean', consent: true });
  assert.equal(result.eligible, false);
  assert.equal(result.score, 40);
  assert.equal(result.reasons.some((x) => x.includes('Yaş kriteri')), true);
  assert.equal(result.reasons.some((x) => x.includes('Ehliyet süresi yetersiz')), true);
  assert.equal(result.reasons.some((x) => x.includes('Aylık gelir kriteri karşılanıyor')), true);
});

run('Sınır değerler: 25 yaş, 3 yıl ehliyet ve 15.000 TL uygundur', () => {
  const result = evaluateEligibility({ age: 25, licenseYears: 3, monthlyIncome: 15000, criminalRecord: 'clean', consent: true });
  assert.equal(result.eligible, true);
  assert.equal(result.score, 100);
});

run('Gelir sınırının altı uygun değildir', () => {
  const result = evaluateEligibility({ age: 30, licenseYears: 5, monthlyIncome: 14999, criminalRecord: 'clean', consent: true });
  assert.equal(result.eligible, false);
  assert.equal(result.score, 80);
});

run('Adli sicil kaydı uygun değildir', () => {
  const result = evaluateEligibility({ age: 30, licenseYears: 5, monthlyIncome: 30000, criminalRecord: 'record', consent: true });
  assert.equal(result.eligible, false);
  assert.equal(result.score, 80);
});

run('Yaş 0 geçersiz girdidir', () => {
  const validation = validateInput({ age: 0, licenseYears: 0, monthlyIncome: 0, criminalRecord: 'clean', consent: true });
  assert.equal(validation.valid, false);
  assert.ok(validation.errors.age);
});

run('Ehliyet süresi kişinin yetişkinlik süresini aşamaz', () => {
  const validation = validateInput({ age: 25, licenseYears: 10, monthlyIncome: 30000, criminalRecord: 'clean', consent: true });
  assert.equal(validation.valid, false);
  assert.ok(validation.errors.licenseYears);
});

console.log('\nTüm testler başarıyla tamamlandı.');
