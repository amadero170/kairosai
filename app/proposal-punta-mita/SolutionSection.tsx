"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <>
      <h2>3. Solución Propuesta</h2>

      <AccordionItem title="3.1 Marketing Hub Professional">
        <h4>Gestión de Bases de Datos y Segmentación</h4>
        <ul>
          <li>
            Centralización de contactos desde múltiples fuentes (50k registros
            existentes)
          </li>
          <li>
            Segmentación dinámica por comportamiento, etapa del buyer journey y
            características de propiedad
          </li>
          <li>Limpieza y estandarización automatizada de datos</li>
          <li>Configuración de hasta 10 segmentos inteligentes</li>
        </ul>

        <h4>Generación y Calificación de Leads</h4>
        <ul>
          <li>Formularios optimizados en landings</li>
          <li>
            Lead scoring automático basado en engagement e intención de compra
          </li>
          <li>Flujos de nurturing para convertir prospectos en clientes</li>
          <li>
            Asignación automática a equipo comercial según criterios definidos
          </li>
        </ul>

        <h4>Automatización de Campañas</h4>
        <ul>
          <li>
            Configuración de hasta 8 workflows de marketing (bienvenida,
            nurturing, reactivación, referidos)
          </li>
          <li>
            Integración con Google Ads, Meta Ads y LinkedIn Ads para atribución
            completa
          </li>
          <li>Automatización de publicaciones en redes sociales</li>
        </ul>

        <h4>Análisis y Reporting</h4>
        <ul>
          <li>Dashboards personalizados de marketing</li>
          <li>Métricas de ROI, CAC, tasa de conversión por canal</li>
          <li>Reportes automáticos programados</li>
          <li>Atribución de ingresos por campaña</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="3.2 Sales Hub Professional (2 asientos)">
        <h4>Pipeline Comercial</h4>
        <ul>
          <li>2 pipelines configurados (agencias y home tenants)</li>
          <li>Hasta 12 etapas totales con criterios de avance</li>
          <li>Probabilidad de cierre por etapa</li>
          <li>Automatización de tareas y recordatorios</li>
        </ul>

        <h4>Gestión de Oportunidades</h4>
        <ul>
          <li>Generación de cotizaciones con plantillas corporativas</li>
          <li>Seguimiento de interacciones multicanal</li>
          <li>Registro automático de comunicaciones</li>
        </ul>

        <h4>Prospección y Seguimiento</h4>
        <ul>
          <li>Secuencias de ventas automatizadas</li>
          <li>Integración con Gmail/Outlook y Google Calendar</li>
          <li>Plantillas de email y documentos comerciales</li>
          <li>Notificaciones de actividad de leads</li>
        </ul>

        <h4>Pronóstico y Análisis</h4>
        <ul>
          <li>Forecast automático de ingresos</li>
          <li>
            Configuración de dashboards comerciales (pipeline, productividad,
            conversión)
          </li>
          <li>Métricas por ejecutivo y equipo</li>
          <li>Alertas de oportunidades estancadas</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="3.3 Service Hub Professional">
        <h4>Gestión de Tickets</h4>
        <ul>
          <li>Pipeline de tickets con estados personalizados</li>
          <li>SLAs automatizados por tipo de solicitud</li>
          <li>Asignación inteligente al equipo apropiado</li>
          <li>Registro completo de historial de servicio</li>
        </ul>

        <h4>Portal de Cliente</h4>
        <ul>
          <li>Acceso self-service para clientes</li>
          <li>Knowledge base con artículos de ayuda</li>
          <li>Seguimiento de solicitudes en tiempo real</li>
          <li>Integración con lifecycle de Guesty</li>
        </ul>

        <h4>Medición de Satisfacción</h4>
        <ul>
          <li>Encuestas automatizadas post-servicio</li>
          <li>Análisis de feedback y tendencias</li>
          <li>Dashboard de métricas de servicio</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="3.4 Content Hub Professional">
        <h4>Gestión de Contenidos y Landings</h4>
        <ul>
          <li>Migración de contenido existente</li>
          <li>
            Configuración de hasta 4 landing pages para campañas específicas
          </li>
        </ul>

        <h4>Optimización y Conversión</h4>
        <ul>
          <li>Formularios inteligentes integrados</li>
          <li>CTAs dinámicos por segmento</li>
          <li>A/B testing de páginas clave</li>
          <li>Analytics de comportamiento en sitio</li>
        </ul>

        <h4>Biblioteca de Contenidos</h4>
        <ul>
          <li>Gestión centralizada de assets digitales</li>
          <li>Plantillas de email responsive (hasta 5 diseños)</li>
          <li>Recursos descargables para leads</li>
          <li>Optimización SEO de contenidos</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="3.5 Integración Guesty">
        <h4>Sincronización lectura de Guesty</h4>
        <ul>
          <li>Conexión vía API directa</li>
          <li>Sincronización de reservas, huéspedes y propiedades</li>
          <li>Actualización en tiempo real de estados</li>
          <li>Mapeo de campos críticos entre sistemas</li>
        </ul>

        <h4>Visibilidad Completa del Lifecycle</h4>
        <ul>
          <li>
            Unificación de datos pre-reserva, durante estadía y post-checkout
          </li>
          <li>Historial completo de interacciones en un solo lugar</li>
          <li>Triggers automáticos basados en eventos de Guesty</li>
          <li>
            Segmentación de clientes por tipo de reserva, propiedad, valor, etc.
          </li>
        </ul>

        <h4>Automatizaciones Basadas en Guesty</h4>
        <ul>
          <li>Email de bienvenida pre-llegada</li>
          <li>Seguimiento durante estadía</li>
          <li>Encuestas post-checkout automáticas</li>
          <li>Campañas de reactivación para reservas futuras</li>
        </ul>
      </AccordionItem>
    </>
  );
}
