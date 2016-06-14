// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-es6-promise/fb04188767acfec1defd054fc8024fafa5cd4de7/dist/es6-promise.d.ts
declare module '~twit~es6-promise/dist/es6-promise' {
export interface Thenable <R> {
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

export class Promise <R> implements Thenable <R> {
  /**
   * If you call resolve in the body of the callback passed to the constructor,
   * your promise is fulfilled with result object passed to resolve.
   * If you call reject your promise is rejected with the object passed to resolve.
   * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
   * Any errors thrown in the constructor callback will be implicitly passed to reject().
   */
  constructor (callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

  /**
   * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
   * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
   * Both callbacks have a single parameter , the fulfillment value or rejection reason.
   * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
   * If an error is thrown in the callback, the returned promise rejects with that error.
   *
   * @param onFulfilled called when/if "promise" resolves
   * @param onRejected called when/if "promise" rejects
   */
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

  /**
   * Sugar for promise.then(undefined, onRejected)
   *
   * @param onRejected called when/if "promise" rejects
   */
  catch <U> (onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

  /**
   * Make a new promise from the thenable.
   * A thenable is promise-like in as far as it has a "then" method.
   */
  static resolve (): Promise<void>;
  static resolve <R> (value: R | Thenable<R>): Promise<R>;

  /**
   * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
   */
  static reject <R> (error: any): Promise<R>;

  /**
   * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
   * the array passed to all can be a mixture of promise-like objects and other objects.
   * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
   */
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
  static all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
  static all<T1>(values: [T1 | Thenable<T1>]): Promise<[T1]>;
  static all<TAll>(values: Array<TAll | Thenable<TAll>>): Promise<TAll[]>;

  /**
   * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
   */
  static race <R> (promises: (R | Thenable<R>)[]): Promise<R>;
}

/**
 * The polyfill method will patch the global environment (in this case to the Promise name) when called.
 */
export function polyfill (): void;
}
declare module '~twit~es6-promise' {
import alias = require('~twit~es6-promise/dist/es6-promise');
export = alias;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/Volox/typed-twit/9a1026660b456f7c4d028c55769d52de0862f387/index.d.ts
declare module '~twit/index' {
import { IncomingMessage } from 'http';
import { Promise } from '~twit~es6-promise';
import { Readable } from 'stream';

namespace Twit {
  export type StreamEndpoint = 'statuses/filter' | 'statuses/sample' | 'statuses/firehose' | 'user' | 'site';

  export namespace Twitter {
    export type ResultType = 'mixed' | 'popular' | 'recent';

    // See https://dev.twitter.com/overview/api/tweets#obj-contributors
    export interface Contributors {
      id: number,
      id_str: number,
      screen_name: string,
    }

    // See https://dev.twitter.com/overview/api/entities
    export interface HashtagEntity {
      indices: number[],
      text: string,
    }
    export interface Size {
      h: number,
      w: number,
      resize: 'crop' | 'fit',
    }
    export interface Sizes {
      thumb: Size,
      large: Size,
      medium: Size,
      small: Size,
    }
    export interface MediaEntity {
      id: number,
      id_str: string,
      indices: number[],
      url: string,
      display_url: string,
      expanded_url: string,
      media_url: string,
      media_url_https: string,
      sizes: Sizes,
      source_status_id: number,
      source_status_id_str: string,
      type: string,
    }
    export interface UrlEntity {
      url: string,
      display_url: string,
      expanded_url: string,
      indices: number[],
    }
    export interface UserMentionEntity {
      id: number,
      id_str: string,
      indices: number[],
      name: string,
      screen_name: string,
    }
    export interface Entities {
      hashtags: HashtagEntity[],
      media: MediaEntity[],
      urls: UrlEntity[],
      user_mentions: UserMentionEntity[],
    }

    // See https://dev.twitter.com/overview/api/users
    export interface User {
      contributors_enabled: boolean,
      created_at: string,
      default_profile: string,
      default_profile_image: string,
      description: string,
      entities: Entities,
      favourites_count: number,
      follow_request_sent?: boolean,
      following?: boolean,
      followers_count: number,
      friends_count: number,
      geo_enabled?: boolean,
      id: number,
      id_str: string,
      is_translator?: boolean,
      lang: string,
      listed_count: number,
      location: string,
      name: string,
      notifications?: boolean,
      profile_background_color: string,
      profile_background_image_url: string,
      profile_background_image_url_https: string,
      profile_background_tile: boolean,
      profile_banner_url: string,
      profile_image_url: string,
      profile_image_url_https: string,
      profile_link_color: string,
      profile_sidebar_border_color: string,
      profile_sidebar_fill_color: string,
      profile_text_color: string,
      profile_use_background_image: boolean,
      protected: boolean,
      screen_name: string,
      show_all_inline_media: boolean,
      status?: Status,
      statuses_count: number,
      time_zone?: string,
      url: string,
      utc_offset?: number,
      verified: boolean,
      withheld_in_countries: string,
      withheld_scope: string,
    }

    // See https://dev.twitter.com/overview/api/places
    export interface PlaceAttribute {
      street_address: string,
      locality: string,
      region: string,
      iso3: string,
      postal_code: string,
      phone: string,
      twitter: string,
      url: string,
      'app:id': string,
    }
    export interface Place {
      geometry: GeoJSON.Point,
      attributes: PlaceAttribute,
      bounding_box: GeoJSON.Polygon,
      contained_within: Place[],
      country: string,
      country_code: string,
      full_name: string,
      id: string,
      name: string,
      place_type: string,
      url: string,
    }

    // See https://dev.twitter.com/overview/api/tweets
    export interface Status {
      id: number,
      id_str: string,
      annotations?: Object,
      contributors?: Contributors[],
      coordinates?: GeoJSON.Point,
      created_at: string,
      current_user_retweet?: {
        id: number,
        id_str: number,
      },
      entities: Entities,
      favorite_count?: number,
      favorited?: boolean,
      filter_level: 'none' | 'low' | 'medium',
      geo?: Object,
      in_reply_to_screen_name?: string,
      in_reply_to_status_id?: number,
      in_reply_to_status_id_str?: string,
      in_reply_to_user_id?: number,
      in_reply_to_user_id_str?: string,
      lang?: string,
      place?: Place,
      possibly_sensitive?: boolean,
      quoted_status_id?: number,
      quoted_status_id_str?: string,
      quoted_status?: Status,
      scopes?: Object,
      retweet_count: number,
      retweeted: boolean,
      retweeted_status?: Status,
      source?: string,
      text: string,
      truncated: boolean,
      user: User,
      withheld_copyright?: boolean,
      withheld_in_countries?: string[],
      withheld_scope?: string,
    }
    export interface Metadata {
      max_id?: number,
      since_id?: number,
      refresh_url?: string,
      next_results?: string,
      count?: number,
      completed_in?: number,
      since_id_str?: string,
      query?: string,
      max_id_str?: string
    }
  }

  export interface Response {
    statuses: Twitter.Status[],
    search_metadata: Twitter.Metadata,
  }
  interface MediaParam {
    file_path: string
  }
  interface Params {
    // search/tweets
    q?: string;
    geocode?: string;
    lang?: string;
    locale?: string;
    result_type?: Twitter.ResultType;
    count? :number;
    results_per_page?: number;
    until? :string;
    since_id? :string;
    max_id? :string;
    include_entities? :boolean;

    // Other params from various endpoints
    media_id?: string;
    media_ids?: string[];
    alt_text?: {
      text?: string;
    },
    media_data?: Buffer | string;
    screen_name?: string;
    id?: string;
    slug?: string;
    status?: string;
    text?:string;
  }
  export interface PromiseResponse {
    data: Response | any,
    responde: IncomingMessage,
  }
  export interface Callback {
    ( err: Error, result: Response | any, response: IncomingMessage ): void
  }
  export interface ConfigKeys {
    consumer_key: string,
    consumer_secret: string,
    access_token?: string,
    access_token_secret?: string,
  }
  export interface Options extends ConfigKeys {
    app_only_auth?: boolean,
    timeout_ms?: number,
    trusted_cert_fingerprints?: string[],
  }
}

class Twit {
  // See https://github.com/ttezel/twit#var-t--new-twitconfig
  constructor( config: Twit.Options );

  // See https://github.com/ttezel/twit#tgetpath-params-callback
  get( path: string, callback: Twit.Callback );
  get( path: string, params: Twit.Params, callback: Twit.Callback );
  get( path: string, params?: Twit.Params ): Promise<Twit.PromiseResponse>;

  // See https://github.com/ttezel/twit#tpostpath-params-callback
  post( path: string, callback: Twit.Callback );
  post( path: string, params: Twit.Params, callback: Twit.Callback );
  post( path: string, params?: Twit.Params ): Promise<Twit.PromiseResponse>;

  // See https://github.com/ttezel/twit#tpostmediachunkedparams-callback
  postMediaChunked( media: Twit.MediaParam, callback: Twit.Callback );

  // See https://github.com/ttezel/twit#tgetauth
  getAuth(): Twit.Options
  // See https://github.com/ttezel/twit#tsetauthtokens
  setAuth( tokens: Twit.ConfigKeys )

  // See https://github.com/ttezel/twit#tstreampath-params
  stream( path: Twit.StreamEndpoint, params?: Twit.Params ): Readable;
}

export = Twit;
}
declare module 'twit/index' {
import alias = require('~twit/index');
export = alias;
}
declare module 'twit' {
import alias = require('~twit/index');
export = alias;
}
