export class Title {
  constructor(
    public heading: string,
    public description: string
  ) {}
}

// title-liste.ts
export const titleList: Title[] = [
  new Title(
    "Personal info",
    "Please provide your name, email address, and phone number."
  ),
  new Title(
    "Select your plan",
    "You have the option of monthly or yearly billing."
  ),
  new Title(
    "Pick add-ons",
    "Add-ons help enhance your gaming experience."
  ),
  new Title(
    "Finishing up",
    "Double-check everything looks OK before confirming."
  ),
];