export interface Stratagem {
  id: string;
  name: string;
  sequence: ('up' | 'down' | 'left' | 'right')[];
  iconUrl: string;
  category: 'support-weapon' | 'orbital' | 'eagle' | 'bridge' | 'engineering' | 'robotics';
}

// Import asset URLs for Astro
import machineGunIcon from '../assets/stratagems/machine-gun.svg';
import antiMaterielRifleIcon from '../assets/stratagems/anti-materiel-rifle.svg';
import stalwartIcon from '../assets/stratagems/stalwart.svg';
import expendableAntiTankIcon from '../assets/stratagems/expendable-anti-tank.svg';
import recoillessRifleIcon from '../assets/stratagems/recoilless-rifle.svg';
import flamethrowerIcon from '../assets/stratagems/flamethrower.svg';
import autocannonIcon from '../assets/stratagems/autocannon.svg';
import heavyMachineGunIcon from '../assets/stratagems/heavy-machine-gun.svg';
import airburstRocketLauncherIcon from '../assets/stratagems/airburst-rocket-launcher.svg';
import commandoIcon from '../assets/stratagems/commando.svg';
import railgunIcon from '../assets/stratagems/railgun.svg';
import spearIcon from '../assets/stratagems/spear.svg';
import reinforceIcon from '../assets/stratagems/reinforce.svg';
import resupplyIcon from '../assets/stratagems/resupply.svg';
import hellbombIcon from '../assets/stratagems/hellbomb.svg';

export const stratagems: Stratagem[] = [
  // Support Weapons (Patriotic Administration Center)
  {
    id: 'mg-43-machine-gun',
    name: 'MG-43 Machine Gun',
    sequence: ['down', 'left', 'down', 'up', 'right'],
    iconUrl: machineGunIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'apw-1-anti-materiel-rifle',
    name: 'APW-1 Anti-Materiel Rifle',
    sequence: ['down', 'left', 'right', 'up', 'down'],
    iconUrl: antiMaterielRifleIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'm-105-stalwart',
    name: 'M-105 Stalwart',
    sequence: ['down', 'left', 'down', 'up', 'up', 'left'],
    iconUrl: stalwartIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'eat-17-expendable-anti-tank',
    name: 'EAT-17 Expendable Anti-Tank',
    sequence: ['down', 'down', 'left', 'up', 'right'],
    iconUrl: expendableAntiTankIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'gr-8-recoilless-rifle',
    name: 'GR-8 Recoilless Rifle',
    sequence: ['down', 'left', 'right', 'right', 'left'],
    iconUrl: recoillessRifleIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'flam-40-flamethrower',
    name: 'FLAM-40 Flamethrower',
    sequence: ['down', 'left', 'up', 'down', 'up'],
    iconUrl: flamethrowerIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'ac-8-autocannon',
    name: 'AC-8 Autocannon',
    sequence: ['down', 'left', 'down', 'up', 'up', 'right'],
    iconUrl: autocannonIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'mg-206-heavy-machine-gun',
    name: 'MG-206 Heavy Machine Gun',
    sequence: ['down', 'left', 'up', 'down', 'down'],
    iconUrl: heavyMachineGunIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'rl-77-airburst-rocket-launcher',
    name: 'RL-77 Airburst Rocket Launcher',
    sequence: ['down', 'up', 'up', 'left', 'right'],
    iconUrl: airburstRocketLauncherIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'mls-4x-commando',
    name: 'MLS-4X Commando',
    sequence: ['down', 'left', 'up', 'down', 'right'],
    iconUrl: commandoIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'rs-422-railgun',
    name: 'RS-422 Railgun',
    sequence: ['down', 'right', 'down', 'up', 'left', 'right'],
    iconUrl: railgunIcon.src,
    category: 'support-weapon'
  },
  {
    id: 'faf-14-spear',
    name: 'FAF-14 Spear',
    sequence: ['down', 'down', 'up', 'down', 'down'],
    iconUrl: spearIcon.src,
    category: 'support-weapon'
  },
  
  // Essential Mission Stratagems
  {
    id: 'reinforce',
    name: 'Reinforce',
    sequence: ['up', 'right', 'down', 'right', 'up'],
    iconUrl: reinforceIcon.src,
    category: 'bridge'
  },
  {
    id: 'resupply',
    name: 'Resupply',
    sequence: ['down', 'down', 'up', 'right'],
    iconUrl: resupplyIcon.src,
    category: 'bridge'
  },
  {
    id: 'hellbomb',
    name: 'Hellbomb',
    sequence: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'],
    iconUrl: hellbombIcon.src,
    category: 'bridge'
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