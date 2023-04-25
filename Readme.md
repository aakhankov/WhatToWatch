# What to Watch?

*Online cinema*

## Project features
* The application consists of 6 pages: `Main (/)`, `Sign In (/login)`, `MyList (/mylist)`, `Film (/films/:id)`, `Add review (/films/:id/review)`, `Player (/player/:id)`.
* The `MyList` and `Add review` pages are only available to authorized users. If the user is not authorized, they will be redirected to the `Sign In` page when accessing these pages.
* To log in to the application, it is sufficient to enter a random valid `email` and `password` (must contain at least one lowercase, one uppercase Latin letter, and one digit)
* When accessing a non-existent page, the user is redirected to the `«404 page»`.
* When hovering over and holding the mouse cursor on the movie image, a video preview of the movie starts playing instead of the image.
* Adding a new review is done by clicking the `«Add review»` button. The button is only displayed for authorized users.
* To submit a movie review, you need to rate the movie from `1 to 10`, and the review text must be at least `50` and no more than `400` characters.
* Adding to the `«Watchlist»` is done by clicking the `«+ MyList» button`. Clicking on the user's avatar takes the user to the `MyList` page.
* Clicking the `«Play»` button starts playing the movie. Stopping, starting, and rewinding the movie is done by clicking on the progress bar or dragging the slider, going to `fullscreen`.
*During content loading, loaders are implemented, and in case of server errors, popup notifications are implemented.
## Technical features
* Functional components are implemented using hooks.
* `React router` is used for routing.
* `Redux` is used for global state management. Asynchronous actions are implemented using `redux-thunk` middleware.
* Memoization is used to optimize components (with `React.memo()` method, `useMemo` and `useCallback` hooks, `reselect` library).
* All components are covered by tests using the `Jest` framework.

---------------------------

# Что Посмотреть? 
*Онлайн кинотеатр*

## Особенности проекта
* Приложение состоит из 6 страниц: `Main (/)`, `Sign In (/login)`, `MyList (/mylist)`, `Film (/films/:id)`, `Add review (/films/:id/review)`, `Player (/player/:id)`.
* Страницы `MyList`, `Add review` доступны только авторизованным пользователям. Если пользователь не авторизован, то при переходе к этим страницам выполняется перенаправление на страницу `Sign In`.
* Для логина в приложение достаточно ввести рандомные валидные `email`  и `password` (должен содержать минимум одну строчную, одну заглавную латинские буквы и одну цифру)
* При обращении к несуществующей странице пользователь перенаправляется на страницу `«404»`.
* При наведении и удержании курсора мыши на изображении фильма, вместо изображения начинает воспроизводиться видео-превью фильма
* Добавление нового отзыва выполняется по кнопке `«Add review»`. Кнопка отображается только для авторизованных пользователей
* Для отправки комментария к фильму необходимо выставить оценку фильма от `1 до 10`, а текст отзыва должен быть не меньше `50` и не больше `400` символов
* Добавление в список `«К просмотру»` осуществляется при нажатии на кнопку `«+ MyList»`. Клик по аватарке пользователя выполняет переход на страницу `MyList`
* При нажатии на кнопку `«Play»` запускается проигрывание фильма. Реализована остановка, запуск, перемотка фильма по клику на прогресс бар, а также методом перетаскивания ползунка, переход в `fullscreen`
* Во время ожидания загрузки контента реализованы лоадеры, а в случае возникновения ошибок на сервере реализованы всплывающие уведомления
## Технические особенности
* В проекте реализованы функциональные компоненты с использование хуков
* Для маршрутизации используется `react router`
* Для глобального хранения состояния используется `redux`. Асинхронные действия реализованы при помощи middleware `redux-thunk`
* Для оптимизации компонентов применяется мемоизация (методом `React.memo()`, хуками `useMemo` и `useCallback`, библиотекой `reselect`)
* Все компоненты покрыты тестами с использованием фреймворка `Jest`
