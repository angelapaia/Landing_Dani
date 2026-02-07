# 🚀 Guía de Despliegue en Vercel

## Pre-requisitos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub con el código
- Node.js 18.17.0 o superior

## 🎯 Deployment Automático (Recomendado)

### 1. Conectar con Vercel

1. Ve a [https://vercel.com/new](https://vercel.com/new)
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio: `Lannding-Daniel`
4. Vercel detectará automáticamente que es un proyecto Next.js

### 2. Configuración del Proyecto

Vercel configurará automáticamente:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Variables de Entorno (Opcional)

Si necesitas sobrescribir la configuración por defecto:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### 4. Deploy

1. Click en **Deploy**
2. Espera a que termine el build (~2-3 minutos)
3. Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`

## 🌐 Dominio Personalizado

### Agregar dominio personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Click en **Settings** → **Domains**
3. Agrega tu dominio: `drdanielcardona.com`
4. Sigue las instrucciones para configurar DNS:
   - **Tipo A**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

### Configuración DNS recomendada

```
A     @             76.76.21.21
CNAME www           cname.vercel-dns.com
CNAME es            cname.vercel-dns.com
CNAME en            cname.vercel-dns.com
```

## 🔄 Deploy Continuo

Cada push a `main` desplegará automáticamente:
- ✅ Push a `main` → Deploy a producción
- ✅ Push a otras ramas → Preview deployments
- ✅ Pull Requests → Preview automático

## 📊 Optimizaciones de Vercel

El proyecto ya está optimizado con:
- ✅ Static Site Generation (SSG) para `/es` y `/en`
- ✅ Edge Middleware para i18n routing
- ✅ Image Optimization automático
- ✅ Compresión Gzip/Brotli
- ✅ Headers de seguridad configurados

## 🧪 Testing Local de Producción

```bash
# Build de producción
npm run build

# Servir build de producción
npm run start

# Visita http://localhost:3000
```

## 📱 URLs Finales

Una vez desplegado:
- **Español (default)**: `https://drdanielcardona.com/es`
- **English**: `https://drdanielcardona.com/en`
- **Root redirect**: `https://drdanielcardona.com` → `/es`

## 🔍 Verificación Post-Deploy

Verifica que todo funcione:
- [ ] Cambio de idioma (ES ↔ EN)
- [ ] Botón WhatsApp funcional
- [ ] Imágenes cargando correctamente
- [ ] SEO meta tags (Open Graph, Twitter Cards)
- [ ] Rendimiento (Core Web Vitals)
- [ ] Mobile responsive

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Error: "Invalid locale"
Verifica que `middleware.ts` esté en la raíz del proyecto.

### Error: "Translation missing"
Verifica que `messages/es.json` y `messages/en.json` existan.

## 📈 Analytics (Opcional)

Para agregar analytics:
1. Ve a **Settings** → **Analytics**
2. Enable **Vercel Analytics**
3. Enable **Speed Insights**

## 🔒 Seguridad

Headers de seguridad ya configurados en `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## 🎨 Performance

Métricas esperadas:
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

**¿Problemas?** Revisa los [logs de Vercel](https://vercel.com/docs/concepts/deployments/logs)
