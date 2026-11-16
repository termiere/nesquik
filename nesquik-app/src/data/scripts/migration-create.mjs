import { execFileSync } from 'child_process';
import { resolve } from 'path';

const migrationName =
  process.env.npm_config_name ??
  process.argv.find((arg) => arg.startsWith('--name='))?.split('=')[1];

if (!migrationName) {
  console.error(
    'Ошибка: необходимо указать имя миграции через --name=<migration_name>',
  );
  process.exit(1);
}

if (!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(migrationName)) {
  console.error('Ошибка: некорректное имя миграции');
  process.exit(1);
}

const migrationPath = resolve('src/data/migrations', migrationName);

const typeormCli = resolve('node_modules/typeorm/cli-ts-node-commonjs.js');

try {
  console.log('Запуск создания миграции...');

  execFileSync(
    process.execPath,
    [typeormCli, 'migration:create', migrationPath],
    { stdio: 'inherit' },
  );
} catch (error) {
  console.error('Ошибка создания миграции:', error);
  process.exit(1);
}
