# 🏥 Dr. Daniel Cardona - Landing Page de Élite

Landing page premium para cirugía plástica y tratamiento de lipedema en Bogotá.

## ✨ Características Implementadas

### ✅ PASO 1: Arquitectura Base
- Next.js 14 con App Router
- TypeScript (strict mode)
- Tailwind CSS con Design System médico premium
- DarkVeil shader background (GLSL)
- Componentes animados premium (Framer Motion)

### ✅ PASO 2: Hero Section
- Layout binario optimizado para conversión (F-Pattern)
- Imagen del doctor con efecto "Medical Glow Frame"
- Headline animado palabra por palabra (SplitText)
- CTA magnético con integración WhatsApp
- Trust badges y social proof

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

### 3. Abrir en navegador

Navega a [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### Actualizar información del doctor

Edita el archivo: **`src/config/siteConfig.ts`**

```typescript
export const siteConfig = {
  name: 'Dr. Daniel Cardona',
  whatsapp: {
    number: '+573001234567', // 👈 ACTUALIZAR AQUÍ
    message: 'Hola, me gustaría agendar una consulta',
  },
  // ... más configuración
};
```

### Cambiar imágenes

Reemplaza las imágenes en: **`public/assets/images/`**

- `doctor-hero.jpg` - Imagen principal del hero
- `doctor-portrait.jpg` - Retrato secundario
- `doctor-professional.jpg` - Imagen de alta calidad

### Modificar colores

Edita: **`tailwind.config.ts`**

```typescript
colors: {
  brand: {
    black: '#000000',
    dark: '#070A0F',
    accent: '#0A3D62', // Color principal médico
  }
}
```

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal + SEO
│   │   └── page.tsx            # Página principal
│   │
│   ├── components/
│   │   ├── animated/           # Componentes animados
│   │   │   ├── SplitText.tsx
│   │   │   ├── MagnetButton.tsx
│   │   │   ├── SpotlightCard.tsx
│   │   │   └── ScrollFloat.tsx
│   │   │
│   │   ├── effects/
│   │   │   └── DarkVeil.tsx    # Shader background
│   │   │
│   │   ├── sections/
│   │   │   └── HeroSection.tsx # ✅ COMPLETADO
│   │   │
│   │   └── ui/
│   │       └── GlowImage.tsx   # Imagen con efectos premium
│   │
│   ├── lib/
│   │   ├── shaders/            # GLSL shaders
│   │   ├── hooks/              # Custom hooks
│   │   └── utils/              # Utilidades
│   │
│   ├── config/
│   │   └── siteConfig.ts       # ⚙️ Configuración centralizada
│   │
│   └── styles/
│       └── globals.css         # Design System
│
├── public/
│   └── assets/
│       └── images/             # Imágenes optimizadas
│
└── ARCHITECTURE.md             # Documentación técnica
```

## 🎯 Próximas Secciones

- [ ] **PASO 3**: Sección de Empatía (Problema)
- [ ] **PASO 4**: Mecanismo Único (Solución - Protocolo LIP360)
- [ ] **PASO 5**: Social Proof & Trust
- [ ] **PASO 6**: Risk Reversal & Conversión Final (FAQ + CTA)

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Producción
npm run build        # Compilar para producción
npm run start        # Iniciar servidor de producción

# Linting
npm run lint         # Verificar código
```

## 🔧 Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| Framework | Next.js | 14.2.0 |
| Language | TypeScript | 5.4.0 |
| Styling | Tailwind CSS | 3.4.0 |
| Animations | Framer Motion | 11.0.0 |
| 3D/Shaders | Three.js + R3F | 0.162.0 |
| UI Library | Custom Components | - |

## 🌐 SEO y Performance

- ✅ Metadata optimizado (Open Graph + Twitter Cards)
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Lazy loading automático
- ✅ Fonts optimizados (Google Fonts)
- ✅ Shader GPU accelerated

## 📱 Responsive Design

- ✅ Mobile First approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Layout binario se convierte en stack vertical en mobile
- ✅ Touch-friendly interactions

## 🔒 Variables de Entorno

Crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=+573001234567
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Opcional: Google Analytics
```

## 📊 Analytics (Opcional)

Descomenta el código de Google Analytics en `src/app/layout.tsx` cuando tengas tu ID.

## 🐛 Troubleshooting

### Problema: Shader no se muestra
**Solución**: Verifica que WebGL esté habilitado en tu navegador.

### Problema: Imágenes no cargan
**Solución**: Verifica que las imágenes estén en `public/assets/images/`.

### Problema: Errores de TypeScript
**Solución**: Ejecuta `npm install` de nuevo.

## 📄 Licencia

Proyecto privado - Dr. Daniel Cardona © 2026

## 🤝 Soporte

Para soporte técnico, consulta el archivo [ARCHITECTURE.md](ARCHITECTURE.md).

---

**Desarrollado con Claude Code + Senior Frontend + Senior Architect**
