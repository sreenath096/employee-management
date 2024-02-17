import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../../models/department.model';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DeleteConfirmationComponent } from '../../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrl: './dep-list.component.css'
})
export class DepListComponent implements OnInit {
  departments: Department[] = [];
  bsModalRef?: BsModalRef;

  constructor(private departmentService: DepartmentService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(response => {
      this.departments = response;
    });
  }


  onDeleteButtonClick(department: Department) {
    const initialState: ModalOptions = {
      initialState: {
        item: department.name + ' department'
      }
    };
    this.bsModalRef = this.modalService.show(DeleteConfirmationComponent, initialState);
    console.log(this.bsModalRef.content.isDeleteClicked);
    this.bsModalRef.content.confirmDelete.subscribe((confirmDelete: boolean) => {
      this.bsModalRef?.hide();
      if (confirmDelete) {
        this.departmentService.deleteDepartment(department.id).subscribe(response => {
          this.departmentService.getDepartments().subscribe(response => {
            this.departments = response;
          });
        });
      }
    });
  }
}
