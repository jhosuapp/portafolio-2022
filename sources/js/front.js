import {
    loadNavBarHandlers
} from './modules/NavBar'

import{
    loadButtonHandlers
} from './modules/Button'

import{
    loadFormHandlers
} from './modules/Form'






window.addEventListener('DOMContentLoaded', function () {
    loadNavBarHandlers()

    loadButtonHandlers()

    loadFormHandlers()
})