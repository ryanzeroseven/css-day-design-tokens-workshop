# CSS Day Design Tokens Workshop

This repository contains both a sample design token architecture and a Storybook instance to represent and use this design token architecture for the CSS Design Tokens Workshop

> **Note:** This repository and its contents are intended for demonstration and educational purposes as part of the CSS Day Design Tokens Workshop. The code, tokens, and components should not be distributed or used outside of this workshop without permission.

The Storybook instance and design tokens are separated out into two packages:

```
├── packages/
│   ├── css-day-components (Storybook using the tokens)
│   ├── css-day-design-tokens (Token infrastructure that uses Style Dictionary)
└──
```

This uses a monorepo setup to allow developers to work with the tokens and components in tandem rather than needing to build and install a new version of the tokens with every change. That's our preference since component systems and tokens tend to travel closely together even if they have different release schedules. You can create your own repo for tokens separate from the component library if you'd like.

## Tools needed

- [Node.js](https://nodejs.org/en) version 18 or higher
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Dependencies

- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [Storybook](https://storybook.js.org/)
- [Sass](https://sass-lang.com/)
- [Lit](https://lit.dev/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

1. Clone the repository
2. Open up your terminal and change directories into the root of this repository
3. Run `npm install` to install all of the packages needed to run and build both `css-day-design-tokens` and `css-day-components`
4. Run `npm start` to run Storybook to view the demo in the browser.

## CSS Day Design Tokens

The token system lives within the `css-day-design-tokens` package. It consists of the vanilla (neutral), strawberry, chocolate, and dark chocolate themes. In order to build all of these themes at once, you can run the following from the root of the repository:

```
npm run build:tokens
```

If you'd like to only build one theme at a time, run `npm run build:tokens:[theme-name]` where an example would be:

```
npm run build:tokens:vanilla
```

These tokens will build into the various formats within the `[theme-name]/build/[format]/` directory. For example, the CSS Custom Properties for vanilla will output in the `vanilla/build/css/tokens.css` file.

## CSS Day Components

The `css-day-components` package contains the Storybook instance to view and use the tokens from `css-day-design-tokens`. It is [Web Component Storybook](https://storybook.js.org/docs/get-started/frameworks/web-components-vite), but aside from the header component, the stories are written using regular ol' HTML. We've constructed it this way to create a framework-agnostic way of using tokens without subjecting anyone into using one framework or another.

### Using Themes Within Storybook

The vanilla, strawberry, chocolate, and dark chocolate themes from `css-day-design-tokens` are already wired up to Storybook. These tokens and fonts are being pulled in within the `.storybook/themes.scss` file.

The theme switcher is using Storybook's native ([themes addon](https://storybook.js.org/addons/@storybook/addon-themes)). How it works, is you define your themes within the `.storybook/preview.ts` file with this decorator:

```ts
export const decorators = [
  withThemeByClassName({
    themes: {
      vanilla: 'vanilla',
      strawberry: 'strawberry',
      chocolate: 'chocolate',
      ['dark-chocolate']: 'dark-chocolate'
    },
    defaultTheme: 'vanilla'
  })
];
```

What this does is it adds a class name like `vanilla` to the `<html>` tag surrounding the Storybook story contents. When the theme is switched in the Storybook theme switcher, the class name changes. This is why we are building `vanilla.css` in addition to `tokens.css` within `css-day-design-tokens`. In Storybook, we want to target the `.vanilla` class name in CSS instead of `:root` to allow for those token values to swap out based on the class name. This is not included within the distributed tokens since most downstream applications will use the `:root` selector in CSS instead of the class name to apply the tokens.

### Token visualization

In addition to the usage of tokens with components in Storybook, we've added the ability to view the tokens within code. This uses the `tokens.json` files imported into the `.storybook/preview.ts` file. We've also added a `tokens` object to switch between these files and loop through the proper tokens to display them.

```ts
import vanillaTokens from '../../css-day-design-tokens/vanilla/build/json/tokens.json?raw';
import strawberryTokens from '../../css-day-design-tokens/strawberry/build/json/tokens.json?raw';
import chocolateTokens from '../../css-day-design-tokens/chocolate/build/json/tokens.json?raw';
import darkChocolateTokens from '../../css-day-design-tokens/dark-chocolate/build/json/tokens.json?raw';

const tokens = {
  vanilla: vanillaTokens,
  strawberry: strawberryTokens,
  chocolate: chocolateTokens,
  'dark-chocolate': darkChocolateTokens
};
```

While this accomplishes the tier 2 token swap, the tier 1 tokens need to swap as well. This is why we've added this event which swaps out the proper token set and updates the tokens being looped through. That allows for `color-green` tier 1 tokens in one thing to display and then `color-red` in another thing would show up during the theme switch. These components used to visualize the tokens are located within `.storybook/components`.

```ts
// Adjust the files being display based on the theme displayed
// Takes the class from the html tag and sets the theme to that and dynamically
// imports the proper tokens to be displayed in Storybook only
window.addEventListener('DOMContentLoaded', () => {
  const themeWrapper = document.querySelector('html');
  setTimeout(() => {
    const themeName = themeWrapper.classList[0];
    globalThis.themeName = themeName;
    globalThis.themeTokens = tokens[themeName];
  }, 1);
});
```
