"use client";

import { FilledButton } from "@/components/ui/buttons/FilledButton";
import { Input } from "@/components/ui/base/input";
import { COUNTRIES, type CountryCode } from "@/constants/countries";
import { useRouter, useSearchParams } from "next/navigation";
import type * as React from "react";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userNameAtom } from "@/atoms/user";

export default function Register() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    country: "CR" as CountryCode,
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setUserName] = useAtom(userNameAtom);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store just the name in the atom
      setUserName(formData.name);
      
      // Redirect to welcome page
      router.push("/welcome");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to complete registration"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

      // // Get form data
      // const userData = {
      //   name: formData.name,
      //   last_name: formData.lastName,
      //   email: formData.email,
      //   age: Number.parseInt(formData.age),
      //   subscription: false,
      //   wallet_address: walletAddress,
      //   username,
      //   country:
      //     COUNTRIES.find((c) => c.countryCode === formData.country)?.country ||
      //     "Costa Rica",
      // };

  //     // Client-side validation
  //     if (
  //       !userData.name ||
  //       userData.name.length < 2 ||
  //       userData.name.length > 50
  //     ) {
  //       throw new Error("Name must be between 2 and 50 characters");
  //     }

  //     if (
  //       !userData.last_name ||
  //       userData.last_name.length < 2 ||
  //       userData.last_name.length > 50
  //     ) {
  //       throw new Error("Last name must be between 2 and 50 characters");
  //     }

  //     if (
  //       !userData.email ||
  //       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)
  //     ) {
  //       throw new Error("Please enter a valid email address");
  //     }

  //     if (!userData.age || userData.age < 18 || userData.age > 120) {
  //       throw new Error("Age must be between 18 and 120");
  //     }

  //     if (!/^0x[a-fA-F0-9]{40}$/.test(userData.wallet_address)) {
  //       throw new Error("Invalid wallet address format");
  //     }

  //     // Create user
  //     const response = await fetch("/api/user", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(result.error || "Failed to create user profile");
  //     }

  //     // Create session
  //     const sessionResponse = await fetch("/api/auth/session", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify({
  //         walletAddress,
  //         isSiweVerified: true,
  //       }),
  //     });

  //     if (!sessionResponse.ok) {
  //       const sessionError = await sessionResponse.json();
  //       throw new Error(sessionError.error || "Failed to create session");
  //     }

  //     // Request notification permission after successful registration
  //     await requestPermission();

  //     // Set registration completion flag and redirect to welcome page
  //     sessionStorage.setItem("registration_complete", "true");
  //     router.push("/welcome");
  //   } catch (error) {
  //     setError(
  //       error instanceof Error
  //         ? error.message
  //         : "Failed to complete registration",
  //     );
  //     if (error instanceof Error) {
  //       setErrorCode(error.message as NotificationErrorCode);
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // if (!userId) {
  //   return null;
  // }

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="relative w-screen h-[354px] -mt-4">
        <div className="w-screen absolute top-0 bg-white rounded-b-[65px] shadow-[inset_-5px_-5px_25px_0px_rgba(134,152,183,1.00),inset_5px_5px_25px_0px_rgba(248,248,246,1.00)]" />
        <div className="w-screen h-full px-[34px] pt-[104px] pb-[70px] absolute top-0 bg-[#2c5154] rounded-b-[65px] shadow-[21px_38px_64.69999694824219px_3px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="max-w-md mx-auto">
            <h1 className="text-white text-[50px] font-medium leading-[50px]">
              Nos gustaría conocerte un poco más...
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md p-4 mt-4">
        <p className="text-center text-[#232931] text-base font-normal mb-8">
          Por favor, completa los siguientes campos para comenzar.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-20">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="space-y-2">
            <label htmlFor="name" className="text-[#232931] text-base">
              Nombre
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={50}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="h-[30px] bg-[#d9d9d9] rounded-[20px] border-0 text-black placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="last_name" className="text-[#232931] text-base">
              Apellido
            </label>
            <Input
              id="last_name"
              name="last_name"
              type="text"
              required
              minLength={2}
              maxLength={50}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="h-[30px] bg-[#d9d9d9] rounded-[20px] border-0 text-black placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[#232931] text-base">
              Correo Electrónico
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-[30px] bg-[#d9d9d9] rounded-[20px] border-0 text-black placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="age" className="text-[#232931] text-base">
              Edad
            </label>
            <select
              id="age"
              name="age"
              required
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              className="h-[30px] bg-[#d9d9d9] rounded-[20px] border-0 px-3 w-full text-black"
            >
              <option value="" className="text-gray-500">
                Seleccionar edad
              </option>
              {Array.from({ length: 113 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age} className="text-black">
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="text-[#232931] text-base">
              País
            </label>
            <select
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  country: e.target.value as CountryCode,
                })
              }
              className="h-[30px] bg-[#d9d9d9] rounded-[20px] border-0 px-3 w-full text-black"
            >
              {COUNTRIES.map(({ countryCode, country, flag }) => (
                <option
                  key={countryCode}
                  value={countryCode}
                  className="text-black"
                >
                  {flag} {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end">
            <FilledButton
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-red to-[#FF8066]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2 " />
                  Registrando...
                </div>
              ) : (
                "Completar Registro"
              )}
            </FilledButton>
          </div>
        </form>
      </div>
    </div>
  );
}
