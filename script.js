/* =========================================================
   A COSMIC LOVE ODYSSEY - SCRIPT
   Interactive Web Audio Synth, 3D Physics, Mic Breath Detection,
   Canvas Particles, Love Jar, Customizer, and Romantic Experiences
   ========================================================= */

(function() {
  'use strict';

  // --- Default Romantic Configuration ---
  const DEFAULT_CONFIG = {
    wifeName: "My Queen",
    husbandName: "Your Loving Husband",
    anniversaryDate: "2020-04-14",
    wifeEmail: "",
    wifePhone: "",
    midnightMessage: "",
    theme: "theme-celestial",
    loveLetter: `Happy Birthday to my dream come true, my best friend, and the eternal love of my life.

From the very moment you entered my world, everything became brighter, warmer, and filled with magic. Your laughter is my favorite melody, your smile is my daily sunrise, and your heart is the safest place I have ever known.

Thank you for choosing me, for loving me so deeply, and for turning every single ordinary day into an extraordinary adventure. On your special day, I promise to spend all my tomorrows cherishing you, making you smile, and loving you more than all the stars in the cosmos.

May all your wishes come true today and forever.`,
    couponsRedeemed: {}
  };

  // 100 Curated Romantic Reasons Why I Love You
  const DEFAULT_REASONS = [
    "The way your eyes crinkle with pure joy whenever you laugh wholeheartedly.",
    "How safe and completely at peace I feel whenever you hold my hand.",
    "The cute sleepy voice you make when you first wake up in the morning.",
    "How deeply and passionately you care for the people you love.",
    "Your incredible warmth and kindness that lights up every single room you walk into.",
    "The way we can communicate an entire story with just one secret glance across a room.",
    "How you make even the simplest grocery run feel like a fun romantic adventure.",
    "Your beautiful, radiant smile that never fails to turn my worst days into pure sunshine.",
    "The way your head rests perfectly on my chest when we cuddle.",
    "Your gentle sense of humor and all the silly inside jokes only you and I understand.",
    "How you encourage and believe in my dreams even when I doubt myself.",
    "The way you smell like heaven and home all at once.",
    "Your unmatched beauty—both in your breathtaking soul and your gorgeous face.",
    "How you listen to me with complete empathy and an open heart.",
    "The spontaneous little dances you do in the kitchen when you're happy.",
    "How proud and lucky I feel every single time I introduce you as my wife.",
    "The cute way you get excited about little things, like cozy blankets and good food.",
    "Your loyalty, honesty, and unwavering devotion to us.",
    "How you always know exactly what I need before I even have to say it.",
    "The sound of your sweet laugh echoing through our home.",
    "How beautiful you look in an oversized sweater with no makeup on.",
    "The way your touch sends warm shivers through my whole heart.",
    "How passionate and determined you are when you set your mind to something.",
    "The comforting warmth of your hugs that instantly erase all stress.",
    "The little love notes and sweet messages you surprise me with.",
    "How you make our house feel like a true, loving sanctuary.",
    "The way you remember the little details that everyone else overlooks.",
    "How patient and understanding you are, even during hectic days.",
    "Your courage and quiet strength in facing any obstacle in life.",
    "The sparkle in your eyes when we talk about our future dreams together.",
    "How perfectly your fingers interlace with mine.",
    "The unconditional love and respect you give me every single day.",
    "How you always save me the best bite of whatever delicious treat we're sharing.",
    "The way you look at me across the dinner table like I'm your entire world.",
    "Your playful banter and the way you always keep our romance exciting.",
    "How fiercely you stand by my side through every high and low.",
    "The adorable face you make when you're concentrating really hard.",
    "How your kindness extends to strangers, animals, and everyone around you.",
    "The way you inspire me to be a better man, partner, and human being.",
    "The sweet pet names you call me that always melt my heart.",
    "How our souls fit together so naturally, like two pieces of the same puzzle.",
    "The way you sing your favorite songs in the car with pure joy.",
    "Your generosity and the huge heart you carry for this world.",
    "The feeling of waking up next to you every morning and realizing I'm the luckiest man alive.",
    "How you make me laugh harder than anyone else ever could.",
    "The quiet, tender moments we share when the rest of the world goes to sleep.",
    "How you support my passions and always celebrate my victories.",
    "The gentle, reassuring kiss you give me on the forehead or cheek.",
    "How effortlessly stunning you look, whether dressed up or in cozy pajamas.",
    "Your wisdom, intuition, and how often your advice proves to be right.",
    "The way you remember all our special dates, milestones, and memories.",
    "How you make holidays, birthdays, and every season feel so magical.",
    "The gentle way you stroke my hair when I'm tired or resting on your lap.",
    "How safe and secure you make me feel in our relationship.",
    "The sweet way you ask about my day and genuinely care about every detail.",
    "How you bring calm and balance into my chaotic world.",
    "Your irresistible charm and grace that captivate everyone around you.",
    "The way you hold me tight right before we fall asleep.",
    "How you never hesitate to give me a second chance and forgive with grace.",
    "The excitement in your voice when you share something new you learned.",
    "How you look at sunsets like they were painted just for you.",
    "The warmth of your morning coffee kisses.",
    "The way you believe in my potential more than anyone else in the galaxy.",
    "Your cute little quirks and habits that make you uniquely you.",
    "How you make me feel appreciated, respected, and deeply desired.",
    "The magical way you turn ordinary weekends into unforgettable memories.",
    "How we can sit in comfortable silence for hours and still feel completely connected.",
    "The way you light up when you see something you love.",
    "Your resilience and grace under pressure.",
    "The gentle, caring way you nurse me back to health when I'm sick.",
    "How you share my values, morals, and vision for our life together.",
    "The sparkle of your wedding ring catching the light when you talk.",
    "The way you laugh at my corniest dad jokes just to make me smile.",
    "How adventurous and open-minded you are to try new things with me.",
    "The soothing cadence of your voice when you read or talk gently.",
    "The cute way you steal all the blankets at night (and I still love you for it!).",
    "How you look directly into my eyes and see the real me.",
    "The way you protect and nurture our love with everything you have.",
    "Your radiant energy that fills our home with happiness.",
    "The spontaneous romantic hugs you give me from behind.",
    "How you make me feel like the strongest and happiest person on earth.",
    "The way we finish each other's sentences and think the exact same thoughts.",
    "How patient you are when I take forever to pick a movie.",
    "Your beautiful, tender heart that feels so deeply.",
    "The sweet compliments you shower on me when I least expect it.",
    "How proud I am to stand beside you in front of the whole world.",
    "The little happy dance you do when good food arrives.",
    "The unforgettable memories we've already created together.",
    "All the future adventures that are waiting for us in the years ahead.",
    "The way you treat my family and friends with genuine love and care.",
    "How you never fail to hold my hand when we are crossing the street or walking.",
    "Your sense of style and how elegant you carry yourself.",
    "The soft, gentle way you wake me up when it's time to start the day.",
    "How you make every single birthday of yours feel like a celebration of love.",
    "The fact that my heart still races every time you walk into the room.",
    "The endless peace I feel knowing I get to spend forever with you.",
    "How you are my safe harbor, my greatest adventure, and my eternal home.",
    "The simple truth: I love you not just for who you are, but for who I am when I'm with you.",
    "Because you are my soulmate, my best friend, and my whole universe ❤️"
  ];

  // Milestone Starmap Nodes
  const MILESTONES = [
    { id: 1, x: 0.18, y: 0.35, title: "The Spark: The Day We Met", date: "The Beginning", icon: "✨", story: "The moment our paths crossed and the universe quietly realigned. One look, one conversation, and my life changed forever." },
    { id: 2, x: 0.40, y: 0.22, title: "Our Very First Date", date: "Heart Racing", icon: "☕", story: "Hours passed by like minutes. We talked, we laughed, and I realized I never wanted that evening to end." },
    { id: 3, x: 0.65, y: 0.30, title: "The Day I Knew You Were The One", date: "A Certainty in My Heart", icon: "💖", story: "Watching you laugh and smile, an overwhelming sense of certainty washed over me: you were my home." },
    { id: 4, x: 0.82, y: 0.55, title: "The Promise: Forever Together", date: "Our Sacred 'Yes'", icon: "💍", story: "Holding your hands and making the easiest, most joyful promise of my life: to love and cherish you unconditionally forever." },
    { id: 5, x: 0.50, y: 0.75, title: "Building Our Dream Sanctuary", date: "Our Home", icon: "🏡", story: "Every shared laugh, every cooked meal, and every quiet evening transforming four walls into our sanctuary of love." },
    { id: 6, x: 0.25, y: 0.68, title: "Today: Celebrating My Universe", date: "Happy Birthday", icon: "👑", story: "Celebrating the most extraordinary woman to ever grace this earth. Today and forever, you are my entire world." }
  ];

  // --- State Management ---
  const state = {
    config: { ...DEFAULT_CONFIG },
    audioCtx: null,
    musicPlaying: false,
    musicTimer: null,
    sfxEnabled: true,
    micStream: null,
    micAnalyser: null,
    micListening: false,
    candlesBlown: 0,
    totalCandles: 3,
    allCandlesExtinguished: false,
    activeReasonIdx: 0,
    selectedMilestone: null,
    favorites: new Set(),
    skyLanterns: [],
    fireworks: []
  };

  // --- Load Local Storage Config ---
  function loadConfig() {
    try {
      const saved = localStorage.getItem('birthday_experience_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        state.config = { ...DEFAULT_CONFIG, ...parsed };
      }
    } catch (e) {
      console.warn("Storage load error", e);
    }
  }

  function saveConfig() {
    try {
      localStorage.setItem('birthday_experience_config', JSON.stringify(state.config));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  }

  // =========================================================
  // AUDIO SYNTHESIZER ENGINE (Romantic Web Audio Synthesis)
  // Zero external dependencies, pure Web Audio romantic piano/music-box
  // =========================================================
  const AudioEngine = {
    init() {
      if (!state.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AudioContextClass();
      }
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
    },

    // Play a gentle bell/music-box note
    playNote(freq, time = 0, duration = 1.2, gainLevel = 0.12) {
      if (!state.audioCtx || state.audioCtx.state !== 'running') return;
      const now = state.audioCtx.currentTime + time;
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      const filter = state.audioCtx.createBiquadFilter();

      // Warm sine/triangle blend
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Lowpass filter for warm acoustic character
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(400, now + duration);

      // Smooth attack and long decay envelope
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(gainLevel, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(state.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    },

    // Romantic chord progression generator (Cmaj9, Am9, Fmaj7, G7sus4)
    startRomanticMusic() {
      this.init();
      if (state.musicPlaying) return;
      state.musicPlaying = true;
      document.getElementById('audio-toggle-btn').classList.add('playing');

      const chords = [
        // Cmaj9
        [261.63, 329.63, 392.00, 493.88, 587.33],
        // Am9
        [220.00, 261.63, 329.63, 392.00, 493.88],
        // Fmaj7
        [174.61, 261.63, 329.63, 392.00, 523.25],
        // G7sus4 -> G
        [196.00, 261.63, 293.66, 392.00, 493.88]
      ];

      let chordIdx = 0;
      const playBar = () => {
        if (!state.musicPlaying) return;
        const currentChord = chords[chordIdx % chords.length];
        
        // Gentle bass note
        this.playNote(currentChord[0] / 2, 0, 3.8, 0.15);

        // Arpeggiated sparkle notes
        currentChord.forEach((noteFreq, idx) => {
          const delay = idx * 0.45;
          this.playNote(noteFreq, delay, 2.2, 0.08);
          // Higher harmonic sparkle
          if (idx === 3 || idx === 4) {
            this.playNote(noteFreq * 2, delay + 0.2, 1.8, 0.04);
          }
        });

        chordIdx++;
        state.musicTimer = setTimeout(playBar, 3200);
      };

      playBar();
    },

    stopRomanticMusic() {
      state.musicPlaying = false;
      if (state.musicTimer) clearTimeout(state.musicTimer);
      document.getElementById('audio-toggle-btn').classList.remove('playing');
    },

    toggleMusic() {
      if (state.musicPlaying) {
        this.stopRomanticMusic();
      } else {
        this.startRomanticMusic();
      }
    },

    // Interactive Sound Effects
    playSFX(type) {
      if (!state.sfxEnabled) return;
      this.init();
      if (!state.audioCtx) return;

      const now = state.audioCtx.currentTime;

      if (type === 'sparkle') {
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          this.playNote(freq, idx * 0.08, 0.6, 0.09);
        });
      } else if (type === 'blow') {
        // Soft breath whoosh filter noise
        const bufferSize = state.audioCtx.sampleRate * 0.4;
        const buffer = state.audioCtx.createBuffer(1, bufferSize, state.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
        }
        const noise = state.audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = state.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.linearRampToValueAtTime(150, now + 0.4);

        const gain = state.audioCtx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(state.audioCtx.destination);
        noise.start(now);
      } else if (type === 'fanfare') {
        // Birthday song celebratory arpeggio chime
        const birthdayNotes = [261.63, 261.63, 293.66, 261.63, 349.23, 329.63];
        birthdayNotes.forEach((freq, i) => {
          this.playNote(freq, i * 0.22, 1.2, 0.12);
        });
      } else if (type === 'pop') {
        this.playNote(440, 0, 0.15, 0.12);
        this.playNote(880, 0.04, 0.25, 0.1);
      } else if (type === 'stamp') {
        this.playNote(180, 0, 0.3, 0.25);
        this.playNote(523.25, 0.05, 0.5, 0.1);
      }
    }
  };

  // =========================================================
  // COSMOS & SHOOTING STARS BACKGROUND CANVAS
  // =========================================================
  const CosmosCanvas = {
    canvas: null,
    ctx: null,
    stars: [],
    shootingStars: [],
    mouseTrail: [],
    width: window.innerWidth,
    height: window.innerHeight,

    init() {
      this.canvas = document.getElementById('cosmos-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Generate 220 twinkling stars
      for (let i = 0; i < 220; i++) {
        this.stars.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random(),
          speed: Math.random() * 0.02 + 0.005,
          color: ['#fff', '#ffe6a7', '#ffd1dc', '#a18cd1'][Math.floor(Math.random() * 4)]
        });
      }

      // Mouse stardust interaction
      window.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.6) {
          this.mouseTrail.push({
            x: e.clientX,
            y: e.clientY,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 3 + 1,
            alpha: 1,
            color: ['#ffd700', '#ff69b4', '#00f5d4'][Math.floor(Math.random() * 3)]
          });
        }
      });

      this.animate();
    },

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },

    spawnShootingStar() {
      if (Math.random() < 0.025 && this.shootingStars.length < 3) {
        this.shootingStars.push({
          x: Math.random() * this.width * 0.8,
          y: Math.random() * (this.height * 0.4),
          len: Math.random() * 120 + 80,
          speed: Math.random() * 10 + 12,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
          alpha: 1
        });
      }
    },

    animate() {
      requestAnimationFrame(() => this.animate());
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Render twinkling stars
      this.stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;
        this.ctx.save();
        this.ctx.fillStyle = star.color;
        this.ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      });

      // Render shooting stars
      this.spawnShootingStar();
      for (let i = this.shootingStars.length - 1; i >= 0; i--) {
        const s = this.shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.02;

        if (s.alpha <= 0 || s.x > this.width || s.y > this.height) {
          this.shootingStars.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.strokeStyle = `rgba(255, 240, 200, ${s.alpha})`;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(s.x, s.y);
        this.ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        this.ctx.stroke();
        this.ctx.restore();
      }

      // Render cursor mouse trail
      for (let i = this.mouseTrail.length - 1; i >= 0; i--) {
        const p = this.mouseTrail[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.03;
        if (p.alpha <= 0) {
          this.mouseTrail.splice(i, 1);
          continue;
        }
        this.ctx.save();
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    }
  };

  // =========================================================
  // FIREWORKS & SKY LANTERNS CANVAS
  // =========================================================
  const FireworksCanvas = {
    canvas: null,
    ctx: null,
    particles: [],
    lanterns: [],
    width: window.innerWidth,
    height: window.innerHeight,

    init() {
      this.canvas = document.getElementById('fireworks-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Global click handler to launch fireworks
      window.addEventListener('click', (e) => {
        // Check if clicking inside interactive cards or buttons
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'button' || tag === 'input' || tag === 'textarea' || tag === 'a') return;
        this.createFirework(e.clientX, e.clientY);
      });

      this.animate();
    },

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },

    createFirework(x, y, count = 45, customHue = null) {
      AudioEngine.playSFX('sparkle');
      const baseHue = customHue !== null ? customHue : Math.random() * 360;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 5 + 2;
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01,
          size: Math.random() * 3 + 2,
          color: `hsl(${baseHue + Math.random() * 40 - 20}, 100%, 65%)`
        });
      }
    },

    createConfettiBurst(x, y, count = 80) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 3;
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          gravity: 0.15,
          alpha: 1,
          decay: 0.008,
          size: Math.random() * 6 + 4,
          isRect: true,
          rotation: Math.random() * 360,
          color: ['#ffd700', '#ff69b4', '#a18cd1', '#00f5d4', '#ff758c'][Math.floor(Math.random() * 5)]
        });
      }
    },

    addSkyLantern(wishText) {
      const startX = this.width * 0.2 + Math.random() * (this.width * 0.6);
      this.lanterns.push({
        x: startX,
        y: this.height + 40,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.2 + 1.5),
        swayAngle: Math.random() * Math.PI,
        size: 34,
        alpha: 1,
        text: wishText || "A Birthday Wish"
      });
      AudioEngine.playSFX('sparkle');
    },

    animate() {
      requestAnimationFrame(() => this.animate());
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Render Fireworks & Confetti
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.gravity) p.vy += p.gravity;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillStyle = p.color;

        if (p.isRect) {
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          this.ctx.fill();
        }
        this.ctx.restore();
      }

      // Render Floating Sky Lanterns
      for (let i = this.lanterns.length - 1; i >= 0; i--) {
        const l = this.lanterns[i];
        l.swayAngle += 0.03;
        l.x += l.vx + Math.sin(l.swayAngle) * 0.5;
        l.y += l.vy;

        if (l.y < -80) {
          this.lanterns.splice(i, 1);
          continue;
        }

        this.ctx.save();
        // Lantern Warm Glow
        const grad = this.ctx.createRadialGradient(l.x, l.y, 4, l.x, l.y, l.size * 1.6);
        grad.addColorStop(0, 'rgba(255, 235, 150, 0.9)');
        grad.addColorStop(0.5, 'rgba(255, 120, 50, 0.6)');
        grad.addColorStop(1, 'rgba(255, 60, 0, 0)');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(l.x, l.y, l.size * 1.6, 0, Math.PI * 2);
        this.ctx.fill();

        // Lantern Body
        this.ctx.fillStyle = '#ffeedd';
        this.ctx.fillRect(l.x - l.size / 2, l.y - l.size / 2, l.size, l.size * 1.2);
        this.ctx.strokeStyle = '#ff9900';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(l.x - l.size / 2, l.y - l.size / 2, l.size, l.size * 1.2);

        // Wish Text Ribbon
        this.ctx.fillStyle = '#ffe6a7';
        this.ctx.font = '11px Outfit, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(l.text, l.x, l.y + l.size + 14);
        this.ctx.restore();
      }
    }
  };

  // =========================================================
  // INTERACTIVE BIRTHDAY CAKE & CANDLE BLOW CEREMONY
  // =========================================================
  const CakeModule = {
    init() {
      const candles = document.querySelectorAll('.candle');
      candles.forEach(candle => {
        candle.addEventListener('click', () => {
          this.blowCandle(candle);
        });
      });

      const blowAllBtn = document.getElementById('blow-all-candles-btn');
      if (blowAllBtn) {
        blowAllBtn.addEventListener('click', () => {
          this.blowAllCandles();
        });
      }

      const relightBtn = document.getElementById('relight-cake-btn');
      if (relightBtn) {
        relightBtn.addEventListener('click', () => {
          this.relightCandles();
        });
      }

      const micBtn = document.getElementById('mic-blow-btn');
      if (micBtn) {
        micBtn.addEventListener('click', () => {
          this.toggleMicBlow();
        });
      }

      const sliceBtn = document.getElementById('slice-cake-btn');
      if (sliceBtn) {
        sliceBtn.addEventListener('click', () => {
          this.sliceCake();
        });
      }
    },

    blowCandle(candleEl) {
      if (candleEl.classList.contains('blown')) return;
      candleEl.classList.add('blown');
      AudioEngine.playSFX('blow');
      state.candlesBlown++;

      this.checkAllBlown();
    },

    blowAllCandles() {
      const candles = document.querySelectorAll('.candle:not(.blown)');
      candles.forEach((c, idx) => {
        setTimeout(() => {
          this.blowCandle(c);
        }, idx * 250);
      });
    },

    relightCandles() {
      const candles = document.querySelectorAll('.candle');
      candles.forEach(c => c.classList.remove('blown'));
      state.candlesBlown = 0;
      state.allCandlesExtinguished = false;
      document.getElementById('wish-status-text').textContent = "Blow out all the candles to release your birthday magic!";
      document.getElementById('cake-slice-container').classList.add('hidden');
      document.getElementById('slice-message').classList.add('hidden');
      AudioEngine.playSFX('pop');
    },

    checkAllBlown() {
      const unblown = document.querySelectorAll('.candle:not(.blown)');
      if (unblown.length === 0 && !state.allCandlesExtinguished) {
        state.allCandlesExtinguished = true;
        document.getElementById('wish-status-text').textContent = "🎉 Happy Birthday! All wishes released into the stars! ✨";
        
        // Confetti burst from cake position
        const cakeRect = document.getElementById('interactive-cake').getBoundingClientRect();
        FireworksCanvas.createConfettiBurst(cakeRect.left + cakeRect.width / 2, cakeRect.top + 50, 100);
        FireworksCanvas.createFirework(cakeRect.left + cakeRect.width / 2, cakeRect.top, 50, 45);

        AudioEngine.playSFX('fanfare');

        // Reveal slice cake container
        document.getElementById('cake-slice-container').classList.remove('hidden');
      }
    },

    sliceCake() {
      AudioEngine.playSFX('sparkle');
      document.getElementById('slice-message').classList.remove('hidden');
      const rect = document.getElementById('slice-cake-btn').getBoundingClientRect();
      FireworksCanvas.createConfettiBurst(rect.left + rect.width / 2, rect.top, 60);
    },

    async toggleMicBlow() {
      const micText = document.getElementById('mic-btn-text');
      if (state.micListening) {
        if (state.micStream) {
          state.micStream.getTracks().forEach(track => track.stop());
        }
        state.micListening = false;
        micText.textContent = "Enable Mic Blow";
        return;
      }

      try {
        AudioEngine.init();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        state.micStream = stream;
        state.micListening = true;
        micText.textContent = "Listening: Blow into Mic! 🎙️";

        const src = state.audioCtx.createMediaStreamSource(stream);
        const analyser = state.audioCtx.createAnalyser();
        analyser.fftSize = 256;
        src.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const checkBreath = () => {
          if (!state.micListening) return;
          analyser.getByteFrequencyData(dataArray);

          // Calculate average low-frequency energy (breath puff character)
          let sum = 0;
          for (let i = 0; i < 20; i++) {
            sum += dataArray[i];
          }
          const avg = sum / 20;

          if (avg > 90) {
            const nextCandle = document.querySelector('.candle:not(.blown)');
            if (nextCandle) {
              this.blowCandle(nextCandle);
            }
          }

          requestAnimationFrame(checkBreath);
        };
        checkBreath();
      } catch (err) {
        alert("Microphone permission was denied or not supported. You can still click candles to blow them!");
        state.micListening = false;
        micText.textContent = "Enable Mic Blow";
      }
    }
  };

  // =========================================================
  // LIVE RELATIONSHIP TIMELINE COUNTER
  // =========================================================
  const TimelineModule = {
    init() {
      this.updateDateDisplay();
      this.tick();
      setInterval(() => this.tick(), 1000);
    },

    updateDateDisplay() {
      const dateEl = document.getElementById('anniversary-date-display');
      if (!dateEl) return;
      const d = new Date(state.config.anniversaryDate);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      dateEl.textContent = isNaN(d) ? state.config.anniversaryDate : d.toLocaleDateString(undefined, options);
    },

    tick() {
      const start = new Date(state.config.anniversaryDate).getTime();
      const now = new Date().getTime();
      let diff = Math.max(0, now - start);

      const msInSecond = 1000;
      const msInMinute = msInSecond * 60;
      const msInHour = msInMinute * 60;
      const msInDay = msInHour * 24;
      const msInYear = msInDay * 365.25;

      const years = Math.floor(diff / msInYear);
      diff -= years * msInYear;

      const days = Math.floor(diff / msInDay);
      diff -= days * msInDay;

      const hours = Math.floor(diff / msInHour);
      diff -= hours * msInHour;

      const minutes = Math.floor(diff / msInMinute);
      diff -= minutes * msInMinute;

      const seconds = Math.floor(diff / msInSecond);

      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val < 10 && id !== 'count-years' ? '0' + val : val;
      };

      setVal('count-years', years);
      setVal('count-days', days);
      setVal('count-hours', hours);
      setVal('count-minutes', minutes);
      setVal('count-seconds', seconds);
    }
  };

  // =========================================================
  // CONSTELLATION OF OUR LOVE (STAR MAP CANVAS)
  // =========================================================
  const ConstellationModule = {
    canvas: null,
    ctx: null,
    connectedNodes: new Set([1]),

    init() {
      this.canvas = document.getElementById('constellation-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());

      this.canvas.addEventListener('click', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        MILESTONES.forEach(node => {
          const nodeX = node.x * this.canvas.width;
          const nodeY = node.y * this.canvas.height;
          const dist = Math.hypot(clickX - nodeX, clickY - nodeY);

          if (dist < 26) {
            this.selectMilestone(node);
          }
        });
      });

      const resetBtn = document.getElementById('reset-stars-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.connectedNodes = new Set([1]);
          this.selectMilestone(MILESTONES[0]);
          AudioEngine.playSFX('pop');
        });
      }

      this.selectMilestone(MILESTONES[0]);
      this.animate();
    },

    resize() {
      const container = this.canvas.parentElement;
      this.canvas.width = container.clientWidth;
      this.canvas.height = container.clientHeight;
    },

    selectMilestone(node) {
      this.connectedNodes.add(node.id);
      AudioEngine.playSFX('sparkle');

      document.getElementById('milestone-icon').textContent = node.icon;
      document.getElementById('milestone-title').textContent = node.title;
      document.getElementById('milestone-date').textContent = node.date;
      document.getElementById('milestone-story').textContent = node.story;

      // Small firework on node
      const rect = this.canvas.getBoundingClientRect();
      FireworksCanvas.createFirework(rect.left + node.x * this.canvas.width, rect.top + node.y * this.canvas.height, 20, 280);
    },

    animate() {
      requestAnimationFrame(() => this.animate());
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const w = this.canvas.width;
      const h = this.canvas.height;

      // Draw celestial connection lines
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([4, 4]);

      for (let i = 0; i < MILESTONES.length - 1; i++) {
        const n1 = MILESTONES[i];
        const n2 = MILESTONES[i + 1];
        if (this.connectedNodes.has(n1.id) && this.connectedNodes.has(n2.id)) {
          this.ctx.moveTo(n1.x * w, n1.y * h);
          this.ctx.lineTo(n2.x * w, n2.y * h);
        }
      }
      this.ctx.stroke();
      this.ctx.setLineDash([]);

      // Draw glowing nodes
      const time = Date.now() * 0.003;
      MILESTONES.forEach(node => {
        const nx = node.x * w;
        const ny = node.y * h;
        const isConnected = this.connectedNodes.has(node.id);
        const pulse = Math.sin(time + node.id) * 3;

        // Outer glow
        const grad = this.ctx.createRadialGradient(nx, ny, 2, nx, ny, 18 + pulse);
        grad.addColorStop(0, isConnected ? 'rgba(255, 215, 0, 0.8)' : 'rgba(255, 255, 255, 0.4)');
        grad.addColorStop(1, 'rgba(255, 215, 0, 0)');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(nx, ny, 18 + pulse, 0, Math.PI * 2);
        this.ctx.fill();

        // Core star
        this.ctx.fillStyle = isConnected ? '#ffd700' : '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(nx, ny, 6, 0, Math.PI * 2);
        this.ctx.fill();
      });
    }
  };

  // =========================================================
  // 3D POLAROID MEMORY GALLERY & PHOTO UPLOADER
  // =========================================================
  const GalleryModule = {
    init() {
      // 3D Mouse Tilt effect on polaroid cards
      const cards = document.querySelectorAll('.polaroid-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 20;
          const rotateY = (x / rect.width) * 20;
          card.style.transform = `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });

        // Click to open Lightbox
        card.addEventListener('click', () => {
          const img = card.querySelector('.memory-img');
          const title = card.querySelector('.caption-handwriting').textContent;
          this.openLightbox(img.src, title);
        });
      });

      // Lightbox close handlers
      const closeBtn = document.getElementById('lightbox-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeLightbox());
      }
      const modal = document.getElementById('lightbox-modal');
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeLightbox();
        });
      }

      // Photo upload trigger
      const uploadBtn = document.getElementById('upload-memory-btn');
      const fileInput = document.getElementById('photo-file-input');
      if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => this.handlePhotoUpload(e));
      }
    },

    openLightbox(src, caption) {
      const modal = document.getElementById('lightbox-modal');
      const img = document.getElementById('lightbox-img');
      const cap = document.getElementById('lightbox-caption');
      img.src = src;
      cap.textContent = caption;
      modal.classList.remove('hidden');
      AudioEngine.playSFX('sparkle');
    },

    closeLightbox() {
      document.getElementById('lightbox-modal').classList.add('hidden');
    },

    handlePhotoUpload(e) {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      const cards = document.querySelectorAll('.polaroid-card');
      files.forEach((file, index) => {
        if (index < cards.length) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            const img = cards[index].querySelector('.memory-img');
            img.src = evt.target.result;
            cards[index].querySelector('.caption-handwriting').textContent = "Our Favorite Memory";
          };
          reader.readAsDataURL(file);
        }
      });
      AudioEngine.playSFX('fanfare');
      alert("✨ Photos uploaded and updated in your Memory Capsule!");
    }
  };

  // =========================================================
  // 100 REASONS WHY I LOVE YOU (LOVE JAR MODULE)
  // =========================================================
  const LoveJarModule = {
    init() {
      const jar = document.getElementById('glowing-jar');
      const drawPrompt = document.getElementById('draw-reason-btn');
      const drawNext = document.getElementById('draw-next-btn');
      const favBtn = document.getElementById('fav-reason-btn');
      const viewAllBtn = document.getElementById('view-all-reasons-btn');
      const reasonsCloseBtn = document.getElementById('reasons-close-btn');
      const searchInput = document.getElementById('reason-search-input');

      if (jar) jar.addEventListener('click', () => this.drawReason());
      if (drawPrompt) drawPrompt.addEventListener('click', () => this.drawReason());
      if (drawNext) drawNext.addEventListener('click', () => this.drawReason());

      if (favBtn) {
        favBtn.addEventListener('click', () => {
          const idx = state.activeReasonIdx;
          if (state.favorites.has(idx)) {
            state.favorites.delete(idx);
            favBtn.textContent = '🤍';
          } else {
            state.favorites.add(idx);
            favBtn.textContent = '❤️';
            AudioEngine.playSFX('sparkle');
          }
        });
      }

      if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => this.openAllReasonsModal());
      }
      if (reasonsCloseBtn) {
        reasonsCloseBtn.addEventListener('click', () => {
          document.getElementById('reasons-modal').classList.add('hidden');
        });
      }
      if (searchInput) {
        searchInput.addEventListener('input', (e) => this.filterReasons(e.target.value));
      }

      this.drawReason(0);
    },

    drawReason(forcedIdx = null) {
      let idx;
      if (forcedIdx !== null) {
        idx = forcedIdx;
      } else {
        idx = Math.floor(Math.random() * DEFAULT_REASONS.length);
      }

      state.activeReasonIdx = idx;
      AudioEngine.playSFX('pop');

      const card = document.getElementById('drawn-reason-card');
      card.style.animation = 'none';
      void card.offsetWidth; // trigger reflow
      card.style.animation = 'fadeInUp 0.5s ease-out';

      document.getElementById('reason-num-badge').textContent = `Reason #${idx + 1}`;
      document.getElementById('reason-quote-text').textContent = `"${DEFAULT_REASONS[idx]}"`;

      const favBtn = document.getElementById('fav-reason-btn');
      favBtn.textContent = state.favorites.has(idx) ? '❤️' : '🤍';
    },

    openAllReasonsModal() {
      const modal = document.getElementById('reasons-modal');
      const listContainer = document.getElementById('reasons-list-container');
      listContainer.innerHTML = '';

      DEFAULT_REASONS.forEach((reason, i) => {
        const item = document.createElement('div');
        item.className = 'reason-item-card';
        item.innerHTML = `
          <span class="reason-badge-pill">#${i + 1}</span>
          <p class="reason-text">"${reason}"</p>
        `;
        listContainer.appendChild(item);
      });

      modal.classList.remove('hidden');
      AudioEngine.playSFX('sparkle');
    },

    filterReasons(query) {
      const q = query.toLowerCase();
      const listContainer = document.getElementById('reasons-list-container');
      listContainer.innerHTML = '';

      DEFAULT_REASONS.forEach((reason, i) => {
        if (reason.toLowerCase().includes(q)) {
          const item = document.createElement('div');
          item.className = 'reason-item-card';
          item.innerHTML = `
            <span class="reason-badge-pill">#${i + 1}</span>
            <p class="reason-text">"${reason}"</p>
          `;
          listContainer.appendChild(item);
        }
      });
    }
  };

  // =========================================================
  // THE WAX-SEALED SECRET LOVE LETTER
  // =========================================================
  const LoveLetterModule = {
    isOpened: false,
    typingTimer: null,

    init() {
      const waxSeal = document.getElementById('wax-seal');
      const openBtn = document.getElementById('open-envelope-btn');
      const retypeBtn = document.getElementById('retype-letter-btn');

      if (waxSeal) waxSeal.addEventListener('click', () => this.openEnvelope());
      if (openBtn) openBtn.addEventListener('click', () => this.openEnvelope());
      if (retypeBtn) retypeBtn.addEventListener('click', () => this.typewriterText());
    },

    openEnvelope() {
      if (this.isOpened) return;
      this.isOpened = true;

      AudioEngine.playSFX('pop');
      const env = document.getElementById('envelope-box');
      env.classList.add('opened');
      document.getElementById('open-envelope-btn').classList.add('hidden');
      document.getElementById('retype-letter-btn').classList.remove('hidden');

      const rect = env.getBoundingClientRect();
      FireworksCanvas.createFirework(rect.left + rect.width / 2, rect.top + 100, 35, 340);

      setTimeout(() => {
        this.typewriterText();
      }, 700);
    },

    typewriterText() {
      if (this.typingTimer) clearInterval(this.typingTimer);

      const target = document.getElementById('typewriter-letter-content');
      target.innerHTML = '';

      const text = state.config.loveLetter;
      let charIdx = 0;

      this.typingTimer = setInterval(() => {
        if (charIdx < text.length) {
          const char = text.charAt(charIdx);
          if (char === '\n') {
            target.innerHTML += '<br>';
          } else {
            target.innerHTML += char;
          }
          charIdx++;
          if (charIdx % 6 === 0) {
            AudioEngine.playSFX('sparkle');
          }
        } else {
          clearInterval(this.typingTimer);
        }
      }, 25);
    }
  };

  // =========================================================
  // 3D GIFT BOX & LOVE COUPONS
  // =========================================================
  const GiftBoxModule = {
    isOpened: false,

    init() {
      const ribbonBtn = document.getElementById('pull-ribbon-btn');
      const box = document.getElementById('gift-box-3d');

      if (ribbonBtn) ribbonBtn.addEventListener('click', () => this.openBox());
      if (box) box.addEventListener('click', () => this.openBox());
    },

    openBox() {
      if (this.isOpened) return;
      this.isOpened = true;

      const box = document.getElementById('gift-box-3d');
      box.classList.add('opened');
      document.getElementById('pull-ribbon-btn').classList.add('hidden');
      document.getElementById('coupons-deck').classList.remove('hidden');

      AudioEngine.playSFX('fanfare');
      const rect = box.getBoundingClientRect();
      FireworksCanvas.createConfettiBurst(rect.left + rect.width / 2, rect.top, 80);
    },

    redeemCoupon(couponId) {
      const couponCard = document.querySelector(`.love-coupon[data-coupon-id="${couponId}"]`);
      if (!couponCard || couponCard.classList.contains('redeemed')) return;

      couponCard.classList.add('redeemed');
      state.config.couponsRedeemed[couponId] = true;
      saveConfig();

      AudioEngine.playSFX('stamp');

      const rect = couponCard.getBoundingClientRect();
      FireworksCanvas.createConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
    }
  };

  // =========================================================
  // CELESTIAL FINALE & SKY LANTERNS
  // =========================================================
  const FinaleModule = {
    init() {
      const releaseBtn = document.getElementById('release-lantern-btn');
      const wishInput = document.getElementById('lantern-wish-input');

      if (releaseBtn && wishInput) {
        releaseBtn.addEventListener('click', () => {
          const wish = wishInput.value.trim() || "May all your birthday dreams come true ✨";
          FireworksCanvas.addSkyLantern(wish);
          wishInput.value = '';
        });

        wishInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            releaseBtn.click();
          }
        });
      }
    }
  };

  // =========================================================
  // PERSONALIZATION & SETTINGS MODAL
  // =========================================================
  const PersonalizeModule = {
    init() {
      const modal = document.getElementById('personalize-modal');
      const openBtn = document.getElementById('personalize-btn');
      const closeBtn = document.getElementById('personalize-close-btn');
      const saveBtn = document.getElementById('save-personalization-btn');
      const resetBtn = document.getElementById('reset-default-btn');
      const themeBtn = document.getElementById('theme-btn');

      if (openBtn) {
        openBtn.addEventListener('click', () => {
          this.populateFields();
          modal.classList.remove('hidden');
        });
      }

      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          this.cycleTheme();
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
      }

      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.add('hidden');
        });
      }

      // Theme selector buttons in drawer
      const themeBtns = document.querySelectorAll('.theme-select-btn');
      themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          themeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.applyTheme(btn.getAttribute('data-theme'));
        });
      });

      if (saveBtn) {
        saveBtn.addEventListener('click', () => {
          this.saveFromFields();
          modal.classList.add('hidden');
          AudioEngine.playSFX('fanfare');
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (confirm("Reset personalized details to default?")) {
            state.config = { ...DEFAULT_CONFIG };
            saveConfig();
            this.applyConfigToDOM();
            this.populateFields();
            AudioEngine.playSFX('pop');
          }
        });
      }

      this.applyConfigToDOM();
    },

    cycleTheme() {
      const themes = ['theme-celestial', 'theme-rosegold', 'theme-emerald', 'theme-sunset'];
      const currentIdx = themes.indexOf(state.config.theme);
      const nextTheme = themes[(currentIdx + 1) % themes.length];
      this.applyTheme(nextTheme);
      AudioEngine.playSFX('pop');
    },

    applyTheme(themeName) {
      document.body.className = themeName;
      state.config.theme = themeName;
      saveConfig();
    },

    populateFields() {
      document.getElementById('input-wife-name').value = state.config.wifeName;
      document.getElementById('input-anniversary-date').value = state.config.anniversaryDate;
      document.getElementById('input-husband-name').value = state.config.husbandName;
      document.getElementById('input-love-letter').value = state.config.loveLetter;
    },

    saveFromFields() {
      state.config.wifeName = document.getElementById('input-wife-name').value.trim() || DEFAULT_CONFIG.wifeName;
      state.config.anniversaryDate = document.getElementById('input-anniversary-date').value || DEFAULT_CONFIG.anniversaryDate;
      state.config.husbandName = document.getElementById('input-husband-name').value.trim() || DEFAULT_CONFIG.husbandName;
      state.config.loveLetter = document.getElementById('input-love-letter').value.trim() || DEFAULT_CONFIG.loveLetter;

      saveConfig();
      this.applyConfigToDOM();
    },

    applyConfigToDOM() {
      // Update wife's name across all instances
      document.querySelectorAll('.wife-name-display').forEach(el => {
        el.textContent = state.config.wifeName;
      });

      document.getElementById('husband-signature').textContent = `${state.config.husbandName} ❤️`;
      document.title = `Happy Birthday, ${state.config.wifeName}! ✨ | A Cosmic Love Odyssey`;

      this.applyTheme(state.config.theme || 'theme-celestial');
      TimelineModule.updateDateDisplay();

      // Apply saved coupon redemptions
      if (state.config.couponsRedeemed) {
        Object.keys(state.config.couponsRedeemed).forEach(id => {
          if (state.config.couponsRedeemed[id]) {
            const coupon = document.querySelector(`.love-coupon[data-coupon-id="${id}"]`);
            if (coupon) coupon.classList.add('redeemed');
          }
        });
      }
    }
  };

  // =========================================================
  // WELCOME GATE CONTROLLER
  // =========================================================
  const WelcomePortal = {
    init() {
      const enterBtn = document.getElementById('enter-portal-btn');
      if (!enterBtn) return;

      enterBtn.addEventListener('click', () => {
        AudioEngine.startRomanticMusic();
        AudioEngine.playSFX('fanfare');

        const portal = document.getElementById('welcome-portal');
        portal.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        portal.style.opacity = '0';
        portal.style.transform = 'scale(1.08)';

        // Launch celebratory fireworks
        FireworksCanvas.createFirework(window.innerWidth / 2, window.innerHeight / 2, 70, 45);

        setTimeout(() => {
          portal.classList.add('hidden');
          const storySections = document.getElementById('story-sections');
          storySections.classList.remove('hidden');
          storySections.style.animation = 'fadeInUp 1s ease-out';
          
          // Force resize so canvases (like Constellation) can compute their clientWidth properly
          // A tiny delay guarantees the browser has processed the 'hidden' removal and updated clientWidth.
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
          }, 50);
        }, 600);
      });

      // Audio toggle button
      const audioBtn = document.getElementById('audio-toggle-btn');
      if (audioBtn) {
        audioBtn.addEventListener('click', () => {
          AudioEngine.toggleMusic();
        });
      }

      // SFX toggle button
      const sfxBtn = document.getElementById('sfx-toggle-btn');
      if (sfxBtn) {
        sfxBtn.addEventListener('click', () => {
          state.sfxEnabled = !state.sfxEnabled;
          sfxBtn.querySelector('.btn-text').textContent = state.sfxEnabled ? "SFX: On" : "SFX: Off";
        });
      }
    }
  };

  // =========================================================
  // MIDNIGHT 12:00 AM SURPRISE DISPATCHER MODULE
  // =========================================================
  const MidnightDispatcherModule = {
    timerInterval: null,
    midnightTriggered: false,

    init() {
      const modal = document.getElementById('midnight-modal');
      const openBtn = document.getElementById('midnight-btn');
      const closeBtn = document.getElementById('midnight-close-btn');
      const saveBtn = document.getElementById('save-midnight-details-btn');
      const gmailBtn = document.getElementById('send-gmail-btn');
      const whatsappBtn = document.getElementById('send-whatsapp-btn');
      const smsBtn = document.getElementById('send-sms-btn');
      const directBtn = document.getElementById('send-direct-btn');

      if (openBtn) openBtn.addEventListener('click', () => {
        this.populateFields();
        modal.classList.remove('hidden');
        AudioEngine.playSFX('sparkle');
      });

      if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

      if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });

      if (saveBtn) saveBtn.addEventListener('click', () => {
        this.saveFields();
        modal.classList.add('hidden');
        AudioEngine.playSFX('fanfare');
        alert("✨ Midnight Surprise contact details saved successfully!");
      });

      if (gmailBtn) gmailBtn.addEventListener('click', () => this.sendGmail());
      if (whatsappBtn) whatsappBtn.addEventListener('click', () => this.sendWhatsApp());
      if (smsBtn) smsBtn.addEventListener('click', () => this.sendSMS());
      if (directBtn) directBtn.addEventListener('click', () => this.sendDirect());

      this.startMidnightCountdown();
    },

    populateFields() {
      document.getElementById('input-wife-email').value = state.config.wifeEmail || '';
      document.getElementById('input-wife-phone').value = state.config.wifePhone || '';
      
      const defaultMsg = `Happy Birthday to the most beautiful wife in the universe! ✨❤️ I made a special star-lit world just for you. Open your birthday magic here: ${window.location.href.split('#')[0]}`;
      document.getElementById('input-midnight-message').value = state.config.midnightMessage || defaultMsg;
    },

    saveFields() {
      state.config.wifeEmail = document.getElementById('input-wife-email').value.trim();
      state.config.wifePhone = document.getElementById('input-wife-phone').value.trim();
      state.config.midnightMessage = document.getElementById('input-midnight-message').value.trim();
      saveConfig();
    },

    startMidnightCountdown() {
      const updateCountdown = () => {
        const now = new Date();
        // Next midnight: tomorrow 00:00:00
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const diff = midnight - now;

        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const hEl = document.getElementById('mid-hours');
        const mEl = document.getElementById('mid-minutes');
        const sEl = document.getElementById('mid-seconds');

        if (hEl) hEl.textContent = hours < 10 ? '0' + hours : hours;
        if (mEl) mEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        if (sEl) sEl.textContent = seconds < 10 ? '0' + seconds : seconds;

        // Check if 12:00:00 AM Midnight hit
        const autoCheck = document.getElementById('auto-midnight-checkbox');
        if (autoCheck && autoCheck.checked && diff <= 1000 && !this.midnightTriggered) {
          this.midnightTriggered = true;
          this.triggerMidnightBlast();
        }
      };

      updateCountdown();
      this.timerInterval = setInterval(updateCountdown, 1000);
    },

    triggerMidnightBlast() {
      AudioEngine.startRomanticMusic();
      AudioEngine.playSFX('fanfare');
      FireworksCanvas.createConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 120);
      FireworksCanvas.createFirework(window.innerWidth / 2, window.innerHeight / 3, 60, 45);
      FireworksCanvas.addSkyLantern(`Happy Birthday ${state.config.wifeName}! Midnight Love ✨`);
      alert(`🎉 IT IS 12:00 AM! HAPPY BIRTHDAY TO ${state.config.wifeName.toUpperCase()}! ❤️✨`);
    },

    sendGmail() {
      this.saveFields();
      const email = state.config.wifeEmail;
      const subject = `Happy Birthday to My Universe, ${state.config.wifeName}! ✨❤️`;
      const body = state.config.midnightMessage;

      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(url, '_blank');
      AudioEngine.playSFX('sparkle');
    },

    sendWhatsApp() {
      this.saveFields();
      let phone = (state.config.wifePhone || '').replace(/[^0-9]/g, '');
      const body = state.config.midnightMessage;

      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(body)}`;
      window.open(url, '_blank');
      AudioEngine.playSFX('sparkle');
    },

    sendSMS() {
      this.saveFields();
      let phone = (state.config.wifePhone || '').replace(/[^0-9]/g, '');
      const body = state.config.midnightMessage;

      // SMS URI scheme
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const url = isiOS ? `sms:${phone}&body=${encodeURIComponent(body)}` : `sms:${phone}?body=${encodeURIComponent(body)}`;
      window.location.href = url;
      AudioEngine.playSFX('sparkle');
    },

    sendDirect() {
      this.saveFields();
      this.triggerMidnightBlast();
    }
  };

  // Expose global methods for inline handlers
  window.app = {
    redeemCoupon(id) {
      GiftBoxModule.redeemCoupon(id);
    }
  };

  // =========================================================
  // APP INITIALIZATION
  // =========================================================
  document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    CosmosCanvas.init();
    FireworksCanvas.init();
    CakeModule.init();
    TimelineModule.init();
    ConstellationModule.init();
    GalleryModule.init();
    LoveJarModule.init();
    LoveLetterModule.init();
    GiftBoxModule.init();
    FinaleModule.init();
    PersonalizeModule.init();
    WelcomePortal.init();
    MidnightDispatcherModule.init();
  });

})();
