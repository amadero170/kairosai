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
        <h2>{title}</h2>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

export default function FinalSections() {
  return (
    <>
      <AccordionItem title="8. Términos y Condiciones">
        <h3>Esquema de Pagos</h3>
        <ol>
          <li>
            <strong>40% anticipo:</strong> A la firma del contrato, habilita
            inicio del proyecto y asignación de equipo
          </li>
          <li>
            <strong>30% a configuración principal:</strong> Al completar Etapas
            1-3 (descubrimiento, configuración, integración y migración)
          </li>
          <li>
            <strong>30% a entrega final:</strong> Al completar capacitaciones,
            go-live operativo y entrega de documentación
          </li>
        </ol>

        <p>
          <strong>Condiciones de pago:</strong> Neto 15 días naturales
          posteriores a emisión de factura
        </p>

        <h3>Vigencia y Condiciones Generales</h3>
        <ul>
          <li>Vigencia de propuesta: 30 días naturales</li>
          <li>Inicio contra recepción de anticipo y firma de contrato</li>
          <li>
            Cronograma ajustable según disponibilidad de información del cliente
          </li>
          <li>
            Propiedad intelectual transferida al cliente contra pago completo
          </li>
          <li>
            Cambios fuera de alcance requieren aprobación formal (pueden
            implicar costos adicionales)
          </li>
          <li>Garantía de 30 días post go-live para correcciones sin costo</li>
          <li>Información tratada como confidencial</li>
        </ul>

        <h3>Requerimientos del Cliente para Inicio</h3>
        <ul>
          <li>Acceso a cuenta HubSpot</li>
          <li>Credenciales de acceso a Guesty con permisos de API</li>
          <li>Base de datos actual en formato estructurado (CSV/Excel)</li>
          <li>Acceso a dominio web y hosting (si aplica migración)</li>
          <li>Disponibilidad de stakeholders clave para sesiones de trabajo</li>
          <li>Designación de Project Manager interno</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="9. Por Qué Kairos Automation">
        <h3>Experiencia Especializada</h3>
        <ul>
          <li>Expertos certificados en HubSpot y automatización comercial</li>
          <li>Experiencia en sector hospitalidad y gestión de propiedades</li>
          <li>Conocimiento profundo de integración de sistemas</li>
        </ul>

        <h3>Enfoque en Resultados</h3>
        <ul>
          <li>Implementaciones orientadas a ROI medible</li>
          <li>Quick Wins identificados desde la Etapa 1</li>
          <li>Transferencia real de conocimiento al equipo</li>
          <li>Soporte continuado post-implementación</li>
        </ul>

        <h3>Tecnología y Partner Ecosystem</h3>
        <ul>
          <li>Partner certificado de HubSpot</li>
          <li>Experiencia con APIs y integraciones complejas</li>
          <li>Stack tecnológico moderno y escalable</li>
        </ul>

        <h3>Compromiso con el Éxito del Cliente</h3>
        <ul>
          <li>Acompañamiento cercano durante toda la implementación</li>
          <li>Capacitación exhaustiva y práctica</li>
          <li>Documentación completa y video memorias</li>
          <li>Disponibilidad para soporte continuo</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="10. Próximos Pasos">
        <ol>
          <li>
            <strong>Revisión de propuesta</strong> con stakeholders clave
          </li>
          <li>
            <strong>Sesión de Q&A</strong> para aclarar dudas (30-60 min)
          </li>
          <li>
            <strong>Ajustes finales</strong> al alcance si son necesarios
          </li>
          <li>
            <strong>Firma de contrato</strong> y emisión de anticipo
          </li>
          <li>
            <strong>Kickoff oficial</strong> del proyecto (dentro de 5 días
            hábiles posteriores al pago)
          </li>
        </ol>
      </AccordionItem>
    </>
  );
}
