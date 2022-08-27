import * as axios from "axios";


const instance =  axios.create({
    withCredentials: true,
    "API-KEY": "c6b7c803-7f13-40b2-869b-e1613cbb0b62",
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data;
        })
    },
    // follow(userId) {
    //     return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    // },
    // unfollow(userId) {
    //     return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    // },
    // bad request , хз почему
    follow(userId) {
       return  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "c6b7c803-7f13-40b2-869b-e1613cbb0b62"
            },

        })
    },
    unfollow(userId) {
        return  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "c6b7c803-7f13-40b2-869b-e1613cbb0b62"
            },

        })
    }
}


//
// Данные хранятся в централизованном хранилище store.
//     Store - это объект, у которого есть методы getState, subscribe, dispatch и т д.
//     Action - объект, у которого есть, как минимум одно свойство type. Так же в action может нести полезную нагрузку payload (какие то свойства: id, title и т д). Action может выглядеть, к примеру, так {type: 'ADD-POST', title: 'New todolist', name: 'Alex'} или так {type: 'ADD-POST', payload: {id: 123, title: 'Milk'}}.
// ActionCreator - функция, которая создает и возвращает action.
//     Dispatch - функция, которая отправляет action. Это единственный способ изменить state приложения.
//     Reducer - чистая функция (pure function), принимает state и action и возвращает измененную копию state или старый state, если ни один type не совпал. Данные в state  нельзя мутировать, изменять напрямую, необходимо копировать state и у же в копии вносить изменения и возвращать эту копию state из reducer.
//     Redux сравнивает объекты(state), старый и новый, по ссылке. Если вы не сделаете копию, то ссылка на объект не изменится, подписчики не будут уведомлены и данные не будут рендериться компонентами. Хотя в самом state они изменятся.
//     То же самое касается вложенных объектов. Если мы хотим изменить данные во вложенном объекте, то сперва мы должны сделать внешнюю копию объекта(сам state), затем копию вложенного объекта, где мы хотим внести изменения, затем внести изменения в этой копии объекта. Если объект на втором, третьем и т д уровне вложенности, необходимо скопировать все объекты на пути к нужным данным.
//     Старайтесь держать данные плоскими, т е  как можно с меньшей вложенностью. Это убережет от трудностей с копированием и ошибок.
//
//     Произошло событие(например onClick), dispatch отправляет action(ActionCreator возвращает нам именно action) в reducer. В reducer сравнивается type экшена с описанными в reducer. Если совпадение найдено, происходят изменения(в копии state), если нет возвращается старый state. С этого момента state находится в актуальном, последнем состоянии, откуда данные через connect или props приходят в наши презентационные компоненты. Любое изменения в UI  должно пройти этот круговорот событий (FLUX-архитектура).
