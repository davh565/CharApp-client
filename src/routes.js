import MenuMain from './components/MenuMain.vue'
import MenuCharacters from './components/MenuCharacters.vue'
import MenuAddCharacter from './components/MenuAddCharacter.vue'
import MenuEditCharacter from './components/MenuEditCharacter.vue'

export default [
    {
        path: '/',
        component: MenuMain,
        name: 'Main Menu'},
    {
        path: '/Characters/', 
        component: MenuCharacters,
        name: 'Characters Menu'},
    {
        path: '/Characters/add', 
        component: MenuAddCharacter,
        name: 'Add Character Menu'},
    {
        path: '/Characters/:id', 
        component: MenuEditCharacter,
        name: 'Character'},
]