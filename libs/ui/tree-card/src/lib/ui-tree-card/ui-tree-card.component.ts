import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from '../tree-card.model';

@Component({
  selector: 'lib-ui-tree-card[node]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-tree-card.component.html',
  styleUrl: './ui-tree-card.component.scss'
})
export class UiTreeCardComponent {
  @Input() node!: TreeNode;

  toggleExpand(): void {
    this.node.expanded = !this.node.expanded;
  }
}
