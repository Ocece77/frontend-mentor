export class StepInfo{


  currentStep? : boolean; /*store the value of if this is the current step */
  id: number ; 

  constructor(
    public positionString : string = "",
    public position : number = 0,
    public name: string = "Your Info"
  ){
    this.id = this.position
  }

  setCurrentStep(currentStep : boolean): void{
    this.currentStep = currentStep
  } /*set the current step */

  withCurrentStep(currentStep : boolean) {
    this.setCurrentStep(currentStep)
    return this
  } /*get the current step */

}