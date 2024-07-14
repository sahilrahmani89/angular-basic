import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div *ngIf="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" (click)="close()">
      <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2" (click)="$event.stopPropagation()">
        <h2 class="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p class="mb-6">Stay updated with the latest news and exclusive offers. Enter your email below:</p>
        <input type="email" placeholder="Your email" class="w-full p-2 border border-gray-300 rounded mb-4"  />
        <button class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2" (click)="subscribe()">Subscribe</button>
        <button class="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-background { display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.5); position: fixed; inset: 0; z-index: 50; }
    .modal-content { background: white; padding: 2rem; border-radius: 0.5rem; width: 50%; }
  `]
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeEvent = new EventEmitter<void>();

  email: string = '';

  close() {
    this.closeEvent.emit();
  }

  subscribe() {
    alert(`Subscribed with email: ${this.email}`);
    this.close();
  }
}
