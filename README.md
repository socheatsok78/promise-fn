# promise-fn
A JavaScript/TypeScript alternative way of using `Promise`.

### Install

```sh
npm install @socheatsok78/promise-fn
# or
yarn add @socheatsok78/promise-fn
```


### Usage

**JavaScript**
```js
import { promisefn } from "@socheatsok78/promise-fn"

const agreement = promisefn()

(async () => {
    await agreement.contract
})()

// Resolve or Reject the Promise's agreement

const post = {
    id: 1,
    title: "Hello World"
}

agreement.resolve(post)
// or
agreement.reject()
```

**TypeScript**
```ts
import { promisefn } from "@socheatsok78/promise-fn"

interface Post {
    id: number
    title: string
}

const agreement = promisefn<Post>()

(async () => {
    const post = await agreement.contract
    console.log(post)
})()

// Resolve or Reject the Promise's agreement

const post: Post = {
    id: 1,
    title: "Hello World"
}

agreement.resolve(post)
// or
agreement.reject()
```

## License

Licensed under [Apache-2.0 license](LICENSE)
