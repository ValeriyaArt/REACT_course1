import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let state = {
    posts: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Грипп сосет!!!'},
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('something')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator('something')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('something')
})

it('after deleting length of posts should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})