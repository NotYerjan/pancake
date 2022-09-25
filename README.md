# Pancake Swap

## Remember

**BEFORE STARTING TO WORK ON PROJECT BE SURE TO PULL THE LATEST VERSION OF DEV OR YOUR WORKING BRANCH**

## Methodology

- Mobile First Design.
- Atomic Design.

## Code Guidelines

1. All variables are in the `public/styles/var.scss` file
2. Media queries should be done as in breakpoints variable from smartphone version to desktop:
   - small - `min-width: 576px`
   - medium - `min-width: 852px`
   - large - `min-width: 968px`
3. Text and buttons should use the classes as in the examples (test sections) that you can find in `index.html`
4. Styles should be:
   - written in the `styles/homepage/section-{1-7}.scss` and
   - used in `main.scss`
5. Components like `navbar`, `footer` or `cards` should be styled in `styles/components/{nav,foot,cards}` and used when they are needed
6. Images and other media should be saved in the `public/{icons,images,svg}` files respectively.
7. Pages (except `homepage`) should be in the `pages` folder

8. **To watch sass you can write in terminal `npm run dev`**
