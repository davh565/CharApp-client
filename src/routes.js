import MenuMain from './components/MenuMain.vue'
import MenuCharacters from './components/MenuCharacters.vue'
import MenuAddCharacter from './components/MenuAddCharacter.vue'
import MenuEditCharacter from './components/MenuEditCharacter.vue'

export default [
    {path: '/', component: MenuMain},
    {path: '/Characters/', component: MenuCharacters},
    {path: '/Characters/add', component: MenuAddCharacter},
    {path: '/Characters/:id', component: MenuEditCharacter},
]