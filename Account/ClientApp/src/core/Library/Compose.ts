export function Compose<A1, R>(
    f: (v1: A1, ...vRest: any[]) => R,
    v1: A1) {
    return (...vRest: any[]) => {
        f(v1, vRest);
    }
}

export function ComposeAndBind<A1, R>(
    instance: any,
    f: (v1: A1, ...vRest: any[]) => R,
    v1: A1) {
    return (...vRest: any[]) => {
        f.bind(instance)(v1, vRest);
    }
}

export function DoubleCompose<A1, A2, R>(
    f: (v1: A1, v2: A2, ...vRest: any[]) => R,
    v1: A1,
    v2: A2) {
    return (...vRest: any[]) => {
        f(v1, v2, vRest);
    }
}

export function DoubleComposeAndBind<A1, A2, R>(
    instance: any,
    f: (v1: A1, ...vRest: any[]) => R,
    v1: A1,
    v2: A1) {
    return (...vRest: any[]) => {
        f.bind(instance)(v1, v2, vRest);
    }
}