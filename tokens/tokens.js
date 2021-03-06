"use strict";
exports.__esModule = true;
exports.decisions = exports.choices = void 0;
exports.choices = {
    colors: {
        brand: {
            meteorite: '#3C1E82',
            logan: '#B1A5CD',
            purpleHeart: '#602FD1',
            hintOfRed: '#f9f9f9',
            romance: '#fcfdfd',
            gray: '#8A8A8A',
            blueMoon: '#eff1fd'
        },
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c'
        },
        red: {
            100: '#fff5f5',
            200: '#fed7d7',
            300: '#feb2b2',
            400: '#fc8181',
            500: '#f56565',
            600: '#e53e3e',
            700: '#c53030',
            800: '#9b2c2c',
            900: '#742a2a'
        },
        orange: {
            100: '#fffaf0',
            200: '#feebc8',
            300: '#fbd38d',
            400: '#f6ad55',
            500: '#ed8936',
            600: '#dd6b20',
            700: '#c05621',
            800: '#9c4221',
            900: '#7b341e'
        },
        yellow: {
            100: '#fffff0',
            200: '#fefcbf',
            300: '#faf089',
            400: '#f6e05e',
            500: '#ecc94b',
            600: '#d69e2e',
            700: '#b7791f',
            800: '#975a16',
            900: '#744210'
        },
        green: {
            100: '#f0fff4',
            200: '#c6f6d5',
            300: '#9ae6b4',
            400: '#68d391',
            500: '#48bb78',
            600: '#38a169',
            700: '#2f855a',
            800: '#276749',
            900: '#22543d'
        },
        teal: {
            100: '#e6fffa',
            200: '#b2f5ea',
            300: '#81e6d9',
            400: '#4fd1c5',
            500: '#38b2ac',
            600: '#319795',
            700: '#2c7a7b',
            800: '#285e61',
            900: '#234e52'
        },
        blue: {
            100: '#ebf8ff',
            200: '#bee3f8',
            300: '#90cdf4',
            400: '#63b3ed',
            500: '#4299e1',
            600: '#3182ce',
            700: '#2b6cb0',
            800: '#2c5282',
            900: '#2a4365'
        },
        indigo: {
            100: '#ebf4ff',
            200: '#c3dafe',
            300: '#a3bffa',
            400: '#7f9cf5',
            500: '#667eea',
            600: '#5a67d8',
            700: '#4c51bf',
            800: '#434190',
            900: '#3c366b'
        },
        purple: {
            100: '#faf5ff',
            200: '#e9d8fd',
            300: '#d6bcfa',
            400: '#b794f4',
            500: '#9f7aea',
            600: '#805ad5',
            700: '#6b46c1',
            800: '#553c9a',
            900: '#44337a'
        },
        pink: {
            100: '#fff5f7',
            200: '#fed7e2',
            300: '#fbb6ce',
            400: '#f687b3',
            500: '#ed64a6',
            600: '#d53f8c',
            700: '#b83280',
            800: '#97266d',
            900: '#702459'
        }
    },
    spacing: {
        none: 0,
        xs: 5,
        sm: 15,
        md: 20,
        lg: 40
    },
    screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        max: {
            xs: '419px',
            sm: '639px',
            md: '767px',
            lg: '1023px',
            xl: '1279px'
        }
    },
    fontFamily: {
        // serif: ['Roboto Slab', '"Times New Roman"', 'serif'],
        sans: ['Poppins', 'Arial', 'sans-serif'],
        mono: ["'Roboto Mono'", "'Courier New'", 'monospace']
    },
    fontSize: {
        base: '10px',
        xs: '1.2rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2.2rem',
        '2xl': '6rem'
    },
    fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
    },
    lineHeight: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2
    },
    letterSpacing: {
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em'
    },
    shadows: {
        none: 'none',
        xs: '0px 3px 6px rgba(0, 0, 0, 0.05)',
        sm: '0px 4px 5px rgba(0, 0, 0, 0.07)'
    },
    minHeight: {
        '0': '0',
        full: '100%',
        screen: '100vh'
    },
    minWidth: {
        '0': '0',
        full: '100%'
    },
    opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1'
    },
    borderRadius: {
        none: '0',
        xs: '4px',
        sm: '10px',
        md: '20px',
        lg: '30px',
        full: '9999px'
    },
    zIndex: {
        auto: 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50'
    },
    borderWidth: {
        none: '0',
        thin: '1px',
        thick: '2px'
    }
};
exports.decisions = {
    colors: {
        primary: exports.choices.colors.brand.meteorite,
        primaryHighlight: exports.choices.colors.brand.blueMoon,
        secundary: exports.choices.colors.brand.purpleHeart,
        fontBase: exports.choices.colors.black,
        fontMuted: exports.choices.colors.brand.gray,
        fontHighlight: exports.choices.colors.brand.gray
    },
    backgroundColor: {
        primary: exports.choices.colors.brand.hintOfRed,
        highlight: exports.choices.colors.brand.romance
    },
    button: {
        maxWidth: '300px'
    },
    input: {
        height: '38px'
    }
};
