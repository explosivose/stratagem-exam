export interface Stratagem {
  id: string;
  name: string;
  sequence: ('up' | 'down' | 'left' | 'right')[];
  icon: string; // emoji or icon character for now
  category: 'offensive' | 'defensive' | 'supply' | 'reinforcement';
}

export const stratagems: Stratagem[] = [
  // Offensive Stratagems
  {
    id: 'orbital-precision-strike',
    name: 'Orbital Precision Strike',
    sequence: ['right', 'right', 'up'],
    icon: '🎯',
    category: 'offensive'
  },
  {
    id: 'orbital-airburst-strike',
    name: 'Orbital Airburst Strike',
    sequence: ['right', 'right', 'right'],
    icon: '💥',
    category: 'offensive'
  },
  {
    id: 'orbital-120mm-he-barrage',
    name: 'Orbital 120MM HE Barrage',
    sequence: ['right', 'right', 'down', 'left', 'right', 'down'],
    icon: '🚀',
    category: 'offensive'
  },
  {
    id: 'orbital-380mm-he-barrage',
    name: 'Orbital 380MM HE Barrage',
    sequence: ['right', 'down', 'up', 'up', 'left', 'down', 'down'],
    icon: '💣',
    category: 'offensive'
  },
  {
    id: 'eagle-strafing-run',
    name: 'Eagle Strafing Run',
    sequence: ['right', 'right', 'right'],
    icon: '🦅',
    category: 'offensive'
  },
  {
    id: 'eagle-airstrike',
    name: 'Eagle Airstrike',
    sequence: ['right', 'right', 'down', 'right'],
    icon: '✈️',
    category: 'offensive'
  },
  
  // Defensive Stratagems
  {
    id: 'shield-generator-relay',
    name: 'Shield Generator Relay',
    sequence: ['down', 'down', 'left', 'right', 'left', 'right'],
    icon: '🛡️',
    category: 'defensive'
  },
  {
    id: 'tesla-tower',
    name: 'Tesla Tower',
    sequence: ['right', 'up', 'right', 'up', 'left', 'right'],
    icon: '⚡',
    category: 'defensive'
  },
  {
    id: 'anti-personnel-minefield',
    name: 'Anti-Personnel Minefield',
    sequence: ['down', 'left', 'up', 'right'],
    icon: '💎',
    category: 'defensive'
  },
  
  // Supply Stratagems
  {
    id: 'resupply',
    name: 'Resupply',
    sequence: ['down', 'down', 'up', 'right'],
    icon: '📦',
    category: 'supply'
  },
  {
    id: 'hellbomb',
    name: 'Hellbomb',
    sequence: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'],
    icon: '🧨',
    category: 'supply'
  },
  {
    id: 'smoke-barrage',
    name: 'Smoke Barrage',
    sequence: ['right', 'right', 'down', 'left'],
    icon: '💨',
    category: 'supply'
  },
  
  // Reinforcement
  {
    id: 'reinforce',
    name: 'Reinforce',
    sequence: ['up', 'right', 'down', 'right', 'up'],
    icon: '👥',
    category: 'reinforcement'
  },
  {
    id: 'seaf-artillery',
    name: 'SEAF Artillery',
    sequence: ['right', 'up', 'up', 'down'],
    icon: '🔫',
    category: 'reinforcement'
  }
];

export function getRandomStratagem(): Stratagem {
  return stratagems[Math.floor(Math.random() * stratagems.length)];
}

export function getKeySymbol(key: string): string {
  const keyMap: Record<string, string> = {
    up: '↑',
    down: '↓',
    left: '←',
    right: '→'
  };
  return keyMap[key] || key;
}