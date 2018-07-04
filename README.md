# good-sunday
技术资料汇总

[Linux下安装Git](http://www.cnblogs.com/zhcncn/p/4030078.html)

[sudo npm 提示 command not found 的解决办法](http://blog.csdn.net/lmmilove/article/details/30066489)

[Fackbook开源JS代码优化工具Prepack](https://github.com/facebook/prepack.git)

[neurojs is a JavaScript framework for deep learning in the browser(深度学习)](https://github.com/janhuenermann/neurojs.git)

[node的多线程模型的模块](https://github.com/xk/node-threads-a-gogo)

[pm2图形化管理模块](https://github.com/Tjatse/pm2-gui)

[async_hooks异步钩子](https://medium.com/the-node-js-collection/async-hooks-in-node-js-illustrated-b7ce1344111f)

[如何开启HTTP2服务](https://dassur.ma/things/h2setup/#servers)

[node数据验证passport.js](http://passportjs.org/docs)

 **[多进程数据共享的两种方式](https://stackoverflow.com/questions/2101671/unix-domain-sockets-vs-shared-memory-mapped-file)**

(如果要共享内存，可以试试[node-shm](https://github.com/supipd/node-shm)模块；如果对速度的要求没那么快，可以试试[node-easy-ipc](https://github.com/oleics/node-easy-ipc))
> It's more a question of design, than speed (Shared Memory is faster), domain sockets are definitively more UNIX-style, and do a lot less problems. In terms of choice know beforehand:

> 1.Domain Sockets advantages

> - blocking and non-blocking mode and switching between them

> - you don't have to free them when tasks are completed

> 2.Domain sockets disadvantages

> - must read and write in a linear fashion

> 1.Shared Memory advantages

> - non-linear storage

> - will never block

> - multiple programs can access it

> 2.Shared Memory disadvantages

> - need locking implementation

> - need manual freeing, even if unused by any program

> That's all I can think of now. However, I'd go with domain sockets any day -- not to mention that it's a lot easier then to reimplement them to do distributed computing. The speed gain of Shared Memory will be lost because of the need of a safe design. However, if you know exactly what you're doing, and use the proper kernel calls, you can achieve greater speed with Shared Memory.