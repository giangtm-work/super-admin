import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode, UiTreeCardComponent } from '@super-admin/ui/tree-card';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, UiTreeCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tree: TreeNode = {
    id: 1,
    name: 'Root Node',
    expanded: true,
    children: [
      {
        id: 2,
        name: 'Child Node 1',
        expanded: false,
        children: [
          { id: 3, name: 'Child Node 1.1', expanded: false },
          { id: 4, name: 'Child Node 1.2', expanded: false }
        ]
      },
      {
        id: 5,
        name: 'Child Node 2',
        expanded: false,
        children: [
          { id: 6, name: 'Child Node 2.1', expanded: false },
          { id: 7, name: 'Child Node 2.2', expanded: false }
        ]
      }
    ]
  };
}
