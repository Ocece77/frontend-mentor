import { Ons } from "./ons";
import { Plan } from "./plan";

export class FullPlan{
  constructor(
    public plan : Plan = new Plan("Arcade", 0), /*There's only one plan */
    public ons : Ons[] = [],  /*There's one or many ons */
  ){}
}