import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ELIPanelWebV1() {
  return (
    <div className="min-h-screen bg-[#020d1f] text-cyan-100 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/backgrounds/amper_glow_grid.svg" alt="Fondo futurista" className="w-full h-full object-cover opacity-10" />
      </div>
      <div className="col-span-2 text-center z-10">
        <h1 className="text-5xl font-extrabold mb-3 tracking-widest text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">AMPER GROUP</h1>
        <p className="text-lg text-cyan-200">Interfaz Maestra de Control – ELI PANEL WEB V1</p>
      </div>
      <Card className="bg-[#051a30] border border-cyan-700 shadow-[0_0_25px_rgba(0,255,255,0.3)] rounded-2xl z-10">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-cyan-100">📁 Gestor de Archivos</h2>
          <p className="text-sm text-cyan-400">Explora, busca y organiza archivos de OneDrive.</p>
          <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white shadow-[0_0_10px_rgba(0,255,255,0.6)]">Abrir Gestor</Button>
        </CardContent>
      </Card>
    </div>
  );
}
