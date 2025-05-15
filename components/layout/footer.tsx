import { Shield } from "lucide-react"

import { FooterColumn } from "@/components/molecules/footer-column"
import { FooterLink } from "@/components/atoms/footer-link"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-muted/50 dark:bg-slate-900 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CyberFormation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Formation professionnelle en réseau et cybersécurité pour tous les niveaux.
            </p>
          </div>

          <FooterColumn title="Formation">
            <FooterLink href="#programme">Programme</FooterLink>
            {/* <FooterLink href="#tarifs">Tarifs</FooterLink> */}
          </FooterColumn>

          <FooterColumn title="Ressources">
            <FooterLink href="#">Tutoriels</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterLink href="#">hello@infinityskils.com</FooterLink>
            <FooterLink href="#">01 23 45 67 89</FooterLink>
            <FooterLink href="#">Montreal, Quebec</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CyberFormation. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <FooterLink href="#">Mentions légales</FooterLink>
            <FooterLink href="#">Politique de confidentialité</FooterLink>
            <FooterLink href="#">CGV</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
