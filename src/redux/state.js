import {renderEntireTree} from "../render";

let state = {
    profilePage:{
        posts:[
            {id:1,message:'Hi, how are you?',countLike:10},
            {id:2,message:'It\'s my first post',countLike:18},
        ],
        newPostText: "new post"
    },
    dialogsPage:{
        messages:[
            {id:1,message:'Hi, Son!',msgYou:false},
            {id:2,message:'How a you?',msgYou:false},
            {id:3,message:'Hi, Mother. All good!',msgYou:true},
            {id:4,message:'Goodbye, son :)',msgYou:false},
            {id:5,message:':)',msgYou:true},
        ],
        dialogs:[
            {id:1,name:'Mother',ico_img:'mother_ico.png'},
            {id:2,name:'Father',ico_img:'mother_ico.png'},
            {id:3,name:'Wife',ico_img:'mother_ico.png'},
            {id:4,name:'Brother',ico_img:'mother_ico.png'},
            {id:5,name:'Sister',ico_img:'mother_ico.png'},
            {id:6,name:'Son',ico_img:'mother_ico.png'},
        ]
    },
    sidebar:{
        friends:[
            {id:1, name: 'Igor'},
            {id:2, name: 'Oleg'},
            {id:3, name: 'Alex'},
        ]
    }
};

export let addPost = () => {
    let newObjPost = {
        id:state.profilePage.posts.length+1,
        message:state.profilePage.newPostText,
        countLike:0
    };
    state.profilePage.posts.push(newObjPost);
    editPost('');
    renderEntireTree(state);
};

export  let editPost = (editText) => {
    state.profilePage.newPostText = editText;
    renderEntireTree(state);
}

export default state;