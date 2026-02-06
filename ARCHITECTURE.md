# 🏗️ Arquitectura - Dr. Daniel Cardona Landing Page

## 📐 Estructura del Proyecto

```
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Página principal
│   │   └── globals.css           # Importación de estilos
│   │
│   ├── components/
│   │   ├── layout/               # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── sections/             # Secciones de la landing
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── ProofSection.tsx
│   │   │   └── CtaSection.tsx
│   │   │
│   │   ├── ui/                   # Componentes UI reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Accordion.tsx
│   │   │
│   │   ├── animated/             # Componentes con animaciones
│   │   │   ├── SplitText.tsx     # ✅ Texto animado palabra por palabra
│   │   │   ├── MagnetButton.tsx  # ✅ Botón con efecto magnético
│   │   │   ├── SpotlightCard.tsx # ✅ Card con spotlight
│   │   │   └── ScrollFloat.tsx   # ✅ Parallax scroll
│   │   │
│   │   └── effects/              # Efectos especiales
│   │       └── DarkVeil.tsx      # ✅ Shader background dinámico
│   │
│   ├── lib/
│   │   ├── shaders/              # GLSL Shaders
│   │   │   └── darkVeilShader.ts # ✅ Shader del fondo
│   │   │
│   │   ├── hooks/                # Custom React Hooks
│   │   │   └── useMousePosition.ts
│   │   │
│   │   └── utils/                # Utilidades
│   │       ├── cn.ts             # Class merge (Tailwind)
│   │       └── whatsapp.ts       # WhatsApp helpers
│   │
│   ├── config/
│   │   └── siteConfig.ts         # ✅ Configuración central (PASTOR)
│   │
│   ├── styles/
│   │   └── globals.css           # ✅ Estilos globales + Tailwind
│   │
│   └── types/                    # TypeScript types
│
├── public/
│   ├── assets/
│   │   ├── images/               # Imágenes optimizadas
│   │   └── fonts/                # Fuentes custom
│
├── imagenes/                     # ✅ Imágenes originales del doctor
│   ├── IMG_2180.heic
│   ├── 74884b67-fc62-46c0-8b76-0faf64c04db0.JPG
│   └── _MG_6287.JPG
│
├── tailwind.config.ts            # ✅ Configuración Tailwind + Design System
├── tsconfig.json                 # ✅ Configuración TypeScript
├── next.config.js                # ✅ Configuración Next.js
├── package.json                  # ✅ Dependencias
└── .env.example                  # Variables de entorno

```

---

## 🎨 Design System

### Paleta de Colores

```typescript
{
  brand: {
    black: '#000000',        // Color Primario
    dark: '#070A0F',         // Color de Fondo
    accent: '#0A3D62',       // Color de Acento (Energía)
    'accent-light': '#0D5186',
    'accent-dark': '#072A45',
  }
}
```

### Tipografía

- **Serif (Autoridad):** `Merriweather` (Headings)
- **Sans (Legibilidad):** `Inter` (Body)

### Sistema de Espaciado

- Grid base: **8pt**
- Secciones: `8rem` (desktop) / `6rem` (mobile)

---

## ⚡ Stack Tecnológico

| Categoría | Tecnología | Propósito |
|-----------|-----------|-----------|
| **Framework** | Next.js 14 (App Router) | SSR, Performance, SEO |
| **Language** | TypeScript | Type Safety |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Animations** | Framer Motion | Interacciones premium |
| **3D/Shaders** | Three.js + React Three Fiber | Background shader dinámico |
| **UI Components** | Custom (React Bits inspired) | Componentes interactivos |

---

## 🧩 Arquitectura de Componentes

### 1. Layout Binario (F-Pattern)

En **Desktop**, el diseño sigue estrictamente:
- **Izquierda:** Texto, Copy, CTAs
- **Derecha:** Imágenes, Visuales, Productos

```tsx
<section className="grid-binary">
  <div>{/* Texto */}</div>
  <div>{/* Visual */}</div>
</section>
```

### 2. Componentes Animados

#### SplitText
```tsx
<SplitText className="text-headline-xl">
  Tratamiento integral del lipedema
</SplitText>
```

#### MagnetButton
```tsx
<MagnetButton href="https://wa.me/573001234567">
  Agendar consulta por WhatsApp
</MagnetButton>
```

#### SpotlightCard
```tsx
<SpotlightCard>
  <h3>Frustración del paciente</h3>
  <p>Copy de agitación</p>
</SpotlightCard>
```

### 3. DarkVeil Shader

Fondo dinámico GLSL que:
- Reacciona al movimiento del mouse
- Usa la paleta de colores (#000000, #070A0F, #0A3D62)
- Optimizado con React Three Fiber

---

## 📋 Framework PASTOR (Contenido)

Toda la configuración de contenido estratégico está centralizada en:
📄 `src/config/siteConfig.ts`

Incluye:
- **Público (Avatar)**
- **Dolor "Quemante"**
- **Gran Promesa (Headline)**
- **Mecanismo Único (Protocolo LIP360)**
- **Prueba Social**
- **CTA Final**

---

## 🚀 Próximos Pasos

### PASO 2: Hero Section ⏳
- Implementar Hero con SplitText + MagnetButton
- Integrar imagen del doctor con glow effect

### PASO 3: Sección de Empatía ⏳
- Copy de agitación
- Grid de SpotlightCards

### PASO 4: Mecanismo Único ⏳
- Explicación del Protocolo LIP360
- Diagrama animado

### PASO 5: Social Proof & Trust ⏳
- Testimonios
- Métricas de autoridad

### PASO 6: Risk Reversal & Conversión ⏳
- FAQ dinámico
- Formulario/CTA final

---

## 📦 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar producción
npm start
```

---

## 🎯 Checklist de Calidad

- [x] Arquitectura modular y escalable
- [x] Design System completo (Tailwind config)
- [x] Shader dinámico (DarkVeil)
- [x] Componentes animados premium (React Bits)
- [x] Configuración centralizada (PASTOR framework)
- [x] TypeScript strict mode
- [x] Optimización de imágenes (Next.js)
- [ ] Hero Section
- [ ] Secciones restantes
- [ ] Optimización SEO
- [ ] Analytics
- [ ] Testing

---

**Arquitectura diseñada por Senior Architect + Senior Frontend**
**Proyecto: Dr. Daniel Cardona - Landing Page Élite**
