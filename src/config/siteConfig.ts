/**
 * Site Configuration - Dr. Daniel Cardona
 * Configuración centralizada de contenido y metadatos
 */

export const siteConfig = {
  name: 'Dr. Daniel Cardona',
  title: 'Dr. Daniel Cardona - Cirujano Plástico Especialista en Cirugía de Lipedema | LegSculpt360',
  description:
    'Protocolo LegSculpt360: cirugía de descarga + drenaje linfático + seguimiento 1 año',
  url: 'https://www.drdanielcardona.com/lipedema',
  whatsapp: {
    number: '+573105302266',
    message: 'Hola, me gustaría agendar una consulta',
  },
  location: {
    city: 'Bogotá',
    area: 'Usaquén',
    center: 'Centro Médico de la Sabana',
  },
  consultation: {
    price: 'Consulta presencial o virtual 300.000 COP (85 USD)',
    currency: 'COP',
  },
  // Framework PASTOR
  pastor: {
    // Público (Avatar)
    audience: {
      primary: 'Pacientes con lipedema que buscan solución real',
      secondary: ['Cirugía facial (armonización/rejuvenecimiento)', 'Cirugía corporal (contorno)'],
      profile: 'Personas que valoran confianza clínica, explicación clara y trato humano',
    },
    // Dolor "Quemante"
    pain: {
      headline: 'Llevo años con dolor, pesadez e inflamación que no mejora con dieta ni ejercicio',
      points: [
        'Dolor y pesadez constante en piernas y/o brazos',
        'Desproporción corporal frustrante',
        'Me dijeron que es obesidad o celulitis',
        'Pérdida de tiempo, dinero y autoestima',
        'Necesito un diagnóstico claro y tratamiento real',
      ],
    },
    // La Gran Promesa (Headline)
    promise:
      'Dr. Daniel Cardona - Cirujano Plástico\nEspecialista en Cirugía de Lipedema\n#LegSculpt360',
    // Mecanismo Único
    mechanism: {
      name: 'Protocolo LegSculpt360',
      description: 'Cirugía de Descarga + Drenaje Linfático + Seguimiento Integral',
      steps: [
        {
          title: 'Valoración y selección',
          description: 'Diagnóstico clínico preciso y evaluación de criterios médicos',
        },
        {
          title: 'Educación del paciente',
          description: 'Explicación clara: qué es lipedema, opciones y expectativas realistas',
        },
        {
          title: 'Plan integral personalizado',
          description: 'Componente quirúrgico (cuando aplica) + componente conservador',
        },
        {
          title: 'Soporte terapéutico',
          description: 'Coordinación con drenaje linfático, compresión, presoterapia y hábitos',
        },
        {
          title: 'Seguimiento médico',
          description: 'Controles programados y optimización continua del plan',
        },
      ],
    },
    // Prueba Social
    proof: {
      location: 'Bogotá (Centro Médico de la Sabana, Usaquén)',
      consultationPrice: 'Consulta presencial o virtual 300.000 COP (85 USD)',
      approach: 'Atención privada y contacto directo por WhatsApp',
      integration: 'Centro especializado en lipedema/linfedema (terapia + opción quirúrgica)',
      target: 'Pacientes nacionales e internacionales',
    },
    // CTA Final
    cta: {
      primary: 'Agendar consulta por WhatsApp',
      secondary: 'Respuesta del equipo para coordinar tu valoración',
    },
  },
};

export const faqData = [
  {
    question: '¿Soy candidata/o para cirugía de lipedema?',
    answer:
      'La candidatura se determina en la valoración inicial. Evaluamos el grado de lipedema, tu salud general, objetivos y expectativas. No todos los casos requieren cirugía; algunos se manejan con terapia conservadora.',
  },
  {
    question: '¿Qué incluye la valoración inicial?',
    answer:
      'La consulta incluye: historia clínica completa, examen físico detallado, explicación del diagnóstico, revisión de opciones terapéuticas (conservadoras y/o quirúrgicas), respuesta a todas tus dudas y entrega de plan personalizado.',
  },
  {
    question: '¿Cómo es el plan integral (antes y después)?',
    answer:
      'Antes: preparación con indicaciones claras, coordinación de estudios si aplica y educación sobre el procedimiento. Después: seguimiento con controles programados, terapia física (drenaje, compresión), indicaciones de cuidado y optimización continua.',
  },
  {
    question: '¿Atiende pacientes internacionales? ¿Cómo coordinamos el viaje?',
    answer:
      'Sí, atendemos pacientes del exterior. Coordinamos por WhatsApp: valoración, cronograma de estancia recomendado, indicaciones pre-viaje y seguimiento remoto post-procedimiento. Te acompañamos en cada paso.',
  },
  {
    question: '¿Dónde es la consulta y cómo agendo por WhatsApp?',
    answer:
      'La consulta es en Bogotá (Centro Médico de la Sabana, Usaquén). Para agendar, envía un mensaje por WhatsApp con tu nombre, ciudad/país de origen y motivo de consulta. El equipo responde para coordinar fecha disponible.',
  },
];

export const testimonialsData = [
  {
    initials: 'M.G.',
    text: 'Me devolvió movilidad y alivio',
    location: 'Bogotá',
  },
  {
    initials: 'L.R.',
    text: 'Por fin entendí mi diagnóstico',
    location: 'Cali',
  },
  {
    initials: 'A.S.',
    text: 'Acompañamiento impecable',
    location: 'Medellín',
  },
];
