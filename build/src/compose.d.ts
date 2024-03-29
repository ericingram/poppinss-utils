import type { Constructor } from './types.js';
interface UnaryFunction<T, R> {
    (source: T): R;
}
/**
 * Compose a class by applying mixins to it.
 * The code is inspired by https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/, its
 * just that I have added the support for static types too.
 */
export declare function compose<T extends Constructor, A>(superclass: T, mixin: UnaryFunction<T, A>): A;
export declare function compose<T extends Constructor, A, B>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>): B;
export declare function compose<T extends Constructor, A, B, C>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>): C;
export declare function compose<T extends Constructor, A, B, C, D>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>, mixinD: UnaryFunction<C, D>): D;
export declare function compose<T extends Constructor, A, B, C, D, E>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>, mixinD: UnaryFunction<C, D>, mixinE: UnaryFunction<D, E>): E;
export declare function compose<T extends Constructor, A, B, C, D, E, F>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>, mixinD: UnaryFunction<C, D>, mixinF: UnaryFunction<E, F>): F;
export declare function compose<T extends Constructor, A, B, C, D, E, F, G>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>, mixinD: UnaryFunction<C, D>, mixinF: UnaryFunction<E, F>, mixinG: UnaryFunction<F, G>): G;
export declare function compose<T extends Constructor, A, B, C, D, E, F, G, H>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>, mixinD: UnaryFunction<C, D>, mixinF: UnaryFunction<E, F>, mixinG: UnaryFunction<F, G>, mixinH: UnaryFunction<G, H>): H;
export declare function compose<T extends Constructor, A, B, C, D, E, F, G, H, I>(superclass: T, mixin: UnaryFunction<T, A>, mixinB: UnaryFunction<A, B>, mixinC: UnaryFunction<B, C>, mixinD: UnaryFunction<C, D>, mixinF: UnaryFunction<E, F>, mixinG: UnaryFunction<F, G>, mixinH: UnaryFunction<G, H>, mixinI: UnaryFunction<H, I>): I;
export {};
