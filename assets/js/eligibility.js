(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.RentCheckEligibility = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RULES = Object.freeze({
    minAge: 25,
    maxAge: 100,
    minLicenseYears: 3,
    minMonthlyIncome: 15000,
    requiredCriminalRecord: 'clean'
  });

  function toNumber(value) {
    if (value === '' || value === null || value === undefined) return NaN;
    return Number(value);
  }

  function validateInput(raw) {
    const data = {
      age: toNumber(raw.age),
      licenseYears: toNumber(raw.licenseYears),
      monthlyIncome: toNumber(raw.monthlyIncome),
      criminalRecord: String(raw.criminalRecord || '').trim(),
      consent: Boolean(raw.consent)
    };
    const errors = {};

    if (!Number.isInteger(data.age) || data.age < 18 || data.age > RULES.maxAge) {
      errors.age = 'Yaş 18 ile 100 arasında bir tam sayı olmalıdır.';
    }
    if (!Number.isInteger(data.licenseYears) || data.licenseYears < 0) {
      errors.licenseYears = 'Ehliyet süresi sıfır veya daha büyük bir tam sayı olmalıdır.';
    } else if (Number.isInteger(data.age) && data.age >= 18 && data.licenseYears > data.age - 18) {
      errors.licenseYears = 'Ehliyet süresi, kişinin 18 yaşından sonraki süreyi aşamaz.';
    }
    if (!Number.isFinite(data.monthlyIncome) || data.monthlyIncome < 0) {
      errors.monthlyIncome = 'Aylık gelir sıfır veya daha büyük sayısal bir değer olmalıdır.';
    }
    if (!['clean', 'record', 'unknown'].includes(data.criminalRecord)) {
      errors.criminalRecord = 'Adli sicil durumunu seçiniz.';
    }
    if (!data.consent) {
      errors.consent = 'Devam etmek için ön değerlendirme onayını işaretleyiniz.';
    }

    return { valid: Object.keys(errors).length === 0, data, errors };
  }

  function evaluateEligibility(raw) {
    const validation = validateInput(raw);
    if (!validation.valid) {
      return { status: 'invalid', eligible: false, score: 0, errors: validation.errors, reasons: [], suggestions: [] };
    }

    const data = validation.data;
    const reasons = [];
    const suggestions = [];
    let score = 100;

    if (data.age < RULES.minAge) {
      score -= 30;
      reasons.push(`Yaş kriteri karşılanmıyor: minimum ${RULES.minAge} yaş gereklidir.`);
      suggestions.push(`${RULES.minAge} yaşınızı doldurduktan sonra yeniden değerlendirme yapın.`);
    } else {
      reasons.push(`Yaş kriteri karşılanıyor (${data.age} yaş).`);
    }

    if (data.licenseYears < RULES.minLicenseYears) {
      score -= 30;
      reasons.push(`Ehliyet süresi yetersiz: minimum ${RULES.minLicenseYears} yıl gereklidir.`);
      suggestions.push(`Ehliyet süreniz ${RULES.minLicenseYears} yılı tamamladığında yeniden deneyin.`);
    } else {
      reasons.push(`Ehliyet süresi kriteri karşılanıyor (${data.licenseYears} yıl).`);
    }

    if (data.monthlyIncome < RULES.minMonthlyIncome) {
      score -= 20;
      reasons.push(`Aylık gelir kriteri karşılanmıyor: minimum ${formatCurrency(RULES.minMonthlyIncome)} gereklidir.`);
      suggestions.push(`Aylık geliriniz ${formatCurrency(RULES.minMonthlyIncome)} veya üzerine çıktığında yeniden değerlendirin.`);
    } else {
      reasons.push(`Aylık gelir kriteri karşılanıyor (${formatCurrency(data.monthlyIncome)}).`);
    }

    if (data.criminalRecord !== RULES.requiredCriminalRecord) {
      score -= 20;
      if (data.criminalRecord === 'record') {
        reasons.push('Adli sicil kriteri karşılanmıyor: MVP kapsamında temiz sicil gereklidir.');
        suggestions.push('Nihai değerlendirme için kiralama işletmesiyle doğrudan iletişime geçin.');
      } else {
        reasons.push('Adli sicil bilgisi doğrulanamadığı için kriter karşılanmıyor.');
        suggestions.push('Adli sicil durumunuzu netleştirerek yeniden değerlendirme yapın.');
      }
    } else {
      reasons.push('Adli sicil kriteri karşılanıyor (temiz).');
    }

    const eligible = score === 100;
    if (eligible) {
      suggestions.push('Ön değerlendirme kriterlerini karşılıyorsunuz; resmi başvuru için işletmeyle iletişime geçebilirsiniz.');
    }

    return {
      status: eligible ? 'eligible' : 'not-eligible',
      eligible,
      score: Math.max(0, score),
      reasons,
      suggestions,
      errors: {}
    };
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(value);
  }

  return { RULES, validateInput, evaluateEligibility, formatCurrency };
});
