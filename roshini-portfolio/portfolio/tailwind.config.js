export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { paper: '#F5F7F8', ink: '#0F1C2B', mute: '#566676', line: '#D6DEE4', teal: { DEFAULT: '#0B6A6A', soft: '#E3F0EF' } },
    fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['"Public Sans"', 'system-ui', 'sans-serif'] }
  } }
}
