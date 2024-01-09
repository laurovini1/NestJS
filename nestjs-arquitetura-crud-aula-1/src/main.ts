import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EntityNotFoundError } from './errors/entity-not-found.error';
import { EntityNotFoundInterceptor } from './interceptors/entity-not-found-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



    //PIPES
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );


    //INTERCEPTOR
    app.useGlobalInterceptors(new EntityNotFoundInterceptor());




    
  await app.listen(3000);

}
bootstrap();
