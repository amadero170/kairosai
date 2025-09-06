"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Database,
  Clock,
  TrendingUp,
  Smile,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const clients = [
  { name: "Little Closet" },
  { name: "Outsiders" },
  { name: "Vive Solar" },
];

const benefits = [
  {
    icon: <Database className="h-8 w-8 text-cyan-400" />,
    title: "Única Fuente de Datos",
    description:
      "Centraliza tu información para que sea confiable, accesible y esté siempre actualizada en tiempo real.",
  },
  {
    icon: <Bot className="h-8 w-8 text-cyan-400" />,
    title: "Elimina Tareas Repetitivas",
    description:
      "Liberamos a tu equipo de procesos manuales y tediosos, permitiéndoles enfocarse en tareas de alto valor.",
  },
  {
    icon: <Clock className="h-8 w-8 text-cyan-400" />,
    title: "Ahorra Tiempo Valioso",
    description:
      "Reduce drásticamente el tiempo dedicado a la recolección y el procesamiento de datos, agilizando tus operaciones.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-cyan-400" />,
    title: "Escalabilidad Garantizada",
    description:
      "Construimos una base sólida y automatizada que crece con tu negocio, preparada para futuros desafíos.",
  },
];

const cultureBenefits = [
  { text: "Menos errores humanos y mayor precisión." },
  { text: "Visibilidad completa y en tiempo real del negocio." },
  { text: "Mejora en el clima laboral y la motivación del equipo." },
  { text: "Decisiones más rápidas y estratégicas basadas en datos." },
];

export default function HomePage() {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-200 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wider">
            KAIROS
          </h1>
          <a
            href="#contact"
            className="bg-cyan-500 text-black font-semibold py-2 px-5 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
          >
            Agendar Consulta
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute -top-1/4 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(22,163,175,0.15)_0%,_transparent_50%)] z-0"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_IN_VARIANTS}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Automatiza. Simplifica. Escala.
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              Transformamos tus operaciones con automaciones inteligentes,
              eliminando el trabajo repetitivo para que te concentres en crecer.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#contact"
                className="bg-cyan-500 text-black text-lg font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300 flex items-center gap-2"
              >
                Inicia tu Transformación <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Clients Section */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Empresas que ya confiaron en nosotros
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN_VARIANTS}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
              className="mt-8 flex justify-center items-center gap-12 md:gap-16 flex-wrap"
            >
              {clients.map((client) => (
                <motion.div
                  key={client.name}
                  variants={FADE_IN_VARIANTS}
                  className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {client.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="services" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Deja de depender de procesos manuales
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Tu negocio necesita una única fuente de verdad: confiable,
                automatizada y siempre disponible. Esto es lo que logramos
                juntos.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_IN_VARIANTS}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-gray-900 transition-all"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Motivation Section */}
        <section className="py-20 md:py-28 bg-black/20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN_VARIANTS}
              transition={{ duration: 0.7 }}
            >
              <Smile className="h-12 w-12 text-cyan-400 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Un equipo más feliz es un equipo más productivo
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Al reducir drásticamente las tareas repetitivas, no solo
                optimizas procesos, sino que inviertes en el bienestar y la
                motivación de tu equipo.
              </p>
            </motion.div>
            <div className="space-y-4">
              {cultureBenefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_IN_VARIANTS}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_center,_rgba(22,163,175,0.15)_0%,_transparent_50%)] z-0"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN_VARIANTS}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                Hablemos sobre tus desafíos. Agenda una consulta gratuita y sin
                compromiso para descubrir el potencial de la automatización en
                tu empresa.
              </p>
              <a
                href="mailto:contacto@kairos.ai"
                className="mt-10 inline-block bg-cyan-500 text-black text-xl font-semibold py-4 px-10 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
              >
                Agendar mi Consulta
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Kairos. Todos los derechos
            reservados.
          </p>
          <p className="text-sm mt-2">
            Automatización Inteligente para Empresas Visionarias.
          </p>
        </div>
      </footer>
    </div>
  );
}
