// Описание задания.

//  1 уровень сложности: ## В рамках БД 190923_MUSIC напишите след/запросы:


//  Вывести названия двух произвольных треков с тегом awesome
 db.tracts.aggregate([
   { $sample: { size: 2 } },
   { $match: { tags: "awesome" } },
 ])
 
//  Вывести имя юзера с самым минимальным балансом

db.users.aggregate([
   { $sort: { balance: 1 } },
   { $limit: 1 },
   { $project: { fullname: 1,_id:0 } }

])
 
 
//  Используя метод countDocuments(), вывести ко-во заблокированных юзеров с балансом от 10 до 1000 EUR
 
 db.users.countDocuments({
   balance: {
     $gte: 10,
     $lte: 1000
   },
   blocked: true
   }
 )
//  Используя метод aggregate(), вывести ко-во незаблокированных юзеров не из Germany и не из France с балансом до 1000 EUR
 
 db.users.aggregate([
   { $match: { balance: { $lte: 1000 }, blocked: false, country: { $nin: ["Germany", "France"] } } },
 ])
//  Также очень коротко опишите, как работает агрегация в MongoDB
 
 //Основные методы **Основные методы**

// - `countDocuments()`
// - `aggregate()`.Принимает один аргумент и возвращает колличество совпадений-целое число. Позволяет эффективно обрабатывать большие объемы данных

 