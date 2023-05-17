import {createSelector} from "reselect";

//простой селектор, выступает как зависимсть для "сложного" селектора
export const selector = (state) => {
    return state.usersPage.users
}

// логика кэширокания (запоминание и актуализация)
// обернули сложный селектор для сложных расчетов и там где создается копия объекта
export const getUsers = createSelector (selector,(users) => {
    return users.filter(u => true)   // эмитация нового объекта
})


export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
