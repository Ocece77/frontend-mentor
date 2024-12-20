import { Ons } from "./ons";
import { Plan } from "./plan";

export class FullPlan{
  constructor(
    public plan : Plan = new Plan("Arcade", 9), /*There's only one plan */
    public ons : Set<Ons> = new Set<Ons>(),  /*There's one or many ons */
  ){}
}