
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_tb
 * 
 */
export type user_tb = $Result.DefaultSelection<Prisma.$user_tbPayload>
/**
 * Model kinkun_tb
 * 
 */
export type kinkun_tb = $Result.DefaultSelection<Prisma.$kinkun_tbPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tbs
 * const user_tbs = await prisma.user_tb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tbs
   * const user_tbs = await prisma.user_tb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_tb`: Exposes CRUD operations for the **user_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tbs
    * const user_tbs = await prisma.user_tb.findMany()
    * ```
    */
  get user_tb(): Prisma.user_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kinkun_tb`: Exposes CRUD operations for the **kinkun_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kinkun_tbs
    * const kinkun_tbs = await prisma.kinkun_tb.findMany()
    * ```
    */
  get kinkun_tb(): Prisma.kinkun_tbDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_tb: 'user_tb',
    kinkun_tb: 'kinkun_tb'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_tb" | "kinkun_tb"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_tb: {
        payload: Prisma.$user_tbPayload<ExtArgs>
        fields: Prisma.user_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findFirst: {
            args: Prisma.user_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findMany: {
            args: Prisma.user_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>[]
          }
          create: {
            args: Prisma.user_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          createMany: {
            args: Prisma.user_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          update: {
            args: Prisma.user_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          deleteMany: {
            args: Prisma.user_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          aggregate: {
            args: Prisma.User_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tb>
          }
          groupBy: {
            args: Prisma.user_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tbCountArgs<ExtArgs>
            result: $Utils.Optional<User_tbCountAggregateOutputType> | number
          }
        }
      }
      kinkun_tb: {
        payload: Prisma.$kinkun_tbPayload<ExtArgs>
        fields: Prisma.kinkun_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kinkun_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kinkun_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>
          }
          findFirst: {
            args: Prisma.kinkun_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kinkun_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>
          }
          findMany: {
            args: Prisma.kinkun_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>[]
          }
          create: {
            args: Prisma.kinkun_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>
          }
          createMany: {
            args: Prisma.kinkun_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kinkun_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>
          }
          update: {
            args: Prisma.kinkun_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>
          }
          deleteMany: {
            args: Prisma.kinkun_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kinkun_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kinkun_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kinkun_tbPayload>
          }
          aggregate: {
            args: Prisma.Kinkun_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKinkun_tb>
          }
          groupBy: {
            args: Prisma.kinkun_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Kinkun_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.kinkun_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Kinkun_tbCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_tb?: user_tbOmit
    kinkun_tb?: kinkun_tbOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model user_tb
   */

  export type AggregateUser_tb = {
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  export type User_tbAvgAggregateOutputType = {
    userId: number | null
  }

  export type User_tbSumAggregateOutputType = {
    userId: number | null
  }

  export type User_tbMinAggregateOutputType = {
    userId: number | null
    userFullname: string | null
    userEmail: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbMaxAggregateOutputType = {
    userId: number | null
    userFullname: string | null
    userEmail: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbCountAggregateOutputType = {
    userId: number
    userFullname: number
    userEmail: number
    userPassword: number
    userImage: number
    _all: number
  }


  export type User_tbAvgAggregateInputType = {
    userId?: true
  }

  export type User_tbSumAggregateInputType = {
    userId?: true
  }

  export type User_tbMinAggregateInputType = {
    userId?: true
    userFullname?: true
    userEmail?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbMaxAggregateInputType = {
    userId?: true
    userFullname?: true
    userEmail?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbCountAggregateInputType = {
    userId?: true
    userFullname?: true
    userEmail?: true
    userPassword?: true
    userImage?: true
    _all?: true
  }

  export type User_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tb to aggregate.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tbs
    **/
    _count?: true | User_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tbMaxAggregateInputType
  }

  export type GetUser_tbAggregateType<T extends User_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tb[P]>
      : GetScalarType<T[P], AggregateUser_tb[P]>
  }




  export type user_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tbWhereInput
    orderBy?: user_tbOrderByWithAggregationInput | user_tbOrderByWithAggregationInput[]
    by: User_tbScalarFieldEnum[] | User_tbScalarFieldEnum
    having?: user_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tbCountAggregateInputType | true
    _avg?: User_tbAvgAggregateInputType
    _sum?: User_tbSumAggregateInputType
    _min?: User_tbMinAggregateInputType
    _max?: User_tbMaxAggregateInputType
  }

  export type User_tbGroupByOutputType = {
    userId: number
    userFullname: string
    userEmail: string
    userPassword: string
    userImage: string
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  type GetUser_tbGroupByPayload<T extends user_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tbGroupByOutputType[P]>
            : GetScalarType<T[P], User_tbGroupByOutputType[P]>
        }
      >
    >


  export type user_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userFullname?: boolean
    userEmail?: boolean
    userPassword?: boolean
    userImage?: boolean
  }, ExtArgs["result"]["user_tb"]>



  export type user_tbSelectScalar = {
    userId?: boolean
    userFullname?: boolean
    userEmail?: boolean
    userPassword?: boolean
    userImage?: boolean
  }

  export type user_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userFullname" | "userEmail" | "userPassword" | "userImage", ExtArgs["result"]["user_tb"]>

  export type $user_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userFullname: string
      userEmail: string
      userPassword: string
      userImage: string
    }, ExtArgs["result"]["user_tb"]>
    composites: {}
  }

  type user_tbGetPayload<S extends boolean | null | undefined | user_tbDefaultArgs> = $Result.GetResult<Prisma.$user_tbPayload, S>

  type user_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tbCountAggregateInputType | true
    }

  export interface user_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tb'], meta: { name: 'user_tb' } }
    /**
     * Find zero or one User_tb that matches the filter.
     * @param {user_tbFindUniqueArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tbFindUniqueArgs>(args: SelectSubset<T, user_tbFindUniqueArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tbFindUniqueOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tbFindFirstArgs>(args?: SelectSubset<T, user_tbFindFirstArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tbs
     * const user_tbs = await prisma.user_tb.findMany()
     * 
     * // Get first 10 User_tbs
     * const user_tbs = await prisma.user_tb.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_tbWithUserIdOnly = await prisma.user_tb.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends user_tbFindManyArgs>(args?: SelectSubset<T, user_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tb.
     * @param {user_tbCreateArgs} args - Arguments to create a User_tb.
     * @example
     * // Create one User_tb
     * const User_tb = await prisma.user_tb.create({
     *   data: {
     *     // ... data to create a User_tb
     *   }
     * })
     * 
     */
    create<T extends user_tbCreateArgs>(args: SelectSubset<T, user_tbCreateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tbs.
     * @param {user_tbCreateManyArgs} args - Arguments to create many User_tbs.
     * @example
     * // Create many User_tbs
     * const user_tb = await prisma.user_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tbCreateManyArgs>(args?: SelectSubset<T, user_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tb.
     * @param {user_tbDeleteArgs} args - Arguments to delete one User_tb.
     * @example
     * // Delete one User_tb
     * const User_tb = await prisma.user_tb.delete({
     *   where: {
     *     // ... filter to delete one User_tb
     *   }
     * })
     * 
     */
    delete<T extends user_tbDeleteArgs>(args: SelectSubset<T, user_tbDeleteArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tb.
     * @param {user_tbUpdateArgs} args - Arguments to update one User_tb.
     * @example
     * // Update one User_tb
     * const user_tb = await prisma.user_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tbUpdateArgs>(args: SelectSubset<T, user_tbUpdateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tbs.
     * @param {user_tbDeleteManyArgs} args - Arguments to filter User_tbs to delete.
     * @example
     * // Delete a few User_tbs
     * const { count } = await prisma.user_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tbDeleteManyArgs>(args?: SelectSubset<T, user_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tbs
     * const user_tb = await prisma.user_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tbUpdateManyArgs>(args: SelectSubset<T, user_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tb.
     * @param {user_tbUpsertArgs} args - Arguments to update or create a User_tb.
     * @example
     * // Update or create a User_tb
     * const user_tb = await prisma.user_tb.upsert({
     *   create: {
     *     // ... data to create a User_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tb we want to update
     *   }
     * })
     */
    upsert<T extends user_tbUpsertArgs>(args: SelectSubset<T, user_tbUpsertArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbCountArgs} args - Arguments to filter User_tbs to count.
     * @example
     * // Count the number of User_tbs
     * const count = await prisma.user_tb.count({
     *   where: {
     *     // ... the filter for the User_tbs we want to count
     *   }
     * })
    **/
    count<T extends user_tbCountArgs>(
      args?: Subset<T, user_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tbAggregateArgs>(args: Subset<T, User_tbAggregateArgs>): Prisma.PrismaPromise<GetUser_tbAggregateType<T>>

    /**
     * Group by User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tbGroupByArgs['orderBy'] }
        : { orderBy?: user_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tb model
   */
  readonly fields: user_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tb model
   */
  interface user_tbFieldRefs {
    readonly userId: FieldRef<"user_tb", 'Int'>
    readonly userFullname: FieldRef<"user_tb", 'String'>
    readonly userEmail: FieldRef<"user_tb", 'String'>
    readonly userPassword: FieldRef<"user_tb", 'String'>
    readonly userImage: FieldRef<"user_tb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_tb findUnique
   */
  export type user_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findUniqueOrThrow
   */
  export type user_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findFirst
   */
  export type user_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findFirstOrThrow
   */
  export type user_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findMany
   */
  export type user_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tbs to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb create
   */
  export type user_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a user_tb.
     */
    data: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
  }

  /**
   * user_tb createMany
   */
  export type user_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tbs.
     */
    data: user_tbCreateManyInput | user_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tb update
   */
  export type user_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a user_tb.
     */
    data: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
    /**
     * Choose, which user_tb to update.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb updateMany
   */
  export type user_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tbs.
     */
    data: XOR<user_tbUpdateManyMutationInput, user_tbUncheckedUpdateManyInput>
    /**
     * Filter which user_tbs to update
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to update.
     */
    limit?: number
  }

  /**
   * user_tb upsert
   */
  export type user_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the user_tb to update in case it exists.
     */
    where: user_tbWhereUniqueInput
    /**
     * In case the user_tb found by the `where` argument doesn't exist, create a new user_tb with this data.
     */
    create: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
    /**
     * In case the user_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
  }

  /**
   * user_tb delete
   */
  export type user_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter which user_tb to delete.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb deleteMany
   */
  export type user_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tbs to delete
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to delete.
     */
    limit?: number
  }

  /**
   * user_tb without action
   */
  export type user_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
  }


  /**
   * Model kinkun_tb
   */

  export type AggregateKinkun_tb = {
    _count: Kinkun_tbCountAggregateOutputType | null
    _avg: Kinkun_tbAvgAggregateOutputType | null
    _sum: Kinkun_tbSumAggregateOutputType | null
    _min: Kinkun_tbMinAggregateOutputType | null
    _max: Kinkun_tbMaxAggregateOutputType | null
  }

  export type Kinkun_tbAvgAggregateOutputType = {
    kinkunId: number | null
    kinkunCost: number | null
    userId: number | null
  }

  export type Kinkun_tbSumAggregateOutputType = {
    kinkunId: number | null
    kinkunCost: number | null
    userId: number | null
  }

  export type Kinkun_tbMinAggregateOutputType = {
    kinkunId: number | null
    kinkunTitle: string | null
    kinkunState: string | null
    kinkunDate: string | null
    kinkunCost: number | null
    kinkunImage: string | null
    userId: number | null
  }

  export type Kinkun_tbMaxAggregateOutputType = {
    kinkunId: number | null
    kinkunTitle: string | null
    kinkunState: string | null
    kinkunDate: string | null
    kinkunCost: number | null
    kinkunImage: string | null
    userId: number | null
  }

  export type Kinkun_tbCountAggregateOutputType = {
    kinkunId: number
    kinkunTitle: number
    kinkunState: number
    kinkunDate: number
    kinkunCost: number
    kinkunImage: number
    userId: number
    _all: number
  }


  export type Kinkun_tbAvgAggregateInputType = {
    kinkunId?: true
    kinkunCost?: true
    userId?: true
  }

  export type Kinkun_tbSumAggregateInputType = {
    kinkunId?: true
    kinkunCost?: true
    userId?: true
  }

  export type Kinkun_tbMinAggregateInputType = {
    kinkunId?: true
    kinkunTitle?: true
    kinkunState?: true
    kinkunDate?: true
    kinkunCost?: true
    kinkunImage?: true
    userId?: true
  }

  export type Kinkun_tbMaxAggregateInputType = {
    kinkunId?: true
    kinkunTitle?: true
    kinkunState?: true
    kinkunDate?: true
    kinkunCost?: true
    kinkunImage?: true
    userId?: true
  }

  export type Kinkun_tbCountAggregateInputType = {
    kinkunId?: true
    kinkunTitle?: true
    kinkunState?: true
    kinkunDate?: true
    kinkunCost?: true
    kinkunImage?: true
    userId?: true
    _all?: true
  }

  export type Kinkun_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kinkun_tb to aggregate.
     */
    where?: kinkun_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kinkun_tbs to fetch.
     */
    orderBy?: kinkun_tbOrderByWithRelationInput | kinkun_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kinkun_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kinkun_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kinkun_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kinkun_tbs
    **/
    _count?: true | Kinkun_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Kinkun_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Kinkun_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Kinkun_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Kinkun_tbMaxAggregateInputType
  }

  export type GetKinkun_tbAggregateType<T extends Kinkun_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateKinkun_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKinkun_tb[P]>
      : GetScalarType<T[P], AggregateKinkun_tb[P]>
  }




  export type kinkun_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kinkun_tbWhereInput
    orderBy?: kinkun_tbOrderByWithAggregationInput | kinkun_tbOrderByWithAggregationInput[]
    by: Kinkun_tbScalarFieldEnum[] | Kinkun_tbScalarFieldEnum
    having?: kinkun_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Kinkun_tbCountAggregateInputType | true
    _avg?: Kinkun_tbAvgAggregateInputType
    _sum?: Kinkun_tbSumAggregateInputType
    _min?: Kinkun_tbMinAggregateInputType
    _max?: Kinkun_tbMaxAggregateInputType
  }

  export type Kinkun_tbGroupByOutputType = {
    kinkunId: number
    kinkunTitle: string
    kinkunState: string
    kinkunDate: string
    kinkunCost: number
    kinkunImage: string
    userId: number
    _count: Kinkun_tbCountAggregateOutputType | null
    _avg: Kinkun_tbAvgAggregateOutputType | null
    _sum: Kinkun_tbSumAggregateOutputType | null
    _min: Kinkun_tbMinAggregateOutputType | null
    _max: Kinkun_tbMaxAggregateOutputType | null
  }

  type GetKinkun_tbGroupByPayload<T extends kinkun_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Kinkun_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Kinkun_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Kinkun_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Kinkun_tbGroupByOutputType[P]>
        }
      >
    >


  export type kinkun_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kinkunId?: boolean
    kinkunTitle?: boolean
    kinkunState?: boolean
    kinkunDate?: boolean
    kinkunCost?: boolean
    kinkunImage?: boolean
    userId?: boolean
  }, ExtArgs["result"]["kinkun_tb"]>



  export type kinkun_tbSelectScalar = {
    kinkunId?: boolean
    kinkunTitle?: boolean
    kinkunState?: boolean
    kinkunDate?: boolean
    kinkunCost?: boolean
    kinkunImage?: boolean
    userId?: boolean
  }

  export type kinkun_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kinkunId" | "kinkunTitle" | "kinkunState" | "kinkunDate" | "kinkunCost" | "kinkunImage" | "userId", ExtArgs["result"]["kinkun_tb"]>

  export type $kinkun_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kinkun_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kinkunId: number
      kinkunTitle: string
      kinkunState: string
      kinkunDate: string
      kinkunCost: number
      kinkunImage: string
      userId: number
    }, ExtArgs["result"]["kinkun_tb"]>
    composites: {}
  }

  type kinkun_tbGetPayload<S extends boolean | null | undefined | kinkun_tbDefaultArgs> = $Result.GetResult<Prisma.$kinkun_tbPayload, S>

  type kinkun_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kinkun_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Kinkun_tbCountAggregateInputType | true
    }

  export interface kinkun_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kinkun_tb'], meta: { name: 'kinkun_tb' } }
    /**
     * Find zero or one Kinkun_tb that matches the filter.
     * @param {kinkun_tbFindUniqueArgs} args - Arguments to find a Kinkun_tb
     * @example
     * // Get one Kinkun_tb
     * const kinkun_tb = await prisma.kinkun_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kinkun_tbFindUniqueArgs>(args: SelectSubset<T, kinkun_tbFindUniqueArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kinkun_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kinkun_tbFindUniqueOrThrowArgs} args - Arguments to find a Kinkun_tb
     * @example
     * // Get one Kinkun_tb
     * const kinkun_tb = await prisma.kinkun_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kinkun_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, kinkun_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kinkun_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kinkun_tbFindFirstArgs} args - Arguments to find a Kinkun_tb
     * @example
     * // Get one Kinkun_tb
     * const kinkun_tb = await prisma.kinkun_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kinkun_tbFindFirstArgs>(args?: SelectSubset<T, kinkun_tbFindFirstArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kinkun_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kinkun_tbFindFirstOrThrowArgs} args - Arguments to find a Kinkun_tb
     * @example
     * // Get one Kinkun_tb
     * const kinkun_tb = await prisma.kinkun_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kinkun_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, kinkun_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kinkun_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kinkun_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kinkun_tbs
     * const kinkun_tbs = await prisma.kinkun_tb.findMany()
     * 
     * // Get first 10 Kinkun_tbs
     * const kinkun_tbs = await prisma.kinkun_tb.findMany({ take: 10 })
     * 
     * // Only select the `kinkunId`
     * const kinkun_tbWithKinkunIdOnly = await prisma.kinkun_tb.findMany({ select: { kinkunId: true } })
     * 
     */
    findMany<T extends kinkun_tbFindManyArgs>(args?: SelectSubset<T, kinkun_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kinkun_tb.
     * @param {kinkun_tbCreateArgs} args - Arguments to create a Kinkun_tb.
     * @example
     * // Create one Kinkun_tb
     * const Kinkun_tb = await prisma.kinkun_tb.create({
     *   data: {
     *     // ... data to create a Kinkun_tb
     *   }
     * })
     * 
     */
    create<T extends kinkun_tbCreateArgs>(args: SelectSubset<T, kinkun_tbCreateArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kinkun_tbs.
     * @param {kinkun_tbCreateManyArgs} args - Arguments to create many Kinkun_tbs.
     * @example
     * // Create many Kinkun_tbs
     * const kinkun_tb = await prisma.kinkun_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kinkun_tbCreateManyArgs>(args?: SelectSubset<T, kinkun_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kinkun_tb.
     * @param {kinkun_tbDeleteArgs} args - Arguments to delete one Kinkun_tb.
     * @example
     * // Delete one Kinkun_tb
     * const Kinkun_tb = await prisma.kinkun_tb.delete({
     *   where: {
     *     // ... filter to delete one Kinkun_tb
     *   }
     * })
     * 
     */
    delete<T extends kinkun_tbDeleteArgs>(args: SelectSubset<T, kinkun_tbDeleteArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kinkun_tb.
     * @param {kinkun_tbUpdateArgs} args - Arguments to update one Kinkun_tb.
     * @example
     * // Update one Kinkun_tb
     * const kinkun_tb = await prisma.kinkun_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kinkun_tbUpdateArgs>(args: SelectSubset<T, kinkun_tbUpdateArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kinkun_tbs.
     * @param {kinkun_tbDeleteManyArgs} args - Arguments to filter Kinkun_tbs to delete.
     * @example
     * // Delete a few Kinkun_tbs
     * const { count } = await prisma.kinkun_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kinkun_tbDeleteManyArgs>(args?: SelectSubset<T, kinkun_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kinkun_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kinkun_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kinkun_tbs
     * const kinkun_tb = await prisma.kinkun_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kinkun_tbUpdateManyArgs>(args: SelectSubset<T, kinkun_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kinkun_tb.
     * @param {kinkun_tbUpsertArgs} args - Arguments to update or create a Kinkun_tb.
     * @example
     * // Update or create a Kinkun_tb
     * const kinkun_tb = await prisma.kinkun_tb.upsert({
     *   create: {
     *     // ... data to create a Kinkun_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kinkun_tb we want to update
     *   }
     * })
     */
    upsert<T extends kinkun_tbUpsertArgs>(args: SelectSubset<T, kinkun_tbUpsertArgs<ExtArgs>>): Prisma__kinkun_tbClient<$Result.GetResult<Prisma.$kinkun_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kinkun_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kinkun_tbCountArgs} args - Arguments to filter Kinkun_tbs to count.
     * @example
     * // Count the number of Kinkun_tbs
     * const count = await prisma.kinkun_tb.count({
     *   where: {
     *     // ... the filter for the Kinkun_tbs we want to count
     *   }
     * })
    **/
    count<T extends kinkun_tbCountArgs>(
      args?: Subset<T, kinkun_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Kinkun_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kinkun_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kinkun_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Kinkun_tbAggregateArgs>(args: Subset<T, Kinkun_tbAggregateArgs>): Prisma.PrismaPromise<GetKinkun_tbAggregateType<T>>

    /**
     * Group by Kinkun_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kinkun_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kinkun_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kinkun_tbGroupByArgs['orderBy'] }
        : { orderBy?: kinkun_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kinkun_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKinkun_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kinkun_tb model
   */
  readonly fields: kinkun_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kinkun_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kinkun_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kinkun_tb model
   */
  interface kinkun_tbFieldRefs {
    readonly kinkunId: FieldRef<"kinkun_tb", 'Int'>
    readonly kinkunTitle: FieldRef<"kinkun_tb", 'String'>
    readonly kinkunState: FieldRef<"kinkun_tb", 'String'>
    readonly kinkunDate: FieldRef<"kinkun_tb", 'String'>
    readonly kinkunCost: FieldRef<"kinkun_tb", 'Float'>
    readonly kinkunImage: FieldRef<"kinkun_tb", 'String'>
    readonly userId: FieldRef<"kinkun_tb", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * kinkun_tb findUnique
   */
  export type kinkun_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * Filter, which kinkun_tb to fetch.
     */
    where: kinkun_tbWhereUniqueInput
  }

  /**
   * kinkun_tb findUniqueOrThrow
   */
  export type kinkun_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * Filter, which kinkun_tb to fetch.
     */
    where: kinkun_tbWhereUniqueInput
  }

  /**
   * kinkun_tb findFirst
   */
  export type kinkun_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * Filter, which kinkun_tb to fetch.
     */
    where?: kinkun_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kinkun_tbs to fetch.
     */
    orderBy?: kinkun_tbOrderByWithRelationInput | kinkun_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kinkun_tbs.
     */
    cursor?: kinkun_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kinkun_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kinkun_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kinkun_tbs.
     */
    distinct?: Kinkun_tbScalarFieldEnum | Kinkun_tbScalarFieldEnum[]
  }

  /**
   * kinkun_tb findFirstOrThrow
   */
  export type kinkun_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * Filter, which kinkun_tb to fetch.
     */
    where?: kinkun_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kinkun_tbs to fetch.
     */
    orderBy?: kinkun_tbOrderByWithRelationInput | kinkun_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kinkun_tbs.
     */
    cursor?: kinkun_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kinkun_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kinkun_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kinkun_tbs.
     */
    distinct?: Kinkun_tbScalarFieldEnum | Kinkun_tbScalarFieldEnum[]
  }

  /**
   * kinkun_tb findMany
   */
  export type kinkun_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * Filter, which kinkun_tbs to fetch.
     */
    where?: kinkun_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kinkun_tbs to fetch.
     */
    orderBy?: kinkun_tbOrderByWithRelationInput | kinkun_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kinkun_tbs.
     */
    cursor?: kinkun_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kinkun_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kinkun_tbs.
     */
    skip?: number
    distinct?: Kinkun_tbScalarFieldEnum | Kinkun_tbScalarFieldEnum[]
  }

  /**
   * kinkun_tb create
   */
  export type kinkun_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a kinkun_tb.
     */
    data: XOR<kinkun_tbCreateInput, kinkun_tbUncheckedCreateInput>
  }

  /**
   * kinkun_tb createMany
   */
  export type kinkun_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kinkun_tbs.
     */
    data: kinkun_tbCreateManyInput | kinkun_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kinkun_tb update
   */
  export type kinkun_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a kinkun_tb.
     */
    data: XOR<kinkun_tbUpdateInput, kinkun_tbUncheckedUpdateInput>
    /**
     * Choose, which kinkun_tb to update.
     */
    where: kinkun_tbWhereUniqueInput
  }

  /**
   * kinkun_tb updateMany
   */
  export type kinkun_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kinkun_tbs.
     */
    data: XOR<kinkun_tbUpdateManyMutationInput, kinkun_tbUncheckedUpdateManyInput>
    /**
     * Filter which kinkun_tbs to update
     */
    where?: kinkun_tbWhereInput
    /**
     * Limit how many kinkun_tbs to update.
     */
    limit?: number
  }

  /**
   * kinkun_tb upsert
   */
  export type kinkun_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the kinkun_tb to update in case it exists.
     */
    where: kinkun_tbWhereUniqueInput
    /**
     * In case the kinkun_tb found by the `where` argument doesn't exist, create a new kinkun_tb with this data.
     */
    create: XOR<kinkun_tbCreateInput, kinkun_tbUncheckedCreateInput>
    /**
     * In case the kinkun_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kinkun_tbUpdateInput, kinkun_tbUncheckedUpdateInput>
  }

  /**
   * kinkun_tb delete
   */
  export type kinkun_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
    /**
     * Filter which kinkun_tb to delete.
     */
    where: kinkun_tbWhereUniqueInput
  }

  /**
   * kinkun_tb deleteMany
   */
  export type kinkun_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kinkun_tbs to delete
     */
    where?: kinkun_tbWhereInput
    /**
     * Limit how many kinkun_tbs to delete.
     */
    limit?: number
  }

  /**
   * kinkun_tb without action
   */
  export type kinkun_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kinkun_tb
     */
    select?: kinkun_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kinkun_tb
     */
    omit?: kinkun_tbOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_tbScalarFieldEnum: {
    userId: 'userId',
    userFullname: 'userFullname',
    userEmail: 'userEmail',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type User_tbScalarFieldEnum = (typeof User_tbScalarFieldEnum)[keyof typeof User_tbScalarFieldEnum]


  export const Kinkun_tbScalarFieldEnum: {
    kinkunId: 'kinkunId',
    kinkunTitle: 'kinkunTitle',
    kinkunState: 'kinkunState',
    kinkunDate: 'kinkunDate',
    kinkunCost: 'kinkunCost',
    kinkunImage: 'kinkunImage',
    userId: 'userId'
  };

  export type Kinkun_tbScalarFieldEnum = (typeof Kinkun_tbScalarFieldEnum)[keyof typeof Kinkun_tbScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const user_tbOrderByRelevanceFieldEnum: {
    userFullname: 'userFullname',
    userEmail: 'userEmail',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type user_tbOrderByRelevanceFieldEnum = (typeof user_tbOrderByRelevanceFieldEnum)[keyof typeof user_tbOrderByRelevanceFieldEnum]


  export const kinkun_tbOrderByRelevanceFieldEnum: {
    kinkunTitle: 'kinkunTitle',
    kinkunState: 'kinkunState',
    kinkunDate: 'kinkunDate',
    kinkunImage: 'kinkunImage'
  };

  export type kinkun_tbOrderByRelevanceFieldEnum = (typeof kinkun_tbOrderByRelevanceFieldEnum)[keyof typeof kinkun_tbOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_tbWhereInput = {
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userId?: IntFilter<"user_tb"> | number
    userFullname?: StringFilter<"user_tb"> | string
    userEmail?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringFilter<"user_tb"> | string
  }

  export type user_tbOrderByWithRelationInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
    _relevance?: user_tbOrderByRelevanceInput
  }

  export type user_tbWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userFullname?: StringFilter<"user_tb"> | string
    userEmail?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringFilter<"user_tb"> | string
  }, "userId">

  export type user_tbOrderByWithAggregationInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
    _count?: user_tbCountOrderByAggregateInput
    _avg?: user_tbAvgOrderByAggregateInput
    _max?: user_tbMaxOrderByAggregateInput
    _min?: user_tbMinOrderByAggregateInput
    _sum?: user_tbSumOrderByAggregateInput
  }

  export type user_tbScalarWhereWithAggregatesInput = {
    AND?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    OR?: user_tbScalarWhereWithAggregatesInput[]
    NOT?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user_tb"> | number
    userFullname?: StringWithAggregatesFilter<"user_tb"> | string
    userEmail?: StringWithAggregatesFilter<"user_tb"> | string
    userPassword?: StringWithAggregatesFilter<"user_tb"> | string
    userImage?: StringWithAggregatesFilter<"user_tb"> | string
  }

  export type kinkun_tbWhereInput = {
    AND?: kinkun_tbWhereInput | kinkun_tbWhereInput[]
    OR?: kinkun_tbWhereInput[]
    NOT?: kinkun_tbWhereInput | kinkun_tbWhereInput[]
    kinkunId?: IntFilter<"kinkun_tb"> | number
    kinkunTitle?: StringFilter<"kinkun_tb"> | string
    kinkunState?: StringFilter<"kinkun_tb"> | string
    kinkunDate?: StringFilter<"kinkun_tb"> | string
    kinkunCost?: FloatFilter<"kinkun_tb"> | number
    kinkunImage?: StringFilter<"kinkun_tb"> | string
    userId?: IntFilter<"kinkun_tb"> | number
  }

  export type kinkun_tbOrderByWithRelationInput = {
    kinkunId?: SortOrder
    kinkunTitle?: SortOrder
    kinkunState?: SortOrder
    kinkunDate?: SortOrder
    kinkunCost?: SortOrder
    kinkunImage?: SortOrder
    userId?: SortOrder
    _relevance?: kinkun_tbOrderByRelevanceInput
  }

  export type kinkun_tbWhereUniqueInput = Prisma.AtLeast<{
    kinkunId?: number
    AND?: kinkun_tbWhereInput | kinkun_tbWhereInput[]
    OR?: kinkun_tbWhereInput[]
    NOT?: kinkun_tbWhereInput | kinkun_tbWhereInput[]
    kinkunTitle?: StringFilter<"kinkun_tb"> | string
    kinkunState?: StringFilter<"kinkun_tb"> | string
    kinkunDate?: StringFilter<"kinkun_tb"> | string
    kinkunCost?: FloatFilter<"kinkun_tb"> | number
    kinkunImage?: StringFilter<"kinkun_tb"> | string
    userId?: IntFilter<"kinkun_tb"> | number
  }, "kinkunId">

  export type kinkun_tbOrderByWithAggregationInput = {
    kinkunId?: SortOrder
    kinkunTitle?: SortOrder
    kinkunState?: SortOrder
    kinkunDate?: SortOrder
    kinkunCost?: SortOrder
    kinkunImage?: SortOrder
    userId?: SortOrder
    _count?: kinkun_tbCountOrderByAggregateInput
    _avg?: kinkun_tbAvgOrderByAggregateInput
    _max?: kinkun_tbMaxOrderByAggregateInput
    _min?: kinkun_tbMinOrderByAggregateInput
    _sum?: kinkun_tbSumOrderByAggregateInput
  }

  export type kinkun_tbScalarWhereWithAggregatesInput = {
    AND?: kinkun_tbScalarWhereWithAggregatesInput | kinkun_tbScalarWhereWithAggregatesInput[]
    OR?: kinkun_tbScalarWhereWithAggregatesInput[]
    NOT?: kinkun_tbScalarWhereWithAggregatesInput | kinkun_tbScalarWhereWithAggregatesInput[]
    kinkunId?: IntWithAggregatesFilter<"kinkun_tb"> | number
    kinkunTitle?: StringWithAggregatesFilter<"kinkun_tb"> | string
    kinkunState?: StringWithAggregatesFilter<"kinkun_tb"> | string
    kinkunDate?: StringWithAggregatesFilter<"kinkun_tb"> | string
    kinkunCost?: FloatWithAggregatesFilter<"kinkun_tb"> | number
    kinkunImage?: StringWithAggregatesFilter<"kinkun_tb"> | string
    userId?: IntWithAggregatesFilter<"kinkun_tb"> | number
  }

  export type user_tbCreateInput = {
    userFullname: string
    userEmail: string
    userPassword: string
    userImage: string
  }

  export type user_tbUncheckedCreateInput = {
    userId?: number
    userFullname: string
    userEmail: string
    userPassword: string
    userImage: string
  }

  export type user_tbUpdateInput = {
    userFullname?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFullname?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbCreateManyInput = {
    userId?: number
    userFullname: string
    userEmail: string
    userPassword: string
    userImage: string
  }

  export type user_tbUpdateManyMutationInput = {
    userFullname?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFullname?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type kinkun_tbCreateInput = {
    kinkunTitle: string
    kinkunState: string
    kinkunDate: string
    kinkunCost: number
    kinkunImage: string
    userId: number
  }

  export type kinkun_tbUncheckedCreateInput = {
    kinkunId?: number
    kinkunTitle: string
    kinkunState: string
    kinkunDate: string
    kinkunCost: number
    kinkunImage: string
    userId: number
  }

  export type kinkun_tbUpdateInput = {
    kinkunTitle?: StringFieldUpdateOperationsInput | string
    kinkunState?: StringFieldUpdateOperationsInput | string
    kinkunDate?: StringFieldUpdateOperationsInput | string
    kinkunCost?: FloatFieldUpdateOperationsInput | number
    kinkunImage?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type kinkun_tbUncheckedUpdateInput = {
    kinkunId?: IntFieldUpdateOperationsInput | number
    kinkunTitle?: StringFieldUpdateOperationsInput | string
    kinkunState?: StringFieldUpdateOperationsInput | string
    kinkunDate?: StringFieldUpdateOperationsInput | string
    kinkunCost?: FloatFieldUpdateOperationsInput | number
    kinkunImage?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type kinkun_tbCreateManyInput = {
    kinkunId?: number
    kinkunTitle: string
    kinkunState: string
    kinkunDate: string
    kinkunCost: number
    kinkunImage: string
    userId: number
  }

  export type kinkun_tbUpdateManyMutationInput = {
    kinkunTitle?: StringFieldUpdateOperationsInput | string
    kinkunState?: StringFieldUpdateOperationsInput | string
    kinkunDate?: StringFieldUpdateOperationsInput | string
    kinkunCost?: FloatFieldUpdateOperationsInput | number
    kinkunImage?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type kinkun_tbUncheckedUpdateManyInput = {
    kinkunId?: IntFieldUpdateOperationsInput | number
    kinkunTitle?: StringFieldUpdateOperationsInput | string
    kinkunState?: StringFieldUpdateOperationsInput | string
    kinkunDate?: StringFieldUpdateOperationsInput | string
    kinkunCost?: FloatFieldUpdateOperationsInput | number
    kinkunImage?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type user_tbOrderByRelevanceInput = {
    fields: user_tbOrderByRelevanceFieldEnum | user_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tbCountOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type user_tbMaxOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbMinOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type kinkun_tbOrderByRelevanceInput = {
    fields: kinkun_tbOrderByRelevanceFieldEnum | kinkun_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kinkun_tbCountOrderByAggregateInput = {
    kinkunId?: SortOrder
    kinkunTitle?: SortOrder
    kinkunState?: SortOrder
    kinkunDate?: SortOrder
    kinkunCost?: SortOrder
    kinkunImage?: SortOrder
    userId?: SortOrder
  }

  export type kinkun_tbAvgOrderByAggregateInput = {
    kinkunId?: SortOrder
    kinkunCost?: SortOrder
    userId?: SortOrder
  }

  export type kinkun_tbMaxOrderByAggregateInput = {
    kinkunId?: SortOrder
    kinkunTitle?: SortOrder
    kinkunState?: SortOrder
    kinkunDate?: SortOrder
    kinkunCost?: SortOrder
    kinkunImage?: SortOrder
    userId?: SortOrder
  }

  export type kinkun_tbMinOrderByAggregateInput = {
    kinkunId?: SortOrder
    kinkunTitle?: SortOrder
    kinkunState?: SortOrder
    kinkunDate?: SortOrder
    kinkunCost?: SortOrder
    kinkunImage?: SortOrder
    userId?: SortOrder
  }

  export type kinkun_tbSumOrderByAggregateInput = {
    kinkunId?: SortOrder
    kinkunCost?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}