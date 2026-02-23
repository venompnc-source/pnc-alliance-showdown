import * as React from "react";
import { Quest } from "@shared/api";
import { 
  Trophy, ShoppingCart, Users, Zap, Diamond, Flame, 
  Pickaxe, Shield, User, Heart, HandHelping, Hammer, 
  FlaskConical, Sword, Compass, Clock, Truck, Package,
  HelpCircle, X, Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, any> = {
  arena: Trophy,
  market: ShoppingCart,
  alliance: Users,
  ap: Zap,
  diamond: Diamond,
  stamina: Flame,
  gather: Pickaxe,
  gear: Shield,
  hero: User,
  heal: Heart,
  help: HandHelping,
  building: Hammer,
  research: FlaskConical,
  troop: Sword,
  rally: Compass,
  speedup: Clock,
  transport: Truck,
  packs: Package,
};

interface QuestModalProps {
  quest: Quest | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuestModal({ quest, isOpen, onClose }: QuestModalProps) {
  if (!quest) return null;

  const Icon = typeIcons[quest.type] || HelpCircle;
  const isHighValue = quest.points >= 240;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] border-border bg-card shadow-2xl overflow-hidden p-0">
        <div className={cn(
          "absolute top-0 left-0 w-full h-2 bg-primary transition-all",
          isHighValue ? "opacity-100" : "opacity-30"
        )} />
        
        <DialogHeader className="px-6 pt-8 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary ring-1 ring-inset ring-white/10 shadow-lg">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                {quest.quest}
              </DialogTitle>
              <span className="text-xs text-primary font-bold uppercase tracking-widest">
                {quest.type} Quest
              </span>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 py-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-secondary/30 border border-border/50 p-4">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Requirement</span>
              <p className="text-lg font-bold text-foreground">
                {typeof quest.requirement === 'number' ? quest.requirement.toLocaleString() : quest.requirement}
              </p>
            </div>
            <div className="rounded-xl bg-secondary/30 border border-border/50 p-4">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Reward</span>
              <p className="text-lg font-bold text-primary">
                {quest.points} Points
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-secondary/30 border border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Time Limit</span>
            </div>
            <p className="text-sm font-medium text-foreground/80">
              {quest.time || "No time limit for this quest"}
            </p>
          </div>

          <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Info className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Strategist's Note</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90 italic">
              {quest.note || "No specific notes available for this quest. Focus on completing the requirements efficiently to maximize point gain."}
            </p>
          </div>
        </div>

        <div className="bg-secondary/20 px-6 py-4 flex justify-end mt-4">
          <DialogClose asChild>
            <button className="px-4 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Got it
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
