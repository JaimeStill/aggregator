import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'expansion-card',
    templateUrl: 'expansion-card.component.html'
})
export class ExpansionCardComponent {
    @Input() heading: string = 'Heading';
    @Input() expanded: boolean = false;
    @Input() collapseIcon: string = 'keyboard_arrow_down';
    @Input() expandIcon: string = 'keyboard_arrow_up';
    @Input() cardStyle: string = 'm4 p2 rounded card-outline-accent';

    toggle = () => this.expanded = !this.expanded;
}
