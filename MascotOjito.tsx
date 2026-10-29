import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface MascotOjitoProps {
  whatsappNumber?: string;
  onOpen3DViewer?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onOpenBookingModal?: () => void;
}

export type MascotSpriteState = 'idle' | 'whistle' | 'peek' | 'run' | 'parachute' | 'bounce' | 'angry' | 'sad' | 'bored' | 'car';
export type MascotMotionState = 'idle' | 'whistling' | 'running_to_edge' | 'peeking_left' | 'peeking_right' | 'falling' | 'landing' | 'dragging' | 'flung' | 'sprinting' | 'car_racing' | 'wall_climbing' | 'bored' | 'angry' | 'sad';

export const MascotOjito: React.FC<MascotOjitoProps> = ({
  whatsappNumber = "50241961630",
  onOpen3DViewer,
  onNavigateToSection,
  onOpenBookingModal,
}) => {
  const [activeSprite, setActiveSprite] = useState<MascotSpriteState>('idle');
  const [motionState, setMotionState] = useState<MascotMotionState>('idle');
  const [bubbleText, setBubbleText] = useState<string>('Tu examen de la vista es 100% gratis en Vision Saludable.');
  const [showBubble, setShowBubble] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDizzy, setIsDizzy] = useState<boolean>(false);
  const [isSweating, setIsSweating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const theatricalTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const routineIndexRef = useRef<number>(0);
  const clickCountRef = useRef<number>(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartTimeRef = useRef<number>(0);

  const panicShouts = [
    'Oye sueltame, se me van a caer los lentes.',
    'Bajame al suelo y te regalo el examen de la vista.',
    'Cuidado con la cornea, no me muevas tan fuerte.',
    'Auxilio, me llevan secuestrado.',
    'Por favor bajame de vuelta a la clinica.'
  ];

  const angryQuotes = [
    'Oye, que falta de respeto con el asistente optico. Sueltame o no te calibro los lentes.',
    'No me zarandees de esa manera, los aros de los lentes son finos y delicados.',
    'Te recuerdo que soy una mascota profesional, no una pelota de hule.',
    'Si me sigues molestando me voy en mi carro de carreras y te quedas sin descuento.'
  ];

  const boredQuotes = [
    'Me aburro aqui parado en la esquina. Podrias al menos darme un clic o agendar tu examen gratis.',
    'Te quedaste congelado viendo la pantalla. Parpadea un poco, que se te van a secar los ojos.',
    'Llevas un buen rato sin mover el cursor. Aprovecha el tiempo y pide informes al WhatsApp.'
  ];

  const sadQuotes = [
    'Nadie quiere agendar su examen gratis y mis lagrimas estan empanando los cristales.',
    'Me ignoraste otra vez. Y yo que venia a regalarte el examen de agudeza visual.',
    'Tantas horas programado en esta pagina y no me haces ni un clic en el WhatsApp.'
  ];

  const resetInactivity = () => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => {
      if (motionState === 'idle' && !isModalOpen) {
        setMotionState('bored');
        setActiveSprite('bored');
        const quote = boredQuotes[Math.floor(Math.random() * boredQuotes.length)];
        setBubbleText(quote);
        setShowBubble(true);

        setTimeout(() => {
          setActiveSprite('idle');
          setMotionState('idle');
          resetInactivity();
        }, 4500);
      }
    }, 14000);
  };

  const triggerNextRoutine = () => {
    if (motionState !== 'idle' || isModalOpen) return;

    const routine = routineIndexRef.current % 3;
    routineIndexRef.current++;

    if (routine === 0) {
      setMotionState('whistling');
      setActiveSprite('whistle');
      setShowBubble(false);

      setTimeout(() => {
        setMotionState('running_to_edge');
        setActiveSprite('run');

        setTimeout(() => {
          setMotionState('peeking_left');
          setActiveSprite('peek');
          setBubbleText('Chequeando si alguien necesita lentes por aqui...');
          setShowBubble(true);

          setTimeout(() => {
            setMotionState('peeking_right');
            setActiveSprite('peek');
            setBubbleText('Todo despejado por la derecha.');

            setTimeout(() => {
              setMotionState('falling');
              setActiveSprite('parachute');
              setShowBubble(false);

              setTimeout(() => {
                setMotionState('landing');
                setActiveSprite('bounce');
                setBubbleText('Aterrizaje perfecto con paracaidas y resorte.');
                setShowBubble(true);

                setTimeout(() => {
                  setMotionState('idle');
                  setActiveSprite('idle');
                  resetInactivity();
                }, 750);

              }, 2600);

            }, 2000);

          }, 2000);

        }, 850);

      }, 2800);

    } else if (routine === 1) {
      setMotionState('car_racing');
      setActiveSprite('car');
      setBubbleText('Bip bip, abran paso que voy tarde a la clinica.');
      setShowBubble(true);

      setTimeout(() => {
        setMotionState('idle');
        setActiveSprite('idle');
        setBubbleText('Llegue a tiempo. Recuerda que tu examen es gratis.');
        resetInactivity();
      }, 3400);

    } else {
      setMotionState('wall_climbing');
      setActiveSprite('run');
      setBubbleText('Escalando hasta arriba de tu pantalla...');
      setShowBubble(true);

      setTimeout(() => {
        setMotionState('falling');
        setActiveSprite('parachute');

        setTimeout(() => {
          setMotionState('landing');
          setActiveSprite('bounce');
          setBubbleText('Aterrizaje perfecto con resorte de alta precision.');

          setTimeout(() => {
            setMotionState('idle');
            setActiveSprite('idle');
            resetInactivity();
          }, 750);

        }, 2800);

      }, 2400);
    }
  };

  useEffect(() => {
    const schedule = () => {
      theatricalTimerRef.current = setTimeout(() => {
        triggerNextRoutine();
      }, 22000);
    };

    if (motionState === 'idle') {
      schedule();
      resetInactivity();
    }

    return () => {
      if (theatricalTimerRef.current) clearTimeout(theatricalTimerRef.current);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [motionState, isModalOpen]);

  const handleCloseBubble = (userDismissed = false) => {
    setShowBubble(false);
    if (userDismissed && motionState === 'idle') {
      setMotionState('sad');
      setActiveSprite('sad');
      const sadQuote = sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
      setTimeout(() => {
        setBubbleText(sadQuote);
        setShowBubble(true);
        setTimeout(() => {
          setActiveSprite('idle');
          setMotionState('idle');
          resetInactivity();
        }, 3200);
      }, 300);
    }
  };

  const handleClick = () => {
    resetInactivity();
    clickCountRef.current++;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (clickCountRef.current >= 2) {
      clickCountRef.current = 0;
      if (motionState !== 'idle') return;
      setMotionState('sprinting');
      setActiveSprite('run');
      setBubbleText('A correr por salud visual.');
      setShowBubble(true);

      setTimeout(() => {
        setMotionState('idle');
        setActiveSprite('idle');
        setBubbleText('Buen cardio. Recuerda agendar tu examen gratis.');
      }, 2800);

    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
        if (motionState !== 'idle') return;
        setActiveSprite('bounce');
        setMotionState('landing');
        setBubbleText('Me haces cosquillas en la cornea.');
        setShowBubble(true);

        setTimeout(() => {
          setActiveSprite('idle');
          setMotionState('idle');
          setTimeout(() => setIsModalOpen(true), 350);
        }, 750);
      }, 260);
    }
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        className="fixed bottom-6 left-6 z-50 pointer-events-none select-none flex flex-col items-center"
        style={{ width: 125 }}
        animate={
          motionState === 'whistling'
            ? { x: [0, 240] }
            : motionState === 'running_to_edge'
            ? { x: [240, typeof window !== 'undefined' ? window.innerWidth + 80 : 800], scaleX: 1 }
            : motionState === 'peeking_left'
            ? { x: -28, scaleX: 1, y: typeof window !== 'undefined' ? -window.innerHeight * 0.65 : -420 }
            : motionState === 'peeking_right'
            ? { x: typeof window !== 'undefined' ? window.innerWidth - 92 : 720, scaleX: -1, y: typeof window !== 'undefined' ? -window.innerHeight * 0.62 : -400 }
            : motionState === 'car_racing'
            ? { x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 900, -100, 0], scaleX: [1, 1, -1, 1] }
            : motionState === 'wall_climbing'
            ? { x: [0, 200, 200], y: [0, 0, -520], rotate: [0, 0, 0] }
            : motionState === 'falling'
            ? { y: [-600, 0], x: 0, rotate: 0, scaleX: 1 }
            : motionState === 'sprinting'
            ? { x: [0, 350, 350, 0], scaleX: [1, 1, -1, 1] }
            : { x: 0, y: 0, opacity: 1, scaleX: 1, rotate: 0 }
        }
        transition={
          motionState === 'whistling'
            ? { duration: 2.8, ease: "linear" }
            : motionState === 'running_to_edge'
            ? { duration: 0.85, ease: [0.4, 0, 0.2, 1] }
            : motionState === 'car_racing'
            ? { duration: 3.4, times: [0, 0.48, 0.52, 1], ease: "easeInOut" }
            : motionState === 'wall_climbing'
            ? { duration: 2.4, times: [0, 0.2, 1], ease: "easeInOut" }
            : motionState === 'falling'
            ? { duration: 2.6, ease: [0.25, 0.46, 0.45, 0.94] }
            : motionState === 'sprinting'
            ? { duration: 2.8, times: [0, 0.45, 0.55, 1], ease: "easeInOut" }
            : { duration: 0.3 }
        }
      >
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              className={`pointer-events-auto absolute w-64 p-3.5 bg-white border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a] text-left z-20 cursor-default ${['wall_climbing', 'peeking_left', 'peeking_right'].includes(motionState) ? 'top-28 left-14' : 'bottom-28 left-0'}`}
            >
              <button
                type="button"
                onClick={() => handleCloseBubble(true)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs rounded-full flex items-center justify-center border-2 border-slate-900 shadow-sm"
              >
                ✕
              </button>
              <div>
                <p className="text-xs font-black text-slate-800 leading-snug">{bubbleText}</p>
                <div className="mt-2.5">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola%20Vision%20Saludable,%20quiero%20agendar%20mi%20examen%20gratis`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-2.5 py-1 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-[11px] rounded-lg border border-slate-900 shadow-[2px_2px_0px_#0f172a]"
                  >
                    Agendar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="relative flex flex-col items-center pointer-events-auto cursor-grab active:cursor-grabbing"
          style={{ width: 120, height: 95 }}
          onClick={handleClick}
          drag
          dragConstraints={{ left: -100, right: 600, top: -500, bottom: 20 }}
          dragElastic={0.2}
          onDragStart={() => {
            dragStartTimeRef.current = performance.now();
            setActiveSprite('run');
            setIsSweating(true);
            const shout = panicShouts[Math.floor(Math.random() * panicShouts.length)];
            setBubbleText(shout);
            setShowBubble(true);
          }}
          onDragEnd={(_e, info) => {
            setIsSweating(false);
            const dragDuration = performance.now() - dragStartTimeRef.current;
            const speed = Math.hypot(info.velocity.x, info.velocity.y);

            if (dragDuration > 2200) {
              setActiveSprite('angry');
              setMotionState('angry');
              const quote = angryQuotes[Math.floor(Math.random() * angryQuotes.length)];
              setBubbleText(quote);
              setTimeout(() => {
                setActiveSprite('idle');
                setMotionState('idle');
                resetInactivity();
              }, 3800);
              return;
            }

            if (speed > 400 || info.velocity.y < -300) {
              setActiveSprite('parachute');
              setMotionState('falling');
              setTimeout(() => {
                setActiveSprite('bounce');
                setMotionState('landing');
                setTimeout(() => {
                  setActiveSprite('idle');
                  setMotionState('idle');
                }, 750);
              }, 1500);
            } else {
              setActiveSprite('bounce');
              setMotionState('landing');
              setTimeout(() => {
                setActiveSprite('idle');
                setMotionState('idle');
              }, 700);
            }
          }}
          animate={
            motionState === 'landing'
              ? {
                  scale: [1, 1.4, 0.82, 1.18, 0.96, 1],
                  y: [0, 14, -48, 6, -14, 0],
                  transition: { duration: 0.75, ease: [0.28, 0.84, 0.42, 1] }
                }
              : motionState === 'falling'
              ? {
                  rotate: [-7, 7, -7],
                  transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                }
              : motionState === 'whistling'
              ? {
                  y: [0, -6, 0],
                  rotate: [-3, 3, -3],
                  transition: { duration: 0.38, repeat: Infinity, ease: "easeInOut" }
                }
              : motionState === 'idle'
              ? {
                  y: [0, -6, 0],
                  scaleY: [1, 1.02, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
              : {}
          }
        >
          <div className="relative w-full h-full flex items-end justify-center">
            {activeSprite === 'idle' && (
              <img src="ojito-idle.png" alt="Ojito Quieto" className="w-[82px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'whistle' && (
              <img src="ojito-whistle.png" alt="Ojito Silbando" className="w-[76px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'peek' && (
              <img src="ojito-peek.png" alt="Ojito Espiando" className="w-[68px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'run' && (
              <img src="ojito-run.png" alt="Ojito Corriendo" className="w-[96px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'parachute' && (
              <img src="ojito-parachute.png" alt="Ojito Paracaidas" className="w-[112px] max-h-[155px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'bounce' && (
              <img src="ojito-bounce.png" alt="Ojito Rebote" className="w-[86px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'angry' && (
              <img src="ojito-angry.png" alt="Ojito Enojado" className="w-[76px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'sad' && (
              <img src="ojito-sad.png" alt="Ojito Triste" className="w-[76px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'bored' && (
              <img src="ojito-bored.png" alt="Ojito Aburrido" className="w-[76px] h-auto object-contain select-none pointer-events-none" />
            )}
            {activeSprite === 'car' && (
              <img src="ojito-car.png" alt="Ojito En Carro" className="w-[125px] h-auto object-contain select-none pointer-events-none" />
            )}

            {isSweating && (
              <div className="absolute -top-3 right-0 pointer-events-none">
                <svg className="w-6 h-6 overflow-visible" viewBox="0 0 24 24">
                  <path d="M 12 3 C 9 8, 7 11, 7 14 C 7 17.5, 9.5 20, 12 20 C 14.5 20, 17 17.5, 17 14 C 17 11, 15 8, 12 3 Z" fill="#38bdf8" stroke="#0f172a" strokeWidth={2} />
                </svg>
              </div>
            )}

            {isDizzy && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{ width: 70, height: 35 }}
              >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 70 35">
                  <polygon points="12,2 14,7 19,8 15,12 16,17 12,14 8,17 9,12 5,8 10,7" fill="#facc15" stroke="#0f172a" strokeWidth={1.5} />
                  <polygon points="56,3 58,8 63,9 59,13 60,18 56,15 52,18 53,13 49,9 54,8" fill="#facc15" stroke="#0f172a" strokeWidth={1.5} />
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Appointment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-sm bg-white rounded-3xl border-2 border-slate-900 shadow-[8px_8px_0px_#0f172a] p-5 text-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-100 border-2 border-slate-900 flex items-center justify-center p-1">
                    <img src="ojito-idle.png" alt="Ojito" className="w-8 h-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900">Ojito</h3>
                    <p className="text-[11px] text-slate-500 font-semibold">Mascota Oficial - Vision Saludable</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border-2 border-slate-900 font-black text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <div className="bg-sky-50 rounded-2xl p-3 border border-sky-200">
                  <p className="text-xs text-sky-900 font-medium">
                    Tu <b>examen optometrico digital computarizado es 100% GRATIS</b> en Vision Saludable.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Vision%20Saludable,%20quiero%20agendar%20mi%20examen%20gratis`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] flex items-center justify-center gap-2"
                >
                  <span>Agendar por WhatsApp ({whatsappNumber.replace(/^502/, '')})</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MascotOjito;
