tailwind.config = {
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                background: '#FDFBF7',
                surface: '#FFFFFF',
                ink: '#1F2937',
                muted: '#6B7280',
                accent: '#EA580C', 
                'accent-light': '#FFF7ED',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', 
                'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            }
        }
    }
}