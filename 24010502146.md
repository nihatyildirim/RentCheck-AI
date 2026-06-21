# RentCheck AI

**Yapay Zekâ Destekli Araç Kiralama Ön Uygunluk Sistemi**

> **Proje durumu:** Çalışan eğitim amaçlı MVP (Minimum Geçerli Ürün)  
> **Ders:** CPP214  
> **Öğrenci:** Nihat Yıldırım  
> **Öğrenci numarası:** 24010502146

---

## 1. Proje Hakkında

RentCheck AI, araç kiralama başvurusu yapılmadan önce kullanıcının temel uygunluk kriterlerini otomatik olarak değerlendiren, sonucu gerekçeleriyle açıklayan ve uygun olmayan kullanıcılar için iyileştirme önerileri sunan web tabanlı bir ön değerlendirme uygulamasıdır.

Proje; araç kiralama işletmelerinde müşteri başvurularının manuel olarak incelenmesinden kaynaklanan zaman kaybını azaltmak, uygun olmayan başvuruları erken aşamada filtrelemek ve müşterilerin başvuru öncesindeki belirsizliğini gidermek amacıyla geliştirilmiştir.

Uygulama fikri, Kocaeli/Gebze'de faaliyet gösteren **As Ufuk Filo Kiralama** işletmesindeki gerçek operasyonel ihtiyaç ve sektörel deneyimden hareketle oluşturulmuştur.

---

## 2. Projenin Amacı

Projenin temel amaçları şunlardır:

- Araç kiralama başvurularının ilk değerlendirme aşamasını hızlandırmak.
- İşletmenin manuel inceleme ve gereksiz başvuru yükünü azaltmak.
- Kullanıcıya başvuru öncesinde hızlı ve anlaşılır geri bildirim vermek.
- Uygunluk kararının nedenlerini şeffaf biçimde göstermek.
- Uygun olmayan kullanıcılara hangi şartları tamamlamaları gerektiğini açıklamak.
- Aynı girdiler için tutarlı ve tekrar üretilebilir sonuç oluşturmak.

---

## 3. Problem Tanımı

### İşletme açısından

- Müşteri başvurularının manuel incelenmesi operasyonel zaman kaybı oluşturmaktadır.
- Temel kriterleri karşılamayan kullanıcıların başvuruları gereksiz iş yükü yaratmaktadır.
- İlk değerlendirmede standart ve tutarlı karar üretmek zorlaşabilmektedir.

### Müşteri açısından

- Başvuru öncesinde uygunluk kriterleri yeterince bilinmeyebilir.
- Kullanıcı, reddedilme olasılığı yüksek bir işlem için zaman ve enerji harcayabilir.
- Olumsuz sonucun gerekçesi ve uygun hâle gelme yolu açık biçimde sunulmayabilir.

RentCheck AI, bu iki taraflı problemi açıklanabilir ve otomatik bir ön değerlendirme süreciyle çözmeyi hedeflemektedir.

---

## 4. Hedef Kullanıcılar

- Araç kiralama uygunluğunu başvuru öncesinde öğrenmek isteyen bireysel kullanıcılar.
- Yaş, ehliyet süresi, gelir ve adli sicil gibi temel kriterleri hızlıca kontrol etmek isteyen potansiyel müşteriler.
- İlk başvuru inceleme sürecini standartlaştırmak isteyen araç kiralama işletmeleri.

---

## 5. Temel Özellikler

- Dört temel bilginin girilebildiği kullanıcı formu.
- Form alanlarında boş, negatif, mantıksız ve hatalı değer kontrolü.
- Açıklanabilir kural tabanlı uzman sistem ile otomatik değerlendirme.
- **Uygun** veya **Uygun Değil** sonucu.
- Her kriter için açık değerlendirme gerekçesi.
- Uygun olmayan kriterler için kişiye özel öneriler.
- 100 puan üzerinden ön değerlendirme puanı.
- Mobil cihazlarla uyumlu responsive tasarım.
- Tarayıcı tabanlı çalışma; kullanıcı verilerini kalıcı olarak saklamama.
- Haricî API veya ücretli servis gerektirmeden çalışabilme.
- Node.js ile çalıştırılabilen otomatik karar mekanizması testleri.

---

## 6. Sistem Nasıl Çalışır?

Uygulama dört aşamalı bir kullanıcı akışına sahiptir:

1. **Ana Sayfa:** Kullanıcı proje hakkında bilgi alır ve değerlendirmeyi başlatır.
2. **Bilgi Formu:** Yaş, ehliyet süresi, aylık gelir ve adli sicil durumu girilir.
3. **Akıllı Kontrol:** Girilen bilgiler açıklanabilir uzman sistem kurallarıyla analiz edilir.
4. **Sonuç Ekranı:** Uygunluk kararı, puan, gerekçeler ve öneriler gösterilir.

### Girdiler

- Yaş
- Ehliyet süresi
- Aylık gelir
- Adli sicil durumu

### Çıktılar

- Uygun / Uygun Değil kararı
- Ön değerlendirme puanı
- Kriter bazlı açıklamalar
- Uygun hâle gelme önerileri

---

## 7. Yapay Zekâ ve Karar Mekanizması

RentCheck AI'nin MVP sürümünde, nihai kararın tutarlı, denetlenebilir ve açıklanabilir olması amacıyla **kural tabanlı uzman sistem** yaklaşımı kullanılmıştır.

Bu sürümde üretken yapay zekâ servisi veya dış API, kullanıcı hakkında karar vermemektedir. Karar mekanizması önceden tanımlanmış kuralları kontrol eder ve başarısız olan bütün kriterleri eksiksiz biçimde kullanıcıya açıklar.

Bu yaklaşımın tercih edilme nedenleri:

- Aynı bilgiler için her zaman aynı sonucun üretilmesi.
- Kararın hangi kurala göre verildiğinin açıklanabilmesi.
- Yapay zekâ halüsinasyonu veya tutarsız çıktı riskinin önlenmesi.
- Kullanıcı bilgilerinin haricî servislere gönderilmemesi.
- Eğitim amaçlı MVP'nin kolayca test edilebilmesi.

Gelecek sürümlerde üretken yapay zekâ, kararı değiştirmeden yalnızca açıklama ve öneri metinlerini daha doğal hâle getirmek amacıyla sisteme eklenebilir.

---

## 8. MVP İş Kuralları

| Kriter | MVP koşulu | Açıklama |
|---|---:|---|
| Yaş | En az 25 | 25 yaş ve üzeri geçerlidir. |
| Ehliyet süresi | En az 3 yıl | 3 yıl ve üzeri geçerlidir. |
| Aylık gelir | En az 15.000 TL | Eğitim amaçlı demo eşiğidir. |
| Adli sicil | Temiz | MVP kapsamında temiz sicil gereklidir. |

Kullanıcının **Uygun** sonucu alabilmesi için bütün zorunlu kriterleri karşılaması gerekir. En az bir kriterin karşılanmaması hâlinde sistem **Uygun Değil** sonucu üretir ve karşılanmayan bütün kriterleri listeler.

> **Not:** 15.000 TL gelir eşiği, proje örnek senaryosuyla tutarlı olması için belirlenmiş bir MVP/demo değeridir; genel veya resmî sektör standardı değildir. Gerçek işletme kullanımında kriterler işletme politikalarına göre yapılandırılmalıdır.

---

## 9. Örnek Senaryo

### Kullanıcı girdileri

- Yaş: 22
- Ehliyet süresi: 1 yıl
- Aylık gelir: 15.000 TL
- Adli sicil: Temiz

### Beklenen sonuç

**Karar:** Uygun Değil

**Gerekçeler:**

- Minimum 25 yaş kriteri karşılanmamaktadır.
- Minimum 3 yıllık ehliyet süresi kriteri karşılanmamaktadır.
- Aylık gelir kriteri karşılanmaktadır.
- Adli sicil kriteri karşılanmaktadır.

**Öneriler:**

- 25 yaş doldurulduktan sonra yeniden değerlendirme yapılmalıdır.
- Ehliyet süresi 3 yılı tamamladığında tekrar denenmelidir.

---

## 10. Kullanılan Teknolojiler ve Kütüphaneler

| Teknoloji | Kullanım amacı |
|---|---|
| HTML5 | Sayfa yapısı ve form bileşenleri |
| CSS3 | Responsive arayüz, kartlar ve sonuç ekranı tasarımı |
| JavaScript (ES6+) | Form doğrulama, karar motoru ve ekran etkileşimleri |
| Node.js | Karar motoru otomatik testlerinin çalıştırılması |
| Node.js `assert` | Haricî kütüphane gerektirmeyen test doğrulamaları |
| Python HTTP Server (isteğe bağlı) | Uygulamayı yerel sunucuda çalıştırma |

Proje çalışma zamanında haricî JavaScript kütüphanesi, veritabanı veya üçüncü taraf API kullanmamaktadır.

---

## 11. Proje Klasör Yapısı

```text
RentCheck_AI_Project/
├── index.html                         # Ana uygulama sayfası
├── assets/
│   ├── css/
│   │   └── styles.css                 # Responsive arayüz stilleri
│   └── js/
│       ├── eligibility.js             # Doğrulama ve karar motoru
│       └── app.js                     # Form ve sonuç ekranı etkileşimleri
├── tests/
│   └── eligibility.test.js            # Karar motoru otomatik testleri
├── screenshots/
│   ├── ana-sayfa.png
│   ├── uygun-degil-sonucu.png
│   └── uygun-sonucu.png
├── docs/
│   ├── RentCheck_AI_Sunum.pdf         # Proje sunumu
│   └── QA_Test_Prompt.docx            # Test ve kalite güvence çalışma belgesi
├── package.json                       # Proje bilgileri ve test komutu
├── LICENSE                            # MIT lisansı
├── .gitignore                         # Git tarafından izlenmeyecek dosyalar
├── README.md                          # GitHub proje açıklaması
└── 24010502146.md                     # ALMS teslim dokümantasyonu
```

---

## 12. Kurulum Adımları

Uygulamanın temel kullanımı için ek paket kurulumu gerekmez.

### Yöntem 1 — Doğrudan çalıştırma

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Proje klasörünü açın.
3. `index.html` dosyasına çift tıklayın.
4. Uygulama varsayılan internet tarayıcısında açılacaktır.

### Yöntem 2 — Yerel sunucuyla çalıştırma

Python 3 kuruluysa proje klasöründe terminal açarak şu komutu çalıştırın:

```bash
python -m http.server 8000
```

Bazı Windows kurulumlarında aşağıdaki komut kullanılabilir:

```bash
py -m http.server 8000
```

Ardından tarayıcıdan şu adresi açın:

```text
http://localhost:8000
```

---

## 13. Çalıştırma ve Kullanım Talimatları

1. Ana sayfada **Değerlendirmeyi Başlat** düğmesine basın.
2. Yaşınızı 18–100 arasında tam sayı olarak girin.
3. Ehliyet sürenizi tamamlanmış yıl olarak girin.
4. Aylık gelirinizi TL cinsinden yazın.
5. Adli sicil durumunu seçin.
6. Ön değerlendirme bilgilendirmesini kabul edin.
7. **Uygunluğumu Değerlendir** düğmesine basın.
8. Sonuç ekranındaki kararı, puanı, gerekçeleri ve önerileri inceleyin.
9. Yeni bir değerlendirme için **Yeni Değerlendirme** düğmesini kullanın.

---

## 14. Otomatik Testlerin Çalıştırılması

Karar motoru testleri için bilgisayarda Node.js bulunmalıdır. Proje klasöründe şu komutu çalıştırın:

```bash
npm test
```

Alternatif olarak:

```bash
node tests/eligibility.test.js
```

Mevcut otomatik testler aşağıdaki kritik durumları kapsar:

- 22 yaş ve 1 yıllık ehliyet örnek senaryosu.
- 25 yaş, 3 yıl ehliyet ve 15.000 TL sınır değerleri.
- Gelir sınırının altındaki değer.
- Adli sicil kaydı bulunan kullanıcı.
- Sıfır yaş gibi geçersiz girdi.
- Yaşla mantıksal olarak uyumsuz ehliyet süresi.

### Test öncelikleri

- **P0:** Yanlış uygunluk kararı, eksik ret nedeni, form doğrulama hatası ve sonuç ekranı-karar motoru uyuşmazlığı.
- **P1:** Sınır değerleri, çoklu başarısız kriterler, mobil görünüm ve yeniden değerlendirme akışı.
- **P2:** Geniş tarayıcı uyumluluğu, performans ölçümleri ve gelişmiş erişilebilirlik kontrolleri.

---

## 15. Ekran Görüntüleri

### Ana Sayfa

![RentCheck AI Ana Sayfa](https://raw.githubusercontent.com/nihatyildirim/RentCheck-AI/main/screenshots/ana-sayfa.png)

### Uygun Değil Sonucu

![RentCheck AI Uygun Değil Sonucu](https://raw.githubusercontent.com/nihatyildirim/RentCheck-AI/main/screenshots/uygun-degil-sonucu.png)

### Uygun Sonucu

![RentCheck AI Uygun Sonucu](https://raw.githubusercontent.com/nihatyildirim/RentCheck-AI/main/screenshots/uygun-sonucu.png)

---

## 16. Güvenlik ve Gizlilik

- Uygulama tamamen tarayıcı içinde çalışır.
- Girilen bilgiler sunucuya veya üçüncü taraf yapay zekâ servisine gönderilmez.
- Uygulama kullanıcı bilgilerini veritabanına, dosyaya, çereze veya `localStorage` alanına kaydetmez.
- Form alanlarında sayısal değer, sınır ve zorunlu alan doğrulamaları uygulanır.
- Sonuç yalnızca eğitim amaçlı ön değerlendirmedir; nihai araç kiralama onayı değildir.
- Gerçek kullanım sürümünde KVKK, açık rıza, erişim kontrolü, log yönetimi, şifreleme ve sunucu tarafı doğrulama ayrıca uygulanmalıdır.

---

## 17. Projenin Sınırlılıkları

- MVP kriterleri sabittir ve yönetim panelinden değiştirilememektedir.
- Karar mekanizması gerçek kredi skoru, kimlik doğrulama veya resmî adli sicil servisine bağlı değildir.
- Aylık gelir kullanıcı beyanına dayanmaktadır.
- Uygulama rezervasyon veya ödeme işlemi yapmamaktadır.
- Sonuç hukukî, finansal veya resmî kiralama onayı niteliği taşımaz.
- Üretken yapay zekâ modeli çalışma zamanında kullanılmamaktadır.

---

## 18. Gelecek Geliştirmeler

- İşletmenin kriterleri değiştirebildiği yönetim paneli.
- FastAPI veya benzeri backend servisi.
- Yetkilendirme ve güvenli kullanıcı hesabı sistemi.
- Şifrelenmiş veritabanı ve KVKK uyumlu veri yönetimi.
- Araç sınıfına göre dinamik gelir ve uygunluk kuralları.
- Kimlik ve ehliyet doğrulama servisleriyle entegrasyon.
- Kararı değiştirmeden açıklamaları iyileştiren üretken yapay zekâ katmanı.
- API, E2E, performans ve güvenlik testleri.
- GitHub Actions ile otomatik test ve kalite kontrol süreci.
- Çoklu dil desteği ve gelişmiş erişilebilirlik.

---

## 19. GitHub Proje Bağlantısı

```text
https://github.com/nihatyildirim/RentCheck-AI
```

Önerilen repo adı: `RentCheck-AI`

---

## 20. Kaynakça ve Yararlanılan Bağlantılar

- RentCheck AI proje sunumu, `docs/RentCheck_AI_Sunum.pdf`.
- RentCheck AI kalite güvence ve test çalışma belgesi, `docs/QA_Test_Prompt.docx`.
- MDN Web Docs — HTML: https://developer.mozilla.org/docs/Web/HTML
- MDN Web Docs — CSS: https://developer.mozilla.org/docs/Web/CSS
- MDN Web Docs — JavaScript: https://developer.mozilla.org/docs/Web/JavaScript
- Node.js Test ve Assert Dokümantasyonu: https://nodejs.org/api/assert.html
- GitHub Docs — Repository oluşturma ve dosya yükleme: https://docs.github.com/repositories

---

## 21. Lisans

Bu proje MIT Lisansı altında sunulmuştur. Ayrıntılar için `LICENSE` dosyasına bakınız.

---

## 22. Sorumluluk Reddi

RentCheck AI tarafından oluşturulan sonuç, yalnızca eğitim amaçlı bir ön değerlendirmedir. Uygulama tarafından verilen **Uygun** sonucu araç kiralama garantisi veya kesin onay anlamına gelmez. Nihai karar, ilgili araç kiralama işletmesinin güncel şartları ve yetkili değerlendirmesi doğrultusunda verilir.
