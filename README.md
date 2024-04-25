
![Untitled Banner](https://github.com/tokiory/intorial/assets/101672047/72c148b9-f9dd-4b9c-bbce-6a80db66ba7b)

# Usage
You can use Nuxt Content or Next mdx for creating pages with tutorials.
```jsx
import "intorial/full" // Needed for side-effects

const Page = () => {
  return (<>
    <intorial-view>

      <intorial-section>
        <intorial-theory>
          Information about topic, some minimal examples
        </intorial-theory>

        <intorial-practice>
          Code blocks, notes and other stuff
        </intorial-practice>
      </intorial-section>

    <intorial-view>
  </>)
}
```
