tailwind.config = {
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                // Fondo Crema Suave (Papel)
                background: '#FDFBF7',
                // Superficie blanca pura para tarjetas
                surface: '#FFFFFF',
                // Texto principal (Gris oscuro, no negro puro para suavidad)
                ink: '#1F2937',
                // Texto secundario (Gris medio)
                muted: '#6B7280',
                // Color de acento (Terracota/Naranja - Energía y aprendizaje)
                accent: '#EA580C', 
                // Color suave para fondos de tags
                'accent-light': '#FFF7ED',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Sombra muy sutil
                'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            }
        }
    }
}