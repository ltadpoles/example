import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'strength'
})
export class StrengthPipe implements PipeTransform {
    transform(value: number, ...args: number[]): number {
        return value + 5
    }
}
