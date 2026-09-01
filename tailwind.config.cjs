module.exports = {
  content: [
    './*.html',
    './workshop-content/**/*.html',
    './i18n.js'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F7F2',
        bgLight: '#F7F7F2',
        cream: '#F7F7F2',
        ink: '#111111',
        text: '#111111',
        textDark: '#111111',
        purple: { DEFAULT: '#6C4DFF', light: '#8B73FF' },
        teal: { DEFAULT: '#00C2A8', light: '#33CEB9' },
        orange: { DEFAULT: '#FF5C35', light: '#FF7D5C' },
        brandPurple: '#6C4DFF',
        brandTeal: '#00C2A8',
        brandOrange: '#FF5C35',
        jam: {
          bg: '#F7F7F2',
          text: '#111111',
          purple: '#6C4DFF',
          teal: '#00C2A8',
          orange: '#FF5C35'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        brutal: '8px 8px 0 0 #111111',
        'brutal-sm': '4px 4px 0 0 #111111',
        'brutal-lg': '12px 12px 0 0 #111111',
        'brutal-hover': '2px 2px 0 0 #111111',
        'brutal-active': '2px 2px 0 0 #111111',
        'brutal-purple': '8px 8px 0 0 #6C4DFF',
        'brutal-teal': '8px 8px 0 0 #00C2A8',
        'brutal-orange': '8px 8px 0 0 #FF5C35',
        neo: '4px 4px 0 0 #111111',
        'neo-lg': '8px 8px 0 0 #111111',
        'neo-active': '0 0 0 0 #111111',
        'neo-purple': '4px 4px 0 0 #6C4DFF'
      },
      borderWidth: { 3: '3px', 4: '4px' },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#111111 1px, transparent 1px)'
      },
      backgroundSize: { 'grid-sm': '20px 20px' },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'cursor-move': 'cursorMove 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'terminal-type': 'terminalType 4s steps(40, end) infinite'
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-reverse': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        cursorMove: {
          '0%, 100%': { top: '80%', left: '80%', transform: 'scale(1)' },
          '20%': { top: '50%', left: '40%', transform: 'scale(1)' },
          '30%': { top: '50%', left: '40%', transform: 'scale(.9)' },
          '35%': { top: '50%', left: '40%', transform: 'scale(1)' },
          '60%': { top: '30%', left: '70%', transform: 'scale(1)' },
          '80%': { top: '70%', left: '20%', transform: 'scale(1)' }
        },
        float: { '0%, 100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-20px) rotate(5deg)' } },
        pulseGlow: { '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,194,168,.4)' }, '50%': { boxShadow: '0 0 20px 10px rgba(0,194,168,0)' } },
        terminalType: { '0%, 10%': { width: '0' }, '70%, 100%': { width: '100%' } }
      }
    }
  }
};
