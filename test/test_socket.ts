import { data2buf,ab2str } from "../lib/util.ts";
import { BufWriter, BufReader } from "../deps.ts";
// import { BufReader,BufState,BufWriter } from "../deps.ts";

const { listen, copy } = Deno;

// async function readRequest(
//     c: Deno.Conn,
//     bufr?: BufReader
//   ): Promise<[any, BufState]> {
//     if (!bufr) {
//       bufr = new BufReader(c);
//     }
//     const bufw = new BufWriter(c);
//     const req = new ServerRequest();

//     // Set and incr pipeline id;
//     req.pipelineId = ++c.lastPipelineId;
//     // Set a new pipeline deferred associated with this request
//     // for future requests to wait for.
//     c.pendingDeferredMap.set(req.pipelineId, deferred());

//     req.conn = c;
//     req.r = bufr!;
//     req.w = bufw;
//     const tp = new TextProtoReader(bufr!);

//     let s: string;
//     let err: BufState;

//     // First line: GET /index.html HTTP/1.0
//     [s, err] = await tp.readLine();
//     if (err) {
//       return [null, err];
//     }
//     [req.method, req.url, req.proto] = s.split(" ", 3);

//     [req.headers, err] = await tp.readMIMEHeader();

//     return [req, err];
//   }


// listen('tcp','127.0.0.1:8088').accept().then((value)=>{
//     console.log(value);
//     console.log('正常退出');
// },(err)=>{
//     console.log(err);
// })
// const listener = listen('tcp','127.0.0.1:8088');
// console.log('启动端口');

// let handleConn = (_conn: Deno.Conn): void => {};
// let scheduleAccept = (): void => {};

// const acceptRoutine = (): void => {

//   scheduleAccept = (): void => {
//     listener.accept().then(handleConn);
//   };

//   handleConn = (conn: Deno.Conn): void => {
//     const bufw = new BufReader(conn);
//     console.log(bufw);
//     // const httpConn = createHttpConn(conn);
//     // serveConn(env, httpConn); // don't block
//     scheduleAccept(); // schedule next accept
//   };

//   scheduleAccept();
// };

// acceptRoutine();
// import * as deno from "deno";
// let listener = listen("tcp", "127.0.0.1:4500");
// listener.accept().then(async (conn) => {
//     await copy(conn, conn);
//     conn.close();
//     listener.close();
// });
(async () => {
    const addr = "127.0.0.1:4500";
    const listener = listen("tcp", addr);
    console.log("listening on", addr);
    while (true) {
        const conn = await listener.accept();
        // const r = new BufReader(conn);
        // const unit8 = new Uint8Array(10);
        // await r.read(unit8)
        // console.log(ab2str(unit8))
        // console.log("===>server")
        // copy(conn, conn);
        const w = new BufWriter(conn);
        await w.write(new TextEncoder().encode('sssss'));
        await w.flush();
    }
})();

