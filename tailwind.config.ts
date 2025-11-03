import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			oswald: [
  				'var(--font-oswald)'
  			],
  			pixel: [
  				'var(--font-pixel)'
  			]
  		},
  		screens: {
  			xs: '520px',
  			'2xl': '1400px'
  		},
  		colors: {
  			primary: {
  				background: 'rgba(255, 255, 255, .05)',
  				foreground: 'hsl(var(--primary-foreground))',
  				DEFAULT: 'hsl(var(--primary))'
  			},
  			secondary: {
  				background: 'rgba(255, 255, 255, .03)',
  				foreground: 'hsl(var(--secondary-foreground))',
  				DEFAULT: 'hsl(var(--secondary))'
  			},
  			blue: {
  				joust: '#56acff',
  				cosmos: '#003049',
  				hera: '#7179ef'
  			},
  			green: {
  				benzol: '#00d372'
  			},
  			pink: {
  				ice: '#d87cac'
  			},
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			grain: 'url(/assets/images/background/noisy-background.png)'
  		},
  		animation: {
  			'noisy-bg': 'noise 1s steps(2) infinite'
  		},
  		keyframes: {
  			noise: {
  				'0%': {
  					transform: 'translate3d(0, 9rem, 0)'
  				},
  				'10%': {
  					transform: 'translate3d(-1rem, -4rem, 0)'
  				},
  				'20%': {
  					transform: 'translate3d(-8rem, 2rem, 0)'
  				},
  				'30%': {
  					transform: 'translate3d(9rem, -9rem, 0)'
  				},
  				'40%': {
  					transform: 'translate3d(-2rem, 7rem, 0)'
  				},
  				'50%': {
  					transform: 'translate3d(-9rem, -4rem, 0)'
  				},
  				'60%': {
  					transform: 'translate3d(2rem, 6rem, 0)'
  				},
  				'70%': {
  					transform: 'translate3d(7rem, -8rem, 0)'
  				},
  				'80%': {
  					transform: 'translate3d(-9rem, 1rem, 0)'
  				},
  				'90%': {
  					transform: 'translate3d(6rem, -5rem, 0)'
  				},
  				to: {
  					transform: 'translate3d(-7rem, 0, 0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
