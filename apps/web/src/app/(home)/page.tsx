"use client";

import {
  AchievementButton,
  LeaderboardButton,
  LoadingSpinner,
  ProfileCard,
  QuizCard,
} from "@/components";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userNameAtom } from "@/atoms/user";

interface User {
  name: string;
  last_name: string;
  level: string;
  level_points: number;
  points: number;
  maxPoints: number;
  verified?: boolean;
}

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [userName] = useAtom(userNameAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the userName from the atom
        if (userName) {
          setUserData({
            name: userName || "Usuario",
            last_name: "",
            level: "1",
            level_points: 0,
            points: 0,
            maxPoints: 100,
            verified: false
          });
        }
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [router, userName]);

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      <div className="min-h-screen">
        <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem] border-b border-brand-tertiary/20 bg-brand-tertiary px-4 py-8 sm:p-8 md:p-10 lg:p-12">
          <div className="absolute inset-0 opacity-20" />

          <motion.div
            className="relative z-10 mx-auto max-w-xs sm:max-w-sm md:max-w-md space-y-4 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 sm:space-y-3 text-center">
              <Sun className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-[#E36C59]" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
                ¡Bienvenido de nuevo!
              </h1>
            </div>

            <p className="mx-auto mb-2 sm:mb-4 max-w-[280px] sm:max-w-sm text-sm sm:text-base md:text-lg font-medium text-slate-200">
              Sigue tu progreso y continúa tu viaje de autodescubrimiento
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-7xl">
            <div className="flex w-full flex-col items-center gap-4 sm:gap-5 md:gap-6">
              <motion.div
                className="flex w-full justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <ProfileCard
                  className={cn(
                    "w-full max-w-[300px] sm:max-w-[340px] md:max-w-[365px]",
                    "transform transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                    "shadow-[0_10px_20px_rgba(0,0,0,0.2),_0_6px_6px_rgba(0,0,0,0.25)]",
                    "hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)]",
                  )}
                  user={userData || undefined}
                />
              </motion.div>

              <motion.div
                className="flex w-full justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <LeaderboardButton />
              </motion.div>

              <motion.div
                className="flex w-full justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <QuizCard />
              </motion.div>

              <motion.div
                className="flex w-full justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <AchievementButton />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
