import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Продвинутый бэк')
        .setDescription('tttt')
        .setVersion('1.0.0')
        .addTag('keeeparis')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    // app.useGlobalGuards(JwtAuthGuard) // to restrict access to the whole app
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start();