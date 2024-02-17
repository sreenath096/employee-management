import { Component, EventEmitter, input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.css'
})
export class DeleteConfirmationComponent {

  item?: string;
  confirmDelete = new EventEmitter<boolean>();

  constructor(public bsModalRef: BsModalRef) { }

  confirmDeleteClick() {
    this.confirmDelete.emit(true);
  }
}
