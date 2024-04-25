![Banner from Figma](https://github.com/tokiory/intorial/assets/101672047/498ae953-50f5-48be-9670-eea836e639e7)

**Intorial** ― Web components for tutorial pages.

# Usage
You can use Nuxt Content or Next mdx for creating pages with tutorials.
```jsx
import "intorial/full" // Needed for side-effects

const Page = () => {
  return (<>
    <intorial-view>
      <intorial-theory>
        Information about topic, some minimal examples
      </intorial-theory>
      <intorial-practice>
        Code blocks, notes and other stuff
      </intorial-practice>
    <intorial-view>
  </>)
}
```
