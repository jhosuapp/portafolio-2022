import {
    loadNavBarHandlers
} from './modules/NavBar'

import{
    loadButtonHandlers
} from './modules/Button'

import{
    loadFormHandlers
} from './modules/Form'

import{
    loadPaginadorHandlers
} from './modules/Paginador'

import{
    loadBotHandlers
} from './modules/Bot'






window.addEventListener('DOMContentLoaded', function () {
    loadNavBarHandlers()

    loadButtonHandlers()

    loadFormHandlers()

    loadPaginadorHandlers()

    loadBotHandlers()
})