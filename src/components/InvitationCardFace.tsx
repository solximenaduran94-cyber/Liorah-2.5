import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Heart,
  MapPin,
  Calendar,
  Clock,
  MessageCircle,
  Crown,
  Eye,
  Play,
  Copy,
  Check,
  Gift,
  ExternalLink,
  ArrowRight,
  Send
} from 'lucide-react';
import { RealSampleItem } from '../data/realSamples';

interface InvitationCardFaceProps {
  sample: RealSampleItem;
  className?: string;
  isCompact?: boolean;
  activeStepIndex?: number;
  onStepChange?: (index: number) => void;
}

export const InvitationCardFace: React.FC<InvitationCardFaceProps> = ({
  sample,
  className = '',
  isCompact = false,
  activeStepIndex,
  onStepChange,
}) => {
  const [copiedCbu, setCopiedCbu] = useState(false);
  const [countdownSeconds, setCountdownSeconds] = useState(48);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownSeconds((prev) => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyAlias = () => {
    navigator.clipboard?.writeText(`${sample.celebrant.toUpperCase()}.FIESTA`);
    setCopiedCbu(true);
    setTimeout(() => setCopiedCbu(false), 2000);
  };

  // IF AN ACTIVE STEP IS SPECIFIED (INSIDE THE MAIN SMARTPHONE VIEWER)
  if (typeof activeStepIndex === 'number' && activeStepIndex > 0) {
    // 1. STEP: CUENTA REGRESIVA
    if (activeStepIndex === 1) {
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden p-5 flex flex-col justify-between text-center select-none bg-gradient-to-b from-[#1A1A1A] via-[#2A2421] to-[#141211] text-[#FAF6F0] ${className}`}>
          <div className="pt-2">
            <span className="text-[10px] uppercase font-ui tracking-[0.25em] text-[#C5A059] font-bold">
              Cuenta Regresiva
            </span>
            <h4 className="font-prestige text-xl font-bold tracking-wide mt-1 text-[#FFFDF9]">
              {sample.celebrant}
            </h4>
            <p className="font-romantic italic text-xs text-[#E5D7C5] mt-0.5">
              "Cada segundo nos acerca a una noche mágica"
            </p>
          </div>

          <div className="my-auto py-3 space-y-3">
            {/* Live Countdown Grid */}
            <div className="grid grid-cols-4 gap-2 max-w-[260px] mx-auto font-mono text-center">
              <div className="bg-[#241E1C] p-2.5 rounded-xl border border-[#C5A059]/30">
                <span className="text-xl font-bold text-[#FFFDF9] block">24</span>
                <span className="text-[9px] text-[#C5A059] font-ui uppercase font-semibold">Días</span>
              </div>
              <div className="bg-[#241E1C] p-2.5 rounded-xl border border-[#C5A059]/30">
                <span className="text-xl font-bold text-[#FFFDF9] block">16</span>
                <span className="text-[9px] text-[#C5A059] font-ui uppercase font-semibold">Hs</span>
              </div>
              <div className="bg-[#241E1C] p-2.5 rounded-xl border border-[#C5A059]/30">
                <span className="text-xl font-bold text-[#FFFDF9] block">42</span>
                <span className="text-[9px] text-[#C5A059] font-ui uppercase font-semibold">Min</span>
              </div>
              <div className="bg-[#241E1C] p-2.5 rounded-xl border border-[#C5A059]">
                <span className="text-xl font-bold text-[#C5A059] block tabular-nums">{countdownSeconds}</span>
                <span className="text-[9px] text-[#C5A059] font-ui uppercase font-semibold">Seg</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#241E1C] px-3 py-1.5 rounded-full border border-[#E5D7C5]/30 text-[11px] font-ui text-[#FAF6F0]">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Sábado 14 de Noviembre · 21:00 hs</span>
            </div>
          </div>

          <div className="space-y-2 pb-1">
            <button
              type="button"
              onClick={() => onStepChange?.(2)}
              className="w-full rounded-xl bg-[#C5A059] text-[#1A1A1A] py-2.5 px-3 text-xs font-bold font-ui uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#b08d47] transition-all cursor-pointer"
            >
              <span>Ver Salón & Cómo Llegar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      );
    }

    // 2. STEP: CEREMONIA & SALÓN (UBICACIÓN & GPS)
    if (activeStepIndex === 2) {
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden p-5 flex flex-col justify-between text-center select-none bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#F5EFE6] text-[#1A1A1A] border border-[#E5D7C5] ${className}`}>
          <div className="pt-2">
            <span className="text-[10px] uppercase font-ui tracking-[0.25em] text-[#C5A059] font-bold">
              Ubicación & Salón
            </span>
            <h4 className="font-prestige text-xl font-bold tracking-wide mt-1 text-[#1A1A1A]">
              ¿Cómo Llegar a la Fiesta?
            </h4>
            <p className="font-romantic italic text-xs text-[#6B5E54] mt-0.5">
              "Queremos que disfrutes cada minuto sin perderte"
            </p>
          </div>

          <div className="my-auto py-3 space-y-3">
            {/* Venue Card */}
            <div className="bg-[#FFFDF9] p-3.5 rounded-2xl border border-[#E5D7C5] text-left shadow-xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] font-ui">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Salón de Eventos Bellas Artes</span>
              </div>
              <p className="text-[11px] text-[#6B5E54] font-ui pl-5.5">
                Av. del Libertador 4200, Buenos Aires
              </p>
            </div>

            {/* GPS Direct Buttons */}
            <div className="grid grid-cols-2 gap-2 font-ui text-xs">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white border border-[#E5D7C5] hover:border-[#C5A059] text-[#1A1A1A] font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Google Maps</span>
              </a>
              <a
                href="https://waze.com"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white border border-[#E5D7C5] hover:border-[#C5A059] text-[#1A1A1A] font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <span className="text-sky-500 font-bold">W</span>
                <span>Waze</span>
              </a>
            </div>

            {/* Itinerary Snippet */}
            <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#E5D7C5] text-left text-[11px] font-ui text-[#6B5E54] space-y-1">
              <p className="font-bold text-[#1A1A1A]">Itinerario:</p>
              <p>• 21:00 hs — Recepción de Gala</p>
              <p>• 22:30 hs — Entrada triunfal & Vals</p>
              <p>• 00:00 hs — Baile & DJ</p>
            </div>
          </div>

          <div className="space-y-2 pb-1">
            <button
              type="button"
              onClick={() => onStepChange?.(3)}
              className="w-full rounded-xl bg-[#1A1A1A] text-[#FAF6F0] py-2.5 px-3 text-xs font-bold font-ui uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all cursor-pointer"
            >
              <span>Ver Confirmación RSVP & Regalos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      );
    }

    // 3. STEP: CONFIRMACIÓN RSVP & MESA DE REGALOS
    if (activeStepIndex === 3) {
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden p-5 flex flex-col justify-between text-center select-none bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5EFE6] text-[#1A1A1A] border border-[#E5D7C5] ${className}`}>
          <div className="pt-2">
            <span className="text-[10px] uppercase font-ui tracking-[0.25em] text-[#C5A059] font-bold">
              Confirmación & Regalos
            </span>
            <h4 className="font-prestige text-xl font-bold tracking-wide mt-1 text-[#1A1A1A]">
              Confirmar Asistencia
            </h4>
            <p className="font-romantic italic text-xs text-[#6B5E54] mt-0.5">
              "Tu presencia es nuestro mayor regalo"
            </p>
          </div>

          <div className="my-auto py-3 space-y-3">
            {/* Gift Registry Card */}
            <div className="bg-[#FFFDF9] p-3 rounded-2xl border border-[#E5D7C5] text-left shadow-xs space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-[#1A1A1A] font-ui">
                <span className="flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mesa de Regalos</span>
                </span>
                <span className="text-[10px] text-[#C5A059] font-semibold">CBU / Alias</span>
              </div>
              <p className="text-[10px] font-mono text-[#6B5E54] truncate bg-[#FAF6F0] p-1.5 rounded-lg border border-[#E5D7C5]">
                Alias: {sample.celebrant.toUpperCase().replace(/\s+/g, '')}.FIESTA
              </p>
              <button
                type="button"
                onClick={handleCopyAlias}
                className="w-full py-1.5 px-2 rounded-lg bg-[#FAF6F0] hover:bg-[#E5D7C5]/40 text-[#1A1A1A] text-[10px] font-ui font-semibold flex items-center justify-center gap-1 transition-colors border border-[#C5A059] cursor-pointer"
              >
                {copiedCbu ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-[#C5A059]" />}
                <span>{copiedCbu ? '¡Alias Copiado!' : 'Tocar para Copiar Alias'}</span>
              </button>
            </div>

            {/* RSVP WhatsApp Box */}
            <a
              href={sample.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl bg-[#1A1A1A] hover:bg-emerald-700 text-[#FAF6F0] p-3.5 text-center transition-all shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-ui text-xs font-bold uppercase tracking-wider">
                  Confirmar por WhatsApp
                </span>
              </div>
              <p className="text-[10px] font-ui text-[#FAF6F0]/80">
                Abre la invitación web para enviar tu confirmación
              </p>
            </a>
          </div>

          <div className="space-y-2 pb-1">
            <button
              type="button"
              onClick={() => onStepChange?.(0)}
              className="w-full rounded-xl bg-[#FFFDF9] text-[#1A1A1A] border border-[#E5D7C5] py-2 px-3 text-xs font-semibold font-ui flex items-center justify-center gap-1 hover:bg-[#FAF6F0] cursor-pointer"
            >
              <span>← Volver a la Portada</span>
            </button>
          </div>
        </div>
      );
    }
  }

  // DEFAULT OR STEP 0: BESPOKE PORTADA DE GALA FOR EACH SPECIFIC SAMPLE
  switch (sample.id) {
    case 'sample-mia-xv':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#FAF0E6] via-[#FFFDF9] to-[#F5E6E8] border border-[#E5D7C5] shadow-inner select-none ${className}`}>
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#F5EAEB] rounded-full blur-xl pointer-events-none" />

          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#C5A059]/10 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#6B5E54] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-1 text-[#C5A059]">
              <span className="h-[1px] w-6 bg-[#C5A059]/40" />
              <span className="text-[10px]">♥</span>
              <span className="h-[1px] w-6 bg-[#C5A059]/40" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#9C6E66] font-semibold block mb-0.5">
              Mis Quince Años
            </span>
            <p className="font-script text-4xl sm:text-5xl text-[#C5A059] leading-none mb-1 drop-shadow-xs">
              Mía
            </p>
            <p className="font-romantic italic text-xs text-[#6B5E54]">
              "Un momento soñado que quiero celebrar junto a vos"
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#E5D7C5] px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#1A1A1A] shadow-xs">
              <Clock className="w-3 h-3 text-[#C5A059]" />
              <span>Faltan 24 días · 18:00 hs</span>
            </div>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#6B5E54] font-ui bg-white/70 py-1 rounded-lg border border-[#E5D7C5]">
              <MapPin className="h-3 w-3 text-[#C5A059]" />
              <span>Salón Los Robles · Buenos Aires</span>
            </div>

            <div className="rounded-xl bg-[#1A1A1A] py-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-[#FAF6F0] flex items-center justify-center gap-1.5 shadow-sm border border-[#C5A059]/30">
              <MessageCircle className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Confirmar Asistencia (RSVP)</span>
            </div>
          </div>
        </div>
      );

    case 'sample-celeste-xv':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#EBF2F7] via-[#F4F8FA] to-[#E5EFF6] border border-[#CBD5E1] shadow-inner select-none ${className}`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/40 rounded-full blur-xl pointer-events-none" />

          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#2B6CB0]/10 px-2.5 py-0.5 rounded-full border border-[#2B6CB0]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#2B6CB0] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[#D4AF37] mt-1">
              <Sparkles className="h-3 w-3" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#2A4365] font-semibold block mb-0.5">
              Mis 15 Años
            </span>
            <h4 className="font-prestige text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#1A365D] uppercase">
              Celeste
            </h4>
            <p className="font-romantic italic text-xs text-[#4A5568] mt-1">
              "Una noche mágica bajo las estrellas"
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#CBD5E1] px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#1A365D] shadow-xs">
              <Clock className="w-3 h-3 text-[#2B6CB0]" />
              <span>21:00 hs · Recepción de Gala</span>
            </div>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#2B6CB0] font-ui bg-white/80 py-1 rounded-lg border border-[#CBD5E1]">
              <MapPin className="h-3 w-3 text-[#2B6CB0]" />
              <span>Salón Grand Palace · GPS Maps</span>
            </div>

            <div className="rounded-xl bg-[#1A365D] py-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 shadow-sm">
              <MessageCircle className="h-3.5 w-3.5 text-[#63B3ED]" />
              <span>Pase Familiar & RSVP</span>
            </div>
          </div>
        </div>
      );

    case 'sample-ariel-cecilia-boda':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#F5EFE6] border border-[#E5D7C5] shadow-inner select-none ${className}`}>
          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#C5A059]/10 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#6B5E54] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[#C5A059] mt-1">
              <span className="h-[1px] w-6 bg-[#C5A059]/40" />
              <Heart className="h-3 w-3 fill-[#C5A059]" />
              <span className="h-[1px] w-6 bg-[#C5A059]/40" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#6B5E54] font-semibold block mb-1">
              Nuestra Boda
            </span>
            <h4 className="font-prestige text-xl sm:text-2xl font-normal text-[#1A1A1A] tracking-wider leading-snug">
              ARIEL <br />
              <span className="font-script text-2xl text-[#C5A059]">&</span> <br />
              CECILIA
            </h4>
            <p className="font-romantic italic text-xs text-[#6B5E54] mt-1">
              "Nos casamos y queremos festejar con vos"
            </p>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1 text-[10px] text-[#6B5E54] font-ui bg-white/70 py-1 rounded-lg border border-[#E5D7C5]">
              <Calendar className="h-3 w-3 text-[#C5A059]" />
              <span>Ceremonia Religiosa & Fiesta</span>
            </div>

            <div className="rounded-xl bg-[#1A1A1A] text-[#FAF6F0] py-2 px-3 text-[10px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm">
              <MessageCircle className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Confirmar Asistencia (RSVP)</span>
            </div>
          </div>
        </div>
      );


    case 'sample-xiomara-xv':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#0F291E] via-[#1C4532] to-[#0A1D15] text-white border-2 border-[#D4AF37]/50 shadow-inner select-none ${className}`}>
          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[#D4AF37] mt-1">
              <Crown className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-0.5">
              Mis Quince Años
            </span>
            <h4 className="font-prestige text-2xl sm:text-3xl font-bold tracking-[0.16em] text-white uppercase drop-shadow-md">
              Xiomara
            </h4>
            <p className="font-romantic italic text-xs text-emerald-200 mt-1">
              "Gala esmeralda & destellos de oro imperial"
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 bg-[#0A1D15]/80 border border-[#D4AF37]/40 px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#D4AF37] shadow-xs">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>21:30 hs · Salón Esmeralda</span>
            </div>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1 text-[10px] text-emerald-100 font-ui bg-black/40 border border-emerald-700/60 rounded-lg py-1">
              <MapPin className="h-3 w-3 text-[#D4AF37]" />
              <span>Ubicación GPS Waze & Maps</span>
            </div>

            <div className="rounded-xl bg-[#D4AF37] text-[#0F291E] py-2 px-3 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#E2C275]">
              <MessageCircle className="h-3.5 w-3.5 text-[#0F291E]" />
              <span>Confirmar Asistencia (RSVP)</span>
            </div>
          </div>
        </div>
      );

    case 'sample-dariel':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#0B132B] via-[#1C2541] to-[#0A1128] text-white border-2 border-[#D4AF37]/40 shadow-inner select-none ${className}`}>
          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mt-1">
              <span className="h-[1px] w-6 bg-[#D4AF37]/40" />
              <Crown className="h-3.5 w-3.5" />
              <span className="h-[1px] w-6 bg-[#D4AF37]/40" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-0.5">
              Celebración de Gala
            </span>
            <h4 className="font-prestige text-3xl font-bold tracking-[0.16em] text-white uppercase drop-shadow-md">
              DARIEL
            </h4>
            <p className="font-romantic italic text-xs text-blue-200 mt-1">
              "Una noche única para compartir y brindar juntos"
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 bg-[#0A1128]/80 border border-[#D4AF37]/40 px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#D4AF37] shadow-xs">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>21:00 hs · Salón de Fiesta</span>
            </div>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1 text-[10px] text-blue-100 font-ui bg-black/40 border border-blue-900/60 rounded-lg py-1">
              <MapPin className="h-3 w-3 text-[#D4AF37]" />
              <span>Ubicación GPS Waze & Maps</span>
            </div>

            <div className="rounded-xl bg-[#D4AF37] text-[#0B132B] py-2 px-3 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#E2C275]">
              <MessageCircle className="h-3.5 w-3.5 text-[#0B132B]" />
              <span>Confirmar Asistencia (RSVP)</span>
            </div>
          </div>
        </div>
      );

    case 'sample-olivia':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#FFF0F5] via-[#FFF9FB] to-[#FCE7F3] border border-[#F472B6]/40 shadow-inner select-none ${className}`}>
          <div className="absolute top-0 right-0 w-28 h-28 bg-pink-100/60 rounded-full blur-xl pointer-events-none" />

          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#EC4899]/10 px-2.5 py-0.5 rounded-full border border-[#EC4899]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#9D174D] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-1 text-[#C5A059]">
              <Sparkles className="h-3 w-3 text-[#EC4899]" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#BE185D] font-semibold block mb-0.5">
              Mis 15 Años
            </span>
            <p className="font-script text-4xl sm:text-5xl text-[#BE185D] leading-none mb-1 drop-shadow-xs">
              Olivia
            </p>
            <p className="font-romantic italic text-xs text-[#831843]">
              "Un día mágico que guardaré por siempre en el corazón"
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#FBCFE8] px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#831843] shadow-xs">
              <Clock className="w-3 h-3 text-[#EC4899]" />
              <span>20:30 hs · Salón Los Ciruelos</span>
            </div>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#831843] font-ui bg-white/80 py-1 rounded-lg border border-[#FBCFE8]">
              <MapPin className="h-3 w-3 text-[#EC4899]" />
              <span>Salón & Parque · GPS Maps</span>
            </div>

            <div className="rounded-xl bg-[#BE185D] py-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 shadow-sm">
              <MessageCircle className="h-3.5 w-3.5 text-pink-200" />
              <span>Confirmar Asistencia (RSVP)</span>
            </div>
          </div>
        </div>
      );

    case 'sample-alma-xv':
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-gradient-to-b from-[#4A0E2E] via-[#831843] to-[#3B0724] text-white border-2 border-[#D4AF37]/50 shadow-inner select-none ${className}`}>
          <div className="pt-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Frame Oficial en Vivo
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mt-1">
              <span className="h-[1px] w-6 bg-[#D4AF37]/40" />
              <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="h-[1px] w-6 bg-[#D4AF37]/40" />
            </div>
          </div>

          <div className="my-auto py-2 relative z-10">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#F9A8D4] font-semibold block mb-0.5">
              Mis Quince Años
            </span>
            <h4 className="font-prestige text-3xl font-bold tracking-[0.18em] text-white uppercase drop-shadow-md">
              ALMA
            </h4>
            <p className="font-romantic italic text-xs text-rose-200 mt-1">
              "Gala de alta costura, música y diversión"
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 bg-[#3B0724]/80 border border-[#D4AF37]/40 px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#D4AF37] shadow-xs">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>21:00 hs · Recepción de Gala</span>
            </div>
          </div>

          <div className="space-y-1.5 pb-1 relative z-10">
            <div className="flex items-center justify-center gap-1 text-[10px] text-rose-100 font-ui bg-black/40 border border-rose-900/60 rounded-lg py-1">
              <MapPin className="h-3 w-3 text-[#D4AF37]" />
              <span>Salón Bellas Artes · GPS Maps</span>
            </div>

            <div className="rounded-xl bg-[#D4AF37] text-[#4A0E2E] py-2 px-3 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#E2C275]">
              <MessageCircle className="h-3.5 w-3.5 text-[#4A0E2E]" />
              <span>Confirmar Asistencia (RSVP)</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full rounded-2xl overflow-hidden text-center p-4 flex flex-col justify-between bg-cover bg-center text-white border border-[#E5D7C5] select-none ${className}`} style={{ backgroundImage: `url(${sample.image})` }}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          <div className="relative z-10 pt-2">
            <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
              {sample.category}
            </span>
          </div>
          <div className="relative z-10 my-auto py-2">
            <h4 className="font-prestige text-xl font-bold tracking-wider text-white">
              {sample.celebrant}
            </h4>
            <p className="font-romantic italic text-xs text-stone-200 mt-1 line-clamp-2">
              {sample.tagline}
            </p>
          </div>
          <div className="relative z-10 space-y-2 pb-1">
            <div className="rounded-xl bg-[#C5A059] text-[#1A1A1A] py-2 px-3 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Ver Invitación</span>
            </div>
          </div>
        </div>
      );
  }
};
