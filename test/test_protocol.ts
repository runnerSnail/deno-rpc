import { str2ab, getPlatformEndianness,LITTLE_ENDIAN ,str2Uint8Array} from "../lib/util.ts";
import { test,runTests,assertEquals } from "../deps.ts";
const { Buffer } = Deno;

const payload = {
    service: 'com.alipay.nodejs.HelloService:1.0',
    methodName: 'plus',
    args: [1, 2],
};


// encode

const payloadLength = str2ab(JSON.stringify(payload)).byteLength;

const request = new ArrayBuffer(10 + payloadLength);

const dvReq = new DataView(request);
dvReq.setInt8(0,1);
dvReq.setInt32(1,1000);
dvReq.setInt8(5,1);
dvReq.setInt32(6,payloadLength);
// dvReq
// str2ab.
// dvReq.setUint8(10,str2ab('xxx'));
console.log(str2Uint8Array('xxxx'));



test({
    name: "BIG_ENDIAN or LITTLE_ENDIAN",
    fn(): void {
        // console.log(getPlatformEndianness())
        assertEquals(getPlatformEndianness(), LITTLE_ENDIAN);
    }
});



runTests();