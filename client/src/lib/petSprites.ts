/**
 * Pixel Pet Sprite Library - Hybrid Approach
 * Hand-coded SVG sprites based on pixel art reference images
 * All 6 pets × 9 evolution stages with smooth animations
 */

function w(content: string, cls: string = ''): string {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="${cls}">${content}</svg>`;
}

// ─── FIRE DRAGON (Mee Mee - Designer) ───
const FIRE_DRAGON = [
  // Stage 0: Egg - orange flame egg
  w(`<defs><style>@keyframes eggGlow { 0%,100% { filter: drop-shadow(0 0 2px #FF6B35); } 50% { filter: drop-shadow(0 0 6px #FFD700); } }</style></defs>
    <ellipse cx="50" cy="55" rx="22" ry="28" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <path d="M35 50 Q40 35 50 30 Q60 35 65 50" fill="#FFD700" opacity="0.7"/>
    <path d="M38 60 Q45 65 50 68 Q55 65 62 60" fill="#FF3B00" opacity="0.6"/>
    <circle cx="45" cy="50" r="3" fill="#FFD700" opacity="0.8"/>
    <circle cx="55" cy="50" r="3" fill="#FFD700" opacity="0.8"/>`, 'tama-anim-slow'),

  // Stage 1: Baby Dragon - small orange dragon
  w(`<ellipse cx="50" cy="62" rx="18" ry="16" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <ellipse cx="50" cy="42" rx="12" ry="11" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <circle cx="46" cy="41" r="4" fill="white"/><circle cx="54" cy="41" r="4" fill="white"/>
    <circle cx="46" cy="41" r="2.5" fill="#2a1a0a"/><circle cx="54" cy="41" r="2.5" fill="#2a1a0a"/>
    <circle cx="46.5" cy="40" r="1" fill="white"/><circle cx="54.5" cy="40" r="1" fill="white"/>
    <path d="M48 50 Q50 52 52 50" fill="none" stroke="#cc4a15" stroke-width="1.2" stroke-linecap="round"/>
    <polygon points="48,35 50,28 52,35" fill="#cc4a15"/>
    <path d="M65 60 Q72 58 75 65" fill="#FF3B00" opacity="0.7"/>`),

  // Stage 2: Young Dragon - growing wings
  w(`<path d="M28 58 Q15 48 18 68" fill="#FF3B00" opacity="0.75"/><path d="M72 58 Q85 48 82 68" fill="#FF3B00" opacity="0.75"/>
    <ellipse cx="50" cy="62" rx="20" ry="18" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <ellipse cx="50" cy="40" rx="13" ry="12" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <circle cx="46" cy="40" r="4.5" fill="white"/><circle cx="54" cy="40" r="4.5" fill="white"/>
    <circle cx="46" cy="40" r="3" fill="#2a1a0a"/><circle cx="54" cy="40" r="3" fill="#2a1a0a"/>
    <circle cx="46.5" cy="39" r="1.2" fill="white"/><circle cx="54.5" cy="39" r="1.2" fill="white"/>
    <path d="M48 50 Q50 52 52 50" fill="none" stroke="#cc4a15" stroke-width="1.2" stroke-linecap="round"/>
    <polygon points="48,33 50,24 52,33" fill="#cc4a15"/>
    <circle cx="38" cy="65" r="3" fill="#FFD700" opacity="0.8"/><circle cx="62" cy="65" r="3" fill="#00BFB3" opacity="0.75"/>
    <path d="M72 65 Q82 60 85 72" fill="#FF3B00" opacity="0.7"/>`),

  // Stage 3: Teen Dragon - larger with spikes
  w(`<path d="M26 56 Q8 40 12 70 Q20 68 26 56Z" fill="#FF3B00" opacity="0.85"/>
    <path d="M74 56 Q92 40 88 70 Q80 68 74 56Z" fill="#FF3B00" opacity="0.85"/>
    <ellipse cx="50" cy="64" rx="22" ry="20" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <ellipse cx="50" cy="38" rx="14" ry="12" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <polygon points="46,30 48,18 50,30" fill="#cc4a15"/><polygon points="50,30 52,18 54,30" fill="#cc4a15"/>
    <circle cx="45" cy="38" r="5" fill="white"/><circle cx="55" cy="38" r="5" fill="white"/>
    <circle cx="45" cy="38" r="3.5" fill="#FF3B00"/><circle cx="55" cy="38" r="3.5" fill="#FF3B00"/>
    <circle cx="45" cy="38" r="1.5" fill="white"/><circle cx="55" cy="38" r="1.5" fill="white"/>
    <path d="M48 50 Q50 53 52 50" fill="none" stroke="#cc4a15" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M72 72 Q85 78 82 88" fill="none" stroke="#FF3B00" stroke-width="5" stroke-linecap="round"/>`),

  // Stage 4: Adult Dragon - full form
  w(`<path d="M22 54 Q0 35 5 72 Q15 70 22 54Z" fill="#FF3B00" opacity="0.9"/>
    <path d="M78 54 Q100 35 95 72 Q85 70 78 54Z" fill="#FF3B00" opacity="0.9"/>
    <ellipse cx="50" cy="64" rx="24" ry="21" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <ellipse cx="50" cy="37" rx="15" ry="13" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <polygon points="45,28 47,15 49,28" fill="#cc4a15"/><polygon points="51,28 53,15 55,28" fill="#cc4a15"/>
    <circle cx="44" cy="37" r="5.5" fill="white"/><circle cx="56" cy="37" r="5.5" fill="white"/>
    <circle cx="44" cy="37" r="4" fill="#FF3B00"/><circle cx="56" cy="37" r="4" fill="#FF3B00"/>
    <circle cx="44" cy="37" r="2" fill="#FFD700"/><circle cx="56" cy="37" r="2" fill="#FFD700"/>
    <circle cx="44.5" cy="36" r="0.8" fill="white"/><circle cx="56.5" cy="36" r="0.8" fill="white"/>
    <circle cx="44" cy="68" r="2" fill="#FF0"/><circle cx="50" cy="66" r="2" fill="#F44"/><circle cx="56" cy="68" r="2" fill="#0BF"/>
    <path d="M72 72 Q90 80 87 92" fill="none" stroke="#FF3B00" stroke-width="6" stroke-linecap="round"/>
    <path d="M72 72 Q90 80 87 92" fill="none" stroke="#FFD700" stroke-width="3" stroke-linecap="round"/>`),

  // Stage 5: Elder Dragon - golden accents
  w(`<circle cx="50" cy="50" r="40" fill="none" stroke="#FF6B35" stroke-width="1.5" opacity="0.5" stroke-dasharray="6 3"/>
    <line x1="22" y1="50" x2="5" y2="32" stroke="#FFD700" stroke-width="2" opacity="0.9"/><circle cx="4" cy="31" r="3" fill="#FFD700" opacity="0.95"/>
    <line x1="78" y1="50" x2="95" y2="32" stroke="#FFD700" stroke-width="2" opacity="0.9"/><circle cx="96" cy="31" r="3" fill="#FFD700" opacity="0.95"/>
    <line x1="50" y1="22" x2="50" y2="2" stroke="#FFD700" stroke-width="2.5" opacity="0.95"/><circle cx="50" cy="1" r="3" fill="#FFD700" opacity="0.95"/>
    <path d="M22 54 Q0 35 5 72 Q15 70 22 54Z" fill="#FF3B00" opacity="0.9"/>
    <path d="M78 54 Q100 35 95 72 Q85 70 78 54Z" fill="#FF3B00" opacity="0.9"/>
    <ellipse cx="50" cy="64" rx="24" ry="21" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <ellipse cx="50" cy="37" rx="15" ry="13" fill="#FF6B35" stroke="#cc4a15" stroke-width="1"/>
    <polygon points="45,28 47,15 49,28" fill="#cc4a15"/><polygon points="51,28 53,15 55,28" fill="#cc4a15"/>
    <circle cx="44" cy="37" r="5.5" fill="white"/><circle cx="56" cy="37" r="5.5" fill="white"/>
    <circle cx="44" cy="37" r="4" fill="#FF3B00"/><circle cx="56" cy="37" r="4" fill="#FF3B00"/>
    <circle cx="44" cy="37" r="2" fill="#FFD700"/><circle cx="56" cy="37" r="2" fill="#FFD700"/>
    <circle cx="44.5" cy="36" r="0.8" fill="white"/><circle cx="56.5" cy="36" r="0.8" fill="white"/>
    <circle cx="44" cy="68" r="2" fill="#FF0"/><circle cx="50" cy="66" r="2" fill="#F44"/><circle cx="56" cy="68" r="2" fill="#0BF"/>
    <path d="M72 72 Q90 80 87 92" fill="none" stroke="#FF3B00" stroke-width="6" stroke-linecap="round"/>
    <path d="M72 72 Q90 80 87 92" fill="none" stroke="#FFD700" stroke-width="3" stroke-linecap="round"/>
    <line x1="38" y1="60" x2="34" y2="68" stroke="#cc4a15" stroke-width="1.5" opacity="0.7"/>
    <line x1="50" y1="70" x2="50" y2="78" stroke="#cc4a15" stroke-width="1.5" opacity="0.7"/>
    <line x1="62" y1="60" x2="66" y2="68" stroke="#cc4a15" stroke-width="1.5" opacity="0.7"/>
    <circle cx="50" cy="54" r="2" fill="#FFD700" opacity="0.5"/>`, 'tama-anim-glow'),

  // Stage 6: Legend Dragon - cosmic fire
  w(`<circle cx="50" cy="50" r="40" fill="none" stroke="#FF6B35" stroke-width="1.5" opacity="0.5" stroke-dasharray="6 3"/>
    <line x1="22" y1="50" x2="5" y2="32" stroke="#FF6B35" stroke-width="1.3" opacity="0.7"/>
    <line x1="22" y1="50" x2="5" y2="32" stroke="#FFD700" stroke-width="0.6" opacity="0.9"/>
    <line x1="78" y1="50" x2="95" y2="32" stroke="#FF6B35" stroke-width="1.3" opacity="0.7"/>
    <line x1="78" y1="50" x2="95" y2="32" stroke="#FFD700" stroke-width="0.6" opacity="0.9"/>
    <path d="M18 54 Q-8 32 0 75 Q12 72 18 54Z" fill="#FF3B00" opacity="0.92"/>
    <path d="M82 54 Q108 32 100 75 Q88 72 82 54Z" fill="#FF3B00" opacity="0.92"/>
    <ellipse cx="50" cy="66" rx="26" ry="23" fill="#FF6B35" stroke="#cc4a15" stroke-width="1.5"/>
    <ellipse cx="50" cy="37" rx="16" ry="14" fill="#FF6B35" stroke="#cc4a15" stroke-width="1.2"/>
    <polygon points="44,27 46,12 48,27" fill="#cc4a15"/><polygon points="50,27 52,12 54,27" fill="#cc4a15"/><polygon points="56,27 58,12 60,27" fill="#cc4a15"/>
    <circle cx="46" cy="12" r="2.5" fill="#FFD700"/><circle cx="52" cy="8" r="3" fill="#FFD700"/><circle cx="58" cy="12" r="2.5" fill="#FFD700"/>
    <circle cx="42" cy="37" r="6" fill="white"/><circle cx="58" cy="37" r="6" fill="white"/>
    <circle cx="42" cy="37" r="4.5" fill="#FF3B00"/><circle cx="58" cy="37" r="4.5" fill="#FF3B00"/>
    <circle cx="42" cy="37" r="3" fill="#FFD700"/><circle cx="58" cy="37" r="3" fill="#FFD700"/>
    <circle cx="42" cy="37" r="1.5" fill="#1a0800"/><circle cx="58" cy="37" r="1.5" fill="#1a0800"/>
    <circle cx="42.5" cy="36" r="0.7" fill="white"/><circle cx="58.5" cy="36" r="0.7" fill="white"/>
    <circle cx="44" cy="70" r="2" fill="#FF0"/><circle cx="50" cy="68" r="2" fill="#F44"/><circle cx="56" cy="70" r="2" fill="#0BF"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#FF3B00" stroke-width="8" stroke-linecap="round"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>`, 'tama-anim-legendary'),

  // Stage 7: Cosmic Dragon - purple and gold
  w(`<circle cx="50" cy="50" r="44" fill="none" stroke="#cc44ff" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
    <circle cx="50" cy="50" r="36" fill="none" stroke="#ff44cc" stroke-width="0.8" opacity="0.3" stroke-dasharray="5 3"/>
    <path d="M18 54 Q-8 32 0 75 Q12 72 18 54Z" fill="#FF3B00" opacity="0.92"/>
    <path d="M82 54 Q108 32 100 75 Q88 72 82 54Z" fill="#FF3B00" opacity="0.92"/>
    <ellipse cx="50" cy="66" rx="26" ry="23" fill="#FF6B35" stroke="#cc4a15" stroke-width="1.5"/>
    <ellipse cx="50" cy="37" rx="16" ry="14" fill="#FF6B35" stroke="#cc4a15" stroke-width="1.2"/>
    <polygon points="44,27 46,12 48,27" fill="#cc4a15"/><polygon points="50,27 52,12 54,27" fill="#cc4a15"/><polygon points="56,27 58,12 60,27" fill="#cc4a15"/>
    <circle cx="46" cy="12" r="2.5" fill="#cc44ff"/><circle cx="52" cy="8" r="3" fill="#ff44cc"/><circle cx="58" cy="12" r="2.5" fill="#aa44ff"/>
    <circle cx="42" cy="37" r="6" fill="white"/><circle cx="58" cy="37" r="6" fill="white"/>
    <circle cx="42" cy="37" r="4.5" fill="#FF3B00"/><circle cx="58" cy="37" r="4.5" fill="#FF3B00"/>
    <circle cx="42" cy="37" r="3" fill="#cc44ff"/><circle cx="58" cy="37" r="3" fill="#cc44ff"/>
    <circle cx="42" cy="37" r="1.5" fill="#1a0800"/><circle cx="58" cy="37" r="1.5" fill="#1a0800"/>
    <circle cx="42.5" cy="36" r="0.7" fill="white"/><circle cx="58.5" cy="36" r="0.7" fill="white"/>
    <circle cx="44" cy="70" r="2" fill="#FF0"/><circle cx="50" cy="68" r="2" fill="#F44"/><circle cx="56" cy="70" r="2" fill="#0BF"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#FF3B00" stroke-width="8" stroke-linecap="round"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#cc44ff" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="66" r="28" fill="none" stroke="#ff44cc" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 2"/>`, 'tama-anim-cosmic'),

  // Stage 8: Supreme Dragon - all elements
  w(`<circle cx="50" cy="50" r="46" fill="none" stroke="#FFD700" stroke-width="1.3" opacity="0.3" stroke-dasharray="6 4"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#cc44ff" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
    <circle cx="50" cy="50" r="33" fill="none" stroke="#ff44cc" stroke-width="0.8" opacity="0.3" stroke-dasharray="5 3"/>
    <path d="M18 54 Q-8 32 0 75 Q12 72 18 54Z" fill="#FF3B00" opacity="0.92"/>
    <path d="M82 54 Q108 32 100 75 Q88 72 82 54Z" fill="#FF3B00" opacity="0.92"/>
    <ellipse cx="50" cy="66" rx="26" ry="23" fill="#FF6B35" stroke="#cc4a15" stroke-width="1.5"/>
    <ellipse cx="50" cy="37" rx="16" ry="14" fill="#FF6B35" stroke="#cc4a15" stroke-width="1.2"/>
    <polygon points="44,27 46,12 48,27" fill="#cc4a15"/><polygon points="50,27 52,12 54,27" fill="#cc4a15"/><polygon points="56,27 58,12 60,27" fill="#cc4a15"/>
    <circle cx="46" cy="12" r="2.5" fill="#FFD700"/><circle cx="52" cy="8" r="3" fill="white"/><circle cx="58" cy="12" r="2.5" fill="#FFD700"/>
    <circle cx="42" cy="37" r="6" fill="white"/><circle cx="58" cy="37" r="6" fill="white"/>
    <circle cx="42" cy="37" r="4.5" fill="#FF3B00"/><circle cx="58" cy="37" r="4.5" fill="#FF3B00"/>
    <circle cx="42" cy="37" r="3" fill="#FFD700"/><circle cx="58" cy="37" r="3" fill="#FFD700"/>
    <circle cx="42" cy="37" r="1.5" fill="#1a0800"/><circle cx="58" cy="37" r="1.5" fill="#1a0800"/>
    <circle cx="42.5" cy="36" r="0.7" fill="white"/><circle cx="58.5" cy="36" r="0.7" fill="white"/>
    <circle cx="44" cy="70" r="2" fill="#FF0"/><circle cx="50" cy="68" r="2" fill="#F44"/><circle cx="56" cy="70" r="2" fill="#0BF"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#FF3B00" stroke-width="8" stroke-linecap="round"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
    <path d="M73 76 Q95 86 92 98" fill="none" stroke="#cc44ff" stroke-width="2" stroke-linecap="round"/>
    <circle cx="50" cy="66" r="30" fill="none" stroke="#FFD700" stroke-width="0.6" opacity="0.6" stroke-dasharray="2 1"/>
    <circle cx="50" cy="66" r="28" fill="none" stroke="#cc44ff" stroke-width="0.6" opacity="0.5" stroke-dasharray="3 2"/>
    <circle cx="24" cy="28" r="1.2" fill="#FFD700" opacity="0.8"/><circle cx="76" cy="28" r="1.2" fill="#cc44ff" opacity="0.8"/>
    <circle cx="18" cy="58" r="0.8" fill="#ff44cc" opacity="0.7"/><circle cx="82" cy="58" r="0.8" fill="#FFD700" opacity="0.7"/>`, 'tama-anim-cosmic'),
];

// ─── ICE PHOENIX (Kok Leong - Designer) ───
const ICE_PHOENIX = [
  // Stage 0: Egg - icy blue crystalline
  w(`<ellipse cx="50" cy="55" rx="22" ry="28" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <path d="M40 45 L45 35 L50 45 L55 35 L60 45" fill="none" stroke="#4A90E2" stroke-width="1" opacity="0.6"/>
    <circle cx="45" cy="55" r="2" fill="#4A90E2" opacity="0.7"/><circle cx="55" cy="55" r="2" fill="#4A90E2" opacity="0.7"/>
    <circle cx="50" cy="65" r="2.5" fill="#87CEEB" opacity="0.8"/>`, 'tama-anim-slow'),

  // Stage 1: Baby Bird - small blue bird
  w(`<ellipse cx="50" cy="62" rx="16" ry="15" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <ellipse cx="50" cy="42" rx="11" ry="10" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <circle cx="46" cy="41" r="3.5" fill="white"/><circle cx="54" cy="41" r="3.5" fill="white"/>
    <circle cx="46" cy="41" r="2" fill="#FF6B35"/><circle cx="54" cy="41" r="2" fill="#FF6B35"/>
    <circle cx="46.5" cy="40" r="0.8" fill="white"/><circle cx="54.5" cy="40" r="0.8" fill="white"/>
    <path d="M48 50 Q50 51 52 50" fill="none" stroke="#4A90E2" stroke-width="1" stroke-linecap="round"/>
    <path d="M65 60 Q72 58 75 63" fill="#87CEEB" opacity="0.7"/><path d="M35 60 Q28 58 25 63" fill="#87CEEB" opacity="0.7"/>`),

  // Stage 2: Young Phoenix - growing wings
  w(`<path d="M28 58 Q18 48 20 68" fill="#87CEEB" opacity="0.7"/><path d="M72 58 Q82 48 80 68" fill="#87CEEB" opacity="0.7"/>
    <ellipse cx="50" cy="62" rx="18" ry="16" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <ellipse cx="50" cy="40" rx="12" ry="11" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <circle cx="46" cy="40" r="4" fill="white"/><circle cx="54" cy="40" r="4" fill="white"/>
    <circle cx="46" cy="40" r="2.5" fill="#FF6B35"/><circle cx="54" cy="40" r="2.5" fill="#FF6B35"/>
    <circle cx="46.5" cy="39" r="1" fill="white"/><circle cx="54.5" cy="39" r="1" fill="white"/>
    <path d="M48 50 Q50 52 52 50" fill="none" stroke="#4A90E2" stroke-width="1.1" stroke-linecap="round"/>
    <polygon points="48,32 50,24 52,32" fill="#4A90E2"/>
    <circle cx="38" cy="65" r="2.5" fill="#FFD700" opacity="0.7"/><circle cx="62" cy="65" r="2.5" fill="#FFD700" opacity="0.7"/>`),

  // Stage 3: Teen Phoenix - with ice crown
  w(`<path d="M26 56 Q10 42 14 70 Q22 68 26 56Z" fill="#87CEEB" opacity="0.8"/>
    <path d="M74 56 Q90 42 86 70 Q78 68 74 56Z" fill="#87CEEB" opacity="0.8"/>
    <ellipse cx="50" cy="64" rx="20" ry="18" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <ellipse cx="50" cy="38" rx="13" ry="11" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <polygon points="46,30 48,18 50,30" fill="#4A90E2"/><polygon points="50,30 52,18 54,30" fill="#4A90E2"/>
    <circle cx="45" cy="38" r="4.5" fill="white"/><circle cx="55" cy="38" r="4.5" fill="white"/>
    <circle cx="45" cy="38" r="3" fill="#FF6B35"/><circle cx="55" cy="38" r="3" fill="#FF6B35"/>
    <circle cx="45" cy="38" r="1.3" fill="white"/><circle cx="55" cy="38" r="1.3" fill="white"/>
    <path d="M48 50 Q50 52 52 50" fill="none" stroke="#4A90E2" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M72 70 Q84 76 82 86" fill="none" stroke="#87CEEB" stroke-width="4" stroke-linecap="round"/>`),

  // Stage 4: Adult Phoenix - full wings
  w(`<path d="M22 54 Q2 36 8 72 Q18 70 22 54Z" fill="#87CEEB" opacity="0.85"/>
    <path d="M78 54 Q98 36 92 72 Q82 70 78 54Z" fill="#87CEEB" opacity="0.85"/>
    <ellipse cx="50" cy="64" rx="22" ry="19" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <ellipse cx="50" cy="37" rx="14" ry="12" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <polygon points="45,28 47,15 49,28" fill="#4A90E2"/><polygon points="51,28 53,15 55,28" fill="#4A90E2"/>
    <circle cx="44" cy="37" r="5" fill="white"/><circle cx="56" cy="37" r="5" fill="white"/>
    <circle cx="44" cy="37" r="3.5" fill="#FF6B35"/><circle cx="56" cy="37" r="3.5" fill="#FF6B35"/>
    <circle cx="44" cy="37" r="1.8" fill="#FFD700"/><circle cx="56" cy="37" r="1.8" fill="#FFD700"/>
    <circle cx="44.5" cy="36" r="0.7" fill="white"/><circle cx="56.5" cy="36" r="0.7" fill="white"/>
    <path d="M48 50 Q50 52 52 50" fill="none" stroke="#4A90E2" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M72 70 Q88 78 86 90" fill="none" stroke="#87CEEB" stroke-width="5" stroke-linecap="round"/>
    <path d="M72 70 Q88 78 86 90" fill="none" stroke="#FFD700" stroke-width="2.5" stroke-linecap="round"/>`),

  // Stage 5: Elder Phoenix - golden ice
  w(`<circle cx="50" cy="50" r="40" fill="none" stroke="#87CEEB" stroke-width="1.5" opacity="0.5" stroke-dasharray="6 3"/>
    <line x1="22" y1="50" x2="5" y2="32" stroke="#FFD700" stroke-width="2" opacity="0.9"/><circle cx="4" cy="31" r="3" fill="#FFD700" opacity="0.95"/>
    <line x1="78" y1="50" x2="95" y2="32" stroke="#FFD700" stroke-width="2" opacity="0.9"/><circle cx="96" cy="31" r="3" fill="#FFD700" opacity="0.95"/>
    <line x1="50" y1="22" x2="50" y2="2" stroke="#FFD700" stroke-width="2.5" opacity="0.95"/><circle cx="50" cy="1" r="3" fill="#FFD700" opacity="0.95"/>
    <path d="M22 54 Q2 36 8 72 Q18 70 22 54Z" fill="#87CEEB" opacity="0.85"/>
    <path d="M78 54 Q98 36 92 72 Q82 70 78 54Z" fill="#87CEEB" opacity="0.85"/>
    <ellipse cx="50" cy="64" rx="22" ry="19" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <ellipse cx="50" cy="37" rx="14" ry="12" fill="#87CEEB" stroke="#4A90E2" stroke-width="1"/>
    <polygon points="45,28 47,15 49,28" fill="#4A90E2"/><polygon points="51,28 53,15 55,28" fill="#4A90E2"/>
    <circle cx="44" cy="37" r="5" fill="white"/><circle cx="56" cy="37" r="5" fill="white"/>
    <circle cx="44" cy="37" r="3.5" fill="#FF6B35"/><circle cx="56" cy="37" r="3.5" fill="#FF6B35"/>
    <circle cx="44" cy="37" r="1.8" fill="#FFD700"/><circle cx="56" cy="37" r="1.8" fill="#FFD700"/>
    <circle cx="44.5" cy="36" r="0.7" fill="white"/><circle cx="56.5" cy="36" r="0.7" fill="white"/>
    <path d="M48 50 Q50 52 52 50" fill="none" stroke="#4A90E2" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M72 70 Q88 78 86 90" fill="none" stroke="#87CEEB" stroke-width="5" stroke-linecap="round"/>
    <path d="M72 70 Q88 78 86 90" fill="none" stroke="#FFD700" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="38" y1="60" x2="34" y2="68" stroke="#4A90E2" stroke-width="1.5" opacity="0.7"/>
    <line x1="50" y1="70" x2="50" y2="78" stroke="#4A90E2" stroke-width="1.5" opacity="0.7"/>
    <line x1="62" y1="60" x2="66" y2="68" stroke="#4A90E2" stroke-width="1.5" opacity="0.7"/>
    <circle cx="50" cy="54" r="2" fill="#FFD700" opacity="0.5"/>`, 'tama-anim-glow'),

  // Stage 6: Legend Phoenix - cosmic ice
  w(`<circle cx="50" cy="50" r="40" fill="none" stroke="#87CEEB" stroke-width="1.5" opacity="0.5" stroke-dasharray="6 3"/>
    <line x1="22" y1="50" x2="5" y2="32" stroke="#87CEEB" stroke-width="1.3" opacity="0.7"/>
    <line x1="22" y1="50" x2="5" y2="32" stroke="#FFD700" stroke-width="0.6" opacity="0.9"/>
    <line x1="78" y1="50" x2="95" y2="32" stroke="#87CEEB" stroke-width="1.3" opacity="0.7"/>
    <line x1="78" y1="50" x2="95" y2="32" stroke="#FFD700" stroke-width="0.6" opacity="0.9"/>
    <path d="M18 54 Q-2 36 6 72 Q16 70 18 54Z" fill="#87CEEB" opacity="0.88"/>
    <path d="M82 54 Q98 36 94 72 Q84 70 82 54Z" fill="#87CEEB" opacity="0.88"/>
    <ellipse cx="50" cy="66" rx="24" ry="21" fill="#87CEEB" stroke="#4A90E2" stroke-width="1.5"/>
    <ellipse cx="50" cy="37" rx="15" ry="13" fill="#87CEEB" stroke="#4A90E2" stroke-width="1.2"/>
    <polygon points="44,27 46,12 48,27" fill="#4A90E2"/><polygon points="50,27 52,12 54,27" fill="#4A90E2"/><polygon points="56,27 58,12 60,27" fill="#4A90E2"/>
    <circle cx="46" cy="12" r="2.5" fill="#FFD700"/><circle cx="52" cy="8" r="3" fill="#FFD700"/><circle cx="58" cy="12" r="2.5" fill="#FFD700"/>
    <circle cx="42" cy="37" r="5.5" fill="white"/><circle cx="58" cy="37" r="5.5" fill="white"/>
    <circle cx="42" cy="37" r="4" fill="#FF6B35"/><circle cx="58" cy="37" r="4" fill="#FF6B35"/>
    <circle cx="42" cy="37" r="2.5" fill="#FFD700"/><circle cx="58" cy="37" r="2.5" fill="#FFD700"/>
    <circle cx="42" cy="37" r="1.2" fill="#1a0800"/><circle cx="58" cy="37" r="1.2" fill="#1a0800"/>
    <circle cx="42.5" cy="36" r="0.6" fill="white"/><circle cx="58.5" cy="36" r="0.6" fill="white"/>
    <path d="M48 50 Q50 53 52 50" fill="none" stroke="#4A90E2" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#87CEEB" stroke-width="7" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#FFD700" stroke-width="3.5" stroke-linecap="round"/>`, 'tama-anim-legendary'),

  // Stage 7: Cosmic Phoenix - white and blue cosmic
  w(`<circle cx="50" cy="50" r="44" fill="none" stroke="#00aaff" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
    <circle cx="50" cy="50" r="36" fill="none" stroke="#44ddff" stroke-width="0.8" opacity="0.3" stroke-dasharray="5 3"/>
    <path d="M18 54 Q-2 36 6 72 Q16 70 18 54Z" fill="#87CEEB" opacity="0.88"/>
    <path d="M82 54 Q98 36 94 72 Q84 70 82 54Z" fill="#87CEEB" opacity="0.88"/>
    <ellipse cx="50" cy="66" rx="24" ry="21" fill="#E8F4F8" stroke="#87CEEB" stroke-width="1.5"/>
    <ellipse cx="50" cy="37" rx="15" ry="13" fill="#E8F4F8" stroke="#87CEEB" stroke-width="1.2"/>
    <polygon points="44,27 46,12 48,27" fill="#87CEEB"/><polygon points="50,27 52,12 54,27" fill="#87CEEB"/><polygon points="56,27 58,12 60,27" fill="#87CEEB"/>
    <circle cx="46" cy="12" r="2.5" fill="#00aaff"/><circle cx="52" cy="8" r="3" fill="white"/><circle cx="58" cy="12" r="2.5" fill="#44ddff"/>
    <circle cx="42" cy="37" r="5.5" fill="white"/><circle cx="58" cy="37" r="5.5" fill="white"/>
    <circle cx="42" cy="37" r="4" fill="#87CEEB"/><circle cx="58" cy="37" r="4" fill="#87CEEB"/>
    <circle cx="42" cy="37" r="2.5" fill="#00aaff"/><circle cx="58" cy="37" r="2.5" fill="#00aaff"/>
    <circle cx="42" cy="37" r="1.2" fill="#1a0800"/><circle cx="58" cy="37" r="1.2" fill="#1a0800"/>
    <circle cx="42.5" cy="36" r="0.6" fill="white"/><circle cx="58.5" cy="36" r="0.6" fill="white"/>
    <path d="M48 50 Q50 53 52 50" fill="none" stroke="#87CEEB" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#87CEEB" stroke-width="7" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#00aaff" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="50" cy="66" r="28" fill="none" stroke="#00aaff" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 2"/>`, 'tama-anim-cosmic'),

  // Stage 8: Supreme Phoenix - pure cosmic energy
  w(`<circle cx="50" cy="50" r="46" fill="none" stroke="#FFD700" stroke-width="1.3" opacity="0.3" stroke-dasharray="6 4"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#00aaff" stroke-width="1" opacity="0.4" stroke-dasharray="4 2"/>
    <circle cx="50" cy="50" r="33" fill="none" stroke="#44ddff" stroke-width="0.8" opacity="0.3" stroke-dasharray="5 3"/>
    <path d="M18 54 Q-2 36 6 72 Q16 70 18 54Z" fill="#87CEEB" opacity="0.88"/>
    <path d="M82 54 Q98 36 94 72 Q84 70 82 54Z" fill="#87CEEB" opacity="0.88"/>
    <ellipse cx="50" cy="66" rx="24" ry="21" fill="#F0F8FF" stroke="#87CEEB" stroke-width="1.5"/>
    <ellipse cx="50" cy="37" rx="15" ry="13" fill="#F0F8FF" stroke="#87CEEB" stroke-width="1.2"/>
    <polygon points="44,27 46,12 48,27" fill="#87CEEB"/><polygon points="50,27 52,12 54,27" fill="#87CEEB"/><polygon points="56,27 58,12 60,27" fill="#87CEEB"/>
    <circle cx="46" cy="12" r="2.5" fill="#FFD700"/><circle cx="52" cy="8" r="3" fill="white"/><circle cx="58" cy="12" r="2.5" fill="#FFD700"/>
    <circle cx="42" cy="37" r="5.5" fill="white"/><circle cx="58" cy="37" r="5.5" fill="white"/>
    <circle cx="42" cy="37" r="4" fill="#87CEEB"/><circle cx="58" cy="37" r="4" fill="#87CEEB"/>
    <circle cx="42" cy="37" r="2.5" fill="#FFD700"/><circle cx="58" cy="37" r="2.5" fill="#FFD700"/>
    <circle cx="42" cy="37" r="1.2" fill="#1a0800"/><circle cx="58" cy="37" r="1.2" fill="#1a0800"/>
    <circle cx="42.5" cy="36" r="0.6" fill="white"/><circle cx="58.5" cy="36" r="0.6" fill="white"/>
    <path d="M48 50 Q50 53 52 50" fill="none" stroke="#87CEEB" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#87CEEB" stroke-width="7" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#FFD700" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M73 74 Q92 84 90 96" fill="none" stroke="#00aaff" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="50" cy="66" r="30" fill="none" stroke="#FFD700" stroke-width="0.6" opacity="0.6" stroke-dasharray="2 1"/>
    <circle cx="50" cy="66" r="28" fill="none" stroke="#00aaff" stroke-width="0.6" opacity="0.5" stroke-dasharray="3 2"/>
    <circle cx="24" cy="28" r="1.2" fill="#FFD700" opacity="0.8"/><circle cx="76" cy="28" r="1.2" fill="#00aaff" opacity="0.8"/>
    <circle cx="18" cy="58" r="0.8" fill="#44ddff" opacity="0.7"/><circle cx="82" cy="58" r="0.8" fill="#FFD700" opacity="0.7"/>`, 'tama-anim-cosmic'),
];

export const EXAMPLE_PETS = {
  meemee: {
    petName: 'Inferno',
    stageEmojis: ['🥚', '🐣', '✏️', '🎨', '🐲', '🔥', '✨', '⚡', '🌌'],
    stageNames: ['Egg', 'Baby 1', 'Baby 2', 'Child', 'Teen', 'Adult', 'Legend', 'Cosmic', '✨ SUPREME'],
    svgs: FIRE_DRAGON,
  },
  kokleong: {
    petName: 'Frostwhisper',
    stageEmojis: ['❄️', '🧊', '🐦', '🦅', '🦆', '🕊️', '✨', '⭐', '🌟'],
    stageNames: ['Egg', 'Baby 1', 'Baby 2', 'Child', 'Teen', 'Adult', 'Legend', 'Cosmic', '✨ SUPREME'],
    svgs: ICE_PHOENIX,
  },
};
