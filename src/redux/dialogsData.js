import dialogsReducer from "./reducers/dialogs-reducer";
import myPostsReducer from "./reducers/my-posts-reducer";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

export const getCurrentTime = () => new Date().toLocaleTimeString() /*.slice(0,-3)*/; 

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreater = (string) => ({ type: UPDATE_NEW_MESSAGE, newMessage: string });

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreater = (string) => ({ type: UPDATE_NEW_POST, newPost: string });


export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let store = {

    _callSubscriber() { },

    _state: {

        dialogs: {
            dialogsData: [
                {
                    id: 1,
                    name: "Марейн Хавербеке",
                    foto: "/src/img/opponents/haverbeke.jpg",
                    list: [
                        {
                            id: 123,
                            time: "11:11",
                            opponent: true,
                            message: "Привет"
                        },
                        {
                            id: 212,
                            time: "11:15",
                            opponent: false,
                            message: "Привет"
                        },
                        {
                            id: 313,
                            time: "11:20",
                            opponent: true,
                            message: "Че делаешь?"
                        },
                        {
                            id: 414,
                            time: "12:15",
                            opponent: false,
                            message: "Да так ничего"
                        },
                        {
                            id: 515,
                            time: "12:20",
                            opponent: true,
                            message: "Не понял! Ты изучил мою книгу?"
                        },
                        {
                            id: 616,
                            time: "13:00",
                            opponent: false,
                            message: "Да..."
                        },
                        {
                            id: 717,
                            time: "13:10",
                            opponent: true,
                            message: "Ну тогда рассажи, что там с графами из проекта про робота доставщика?"
                        },
                        {
                            id: 818,
                            time: "14:15",
                            opponent: false,
                            message: "Абонент вне зоне действия сети..."
                        },
                        {
                            id: 919,
                            time: "14:20",
                            opponent: true,
                            message: "Эй!!! Это не телефон. Пока JS не выучишь, нам не о чем с тобой разговаривать"
                        },
                    ]
                },
                {
                    id: 2345,
                    name: "Владимир Дронов",
                    foto: "/src/img/opponents/dronov.jpg",
                    list: [
                        {
                            id: 121,
                            time: "08:04",
                            opponent: true,
                            message: "Привет, ну как тебе моя книга по React 17?"
                        },
                        {
                            id: 222,
                            time: "09:11",
                            opponent: false,
                            message: "Ну она как бы 17 версии... а на дворе уж 2024 год в топе React 18  и его функциональное программирование, а у тебя там всё на классах..."
                        },
                        {
                            id: 125,
                            time: "10:39",
                            opponent: true,
                            message: "Ответ глупца. Без классового подхода, без ООП и без прочих фундаментальных вещей тебе нет места за клавиатурой."
                        },
                        {
                            id: 23543622,
                            time: "11:48",
                            opponent: false,
                            message: "У меня от времени затраченного на чтение архаизмов уже глаза кровоточат. Мне иногда кажется, что я сбиваюсь с цели!"
                        },
                        {
                            id: 1254545,
                            time: "12:22",
                            opponent: true,
                            message: "У программиста нет цели - только путь. Код осилит кодЮщий!!!"
                        },
                    ]
                },
                {
                    id: 22,
                    name: "IT-цыган",
                    foto: "/src/img/opponents/cigan.jpg",

                    list: [
                        {
                            id: 323145,
                            time: "16:16",
                            opponent: true,
                            message: "Hello World"
                        },
                        {
                            id: 25648,
                            time: "16:18",
                            opponent: false,
                            message: "И тебе не хворать"
                        },
                        {
                            id: 3231,
                            time: "16:20",
                            opponent: true,
                            message: "Интересуешься программированием? Приходи на наши курсы и всего за неделю за совершенно бесплатные 100500 тысяч рублей ты обретешь профессию мечты, переедешь на Бали, будешь кодить на песчаном пляже всего по 10 минут в день, а также обретешь свою любовь типажа неподражаемой Лары Крофт, ведь этого ты желал! Мечта стучится в двери, тебе нужно только ей открыть своё горячее сердце!!!"
                        },
                        {
                            id: 25648665,
                            time: "16:35",
                            opponent: false,
                            message: "Уже бегу!!!"
                        },
                    ]
                },                
                {
                    id: 77,
                    name: "Лара Крофт",
                    foto: "/src/img/opponents/lara.gif",

                    list: [
                        {
                            id: 1488,
                            time: "17:00",
                            opponent: true,
                            message: "Hello GEYmer"
                        },
                        {
                            id: 2407,
                            time: "17:05",
                            opponent: false,
                            message: "Gamer???"
                        },
                        {
                            id: 1109,
                            time: "17:06",
                            opponent: true,
                            message: "No, GEYmer! Ты меня подвёл, а ведь мы могли быть счастливы на Бали..."
                        }

                    ]
                },
            ],

            messageValue: "",

        },

        myPosts: {
            posts: [
                { id: 1, text: "Пост 1", time: "08:15" },
                { id: 2, text: "Пост 2", time: "09:25" },
            ],

            postValue: "",
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.myPosts = myPostsReducer(this._state.myPosts, action)

        this._callSubscriber(this._state);
    }
}

export default store;

