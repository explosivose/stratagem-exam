import {
  stratagems,
  getRandomStratagem,
  getKeySymbol,
} from "../data/stratagems";

// Alpine.js Game Component
document.addEventListener("alpine:init", () => {
  Alpine.data("stratagemGame", () => ({
    currentStratagem: null,
    currentIndex: 0,
    gameActive: false,
    gameStatus: "READY",
    gameMessage: "Press any arrow key to begin training...",
    pressedKey: null,
    errorState: false,
    isLoading: false,
    loadingProgress: 0,
    iconEmphasized: false,
    slideDownActive: false,

    init() {
      this.initGame();
      this.setupKeyboardListeners();
    },

    setupKeyboardListeners() {
      this.$nextTick(() => {
        document.addEventListener("keydown", (e) => {
          const keyMap = {
            ArrowUp: "up",
            KeyW: "up",
            ArrowDown: "down",
            KeyS: "down",
            ArrowLeft: "left",
            KeyA: "left",
            ArrowRight: "right",
            KeyD: "right",
          };

          const key = keyMap[e.code];
          if (key) {
            e.preventDefault();
            this.handleKeyPress(key);
          }
        });
      });
    },

    initGame() {
      this.currentStratagem = getRandomStratagem();
      this.currentIndex = 0;
      this.gameActive = true;
      this.gameStatus = "ACTIVE";
      this.gameMessage = "Enter the sequence using arrow keys";
      this.errorState = false;
    },

    handleKeyPress(key) {
      if (!this.gameActive || !this.currentStratagem) return;

      const expectedKey = this.currentStratagem.sequence[this.currentIndex];

      // Visual feedback for pressed key
      this.pressedKey = key;
      setTimeout(() => {
        this.pressedKey = null;
      }, 200);

      if (key === expectedKey) {
        this.handleCorrectKey();
      } else {
        this.handleIncorrectKey(expectedKey, key);
      }
    },

    handleCorrectKey() {
      this.currentIndex++;

      if (this.currentIndex >= this.currentStratagem.sequence.length) {
        // Sequence completed
        this.gameActive = false;
        this.gameMessage =
          '<span class="text-terminal-green">✅ SEQUENCE COMPLETED! Excellent work, Helldiver!</span>';
        this.gameStatus = "COMPLETED";

        // Trigger slide down effect
        setTimeout(() => {
          this.slideDownActive = true;
        }, 100);

        // Start loading sequence after slide down
        setTimeout(() => {
          this.slideDownActive = false;
          this.startLoadingSequence(300);
        }, 1000);
      } else {
        this.gameMessage = `<span class="text-terminal-green">Correct! Continue sequence... (${this.currentIndex}/${this.currentStratagem.sequence.length})</span>`;
      }
    },

    handleIncorrectKey(expectedKey, actualKey) {
      this.gameActive = false;
      this.errorState = true;
      this.gameMessage = `<span class="text-terminal-red">❌ INCORRECT SEQUENCE! Expected ${this.getKeySymbol(expectedKey)}, got ${this.getKeySymbol(actualKey)}. Restarting...</span>`;
      this.gameStatus = "FAILED";

      setTimeout(() => {
        this.errorState = false;
        this.startLoadingSequence(1800);
      }, 500);
    },

    getKeySymbol(key) {
      return getKeySymbol(key);
    },

    startLoadingSequence(duration = 800) {
      this.isLoading = true;
      this.loadingProgress = 0;

      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        this.loadingProgress = progress * 100;

        if (progress >= 1) {
          clearInterval(interval);
          this.isLoading = false;
          this.loadingProgress = 0;
          this.initGame();

          // Emphasize new icon after brief delay
          setTimeout(() => {
            this.iconEmphasized = true;
            setTimeout(() => {
              this.iconEmphasized = false;
            }, 1000);
          }, 100);
        }
      }, 16); // ~60fps
    },
  }));
});
