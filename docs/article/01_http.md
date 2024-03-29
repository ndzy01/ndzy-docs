---
title: http
order: 2001
---

<TOC></TOC>

## 浏览器输入地址后到看到页面发生了什么？

- 首先浏览器会解析 url，查看本地缓存（浏览器缓存、系统缓存、路由缓存等），如果有则直接显示。

1. DNS 解析：浏览器向 DNS 服务器请求解析域名，将域名转换为 IP 地址，以便浏览器能够找到服务器。
2. 建立 TCP 连接：浏览器向服务器发出请求，建立 TCP 连接，通过三次握手来确保连接的可靠性。
3. 发送 HTTP 请求：浏览器向服务器发送 HTTP 请求，请求包含请求方法、URL、HTTP 版本、请求头等信息。
4. 服务器处理请求并返回 HTTP 响应：服务器收到请求后，会根据请求的内容进行处理，然后将处理结果打包成 HTTP 响应发送给浏览器。
5. 浏览器接收响应并解析渲染页面：浏览器接收到 HTTP 响应后，会对响应进行解析，并根据响应内容生成对应的 HTML 文档。然后将 HTML 文档解析成 DOM 树，并根据 CSS 样式表对 DOM 树进行渲染，最终呈现出页面效果。
6. 关闭 TCP 连接：浏览器在接收到 HTTP 响应后，会关闭 TCP 连接，释放资源。

## 一个 `TCP` 链接能发几个 HTTP 请求

`HTTP1.0` 一般情况下不支持长链接,因此在每次请求发送完毕之后,TCP 链接会立即断开,故此 `HTTP1.0 一个 TCP 发送一个 HTTP 请求`.但是通过请求头带上`Connection: Keep-Alive`将一条 `TCP` 链接保存在活跃状态,并且客户端和服务器都支持的情况下,也可以发送多条,不过此方法有限制. `HTTP1.1` 支持了长链接,`HTTP2.0`版本协议支持了多路复用.故此只要不断开 TCP 链接,HTTP 请求数也是可以没有上限地持续发送.

一个 TCP 连接可以发送多个 HTTP 请求。`HTTP/1.0` 协议中，每个请求/响应对应一个 TCP 连接；而 `HTTP/1.1` 协议中，可以通过使用持久连接（Keep-Alive）来在一个 TCP 连接上发送多个请求/响应。在 HTTP/2 协议中，更进一步使用了多路复用（Multiplexing）技术，可以在一个 TCP 连接上同时发送多个请求/响应，提升了网络性能。

## HTTP 与 HTTPS 的区别

HTTP 是超文本传输协议，设计目的是为了提供一种发布和接收 HTML 页面的方法

HTTPS 是以数据保密性完整性和身份校验安全性为目标的 HTTP 安全版

具体区别:

#### 传输信息安全不同

HTTP 是超文本传输协议,明文传输; HTTPS 是 SSL 机密传输协议，密文传输

#### 端口不同

HTTP 默认是 80; HTTPS 默认是 443

#### 链接方式不同

HTTP 是无状态链接;HTTPS 是 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，安全性更高

#### 性能

HTTPS 需要加密和解密数据，会增加一定的计算和网络负载，因此比 HTTP 要慢一些。

#### 证书申请方式不同

HTTP 协议免费，HTTPS 需要 CA 证书，一般需要付费

## HTTPS 相对应 HTTP 改进

1. 双向的身份认证
2. 数据传输的机密性
3. 防止重放攻击

## HTTPS 优点

1. 可认证用户和服务器，确保数据发送到正确的客户机和服务器
2. 是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全
3. 是现行架构下最安全的解决方案(虽然不是绝对安全)

## HTTPS 缺点

1. 握手阶段比较费时，使页面加载时间延长
2. HTTPS 连接缓存不如 HTTP 高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响
3. SSL 证书需要钱，功能越强大费用越高，且 SSL 证书通常需要绑定 IP，不能在同一 IP 上绑定多个域名

## HTTPS 工作原理

1. 首先 HTTPS 请求服务端生成证书，客户端对证书的有效期、合法性、域名是否与请求域名一直以及证书公钥（RSA 加密）等进行校验。

2. 客户端如果校验通过后，就根据证书的公钥有效期生成随机数，随机数使用公钥进行加密（RSA 加密）

3. 消息体产生后对它的摘要进行 MD5 加密/SHA1 算法加密，此时就得到了 RSA 签名

4. 发送服务端，此时只有服务端（RAS 私钥）能解密

5. 解密得到的随机数再用 AES 加密作为秘钥，此时的秘钥只有客户端和服务端知道

## Http 2.0 你知道多少

HTTP/2.0 是 HTTP 协议的第二个版本，相比于 HTTP/1.x，HTTP/2.0 改进了性能、安全性和可读性。HTTP/2.0 主要的改进如下：

1. 多路复用 HTTP/2.0 使用二进制格式传输数据，支持在同一个连接上同时发送多个请求和响应，即多路复用技术。多路复用技术可以减少连接数量，提高网络性能。

2. 服务器推送 HTTP/2.0 支持服务器推送技术，服务器可以在客户端请求一个资源时，主动推送与该资源相关的其他资源给客户端，以提高页面加载速度。

3. 头部压缩 HTTP/2.0 支持头部压缩技术，使用“首部表”来减少头部信息的重复传输，从而减少网络流量。

4. 二进制传输 HTTP/2.0 使用二进制格式传输数据，比 HTTP/1.x 的文本格式传输更加高效。

5. 安全性 HTTP/2.0 强制使用 HTTPS 协议，提高了网络安全性。

6. 流量控制 HTTP/2.0 支持流量控制技术，可以在传输数据时动态调整流量，从而更加高效地利用网络带宽。

总的来说，HTTP/2.0 通过引入新的技术和优化现有技术，改进了性能、安全性和可读性，提高了网络效率和用户体验。

## HTTP 协议特点

HTTP（HyperText Transfer Protocol）是一种用于传输超媒体文档（例如 HTML）的应用层协议，它的主要特点包括：

1. 简单性：HTTP 协议的设计非常简单明了，易于实现和扩展。
2. 灵活性：HTTP 协议可以传输任何类型的数据，例如文本、图片、视频等。
3. 无状态性：HTTP 协议是一种无状态协议，即服务器不会记录任何会话信息。这意味着每个请求都是独立的，服务器需要通过额外的机制来维护会话状态。
4. 可靠性：HTTP 协议使用 TCP 协议来传输数据，确保数据的可靠传输。
5. 安全性：HTTP 协议本身并不提供加密和身份认证机制，但可以通过 HTTPS 协议实现加密通信和身份认证。
6. 缓存机制：HTTP 协议支持客户端和服务器之间的缓存机制，可以减少网络流量，提高网络性能。
7. 请求和响应模型：HTTP 协议采用请求和响应模型，客户端向服务器发送请求，服务器返回响应。每个请求和响应都包含一个状态码和头部信息。

## http 协议中，缓存机制有哪些，如何命中？

> http 缓存机制主要在 http 响应头中设定，响应头中相关字段为 Expires、Cache-Control、Last-Modified、Etag。

#### 强制缓存 200

强制缓存是指浏览器在首次请求资源时，将资源缓存到本地，并在一定时间内直接从缓存中取出资源，不发送请求到服务器。常用的缓存控制响应头字段包括：Expires 和 Cache-Control。

Expires：指定资源过期时间，即在该时间之前，直接从缓存中取出资源。不过，Expires 使用的是客户端本地时间，可能会与服务器存在时间差，因此使用较少。 Cache-Control：指定资源的缓存策略，包括 max-age、no-cache、no-store 等，其中 max-age 表示资源缓存的最大时间，no-cache 表示每次请求都要向服务器进行确认，no-store 表示禁止缓存。

#### 协商缓存 304

协商缓存是指浏览器每次请求资源时，都会向服务器发送请求，但服务器会判断该资源是否发生了变化，如果没有变化，服务器会返回一个状态码 304 Not Modified，并在响应头中指定 Last-Modified 或 ETag 字段来表示资源的标识。这样浏览器就可以减少网络传输，直接从缓存中取出资源。

常用的缓存控制请求头字段包括：If-Modified-Since 和 If-None-Match。

If-Modified-Since：表示资源的最后修改时间，浏览器会将该时间发送到服务器，与服务器上该资源的最后修改时间进行比较，如果相同，则返回 304 状态码。 If-None-Match：表示资源的标识，浏览器会将该标识发送到服务器，与服务器上该资源的标识进行比较，如果相同，则返回 304 状态码。缓存命中是指浏览器在请求资源时，从本地缓存中获取到了该资源。当浏览器请求资源时，会根据缓存策略和资源的标识等信息来判断是否需要从缓存中获取资源，如果缓存中存在该资源，并且满足缓存策略，则会命中缓存，直接从缓存中获取资源

## HTTP 的重定向

重定向是服务器发起的跳转，要求客户端使用新的 URI 重新发送请求。在响应头字段 Location 中指示了要跳转的 URI。使用 Refresh 字段，还可以实现延时重定向。

● 301 / 302 是常用的重定向状态码。分别代表永久性重定向和临时性重定向。

● 303：类似于 302，重定向后的请求方法改为 GET 方法

● 307：类似于 302，含义比 302 更明确，重定向后请求的方法和实体不允许变动

● 308：类似于 301，代表永久重定向，重定向后请求的方法和实体不允许变动

● 300：是一个特殊的重定向状态码，会返回一个有多个链接选项的页面，由用户自行选择

● 304：是一个特殊的重定向状态码，服务端验证过期缓存有效后，要求客户端使用该缓存

## TCP 作用

- 提供无差错的数据传输
- 按序传输（数据总是会按照发送顺序到达）
- 未分段的数据流（可以在任意时刻以任意尺寸将数据发送出去）

## TCP 和 UDP 的区别

- TCP 是面向连接的，UDP 是无连接的，即发送数据前不需要先建立链接。
- TCP 提供可靠的服务。也就是说，通过 TCP 连接传送的数据，无差错，不丢失，不重复，且按序到达；UDP 尽最大努力交付，即不保证可靠交付。 并且因为 tcp 可靠，面向连接，不会丢失数据因此适合大数据量的交换。
- TCP 是面向(报文)字节流，UDP 面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如 IP 电话和视频会议等）。
- TCP 只能是 1 对 1 的，UDP 支持 1 对 1,1 对多。
- TCP 是面向连接的可靠性传输，而 UDP 是不可靠的。

TCP 和 UDP 各有优缺点，应根据实际情况选择合适的协议。如果需要高可靠性和低误码率，可以选择 TCP 协议；如果需要传输速度快和实时性强，可以选择 UDP 协议。

## 三次握手

- 客户端首先发送一个带有 SYN 标志的数据包给服务端
- 服务端接受 SYN 数据包之后，回传一个 SYN/ACK 标志的数据包以示传达确认连接信息
- 客户端收到 SYN/ACK 的确认数据包之后，再回传一个 ACK 标志的数据包给服务端，表示‘握手’结束

## TCP 的四次挥手简单说一下

- 客户端发送 FIN 报文给服务端,请求关闭连接
- 服务端收到 FIN 报文后发送 ACK 报文给客户端确认，但依然可以继续发送数据。
- 服务端也没有数据需要发送时,发送 FIN 报文 给客户端
- 客户端收到 FIN 报文后，发送 ACK 报文确认，服务端关闭，客户端等待 2MSL 后关闭,此时 TCP 连接关闭。

## 为什么 axios 会发两次？

这个和跨域有关系，第一次预请求，不携带数据，判断服务器能否跨域；在预检请求的返回中，服务器端也通知客户端，是否需带身份凭证（cookies,http 认证相关数据）第二次携带真实的数据，发送请求；

## fetch 如何处理跨域？

服务端要支持 cors 才能得到数据

CORS cors 是"Cross-Origin Resource Sharing"的简称，是实现跨域的一种方式，相对于其他跨域方式，比较灵活，而且不限制发请求使用的 method，以下从几种情况分析 cors 使用。

## 为什么会有跨域？怎么解决？

协议、域名、端口，任意一个不相同时，则会产生跨域。即同源安全策略。

1. jsonp：利用 script 标签没有跨域限制的特点，通过动态生成 script 标签，指定 src 属性的方式加载跨域资源。

2. cors：浏览器是否启用同源安全策略是根据后端响应的 Access-Control-Allow-Origin 响应头来定的，所以配置后端是最直接的一种方法，也是工作中常用的解决方案。

3. 中间服务器代理：根据代理类型分为正向代理和反向代理。正向代理是代理服务器对客户端进行代理，为客户端收发请求，使得真实客户端对目标服务器不可见，如本地的 devServer；反向代理是代理服务器对目标服务器进行代理，为目标服务器进行收发请求，使得真实服务器对客户端不可见，如 nginx。

## DNS

DNS（Domain Name System，域名系统）是一种用于将域名转换为 IP 地址的系统。DNS 通过将域名与相应的 IP 地址进行映射，使得用户可以通过输入域名来访问网站，而不需要记住 IP 地址。

DNS 具有以下主要功能：

- 域名解析：将域名解析为相应的 IP 地址。
- 域名存储：将域名和其对应的 IP 地址存储在 DNS 服务器中，以便进行域名解析。
- DNS 缓存：将最近访问的域名和其对应的 IP 地址存储在本地的 DNS 缓存中，以提高访问速度。
- DNS 负载均衡：通过将访问请求分配到多个服务器来平衡网络负载，提高服务的可靠性和可扩展性。 DNS 是互联网中一项重要的基础设施，它将域名和 IP 地址进行映射，使得用户可以更方便地访问互联网服务。

## DNS 的查找过程

1. 先搜索浏览器的缓存；
2. 操作系统的缓存；
3. 本地域名服务器的缓存；
4. 顶级域名服务器的缓存；
5. 根域名服务器的缓存

## CDN

CDN（Content Delivery Network，内容分发网络）是一种通过多个节点分布在地理上不同的服务器来加速互联网上的内容传输和访问的技术和网络架构。

CDN 的工作原理是，通过将静态内容（如图片、视频、文件等）缓存到全球各地的服务器上，当用户请求访问这些内容时，CDN 会将它们从离用户最近的服务器中获取，从而提高访问速度和稳定性。

CDN 的主要优点包括：

提高网站访问速度：由于 CDN 将内容缓存到离用户最近的服务器中，因此可以大大减少用户访问网站时的响应时间。提高网站的可用性和稳定性：由于 CDN 可以将内容分散到多个服务器上，当其中一个服务器出现故障时，其他服务器仍然可以提供服务。减少服务器带宽使用：由于 CDN 可以减少服务器的网络负荷，因此可以降低带宽使用量和服务器成本。 CDN 被广泛应用于网站、视频和游戏等领域，它可以提高用户体验和网站的可靠性，同时还可以减少带宽和服务器成本。

## 什么是持久连接

当使用 Keep-alive 模式（又称持久连接，连接重用 http1.1 的版本才支持）时，Keep-alive 功能使客户端到服务端的连接持续有效，当出现服务器的后续请求时，Keep-alive 避免了建立或者重新建立连接

## 什么是管线化

- 在使用持久连接的情况下，某个连接上的消息传递类似于：请求 1 --> 响应 1 --> 请求 2 --> 响应 2 --> 请求 3 --> 响应 3
- 管线化的连接消息传递是类似于：请求 1 --> 请求 2 --> 请求 3 --> 响应 1 --> 响应 2 --> 响应 3 相当于客户端一次性把所有的请求打包发送给服务端，同时服务端也一次性打包将所有的返回回传回来只有 GET 和 HEAD 请求可以进行管线化，而 POST 有所限制管线化是通过持久连接完成的，且只有 http / 1.1 版本支持

## 什么是反向代理？

反向代理（ Reverse Proxy）是指通过代理服务器来接收互联网上的连接请求，然后将请求转发给内部网络上的服务器，并把从服务器上得到的结果返回给互联网上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。

## ajax 过程？

1. 创建 XMLHttpRequest 对象：使用 JavaScript 创建 XMLHttpRequest 对象，该对象用于与服务器进行数据交互。
2. 发送请求：使用 XMLHttpRequest 对象发送请求，可以发送 GET、POST 等请求方式，同时可以设置请求头、请求参数等。
3. 接收响应：服务器通过 HTTP 响应返回数据，XMLHttpRequest 对象通过回调函数接收响应，可以通过 responseText、responseXML 等属性获取响应数据。
4. 更新页面：根据响应数据更新页面内容，可以通过 DOM 操作、innerHTML 等方式更新页面。

## cookies 机制和 session 机制的区别

Cookie 和 Session 都是用于在客户端和服务器之间保持状态的机制。Cookie 是一种在客户端保持状态的技术，而 Session 是一种在服务器端保持状态的技术。

Cookie 的工作原理：

当客户端向服务器发送请求时，服务器可以在响应头部中添加 Set-Cookie 字段，将一些数据存储在客户端的 Cookie 中。当客户端再次向服务器发送请求时，客户端会自动在请求头部中添加 Cookie 字段，将之前存储的数据发送给服务器。 Cookie 可以设置过期时间和域名，以及设置 HttpOnly 属性，来提高安全性。 Session 的工作原理：

客户端在第一次访问服务器时，服务器会为该客户端创建一个唯一的 Session ID，并将该 Session ID 返回给客户端。客户端在后续的请求中会自动在请求头部中添加 Session ID，服务器根据 Session ID 来识别该客户端，并在服务器端存储该客户端的相关信息。 Session ID 可以通过 Cookie 或 URL 重写来传递。 Session 可以设置过期时间和存储位置（例如内存、数据库等）。 Cookie 和 Session 的区别：

- 存储位置不同：Cookie 存储在客户端，而 Session 存储在服务器端。

- 安全性不同：Cookie 可以设置 HttpOnly 属性，防止被 JavaScript 访问，但是仍然有被窃取的风险；而 Session 存储在服务器端，相对来说更加安全。

- 传递方式不同：Cookie 可以通过 URL 重写来传递，因此可以在跨域访问时传递数据；而 Session 只能在同一域名下传递。

- 容量大小不同：Cookie 的大小有限制，一般为 4KB 左右；而 Session 的大小可以设置，一般比 Cookie 大得多。

- 作用范围不同：Cookie 的作用范围可以是整个域名，也可以是单个路径；而 Session 的作用范围一般是整个域名。

## 如何进行 WEB 性能监控

响应速度:页面初始访问速度+交互响应速度;页面稳定性;接口访问速度

1. 选择监控工具：选择适合自己需要的监控工具。常用的监控工具包括 Google Analytics、New Relic、AppDynamics、Pingdom 等。
2. 设置监控指标：根据需要设置需要监控的指标，例如页面加载速度、响应时间、错误率等。
3. 收集数据：通过监控工具收集数据，并将其保存在数据库或日志文件中。
4. 分析数据：对收集的数据进行分析，找出潜在的问题和瓶颈，例如网站的性能瓶颈在哪里，哪些页面加载缓慢等。
5. 优化：根据分析结果进行优化，例如使用 CDN、压缩图片、减少 HTTP 请求等。
6. 定期评估：定期评估网站性能，了解网站的稳定性和响应时间等。

## GET 请求和 POST 请求的区别

1. 数据传输方式：GET 请求将参数放在 URL 后传递，POST 请求将参数放在请求体中传递。
2. 传输数据的大小：GET 请求传输数据有长度限制，一般不能超过 2048 个字符，而 POST 请求传输数据没有大小限制。
3. 安全性：GET 请求的参数暴露在 URL 中，不安全；POST 请求的参数在请求体中，相对安全。
4. 效率：GET 请求因为传输的数据较少，在数据传输过程中比 POST 请求快一些；POST 请求因为要传输大量数据，因此比 GET 请求慢。
5. 缓存：GET 请求可以被缓存，POST 请求不可以被缓存。
6. GET 生产一个 TCP 数据包，POST 产生两个数据包.(GET)：浏览器回吧 Http header 和 data 一并发出去，服务器响应 200;(POST)：浏览器先发送 Header，服务器响应 100 continue，浏览器再发送 data 服务器响应 200

## 常见的 HTTP 状态码

200：请求被正常处理

204：请求被受理但没有资源可以返回

301：永久性重定向

302：临时重定向

303：与 302 功能相似，只是它希望客户端在请求一个 URL 时，能通过 GET 方法重定向到另一个 URL 上

304：发送附带条件的请求时，条件不满足时返回，与重定向无关

307：临时重定向，与 302 类似，只是强制要求使用 POST 方法

400：请求报文语法有误，服务器无法识别

401：请求需要认证

403：请求的对应资源禁止被访问

404：服务器无法找到对应资源

500：服务器内部错误

503：服务器正忙

## 你知道哪些 HTTP 的请求方法？

1. GET 获取资源 (幂等)
2. POST 新增资源
3. HEAD 获取 HEAD 元数据 (幂等)
4. PUT 更新资源 (带条件时幂等)
5. DELETE 删除资源 (幂等)
6. CONNECT 建立 Tunnel 隧道
7. OPTIONS 获取服务器支持访问资源的方法 (幂等)
8. TRACE 回显服务器收到的请求，可以定位问题。(有安全风险)
