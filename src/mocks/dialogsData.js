import { rerender } from "../render";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let state = {

    dialogs: {
        dialogsData: [
            {
                id: 1,
                name: "Марейн Хавербеке",
                list: [
                    {
                        id: 123,
                        message: "Привет"
                    },
                    {
                        id: 212,
                        message: "Привет"
                    },
                    {
                        id: 313,
                        message: "Че делаешь?"
                    },
                    {
                        id: 414,
                        message: "Да так ничего"
                    },
                    {
                        id: 515,
                        message: "Не понял! Ты изучил мою книгу?"
                    },
                    {
                        id: 616,
                        message: "Да..."
                    },
                    {
                        id: 717,
                        message: "Ну тогда рассажи, что там с графами из проекта про робота доставщика"
                    },
                    {
                        id: 818,
                        message: "Абонент вне зоне действия сети..."
                    },
                    {
                        id: 919,
                        message: "Эй!!! Это не телефон. Пока JS не выучишь, нам не о чем с тобой разговаривать"
                    },
                ]
            },
            {
                id: 2345,
                name: "Пётр",
                list: [
                    {
                        id: 121,
                        message: "Hello"
                    },
                    {
                        id: 222,
                        message: "World"
                    }
                ]
            },
            {
                id: 22,
                name: "Захар",
                list: [
                    {
                        id: 3231,
                        message: "Hello World"
                    },
                    {
                        id: 25648,
                        message: "И тебе не хворать"
                    }
                ]
            },
            {
                id: 333,
                name: "Макар",
                list: [
                    {
                        id: 4648,
                        message: "Hello"
                    },
                    {
                        id: 64587,
                        message: "World"
                    },
                    {
                        id: 4785,
                        message: "Goodbye"
                    },
                    {
                        id: 6989,
                        message: "World"
                    },
                ]
            },
            {
                id: 404,
                name: "Абубакар",
                list: [
                    {
                        id: 789895,
                        message: "Hello Pomidorka"
                    },
                    {
                        id: 46811136,
                        message: "World..."
                    },
                    {
                        id: 2545,
                        message: "Купи Pomidorka"
                    },
        
                ]
            },
            {
                id: 55,
                name: "Ихтиандр",
                list: [
                    {
                        id: 6969,
                        message: "Hello Water"
                    },
                    {
                        id: 8823,
                        message: "World"
                    },
                    {
                        id: 1114,
                        message: "No, only water"
                    },
        
                ]
            },
            {
                id: 77,
                name: "Лара Крофт",
                list: [
                    {
                        id: 1488,
                        message: "Hello GEYmer"
                    },
                    {
                        id: 2407,
                        message: "Gamer???"
                    },
                    {
                        id: 1109,
                        message: "No, GEYmer! ha ha ha!!!"
                    }
        
                ]
            },
        ],

        messageValue: "",

        addMessage: (userMessage, array = []) => {
            let nemMessage = {id: getRandomArbitrary(1, 10000), message: userMessage};
            array[0].list.push(nemMessage);
            rerender(state);
        },
    } 

}




export default state;