import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message: string[] = []

  add(message: string): void {
    this.message.push(message)
  }
  clear(): void {
    this.message = []
  }
}
