import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { ObservableMedia } from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector: 'nga-product-suggestion',
	templateUrl: './product-suggestion.component.html',
	styleUrls: [ './product-suggestion.component.scss' ]
})
export class ProductSuggestionComponent implements OnInit {
	@Input() products: Product[];
	readonly columns$: Observable<number>;
	readonly breakpointsToColumnsNumber = new Map([ [ 'xs', 2 ], [ 'sm', 3 ], [ 'md', 5 ], [ 'lg', 2 ], [ 'xl', 3 ] ]);

	constructor(private media: ObservableMedia) {
		// If the initial screen size is xs ObservableMedia doesn't emit an event
		// and grid-list rendering fails. Once the following issue is closed, this
		// comment can be removed: https://github.com/angular/flex-layout/issues/388
		this.columns$ = this.media
			.asObservable()
			.pipe(map((mc) => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias)), startWith(3)); // big workaround
	}

	ngOnInit() {}
}
