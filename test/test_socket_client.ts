import { data2buf,ab2str } from "../lib/util.ts";
import { BufWriter, BufReader } from "../deps.ts";
// import { BufReader,BufState,BufWriter } from "../deps.ts";

const { listen, copy,dial } = Deno;

(async () => {
    const conn= await dial("tcp", "127.0.0.1:4500");
    console.log('===>client')
    const r = new BufReader(conn);
    const unit8 = new Uint8Array(10);
    await r.read(unit8)
    console.log(ab2str(unit8))
    // const w = new BufWriter(conn);
    // await w.write(new TextEncoder().encode('xxxxx'));
    // await w.flush();
})();
