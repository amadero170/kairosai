"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  { text: "Decisiones más rápidas y estratégicas basadas en datos." },
];

export default function HomePageClient() {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-200 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo-dark.png"
              alt="Kairos AI Logo"
              width={360}
              height={120}
              className="h-24 w-auto"
            />
          </div>
          <a
            href="https://cal.com/kairos-ai/free-automation-scan"
            className="bg-cyan-500 text-black font-semibold py-2 px-5 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
          >
            Agendar Consulta
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 pt-24 pb-16 text-center overflow-hidden">
          <div className="absolute -top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_top_center,_rgba(22,163,175,0.15)_0%,_transparent_50%)] z-0"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_IN_VARIANTS}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Automatización
              <span className="block text-cyan-400">Inteligente</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transformamos tus operaciones con automaciones inteligentes,
              eliminando el trabajo repetitivo para que te concentres en crecer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/kairos-ai/free-automation-scan"
                className="bg-cyan-500 text-black text-lg font-semibold py-4 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300 flex items-center gap-2"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#benefits"
                className="border border-gray-600 text-gray-300 text-lg font-semibold py-4 px-8 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Conocer Más
              </a>
            </div>
          </motion.div>
        </section>

        {/* Clients Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN_VARIANTS}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Empresas que confían en nosotros
              </h2>
              <p className="text-gray-400 mb-12">
                Ayudamos a empresas de todos los tamaños a transformar sus
                operaciones.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={FADE_IN_VARIANTS}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-2xl font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {client.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN_VARIANTS}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Por qué elegir Kairos?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Nuestras soluciones están diseñadas para empresas que buscan
                eficiencia, precisión y crecimiento sostenible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_IN_VARIANTS}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Impact Section */}
        <section className="py-20 md:py-32 bg-gray-900/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_IN_VARIANTS}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transformamos la cultura de tu empresa
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Más allá de la tecnología, creamos un ambiente donde la
                  innovación y la eficiencia se convierten en parte del ADN de
                  tu organización.
                </p>
                <div className="space-y-4">
                  {cultureBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={FADE_IN_VARIANTS}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_IN_VARIANTS}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/30">
                  <div className="text-center">
                    <Smile className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Equipos más felices
                    </h3>
                    <p className="text-gray-400">
                      Liberamos a tu equipo de tareas repetitivas,
                      permitiéndoles enfocarse en lo que realmente importa:
                      crecer y innovar.
                    </p>
                  </div>
                </div>
              </motion.div>
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
                href="https://cal.com/kairos-ai/free-automation-scan"
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
          <p>&copy; 2024 Kairos. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">
            Automatización Inteligente para Empresas Visionarias.
          </p>
        </div>
      </footer>
    </div>
  );
}
