import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/services';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchFormModule } from './shared/components/search-form/search-form.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		FlexLayoutModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		MatGridListModule,
		SearchFormModule,
		MatSidenavModule
	],
	providers: [ ProductService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
