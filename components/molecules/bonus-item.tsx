import { CheckCircle } from "lucide-react"

interface BonusItemProps {
  title: string
  description: string
}

export function BonusItem({ title, description }: BonusItemProps) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
