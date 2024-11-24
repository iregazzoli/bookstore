import { TypeOrmModule } from "@nestjs/typeorm"
import { dataSourceOptions } from "orm.config"
import { Configuration } from "src/config/config.keys"
import { ConfigModule } from "src/config/config.module"
import { ConfigService } from "src/config/config.service"
import { ConnectionOptions } from "tls"

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [],
    async useFactory() {
      for (const [key, value] of Object.entries(dataSourceOptions)) {
        console.log(`${key}: ${value}`);
      }
      
      return {
        ...dataSourceOptions,
      } as ConnectionOptions
    }
  })
]