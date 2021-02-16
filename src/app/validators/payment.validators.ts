import { AbstractControl } from "@angular/forms";

export function ccvValidator(control: AbstractControl) {
    const ccvLength = control.value.length;
    if ((ccvLength > 0 && ccvLength < 3) || ccvLength > 3) {
        return {
            isError: true
        }
    }

    return null;
}

export function dateValidator(control: AbstractControl) {
    let dateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if (!(dateRegex.test(control.value))) {
        return {
            isError: true
        }
    }

    let currentDate = new Date();
    let selectedDate = new Date(control.value);

    if (currentDate > selectedDate) {
        return {
            isError: true
        }
    }

    return null;
}

export function numberValidator(control: AbstractControl) {
    if (isNaN(control.value)) {
        return {
            isError: true
        }
    }

    return null;
}