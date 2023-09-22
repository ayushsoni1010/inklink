import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'xxx-small': '4px',
        'xx-small': '8px',
        'x-small': '12px',
        'small': '16px',
        'medium': '20px',
        'big': '24px',
        'x-big': '28px',
        'xx-big': '32px',
        'xxx-big': '40px',
        'large': '48px',
        'x-large': '64px',
        'xx-large': '80px',
        'xxx-large': '96px',
        'huge': '128px',
        'x-huge': '160px',
        'xx-huge': '192px',
      }
    },
  },
  plugins: [],
}
export default config
