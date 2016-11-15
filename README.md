# React Tribute
---

A React Component that uses [zurb/tribute](https://github.com/zurb/tribute), by Bolste.

## Installing

You can install React Tribute using npm: `npm install react-tribute`; however, we
prefer yarn: `yarn install --save react-tribute`.

Import into your ES6 code.

```
import Tribute from 'react-tribute';
```

## Usage

You can simply wrap any textarea, input, or contenteditable element with Tribute:

```
<Tribute
  options={{
    values: [{ key: "Test McTesterson", value: "test"}  
  }}
>
  <textarea></textarea>
</Tribute>
```

The `Tribute` component will bind tributejs to the textarea that you pass it as children.

The `Tribute` component takes all options that [zurb/tribute](https://github.com/zurb/tribute) expects.

For more advanced usage, such as `customRefs` and the `onChange` callback, see the [Github Pages](https://bolstedev.github.io/react-tribute).

## Testing

You can run the Mocha tests using:

```bash
npm run test
npm run test -- -w # if you want to watch for changes and rerun tests
```

## Build for Production

Build the dist and example using:

```bash
npm run run
```
