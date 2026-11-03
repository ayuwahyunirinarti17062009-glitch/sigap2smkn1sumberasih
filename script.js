const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const questions = [
  {q:"Apa tindakan paling tepat saat melihat sampah di halaman sekolah?",e:"🏫",a:["Membiarkannya","Memungut dan membuang sesuai jenisnya","Menendangnya ke selokan","Menutupinya dengan daun"],c:1},
  {q:"Sampah berupa kulit pisang termasuk jenis sampah apa?",e:"🍌",a:["Organik","Anorganik","B3","Elektronik"],c:0},
  {q:"Tempat yang tepat untuk membuang botol plastik kosong adalah…",e:"🧴",a:["Selokan","Tempat sampah sesuai kategori plastik","Halaman sekolah","Laci meja"],c:1},
  {q:"Apa kepanjangan dari 3R dalam pengelolaan sampah?",e:"♻️",a:["Read, Run, Rest","Reduce, Reuse, Recycle","Repair, Remove, Return","Reuse, Refill, Replace"],c:1},
  {q:"Menghemat air saat mencuci tangan dapat dilakukan dengan…",e:"🚰",a:["Membiarkan keran terbuka","Menutup keran saat tidak digunakan","Menggunakan air sebanyak mungkin","Membuka dua keran"],c:1},
  {q:"Manakah contoh sampah organik?",e:"🌿",a:["Kaleng minuman","Daun kering","Kaca","Baterai"],c:1},
  {q:"Mengapa kita perlu membawa botol minum sendiri?",e:"🥤",a:["Agar lebih banyak sampah plastik","Mengurangi penggunaan botol sekali pakai","Supaya air cepat habis","Agar tas lebih berat"],c:1},
  {q:"Apa yang sebaiknya dilakukan pada lampu kelas saat ruangan kosong?",e:"💡",a:["Dibiarkan menyala","Dimatikan","Dinyalakan lebih terang","Dilepas lalu dibuang"],c:1},
  {q:"Kegiatan menanam pohon bermanfaat untuk…",e:"🌳",a:["Mengurangi udara bersih","Membantu menyerap karbon dioksida","Menambah polusi","Menghabiskan air saja"],c:1},
  {q:"Sampah kertas yang masih bersih sebaiknya…",e:"📄",a:["Dibakar","Didaur ulang atau digunakan kembali","Dibuang ke sungai","Dicampur dengan makanan"],c:1},
  {q:"Apa akibat membuang sampah ke selokan?",e:"🌧️",a:["Selokan semakin lancar","Dapat menyebabkan penyumbatan dan banjir","Air menjadi lebih bersih","Tidak ada dampak"],c:1},
  {q:"Kebiasaan ramah lingkungan saat istirahat adalah…",e:"🍱",a:["Menggunakan alat makan sekali pakai setiap hari","Membawa kotak makan dan alat makan sendiri","Meninggalkan bungkus makanan","Membuang sisa makanan di lapangan"],c:1},
  {q:"Sampah berupa kaleng minuman termasuk…",e:"🥫",a:["Organik","Anorganik yang dapat didaur ulang","Sisa makanan","Daun"],c:1},
  {q:"Apa yang harus dilakukan jika melihat teman membuang sampah sembarangan?",e:"🤝",a:["Mengejeknya","Mengingatkan dengan sopan","Ikut membuang sampah","Mengabaikannya selalu"],c:1},
  {q:"Cara sederhana mengurangi sampah kertas di sekolah adalah…",e:"✏️",a:["Mencetak semua tugas dua kali","Menggunakan kedua sisi kertas","Merobek halaman kosong","Membuang kertas baru"],c:1},

  {q:"Mengapa sampah organik dapat diolah menjadi kompos?",e:"🌱",a:["Karena dapat terurai oleh mikroorganisme","Karena terbuat dari logam","Karena tidak mengandung air","Karena selalu beracun"],c:0},
  {q:"Apa tujuan utama memilah sampah sejak dari sumbernya?",e:"🗂️",a:["Membuat sampah semakin banyak","Memudahkan pengolahan dan daur ulang","Mencampur semua sampah","Mempercepat sampah ke sungai"],c:1},
  {q:"Baterai bekas sebaiknya tidak dicampur sampah biasa karena…",e:"🔋",a:["Dapat mengandung bahan berbahaya","Mudah menjadi kompos","Selalu terbuat dari kertas","Tidak memiliki dampak"],c:0},
  {q:"Prinsip reduce dalam 3R berarti…",e:"📉",a:["Mengurangi penggunaan barang yang menghasilkan sampah","Membakar sampah","Membeli barang lebih banyak","Membuang barang ke laut"],c:0},
  {q:"Contoh reuse yang tepat adalah…",e:"🫙",a:["Menggunakan stoples bekas sebagai wadah","Membuang botol yang masih layak","Membeli kantong baru setiap belanja","Membakar kardus"],c:0},
  {q:"Mengapa sampah plastik sulit terurai secara alami?",e:"🧪",a:["Struktur bahannya relatif tahan terhadap proses penguraian","Plastik selalu berubah menjadi air","Plastik adalah bahan organik segar","Plastik mudah dimakan semua mikroorganisme"],c:0},
  {q:"Apa manfaat bank sampah?",e:"🏦",a:["Mencampur sampah tanpa pemilahan","Mengumpulkan sampah bernilai daur ulang dan memberi manfaat ekonomi","Membuang sampah ke sungai","Membakar semua sampah"],c:1},
  {q:"Saat membuat kompos, bahan yang paling sesuai adalah…",e:"🍂",a:["Daun dan sisa sayuran","Baterai dan kabel","Kaca dan kaleng","Plastik dan styrofoam"],c:0},
  {q:"Mengapa membakar sampah plastik bukan solusi yang baik?",e:"🔥",a:["Dapat menghasilkan polutan berbahaya","Membuat plastik menjadi air bersih","Selalu menghilangkan semua racun","Meningkatkan kesuburan tanah"],c:0},
  {q:"Apa arti sampah B3?",e:"⚠️",a:["Bahan bersih biasa","Bahan berbahaya dan beracun","Barang bekas berbahan kertas","Bahan yang dapat dimakan"],c:1},
  {q:"Tindakan paling tepat terhadap minyak jelantah adalah…",e:"🍳",a:["Menuangkannya ke saluran air","Mengumpulkan dan menyerahkannya ke pengelola yang sesuai","Mencampurnya ke air minum","Membuangnya ke tanah"],c:1},
  {q:"Apa dampak penggunaan kantong belanja guna ulang?",e:"🛍️",a:["Menambah kantong sekali pakai","Mengurangi kebutuhan kantong plastik sekali pakai","Meningkatkan sampah kemasan","Membuat sampah tidak bisa dipilah"],c:1},
  {q:"Mengapa sampah elektronik perlu penanganan khusus?",e:"💻",a:["Dapat mengandung komponen dan zat yang berbahaya","Seluruhnya mudah terurai","Bisa langsung menjadi kompos","Tidak memiliki logam"],c:0},
  {q:"Apa yang dimaksud dengan upcycling?",e:"🎨",a:["Mengubah barang bekas menjadi produk baru yang bernilai lebih tinggi","Membuang barang bekas tanpa memilah","Membakar barang bekas","Mencampur sampah organik dan B3"],c:0},
  {q:"Dalam kegiatan sekolah, siapa yang bertanggung jawab menjaga kebersihan?",e:"👥",a:["Petugas kebersihan saja","Semua warga sekolah sesuai perannya","Hanya kepala sekolah","Hanya siswa piket"],c:1},

  {q:"Sampah plastik di laut dapat membahayakan hewan karena…",e:"🐢",a:["Hewan dapat menelan atau terjerat sampah","Plastik menjadi makanan alami semua hewan","Plastik meningkatkan oksigen laut","Plastik selalu larut tanpa dampak"],c:0},
  {q:"Apa hubungan pembakaran bahan bakar fosil dengan perubahan iklim?",e:"🌡️",a:["Meningkatkan emisi gas rumah kaca","Menghilangkan seluruh karbon di atmosfer","Menurunkan semua suhu bumi","Tidak memiliki hubungan"],c:0},
  {q:"Mengapa lahan terbuka hijau penting di lingkungan sekolah?",e:"🌳",a:["Membantu menyejukkan lingkungan dan mendukung biodiversitas","Meningkatkan panas tanpa manfaat","Membuat tanah selalu tercemar","Menghambat penyerapan air"],c:0},
  {q:"Apa yang dimaksud dengan ekonomi sirkular?",e:"🔄",a:["Sistem memakai barang sekali lalu membuangnya","Menjaga bahan dan produk tetap digunakan selama mungkin","Mengambil sumber daya tanpa batas","Membakar semua barang setelah dipakai"],c:1},
  {q:"Jika sampah makanan berlebihan di kantin, langkah pencegahan terbaik adalah…",e:"🍽️",a:["Mengambil makanan secukupnya dan mengelola sisa dengan benar","Membuang makanan sebelum makan","Menambah porsi tanpa pertimbangan","Mencampur sisa makanan dengan plastik"],c:0},
  {q:"Mengapa penanaman pohon saja tidak cukup untuk mengatasi krisis iklim?",e:"🌍",a:["Karena pengurangan emisi dan perubahan pola konsumsi juga diperlukan","Karena pohon tidak pernah menyerap karbon","Karena pohon selalu menghasilkan plastik","Karena iklim tidak dipengaruhi aktivitas manusia"],c:0},
  {q:"Apa dampak eutrofikasi akibat kelebihan nutrien di perairan?",e:"💧",a:["Pertumbuhan alga berlebihan yang dapat menurunkan oksigen air","Air selalu menjadi lebih jernih","Semua ikan bertambah sehat","Tidak terjadi perubahan ekosistem"],c:0},
  {q:"Mengapa mikroplastik menjadi perhatian lingkungan?",e:"🔬",a:["Partikelnya kecil dan dapat masuk ke rantai makanan","Mudah terlihat dan selalu dapat disaring","Hanya ditemukan di gurun","Tidak pernah terbawa air"],c:0},
  {q:"Strategi terbaik mengelola sampah adalah memprioritaskan…",e:"♻️",a:["Pencegahan dan pengurangan sampah sejak awal","Pembuangan ke tempat terbuka","Pembakaran tanpa pengendalian","Pencampuran seluruh jenis sampah"],c:0},
  {q:"Apa peran wetlands atau lahan basah bagi lingkungan?",e:"🦆",a:["Mendukung habitat, menyimpan air, dan membantu menyaring polutan","Hanya menjadi tempat sampah","Selalu mempercepat erosi","Tidak memiliki fungsi ekologis"],c:0},
  {q:"Mengapa keanekaragaman hayati penting bagi ekosistem?",e:"🦋",a:["Mendukung kestabilan dan fungsi ekosistem","Membuat semua spesies sama","Menghilangkan hubungan antarorganisme","Mengurangi seluruh proses alami"],c:0},
  {q:"Dalam audit sampah sekolah, data yang paling berguna untuk perbaikan adalah…",e:"📊",a:["Jenis, jumlah, sumber, dan pola sampah yang dihasilkan","Warna tempat sampah saja","Nama semua siswa tanpa data sampah","Jumlah poster di sekolah"],c:0},
  {q:"Mengapa solusi lingkungan perlu mempertimbangkan siklus hidup produk?",e:"🔁",a:["Dampak dapat muncul saat bahan diambil, diproduksi, digunakan, dan dibuang","Dampak hanya muncul saat barang dibeli","Produk tidak memiliki dampak sebelum dibuang","Siklus hidup hanya berlaku pada makanan"],c:0},
  {q:"Apa pendekatan yang tepat untuk mengurangi emisi dari perjalanan ke sekolah?",e:"🚲",a:["Berjalan kaki, bersepeda, atau berbagi kendaraan jika memungkinkan dan aman","Menggunakan kendaraan sendiri untuk jarak sangat dekat","Membiarkan mesin menyala saat menunggu","Memilih perjalanan lebih jauh"],c:0},
  {q:"Mengapa pengelolaan sampah harus melibatkan masyarakat?",e:"🧑‍🤝‍🧑",a:["Perubahan kebiasaan dan sistem membutuhkan partisipasi banyak pihak","Karena hanya masyarakat yang menghasilkan sampah","Agar petugas tidak perlu bekerja","Supaya sampah tidak perlu dipilah"],c:0},
  {q:"Apa indikator program lingkungan sekolah yang baik?",e:"📈",a:["Ada target, data awal, evaluasi, dan perubahan yang terukur","Hanya banyaknya slogan","Tidak pernah mencatat hasil","Kegiatan dilakukan tanpa tujuan"],c:0},
  {q:"Saat menemukan limbah kimia tidak dikenal di sekolah, tindakan aman adalah…",e:"🧤",a:["Tidak menyentuhnya dan segera melapor kepada petugas berwenang","Mencampurnya dengan sampah biasa","Membuangnya ke saluran air","Mencium baunya untuk mengenali"],c:0},
  {q:"Mengapa kebijakan pengurangan plastik sekali pakai perlu disertai fasilitas alternatif?",e:"🧃",a:["Agar perubahan perilaku lebih mudah dilakukan dan berkelanjutan","Agar penggunaan plastik meningkat","Supaya tidak perlu edukasi","Karena alternatif tidak pernah dibutuhkan"],c:0},
  {q:"Apa langkah SIGAP yang paling berdampak untuk membangun budaya peduli lingkungan?",e:"🌱",a:["Konsisten melakukan aksi, mengajak orang lain, dan mengevaluasi hasil","Melakukan aksi sekali lalu berhenti","Menunggu orang lain bergerak","Mengutamakan lomba tanpa perubahan kebiasaan"],c:0}
];

const state = {
  player: null,
  currentLevel: 1,
  score: 0,
  levelScore: 0,
  completed: [],
  timer: null,
  startedAt: 0,
  remaining: 0,
  locked: false,
  sound: true,
  lang: "id",
  audio: null,
  musicEnabled: true,
  musicTimer: null,
  musicStep: 0,
};

const translations = {
  id: {
    main:"Main", levels:"Level", settings:"Pengaturan", scores:"Papan Skor",
    play:"Lanjutkan misi quiz dan kumpulkan poin.",
    levelDesc:"Buka level satu per satu dari mudah hingga sulit.",
    settingDesc:"Atur bahasa, efek suara, dan musik.",
    scoreDesc:"Lihat peringkat pemain SIGAP.",
    next:"Level berikutnya →", menu:"Kembali ke menu",
    question:"PERTANYAAN", correct:"Benar! +", wrong:"Belum tepat. Coba lagi!",
    timeup:"Waktu habis! Level ini belum terbuka. Coba lagi.",
    easy:"MUDAH", medium:"SEDANG", hard:"SULIT"
  },
  en: {
    main:"Play", levels:"Levels", settings:"Settings", scores:"Leaderboard",
    play:"Continue the quiz mission and earn points.",
    levelDesc:"Unlock levels one by one, from easy to hard.",
    settingDesc:"Adjust language, sound effects, and music.",
    scoreDesc:"See SIGAP player rankings.",
    next:"Next level →", menu:"Back to menu",
    question:"QUESTION", correct:"Correct! +", wrong:"Not quite. Try again!",
    timeup:"Time is up! This level is not unlocked. Try again.",
    easy:"EASY", medium:"MEDIUM", hard:"HARD"
  }
};

function getT(key) {
  return translations[state.lang][key] || key;
}

function showScreen(id) {
  if (id !== "gameScreen") stopGameMusic();
  $$(".screen").forEach(screen => screen.classList.remove("active"));
  $("#" + id).classList.add("active");
  window.scrollTo({top: 0, behavior: "smooth"});
}

function getSavedScores() {
  try { return JSON.parse(localStorage.getItem("sigapLeaderboard") || "[]"); }
  catch { return []; }
}

function saveScores(scores) {
  localStorage.setItem("sigapLeaderboard", JSON.stringify(scores));
}

function getSavedProgress() {
  try { return JSON.parse(localStorage.getItem("sigapProgress") || "{}"); }
  catch { return {}; }
}

function saveProgress() {
  if (!state.player) return;
  const all = getSavedProgress();
  all[playerKey()] = {completed: state.completed, score: state.score};
  localStorage.setItem("sigapProgress", JSON.stringify(all));
}

function playerKey() {
  return `${state.player.name.trim().toLowerCase()}|${state.player.class}`;
}

function loadPlayerProgress() {
  const saved = getSavedProgress()[playerKey()];
  state.completed = saved?.completed || [];
  state.score = saved?.score || 0;
}

function audioContext() {
  if (!state.audio) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) state.audio = new AudioCtx();
  }
  if (state.audio?.state === "suspended") state.audio.resume();
  return state.audio;
}

function playTone(freq = 520, duration = .07, type = "sine", volume = .045) {
  if (!state.sound) return;
  const ctx = audioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function clickSound() {
  playTone(520, .045, "sine", .025);
}

// Musik latar orisinal bernuansa ceria dan lembut, dibuat langsung dengan Web Audio.
function playMusicNote(freq, duration = .34, volume = .12) {
  const ctx = audioContext();
  if (!ctx || !state.musicEnabled) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(.0001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + .035);
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + duration);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + duration + .02);
}

function startGameMusic() {
  stopGameMusic();
  if (!state.musicEnabled) return;
  const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 783.99, 698.46, 523.25, 659.25, 880, 783.99, 698.46, 659.25, 587.33, 523.25];
  state.musicStep = 0;
  const playStep = () => {
    if (!state.musicEnabled || !$("#gameScreen").classList.contains("active")) { stopGameMusic(); return; }
    const note = melody[state.musicStep % melody.length];
    playMusicNote(note, .34, .13);
    playMusicNote(note * 1.25, .28, .045);
    if (state.musicStep % 4 === 0) playMusicNote(note / 2, .55, .075);
    state.musicStep++;
  };
  playStep();
  state.musicTimer = setInterval(playStep, 390);
}

function stopGameMusic() {
  if (state.musicTimer) clearInterval(state.musicTimer);
  state.musicTimer = null;
}

function successSound() {
  playTone(660, .1, "sine");
  setTimeout(() => playTone(880, .13, "sine"), 90);
}

function wrongSound() {
  playTone(220, .15, "triangle", .035);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

function difficultyFor(level) {
  if (level <= 15) return {name:getT("easy"), cls:"easy", seconds:40, base:410, step:10};
  if (level <= 30) return {name:getT("medium"), cls:"medium", seconds:30, base:620, step:20};
  return {name:getT("hard"), cls:"hard", seconds:20, base:840, step:40};
}

function scoreFor(level, elapsedSecond) {
  const d = difficultyFor(level);
  return Math.max(10, d.base - d.step * elapsedSecond);
}

function renderLevels() {
  const grid = $("#levelGrid");
  grid.innerHTML = "";
  const maxUnlocked = Math.min(50, state.completed.length + 1);
  for (let level = 1; level <= 50; level++) {
    const unlocked = level <= maxUnlocked || state.completed.includes(level);
    const done = state.completed.includes(level);
    const d = difficultyFor(level);
    const btn = document.createElement("button");
    btn.className = `level-button ${unlocked ? "unlocked" : "locked"} ${done ? "completed" : ""}`;
    btn.disabled = !unlocked;
    btn.innerHTML = unlocked ? `${done ? "✓" : level}<small>${d.name}</small>` : `<span class="locked-level-number">${level}</span><span class="level-lock-icon" aria-hidden="true">🔒</span>`;
    btn.title = unlocked ? `Mulai level ${level}` : "Selesaikan level sebelumnya terlebih dahulu";
    if (unlocked) btn.addEventListener("click", () => startLevel(level));
    grid.appendChild(btn);
  }
  $("#levelProgress").textContent = `${state.completed.length} / 50 selesai`;
}

function startLevel(level) {
  const maxUnlocked = Math.min(50, state.completed.length + 1);
  if (level > maxUnlocked && !state.completed.includes(level)) {
    showToast("Selesaikan level sebelumnya untuk membuka level ini.");
    return;
  }
  clearInterval(state.timer);
  state.currentLevel = level;
  state.levelScore = 0;
  state.remaining = difficultyFor(level).seconds;
  state.startedAt = Date.now();
  state.locked = false;
  $("#gameDifficulty").textContent = difficultyFor(level).name;
  $("#gameDifficulty").className = `difficulty ${difficultyFor(level).cls}`;
  $("#gameLevelText").textContent = `LEVEL ${level} / 50`;
  $("#gameScore").textContent = state.score;
  $("#gamePlayerName").textContent = state.player.name;
  $("#questionNumber").textContent = `${getT("question")} ${String(level).padStart(2,"0")}`;
  $("#questionEmoji").textContent = questions[level - 1].e;
  $("#questionText").textContent = questions[level - 1].q;
  $("#feedback").textContent = "";
  $("#feedback").className = "feedback";
  $("#gameProgressBar").style.width = `${(level - 1) / 50 * 100}%`;
  $("#pointsHint").textContent = `+${difficultyFor(level).base - difficultyFor(level).step} s/d poin`;
  renderAnswers();
  updateTimerDisplay();
  showScreen("gameScreen");
  startGameMusic();
  state.timer = setInterval(tickTimer, 100);
  clickSound();
}

function renderAnswers() {
  const grid = $("#answerGrid");
  grid.innerHTML = "";
  const question = questions[state.currentLevel - 1];
  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
    button.addEventListener("click", () => answerQuestion(index, button));
    grid.appendChild(button);
  });
}

function tickTimer() {
  if (state.locked) return;
  const d = difficultyFor(state.currentLevel);
  const elapsed = (Date.now() - state.startedAt) / 1000;
  state.remaining = Math.max(0, d.seconds - elapsed);
  updateTimerDisplay();
  if (state.remaining <= 0) {
    clearInterval(state.timer);
    state.locked = true;
    $$(".answer-button").forEach(button => button.disabled = true);
    $("#feedback").textContent = getT("timeup");
    $("#feedback").className = "feedback bad";
    wrongSound();
    setTimeout(() => {
      state.locked = false;
      startLevel(state.currentLevel);
    }, 1800);
  }
}

function updateTimerDisplay() {
  const d = difficultyFor(state.currentLevel);
  const seconds = Math.ceil(state.remaining);
  $("#timerText").textContent = seconds;
  $("#timerBar").style.width = `${Math.max(0, state.remaining / d.seconds * 100)}%`;
  if (state.remaining <= 8) $("#timerBar").style.background = "#e35d5d";
  else $("#timerBar").style.background = "var(--green)";
}

function answerQuestion(index, button) {
  if (state.locked) return;
  const q = questions[state.currentLevel - 1];
  if (index !== q.c) {
    button.classList.add("wrong");
    $("#feedback").textContent = getT("wrong");
    $("#feedback").className = "feedback bad";
    wrongSound();
    return;
  }

  state.locked = true;
  clearInterval(state.timer);
  const elapsedSecond = Math.min(difficultyFor(state.currentLevel).seconds,
    Math.max(1, Math.ceil((Date.now() - state.startedAt) / 1000)));
  const earned = scoreFor(state.currentLevel, elapsedSecond);
  state.levelScore = earned;
  state.score += earned;
  button.classList.add("correct");
  $$(".answer-button").forEach(btn => btn.disabled = true);
  $("#feedback").textContent = `${getT("correct")}${earned} poin!`;
  $("#feedback").className = "feedback good";
  $("#gameScore").textContent = state.score;
  successSound();
  setTimeout(() => finishLevel(earned), 900);
}

function finishLevel(earned) {
  if (!state.completed.includes(state.currentLevel)) {
    state.completed.push(state.currentLevel);
    state.completed.sort((a,b) => a-b);
  }
  saveProgress();
  saveCurrentScore();
  renderLevels();
  $("#earnedPoints").textContent = `+${earned}`;
  $("#resultTotal").textContent = state.score;
  $("#resultLevel").textContent = `${state.completed.length} / 50`;
  const lastLevel = state.currentLevel >= 50;
  $("#resultTitle").textContent = lastLevel ? "Luar biasa! 🌍" : "Hebat, SIGAP!";
  $("#resultEmoji").textContent = lastLevel ? "🏆" : "🎉";
  $("#resultMessage").textContent = lastLevel
    ? "Kamu telah menuntaskan semua 50 level dan menjadi penjaga bumi!"
    : "Kamu berhasil menyelesaikan tantangan. Siap untuk level berikutnya?";
  $("#nextLevelButton").textContent = lastLevel ? "Main lagi dari Level 1 ↻" : getT("next");
  $("#nextLevelButton").onclick = () => {
    clickSound();
    if (lastLevel) {
      resetPlayerProgress();
      startLevel(1);
    } else {
      startLevel(state.currentLevel + 1);
    }
  };
  showScreen("resultScreen");
}

function saveCurrentScore() {
  if (!state.player) return;
  const scores = getSavedScores();
  const key = playerKey();
  const existing = scores.find(item => item.key === key);
  const entry = {
    key,
    name: state.player.name,
    className: state.player.class,
    score: state.score,
    level: Math.max(...state.completed, 0),
    updatedAt: new Date().toISOString()
  };
  if (existing) Object.assign(existing, entry);
  else scores.push(entry);
  saveScores(scores);
}

function resetPlayerProgress() {
  state.score = 0;
  state.completed = [];
  saveProgress();
  renderLevels();
  updateMenuStats();
}

function renderScores() {
  const scores = getSavedScores().sort((a,b) => b.score - a.score || b.level - a.level);
  $("#scoreCount").textContent = `${scores.length} pemain`;
  $("#scoreTable").innerHTML = "";
  $("#emptyScores").style.display = scores.length ? "none" : "block";
  scores.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td><span class="rank-badge">${index + 1}</span></td>
      <td><b>${escapeHTML(item.name)}</b></td>
      <td>${escapeHTML(item.className)}</td>
      <td>${item.level || 0}</td>
      <td><b>${Number(item.score).toLocaleString("id-ID")} ⭐</b></td>
      <td><button class="delete-score" data-key="${encodeURIComponent(item.key)}" title="Hapus skor pemain">Hapus</button></td>`;
    $("#scoreTable").appendChild(row);
  });
  $$(".delete-score").forEach(button => button.addEventListener("click", () => {
    const key = decodeURIComponent(button.dataset.key);
    if (!confirm("Hapus skor pemain ini?")) return;
    saveScores(getSavedScores().filter(item => item.key !== key));
    renderScores();
    clickSound();
  }));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

function updateMenuStats() {
  $("#menuScore").textContent = state.score.toLocaleString("id-ID");
  $("#helloTitle").textContent = `Halo, ${state.player?.name?.split(" ")[0] || "SIGAP"}!`;
  $("#playerChip").textContent = state.player ? state.player.name : "Pemain";
}

function updateLanguage() {
  const t = translations[state.lang];
  const cards = $$(".menu-card");
  const keys = ["main", "levels", "settings", "scores"];
  const descKeys = ["play", "levelDesc", "settingDesc", "scoreDesc"];
  cards.forEach((card, i) => {
    card.querySelector("h2").textContent = t[keys[i]];
    card.querySelector("p").textContent = t[descKeys[i]];
  });
  $$(".language-button").forEach(button => button.classList.toggle("active", button.dataset.lang === state.lang));
  renderLevels();
}

$("#playerForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#playerName").value.trim();
  const className = $("#playerClass").value;
  if (!name || !className) return;
  state.player = {name, class: className};
  loadPlayerProgress();
  updateMenuStats();
  renderLevels();
  showScreen("menuScreen");
  clickSound();
});

$$(".menu-card").forEach(card => card.addEventListener("click", () => {
  clickSound();
  const destination = card.dataset.open;
  if (destination === "play") {
    const next = Math.min(50, state.completed.length + 1);
    startLevel(next);
  } else if (destination === "levels") {
    renderLevels();
    showScreen("levelsScreen");
  } else if (destination === "settings") {
    showScreen("settingsScreen");
  } else if (destination === "scores") {
    renderScores();
    showScreen("scoresScreen");
  }
}));

$$("[data-back]").forEach(button => button.addEventListener("click", () => {
  clickSound();
  showScreen("menuScreen");
}));

$("#brandHome").addEventListener("click", event => {
  event.preventDefault();
  if (state.player) showScreen("menuScreen");
  else showScreen("playerScreen");
  clickSound();
});

$("#exitGame").addEventListener("click", () => {
  clearInterval(state.timer);
  state.locked = true;
  clickSound();
  showScreen("menuScreen");
});

$("#resultMenuButton").addEventListener("click", () => {
  clickSound();
  updateMenuStats();
  showScreen("menuScreen");
});

$("#musicToggle").addEventListener("click", () => {
  state.musicEnabled = !state.musicEnabled;
  const button = $("#musicToggle");
  button.textContent = state.musicEnabled ? "🎵 Musik: ON" : "🔇 Musik: OFF";
  button.setAttribute("aria-pressed", String(state.musicEnabled));
  $("#settingsMusicToggle").checked = state.musicEnabled;
  if (state.musicEnabled && $("#gameScreen").classList.contains("active")) startGameMusic();
  else stopGameMusic();
});

$("#settingsMusicToggle").addEventListener("change", event => {
  state.musicEnabled = event.target.checked;
  const gameButton = $("#musicToggle");
  gameButton.textContent = state.musicEnabled ? "🎵 Musik: ON" : "🔇 Musik: OFF";
  gameButton.setAttribute("aria-pressed", String(state.musicEnabled));
  if (state.musicEnabled && $("#gameScreen").classList.contains("active")) startGameMusic();
  else stopGameMusic();
});

$("#soundToggle").addEventListener("change", event => {
  state.sound = event.target.checked;
  if (state.sound) clickSound();
});

$$(".language-button").forEach(button => button.addEventListener("click", () => {
  state.lang = button.dataset.lang;
  updateLanguage();
  clickSound();
  showToast(state.lang === "id" ? "Bahasa Indonesia dipilih." : "English selected.");
}));

$("#resetScores").addEventListener("click", () => {
  if (!confirm("Hapus SEMUA skor pemain di browser ini? Tindakan ini tidak dapat dibatalkan.")) return;
  saveScores([]);
  localStorage.removeItem("sigapProgress");
  state.score = 0;
  state.completed = [];
  saveProgress();
  renderScores();
  renderLevels();
  updateMenuStats();
  clickSound();
  showToast("Papan skor dan progres lokal telah direset.");
});

$("#playerName").addEventListener("input", () => {
  $("#playerName").value = $("#playerName").value.replace(/[<>]/g, "");
});

// Ganti pemain: kembali ke formulir tanpa menghapus progres pemain sebelumnya.
$("#changePlayerButton").addEventListener("click", () => {
  clickSound();
  clearInterval(state.timer);
  state.locked = true;
  state.player = null;
  $("#playerName").value = "";
  $("#playerClass").value = "";
  $("#playerChip").textContent = "Pemain";
  showScreen("playerScreen");
  setTimeout(() => { state.locked = false; }, 250);
});


// Default toggles
$("#soundToggle").checked = true;
$("#settingsMusicToggle").checked = state.musicEnabled;
updateMenuStats();
