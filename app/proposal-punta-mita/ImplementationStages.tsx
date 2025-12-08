"use client";

import { useState } from "react";

interface StageAccordionProps {
  title: string;
  items: string[];
  deliverables: string;
}

function StageAccordion({ title, items, deliverables }: StageAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h4>{title}</h4>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>Entregables:</strong> {deliverables}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ImplementationStages() {
  return (
    <>
      <StageAccordion
        title="Etapa 1: Descubrimiento y Planificación (2 semanas)"
        items={[
          "Kickoff y alineación de expectativas",
          "Mapeo detallado de procesos actuales",
          "Definición de flujos ideales (to-be)",
          "Identificación de Quick Wins",
          "Plan de trabajo y governance",
        ]}
        deliverables="Documento de alcance validado, cronograma definitivo, mapa de procesos"
      />

      <StageAccordion
        title="Etapa 2: Configuración CRM y Arquitectura (2 semanas)"
        items={[
          "Configuración de todos los Hubs contratados",
          "Creación de propiedades personalizadas (hasta 30)",
          "Setup de pipelines y etapas",
          "Configuración de usuarios, roles y permisos",
          "Definición de dashboards iniciales",
        ]}
        deliverables="CRM operativo, pipelines funcionales, usuarios configurados"
      />

      <StageAccordion
        title="Etapa 3: Integración y Migración (2 semanas)"
        items={[
          "Integración Guesty-HubSpot",
          "Migración de base de datos existente",
          "Limpieza y estandarización de registros",
          "Integración de email, calendario y redes sociales",
          "Pruebas de sincronización",
        ]}
        deliverables="Base de datos unificada, integración Guesty activa, validación técnica"
      />

      <StageAccordion
        title="Etapa 4: Automatización y Personalización (3 semanas)"
        items={[
          "Desarrollo de hasta 10 workflows (marketing, ventas, servicio)",
          "Configuración de secuencias de email",
          "Lead scoring y automatizaciones comerciales",
          "Plantillas de documentos y cotizaciones",
          "Automatizaciones basadas en eventos de Guesty",
        ]}
        deliverables="Workflows activos, plantillas configuradas, documentación técnica"
      />

      <StageAccordion
        title="Etapa 5: Content Hub y Sitio Web (2 semanas)"
        items={[
          "Migración de contenido web",
          "Diseño de landing pages",
          "Optimización SEO",
          "Formularios y CTAs",
          "Blog y biblioteca de contenidos",
        ]}
        deliverables="Sitio web migrado, landing pages activas, SEO configurado"
      />

      <StageAccordion
        title="Etapa 6: Capacitación y Adopción (2 semanas)"
        items={[
          "Capacitación Smart CRM - Todo el equipo",
          "Capacitación Marketing Hub - Equipo de marketing",
          "Capacitación Sales Hub - Equipo comercial (2 personas)",
          "Capacitación Service Hub - Equipo de atención",
          "Capacitación Admin - Administrador del sistema",
          "Sesiones de práctica y Q&A",
        ]}
        deliverables="Video memorias, manuales de usuario, certificaciones de asistencia"
      />

      <StageAccordion
        title="Etapa 7: Go-Live y Refinamiento (2 semanas)"
        items={[
          "Monitoreo intensivo post-lanzamiento",
          "Optimización basada en uso real",
          "Ajustes y correcciones",
          "Roadmap de mejora continua",
          "Transferencia de ownership",
        ]}
        deliverables="Informe de resultados, roadmap evolutivo, acta de cierre"
      />

      <StageAccordion
        title="Etapa 8: Soporte Post-Implementación"
        items={[
          "3 horas de soporte técnico: Para resolución de dudas y ajustes menores durante el primer mes post go-live",
          "Garantía de 30 días: Corrección sin costo de cualquier configuración acordada en el alcance",
          "Acceso a materiales: Video memorias, manuales y documentación técnica",
        ]}
        deliverables="Soporte técnico activo, garantía cumplida, materiales entregados"
      />
    </>
  );
}
