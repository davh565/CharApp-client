import MenuMain from './components/MenuMain.vue'
import MenuCharacters from './components/MenuCharacters.vue'
import MenuAddCharacter from './components/MenuAddCharacter.vue'
import MenuEditCharacter from './components/MenuEditCharacter.vue'
import MenuRulesets from './components/MenuRulesets.vue'
import MenuAddRuleset from './components/MenuAddRuleset.vue'
import MenuEditRuleset from './components/MenuEditRuleset.vue'

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
    {
        path: '/Rulesets/', 
        component: MenuRulesets,
        name: 'Rulesets Menu'},
    {
        path: '/Rulesets/add', 
        component: MenuAddRuleset,
        name: 'Add Ruleset Menu'},
    {
        path: '/Rulesets/:id', 
        component: MenuEditRuleset,
        name: 'Ruleset'},
]