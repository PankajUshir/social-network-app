setting environment for migration :
set NODE_ENV=development
set NODE_ENV=test
set NODE_ENV=production

For migration : cd .\db\
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
