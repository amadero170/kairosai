import { Metadata } from "next";
import "./proposal.css";
import SolutionSection from "./SolutionSection";
import ImplementationStages from "./ImplementationStages";
import FinalSections from "./FinalSections";

export const metadata: Metadata = {
  title: "Propuesta Punta Mita - HubSpot RevOps",
};

export default function ProposalPuntaMita() {
  return (
    <>
      <h1>Propuesta de Implementación HubSpot - Punta Mita</h1>
      <h2 style={{ marginTop: 0, border: "none", padding: 0 }}>
        Punta Mita - Marketing y Rental Management
      </h2>

      <div className="header-info">
        <p>
          <strong>Presentado por:</strong> Kairos Automation
        </p>
        <p>
          <strong>Para:</strong> Punta Mita
        </p>
        <p>
          <strong>Fecha:</strong> Diciembre 2025
        </p>
      </div>

      <div className="section-divider"></div>

      <h2>1. Resumen Ejecutivo</h2>

      <p>
        Kairos Automation propone la implementación integral de HubSpot como
        plataforma CRM unificada para Punta Mita, con el objetivo de centralizar
        la información comercial, automatizar procesos clave y generar
        visibilidad completa del ciclo de vida del cliente junto con la
        integración con Guesty para leads de rental.
      </p>

      <div className="highlight-box">
        <h3>Alcance del Proyecto</h3>
        <ul>
          <li>
            <strong>Marketing Hub Professional:</strong> Gestión de campañas,
            automatización y generación de leads
          </li>
          <li>
            <strong>Sales Hub Professional (2 asientos):</strong> Pipeline
            comercial y seguimiento de oportunidades
          </li>
          <li>
            <strong>Service Hub Professional:</strong> Atención al cliente y
            gestión de tickets
          </li>
          <li>
            <strong>Content Hub Professional:</strong> Gestión de contenidos y
            landings
          </li>
          <li>
            <strong>Integración Guesty:</strong> Sincronización con CRM para
            visibilidad completa del lifecycle
          </li>
        </ul>
      </div>

      <div className="section-divider"></div>

      <h2>2. Situación Actual y Oportunidades</h2>

      <h3>Hallazgos Clave</h3>

      <p>
        <strong>Fragmentación de Datos:</strong> Información dispersa entre
        Guesty, Mailchimp, redes sociales y hojas de cálculo, limitando la
        visibilidad integral del cliente.
      </p>

      <p>
        <strong>Procesos Manuales:</strong> Tareas repetitivas en seguimiento
        comercial, comunicación con clientes y reporteo que consumen tiempo
        valioso del equipo.
      </p>

      <p>
        <strong>Falta de Trazabilidad:</strong> Sin un sistema unificado,
        resulta difícil rastrear el origen de leads, medir efectividad de
        campañas y gestionar el pipeline comercial.
      </p>

      <p>
        <strong>Oportunidades de Recompra No Aprovechadas:</strong> Ausencia de
        automatizaciones para nurturing y reactivación de clientes previos.
      </p>

      <h3>Beneficios Esperados</h3>

      <ul className="benefits-list">
        <li>
          Visibilidad 360° del lifecycle del cliente desde captación,
          conversión, retargeting
        </li>
        <li>Automatización de tareas manuales repetitivas</li>
        <li>Reducción en tiempo de respuesta a leads</li>
        <li>
          Incremento en tasas de conversión mediante seguimiento estructurado
        </li>
        <li>Dashboards ejecutivos para toma de decisiones basada en datos</li>
        <li>Comunicación más fluida con socios para tickets de servicio</li>
      </ul>

      <div className="section-divider"></div>

      <SolutionSection />

      <div className="section-divider"></div>

      <h2>4. Metodología de Implementación</h2>

      <ImplementationStages />

      <div className="highlight-box">
        <h3>Duración Total Estimada: 12-16 semanas (3-4 meses)</h3>
      </div>

      <div className="section-divider"></div>

      <h2>7. Inversión</h2>

      <div className="investment-card">
        <div className="investment-card-content">
          <p className="investment-label">Inversión Total</p>
          <h3 className="investment-amount">$5,940 USD + IVA</h3>
          <p className="investment-note">
            Incluye integración con Guesty y todos los servicios descritos
          </p>
        </div>
      </div>

      <div className="section-divider"></div>

      <FinalSections />

      <div className="section-divider"></div>

      <h2>Contacto</h2>

      <div className="contact-box">
        <h2 style={{ marginTop: 0, border: "none", padding: 0 }}>
          Kairos Automation
        </h2>
        <p>alberto@kairosautomation.ai</p>
        <p>
          Para cualquier duda o aclaración sobre esta propuesta, estamos a su
          disposición.
        </p>
        <p>
          <em>
            Transformemos juntos la operación comercial de Punta Mita con
            tecnología, automatización e inteligencia de datos.
          </em>
        </p>
      </div>
    </>
  );
}
