import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ObservableMedia } from '@angular/flex-layout';
import { Product, ProductService } from '../../shared/services';

@Component({
	selector: 'nga-product-grid',
	templateUrl: './product-grid.component.html',
	styleUrls: [ './product-grid.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridComponent {
	@Input() products: Product[];
	readonly columns$: Observable<number>;
	readonly breakpointsToColumnsNumber = new Map([ [ 'xs', 1 ], [ 'sm', 2 ], [ 'md', 3 ], [ 'lg', 4 ], [ 'xl', 5 ] ]);

	constructor(private media: ObservableMedia) {
		this.columns$ = this.media
			.asObservable()
			.pipe(map((mc) => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias)), startWith(3));
	}

	ngOnInit() {}
}
