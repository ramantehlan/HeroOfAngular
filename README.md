# HeroOfAngular
HeroOfAngular is a upgraded version of tutorial(**Tour of Heroes**) created by Angular to teach fundamentals. You can read more about the same in the [Angular Guide](https://v5.angular.io/guide/quickstart).

## Index 
1. [Introduction](#introduction)
2. [Pre-Request](#pre-request)
    1. [Knowledge](#knowledge)
    2. [Environment](#environment)
3. [Development Environment](#development-environment)
4. [File Structure](#file-structure)
5. [Best Practice](#best-practice)
    1. [SCSS and CSS](#scss-and-css)
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

## Best Practice

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
name the 
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
- [Airbnb Style Guide](https://github.com/airbnb/javascript#table-of-contents)