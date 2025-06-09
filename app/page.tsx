"use client";
import Head from "next/head";
export default function Page() {
  const points = [
    "Elijo volver al veganismo porque no quiero participar en la maquinaria del sufrimiento.",
    "No quiero que mi alimento dependa del encierro, la mutilación o la explotación sistemática de seres sensibles.",
    "Mi ética no termina en la palabra ni en la reflexión: también habita lo que como.",
    "No se trata solo de animales: se trata del sistema que normaliza su cosificación.",
    "Este tránsito no exige perfección, sino compromiso."
  ];
  return (
    <>
      <Head>
        <title>Vegan Manifesto</title>
        <link rel="icon" href="/vegan-icon.png" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 space-y-4">
          <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
            Manifiesto Ético de Retorno al Veganismo
          </h1>
          {points.map((text, idx) => (
            <p key={idx} className="text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}
