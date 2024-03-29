/// <reference types="node" resolution-mode="require"/>
/**
 * Helper class to base64 encode/decode values with option
 * for url encoding and decoding
 */
declare class Base64 {
    /**
     * Base64 encode Buffer or string
     */
    encode(arrayBuffer: ArrayBuffer | SharedArrayBuffer): string;
    encode(data: string, encoding?: BufferEncoding): string;
    /**
     * Base64 decode a previously encoded string or Buffer.
     */
    decode(encode: string, encoding: BufferEncoding, strict: true): string;
    decode(encode: string, encoding: undefined, strict: true): string;
    decode(encode: string, encoding?: BufferEncoding, strict?: false): string | null;
    decode(encode: Buffer, encoding?: BufferEncoding): string;
    /**
     * Base64 encode Buffer or string to be URL safe. (RFC 4648)
     */
    urlEncode(arrayBuffer: ArrayBuffer | SharedArrayBuffer): string;
    urlEncode(data: string, encoding?: BufferEncoding): string;
    /**
     * Base64 URL decode a previously encoded string or Buffer. (RFC 4648)
     */
    urlDecode(encode: string, encoding: BufferEncoding, strict: true): string;
    urlDecode(encode: string, encoding: undefined, strict: true): string;
    urlDecode(encode: string, encoding?: BufferEncoding, strict?: false): string | null;
    urlDecode(encode: Buffer, encoding?: BufferEncoding): string;
}
export declare const base64: Base64;
export {};
