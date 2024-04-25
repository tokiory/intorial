
![Untitled Banner](https://github.com/tokiory/intorial/assets/101672047/72c148b9-f9dd-4b9c-bbce-6a80db66ba7b)

**Intorial** is a native web components library designed to help you create interactive tutorials with ease. With Intorial, you can create modular, reusable, and encapsulated tutorials that can be used on any page.

# Getting started
First of all you can install Intorial via npm:
```bash
npm i intorial

# Or you can use other package managers
pnpm add intorial    # PNPM
yarn add intorial    # Yarn
bun install intorial # Bun
```

## Using with Nuxt Content or Next.js
You can use [Nuxt Content MDC](https://content.nuxt.com/usage/markdown) or [Next.js MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx) for creating **pages** with tutorials:
```jsx
import "intorial/full" // Needed for side-effects

const Page = () => {
  return (<>
    <intorial-page>

      <intorial-section>
        <intorial-theory>
          Information about topic, some minimal examples
        </intorial-theory>

        <intorial-practice>
          Code blocks, notes and other stuff
        </intorial-practice>
      </intorial-section>

    <intorial-page>
  </>)
}
```

## Using in plain HTML
You can also use Intorial with html, without any framework:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>

    <!-- WARN: You should import intorial before using this components -->
    <script>
      import "intorial"
    </script>

    <intorial-page>

      <intorial-section>
        <intorial-theory>
          Information about topic, some minimal examples
        </intorial-theory>

        <intorial-practice>
          Code blocks, notes and other stuff
        </intorial-practice>
      </intorial-section>

    </intorial-page>
  
  </body>
</html>
```

# Components
| Component Name    | Description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| intorial-page     | Page component, used when creating a full-page tutorial                                                                                           |
| intorial-section  | Section component, used when creating a dedicated section about one topic in a tutorial                                                           |
| intorial-control  | Control component, used when creating more than one section                                                                                       |
| intorial-theory   | Theory component, used to create a topic theory, which will be placed in the left part of the screen                                              |
| intorial-practice | Practice component, used to create a topic practice content. You can place codeblocks, code editors, and more practice content in this component. |
| intorial-code     | Codeblock component, used to paste theory/practice code                                                                                           |
| intorial-hint     | Hint component, used to provide hints for theory content                                                                                          |
| intorial-quiz     | Quiz component, used to create quizzes                                                                                                            |
| intorial-question | Question component, used to create questions for quizzes                                                                                          |

