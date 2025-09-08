// ======================
// التبديل بين الوضع الليلي والفاتح
// ======================
const themeToggle = document.getElementById("theme-toggle");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// استرجاع الثيم المحفوظ
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// ======================
// عرض "آية اليوم" عشوائيًا
// ======================
const ayahEl = document.getElementById("ayah-of-the-day");
if (ayahEl) {
  const ayat = [
    "﴿إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُو۟لِي الْأَلْبَابِ﴾ (آل عمران: 190)",
    "﴿وَهُوَ الَّذِي جَعَلَ لَكُمُ النُّجُومَ لِتَهْتَدُوا بِهَا فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ﴾ (الأنعام: 97)",
    "﴿اللَّهُ الَّذِي رَفَعَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا﴾ (الرعد: 2)",
    "﴿وَجَعَلْنَا السَّمَاءَ سَقْفًا مَحْفُوظًا﴾ (الأنبياء: 32)",
    "﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾ (الأنبياء: 30)"
  ];
  const randomAyah = ayat[Math.floor(Math.random() * ayat.length)];
  ayahEl.textContent = randomAyah;
}