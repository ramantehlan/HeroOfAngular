# HeroOfAngular
HeroOfAngular is a upgraded version of tutorial(**Tour of Heroes**) created by Angular to teach fundamentals. You can read more about the same in the [Angular Guide](https://v5.angular.io/guide/quickstart)[v5 (v5.2.11)].

## Index 
1. [Introduction](#introduction)
2. [Pre-Request](#pre-request)
    1. [Knowledge](#knowledge)
    2. [Environment](#environment)
3. [Development Environment](#development-environment)
4. [File Structure](#file-structure)
5. [Best Practice](#best-practice)
    1. [General](#general)
    2. [SCSS and CSS](#scss-and-css)
6. [Contribution](#contribution)
7. [Resources](#resources)

## Introduction

## Pre-Request
      
### Knowledge
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](http://sass-lang.com/)

### Environment

- **Node and NPM**

```bash
    sudo curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

```bash
    sudo apt-get install -y nodejs
```

- **Angular CLI**

```bash
    npm install -g @angular/cli
```

## Development Environment

- **Clone**

```bash
    git clone https://github.com/ramantehlan/HeroOfAngular.git
```

- **Get into Repository**

```bash
    cd HeroOfAngular
```

- **Start the app**

```bash
    ng serve
```


## File Structure

> `HeroOfAngular` is the root folder, and `src` is where our app lives.

```

HeroOfAngular
|--e2e
|   |--app.e2e-spec.ts
|   |--app.po.ts
|   |--tsconfig.e2e.json
|
|--node_modules/...
|--src
|   |--app
|   |   |--hero-detail/...
|   |   |--heroes/...
|   |   |--messages/...
|   |   |--top/...
|   |   |
|   |   |--app.component.css
|   |   |--app.component.html
|   |   |--app.component.spec.ts
|   |   |--app.component.ts
|   |   |--app.module.ts
|   |   
|   |--assets
|   |   |--gitkeep
|   |
|   |--environments
|   |   |--environment.prod.ts
|   |   |--environment.ts
|   |
|   |--lib
|   |   |--config.inc.ts
|   |   |--hero.ts
|   |   |--mock-heroes.ts
|   |
|   |--module
|   |   |--app-routing.module.spec.ts
|   |   |--app-routing.module.ts
|   |
|   |--service
|   |   |--hero.service.spec.ts
|   |   |--hero.service.ts
|   |   |--message.service.spec.ts
|   |   |--message.service.ts
|   | 
|   |--style
|   |   |--_base.scss
|   |   |--_config.scss
|   |
|   |--favicon.ico
|   |--index.html
|   |--main.ts
|   |--polyfills.ts
|   |--styles.css
|   |--test.ts
|   |--tsconfig.app.json
|   |--tsconfig.spec.json
|
|--.angular-cli.json
|--.editorconfig
|--.gitignore
|--karma.conf.js
|--package.json
|--protractor.conf.js
|--README.md
|--tsconfig.json
|--tslint.json

```

**`src` folder**

File | Purpose |
-----|---------|
app/app.component.{ts,html,css,spec.ts} | Root components of what will become a tree of nested components, as the app grow. 
app/app.module.ts | `root module` tells angular how to assemble the application.
assets/* | Place to put assets like images, gifs etc.
environments/* | This folder contains one file for each of your destination environments
lib/* | User defined libraries will be stored here.
service/* | Services used by components are defined here.
style/* | User defined style libraries will be stored here.
favicon.ico | You app icon.
index.html | Main HTML page, CLI automatically adds all the required file, like js, css etc while building your app.
main.ts | Main entry point for your app
polyfills.ts | Polyfills help normalize different levels of support of the web standards in different browsers.
styles.css | Global style file.
test.ts | Main entry point for units tests.
tsconfig.{app\|spec}.json | TypeScript compiler configuration for the Angular app `tsconfig.app.json` and for the unit tests `tsconfig.spec.json`.

**`root` folder**

File                | Purpose |
--------------------|---------|
e2e/                | It holds end-to-end tests.
node_modules/       | Folder for third party modules listed in `package.json`.
.angular-cli.json   | Configuration for Angular CLI
.editorconfig       | Simple configuration for your editor to make sure everyone that uses your project has the same basic configuration. Most editors support an .editorconfig file. See [Editor-Config](http://editorconfig.org) for more information.
.gitignore          | Git configuration to make sure autogenerated files are not commited to source control.
karma.conf.js       | Unit test configuration for the [Karma test](https://karma-runner.github.io) runner, used when running `ng test`.
package.json        | `npm` configuration listing the third party packages your project uses. You can also add your own [custom scripts](https://docs.npmjs.com/misc/scripts) here.
protractor.conf.js  | End-to-end test configuration for [Protractor](http://www.protractortest.org/#/), used when running `ng e2e`.
README.md           | Basic documentation for your project.
tsconfig.json       | TypeScript compiler configuration for your IDE to pick up and give you helpful tooling.
tslint.json         | Linting configuration for [TSLint](https://palantir.github.io/tslint/) together with [Codelyzer](http://codelyzer.com/), used when running `ng lint`. Linting helps keep your code style consistent.


## How to 
This section will tell you how to do some basic tasks in Angular, without using CLI

### How to add a component
Let's say we want to create a component `test`

1. **Create following files**

```bash
    src/app/test/test.component.css
    src/app/test/test.component.html
    src/app/test/test.component.spec.ts
    src/app/test/test.component.ts
```

2. **Paste following code in `test.component.ts`**

```typescript
    import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
> Note: Replace `TestComponent`, `templateUrl`, `styleUrls` and selector with your component values

3. **Paste following code in `test.component.spec.ts`**

```typescript
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```
> Note: Replace `TestComponent` with the class name of your new component.

4. **Update `src/app/app.module.ts`**

- Add import of new component 

```typescript
    import { TestComponent } from './test/test.component';
```

- Add test component to declarations

```typescript
declarations: [
    AppComponent,
    TestComponent
  ]
```

### How to Delete a component
Let's say we want to delete a component `test`

1. **Delete the component folder from the `src/app/` folder**


```bash
    sudo rm -r test
```

2. **Remove declaration and import from `src/app/app.module.ts`**
<Br>
Remove Import of `TestComponent` from imports and remove it from declarations.

> Warning: Make sure before deleting any component, that it's not used by the app.

### How to create a service
let's say we want to create a service called `hero`

1. **Create following files**

```bash
        src/app/hero.service.spec.ts
        src/app/hero.service.ts
```

2. **Paste following code in `hero.service.spec.ts`**

```typescript
import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});

```

3. **Paste Following code in ``hero.service.ts``**

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
```

4. **Add service to providers in `app.module.ts`**

```typescript
    ...
    import { HeroService } from "./hero.service.ts";
    ...
    providers:[
        HeroService,
        ...
    ]
```

### How to Delete a service
Let's say we want to delete a service `test`

1. **Delete following files**

```bash
        src/app/test.service.spec.ts
        src/app/test.service.ts
```

2. **Remove it from `app.module.ts`**

```typescript
     ...
     // Remove it
    import { TestService } from "./test.service.ts";
    ...
    // Remove TestService from providers
    providers:[
        TestService,
        ...
    ]
```

> Info: There are several ways to provide a service, we can add it in different components. 

> Warning: Make sure before deleting any service, that it's not used by the app. 

### How to add a module
Let's say we want to create a module app-routing.

1. **Create following files**

```bash 
    src/module/app-routing.module.spec.ts
    src/module/app-routing.module.ts
```

2. **Paste following code in `app-routing.module.spec.ts`**

```typescript
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});

```

3. **Paster following code in `app-rounting.module.ts`**

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

```

4. **Import app-routing class in `app.module.ts`**

```typescript
    import { AppRoutingModule } from '../module/app-routing.module';
    ...
    imports: [
    ...
    AppRoutingModule
    ]
```

### How to Remove a module
Let's say we wish to remove the module 

## Best Practice

### **General**

- **Comments** <br>
    Comments are what's make the communication possible between programmers and developers, they we created for a single main reason, to make the code readable.
    <br><br>
    We need to comment our logic, reason and flow for making a algoritham/function in a app. we don't have to comment everything, but everything we is based out of our logic.

- **Documentation** <br> 
    Documentations are the gates between code base and programmer/humans, they are decrease the time of understanding the code base and make the development process fast.
    <br><br>
    Documentation grow, as our code grow, continous addition is a must for documentation to stay relevent.

### **SCSS and CSS** 

- **Use hyphen(-) Delimiter**<Br>
It makes sheet more readable.

```scss  
    //This is wrong 
    .blackCar{}
    //This is best
    .black-car{}
```

- **BEM Scheme** <br>
**B**ody **E**lement **M**odifier(BEM) gives sense to the names, which is globally accepted. let's say we have a paper-car class, here car is body, it's parts are element and any change in its part is modifier. Following should be the best way to name it in **Style Sheet**.

```scss
    //This is how we name the body
    .paper-car{}

    //This is how we name the elements
    .paper-car_seat{}
    .paper-car_glass{}

    //This is how we name the modifier
    .paper-car_seat--blue{}
    .paper-car_seat--black{} 
```

- **Style Sheet with Script File** <br>
Using different class and id name for Style Sheet and Script file is best, it avoids the conflict between them and gives better flow. Using "js-" as a prefix for naming the object is prefered, also avoid using keywords for naming objets, like using 'data' for a naming a object will create a conflict, since it is also used by javascript and JSON.

```html
    <div class="paper-car js-paper-car"></div>
```

## Contribution
    Feel free to contribute.

## Resources
- [Angular Guide](https://v5.angular.io/guide/quickstart)
- [Airbnb JavaScript Guide](https://github.com/airbnb/javascript)
- [Angular Best Practice](https://v5.angular.io/guide/styleguide)