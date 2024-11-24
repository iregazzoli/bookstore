import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConnectionOptions } from 'tls';
import { dataSourceOptions } from './orm.config';
import { ConfigService } from 'src/config/config.service';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    useFactory: async () => dataSourceOptions,
  }),
];
