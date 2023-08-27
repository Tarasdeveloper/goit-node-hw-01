# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://prnt.sc/MYe8hdTNGQbF

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
https://prnt.sc/Bi0Zw2-iBszV

# Добавляем контакт и выводим в консоль созданный контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://prnt.sc/sggOY-v3xEHS

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
https://prnt.sc/GO6ALLXCUCc5
