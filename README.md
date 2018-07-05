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
environments/* | 
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