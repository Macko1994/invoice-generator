import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidator {
  public static atLeastOne(validator: ValidatorFn, controls: string[]): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const groupControls: FormGroup = group as FormGroup;
      return !groupControls || !groupControls.controls || controls.every((k: string) => {
        return !!validator(groupControls.controls[k])
      }) ? {atLeastOne: true} : null
    };
  }
}
