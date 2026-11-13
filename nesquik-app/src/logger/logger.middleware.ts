import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const start = Date.now();
    console.log('request started', req.method);

    res.on('finish', () => {
      const finish = Date.now() - start;
      console.log(`request finished ${finish}`);
    });

    res.on('close', () => {
      const finish = Date.now() - start;
      console.log(`request closed ${finish}`);
    });

    next();
  }
}

// req > middleware > controller > service/repo > controller >  res
