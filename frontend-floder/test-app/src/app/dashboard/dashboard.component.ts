import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../services/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = { name: '', description: '' }; // Add description here

  // newItem: Item = { name: '' }; // For creating a new item
  selectedItemId: number | null = null; // For updating/deleting an item

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  // Load all items
  loadItems(): void {
    this.itemsService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

  // Create a new item
  addItem(): void {
    if (this.newItem.name.trim()) {
      this.itemsService.createItem(this.newItem).subscribe(() => {
        this.loadItems(); // Refresh the list
        this.newItem = { name: '' , description: ''  }; // Reset the form
      });
    }
  }

  // Update an existing item
  updateItem(): void {
    if (this.selectedItemId !== null && this.newItem.name.trim()) {
      this.itemsService.updateItem(this.selectedItemId, this.newItem).subscribe(() => {
        this.loadItems(); // Refresh the list
        this.resetForm();
      });
    }
  }

  // Delete an item
  deleteItem(id: number): void {
    this.itemsService.deleteItem(id).subscribe(() => {
      this.loadItems(); // Refresh the list
    });
  }

  // Select an item for editing
  selectItemForEdit(item: Item): void {
    this.selectedItemId = item.id || null;
    this.newItem = { ...item }; // Copy the item to the form
  }

  // Reset the form
  resetForm(): void {
    this.selectedItemId = null;
    this.newItem = { name: '' , description: '' }; // Reset the form
  }
}

