import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("hasLoaded");
    if (seen) { setShow(false); return; }
    const t = setTimeout(() => {
      sessionStorage.setItem("hasLoaded", "true");
      setShow(false);
    }, 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "var(--bg-primary)" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 rounded-xl p-0.5 mb-6"
            style={{ background: "var(--gradient-1)" }}
          >
            <div className="w-full h-full rounded-lg flex items-center justify-center gradient-text font-display font-extrabold text-2xl"
                 style={{ background: "var(--bg-primary)" }}>VM</div>
          </motion.div>
          <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
            <motion.div
              initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.6 }}
              className="h-full" style={{ background: "var(--gradient-1)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
