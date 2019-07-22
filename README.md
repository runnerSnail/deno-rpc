[toc]

# deno-rpc

deno rpc package

## introduce
***

Deno  RPC communications package, supporting small RPC packages with custom protocols



- [ ]  base protocol define
- [ ]  Exposed client
- [ ]  support Long type
- [ ]  Support for flatbuffer custom protocol  


## Basic protocol 

 **one part: protocol structure**  
<table style="text-align:center">
    <thead style="font-weight:bloder">
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
    </thead>
    <tbody>
        <tr>
            <td>type </td>
            <td colspan="4">requestId</td>
            <td colspan="1">codec</td>
            <td colspan="4">bodyLength</td>
        </tr>
        <tr>
            <td colspan="10" >
               payload
            </td>
        </tr>
    </tbody>
</table>

**two part: protocol content** 
* type : request or response --->1Byte
* requestId :  uniqueID ---> 4Byte  (int32)
* codec:  flag application layer protocols 1Byte
* bodyLength: payload length 
