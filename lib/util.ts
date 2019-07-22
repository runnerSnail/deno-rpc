export const BIG_ENDIAN = Symbol('BIG_ENDIAN');
export const LITTLE_ENDIAN = Symbol('LITTLE_ENDIAN');

/**
 * BIG_ENDIAN or LITTLE_ENDIAN
 */
export function getPlatformEndianness():Symbol {
  let arr32 = Uint32Array.of(0x12345678);
  let arr8 = new Uint8Array(arr32.buffer);
  switch ((arr8[0]*0x1000000) + (arr8[1]*0x10000) + (arr8[2]*0x100) + (arr8[3])) {
    case 0x12345678:
      return BIG_ENDIAN;
    case 0x78563412:
      return LITTLE_ENDIAN;
    default:
      throw new Error('Unknown endianness');
  }
}

/**
 * Convert ArrayBuffer/TypedArray to String via TextDecoder
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
 */
function ab2str(
    input: ArrayBuffer | Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array,
    outputEncoding: string = 'utf8',
  ): string {
    const decoder = new TextDecoder(outputEncoding)
    return decoder.decode(input)
  }
  
  /**
   * Convert String to ArrayBuffer via TextEncoder
   *
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/TextEncoder
   */
  function str2ab(input: string): ArrayBuffer {
    const view = str2Uint8Array(input)
    return view.buffer
  }
  
  /** Convert String to Uint8Array */
  function str2Uint8Array(input: string): Uint8Array {
    const encoder = new TextEncoder()
    const view = encoder.encode(input)
    return view
  }
  export{
    ab2str,
    str2ab,
    str2Uint8Array
  }