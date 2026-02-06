/**
 * DarkVeil Shader - Fondo médico premium con GLSL
 * Nueva Paleta Médica: #1E3E54, #2F5876, #F4EBDD
 * Reacciona al movimiento del mouse con efecto de profundidad
 */

export const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  varying vec2 vUv;

  // Nueva Paleta Médica Dr. Cardona
  const vec3 colorDark = vec3(0.118, 0.243, 0.329);      // #1E3E54 (Azul Oscuro Clínico)
  const vec3 colorBlack = vec3(0.0, 0.0, 0.0);           // #000000
  const vec3 colorAccent = vec3(0.184, 0.345, 0.463);    // #2F5876 (Azul Médico Profundo)
  const vec3 colorBeige = vec3(0.957, 0.922, 0.867);     // #F4EBDD (Beige Clínico - sutil)

  // Noise function (Simplex-like)
  float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  // Smooth noise
  float smoothNoise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Fractal Brownian Motion
  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 2.0;

    for(int i = 0; i < 5; i++) {
      value += amplitude * smoothNoise(st * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    // Normalizar coordenadas
    vec2 st = vUv;
    vec2 mouse = uMouse * 0.5 + 0.5; // Normalizar mouse

    // Distancia al mouse (efecto de profundidad)
    float distToMouse = distance(st, mouse);
    float mouseInfluence = smoothstep(0.6, 0.0, distToMouse);

    // Animación de tiempo
    float time = uTime * 0.1;

    // Patrones de ruido animados
    vec2 noiseCoord = st * 3.0 + vec2(time * 0.3, time * 0.2);
    float noisePattern = fbm(noiseCoord);

    // Segundo layer de ruido para profundidad
    vec2 noiseCoord2 = st * 2.0 - vec2(time * 0.15, time * 0.25);
    float noisePattern2 = fbm(noiseCoord2);

    // Gradiente radial desde el centro
    vec2 center = vec2(0.5, 0.5);
    float radialGradient = 1.0 - distance(st, center) * 1.2;

    // Mix de colores base
    vec3 baseColor = mix(colorBlack, colorDark, noisePattern * 0.8);

    // Agregar acentos de color médico
    float accentMask = noisePattern2 * mouseInfluence * 0.3;
    vec3 finalColor = mix(baseColor, colorAccent, accentMask);

    // Iluminación sutil desde el centro (con toque beige cálido)
    finalColor += colorAccent * radialGradient * 0.12;
    finalColor += colorBeige * radialGradient * 0.02; // Sutil calidez

    // Vignette sutil
    float vignette = smoothstep(0.0, 0.6, radialGradient);
    finalColor *= vignette * 0.9 + 0.1;

    // Respuesta al mouse
    finalColor += colorAccent * mouseInfluence * 0.15;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;
