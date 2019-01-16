Итак задание 2.

Перед выполнением ДЗ 2 вам нужно закомитить ваши текущие изменения, перейти в мастер, забрать послеюнюю версию.

И начать делать изменения в отдельной ветке.
Для этого в папке с проектом выполните команду:

```
git add .
git commit -m "WIP"

git checkout master
git pull <репо артема> master
```

После этого в этой папке в `01-intro-js` вытяните последние изменения:

Чтобы проверить что все работает:

```
npm test
```

Вы должны увидеть набор непройденых тестов:

```
  Bank account
    √ should be able to deposit money on bank account
    1) should be able to widthaw money from bank account
    2) should be able to not let get more money from bank account that user has
    3) should be able to get more money from bank account that user has credit limit
```

#### Ваша задача починить их!

Самый простой способ - редактировать файл `test/bank-account.test.js` снова запускать тесты `npm test`.

Тесты выглядять как набор функций `describe` и `it`. 

```
 describe('Numbers', function () {
        it('should be able define variables and add them', function () {
            // именно тут и выполняться тест

            // assert это билиотека которая помогает срванить ожидаемое значение с тем которое у вас есть на самом деле. 
            // ваша задача сделать так, чтобы переменные в левой части производили значение равное правой. 
            assert.equal(x + y, 2);
        });
```

Если Вам мешают тесты из прошлого занятия то вы можете отключить из написав в строчке 3 в файле basics.test.js
```
xdescribe('JS Basics', function () {
````
вместо

```
describe('JS Basics', function () {
```

Следуйте подсказкам и пользуйтесь гуглом! 


Когда вы закончите или у вас возникнут вопросы:
Комитьте изменения и создавайте pull request
```

// показать текущие изменения
git status 


// добавить все измененные файлы
git add . 


git commit -m "Progress DZ 2"

git push origin <название вашей ветки>
```


Успехов!