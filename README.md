Baigiamasis projektas

Šio projekto metu reikės sukurti internetinį forumą naudojant Next.js, NodeJS Express ir MongoDB arba MySQL. Forumo tikslas - leisti užduoti klausimus, į juos atsakinėti. Galite įsivaizduoti kažką panašaus į https://stackoverflow.com/questions, tik jums rekės padaryt supaprastintą versiją.

Funkcionalumas:
- Registruotis
- Prisijungti
- Užduoti naują klausimą (tik prisijungus)
- Ištrinti klausimą (tik prisiijungus)
- Atsakyti į užduotą klausimą (tik prisijungus)
- Ištrinti atsakymą (tik prisijungus)
- Peržiūrėti klausimų sąrašą.
- Filtruoti atsakytus arba neatsakytus klausimus
- Peržiūrėti klausimų atsakymus

Forumo projektas sudeda iš frontend'o ir backend'o dalių:
Backend'e naudosime NodeJS Express, MongoDB arba MySQL ir kelis papildomus npm paketus, kuries palengvins darbą.
Frontend'e naudosime React. Kaip ir backend'e node express, taip pat galima naudoti papildomjus npm paketus.

### Backend'as

POST /register
POST /login

GET /questions
POST /question
DELETE /question/:id

GET /question/:id/answers
POST /question/:id/answers
DELETE /answer/:id
