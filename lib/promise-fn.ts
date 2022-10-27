type Resolve<T = any> = (value: T | PromiseLike<T>) => void
type Reject = (reason?: any) => void

export interface Agreement<T = any> {
    contract: Promise<T>
    resolve: Resolve<T>
    reject: Reject
}

export function promisefn<T = any, A = Agreement<T>>(): A {
    let _resolve: Resolve<T>
    let _reject: Reject

    const contract = new Promise<T>(function(resolve, reject) {
        _resolve = resolve
        _reject = reject
    })

    return { contract, resolve: _resolve!, reject: _reject! } as A
}
