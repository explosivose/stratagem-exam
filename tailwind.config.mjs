/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'terminal-green': '#00ff88',
				'terminal-amber': '#ffdd44',
				'terminal-dark': '#0a0a0a',
				'terminal-gray': '#2a2a2a',
				'terminal-border': '#555555',
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
			},
			animation: {
				'terminal-blink': 'blink 1s infinite',
				'scan-line': 'scanline 2s linear infinite',
			},
			keyframes: {
				blink: {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' },
				},
				scanline: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}