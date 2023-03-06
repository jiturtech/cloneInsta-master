import { images } from "../Resource/Images"
export const dummyStories = [
    {
        id: 2,
        image: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
        title: "karennne"
    },
    {
        id: 3,
        image: 'https://picsum.photos/200/300?grayscale',
        title: "zackjohn"
    },
    {
        id: 4,
        image: 'https://picsum.photos/200/300?grayscale',
        title: "jitu"
    },
    {
        id: 5,
        image: 'https://picsum.photos/200/300?grayscale',
        title: "Ramesh"
    },
    {
        id: 6,
        image: 'https://picsum.photos/200/300?grayscale',
        title: "kieron_d"
    },
    {
        id: 7,
        image: 'https://picsum.photos/200/300?grayscale',
        title: "craig_"
    }
]
export const dummypostData = [
    {
        id: 1,
        username: "joshua_l",
        image: "https://picsum.photos/200/300?grayscale",
        address: "Tokyo, Japan"
    },
    {

        id: 2,
        username: "kieron_d",
        image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        address: "Tokyo, Japan"
    },
    {
        id: 3,
        username: "joshua_l",
        image: "https://picsum.photos/200/300?grayscale",
        address: "Tokyo, Japan"
    },
    {
        id: 4,
        username: "joshua_l",
        image: "https://picsum.photos/200/300?grayscale",
        address: "Tokyo, Japan"
    },
    {

        id: 5,
        username: "kieron_d",
        image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        address: "Tokyo, Japan"
    },
    {
        id: 6,
        username: "joshua_l",
        image: "https://picsum.photos/200/300?grayscale",
        address: "Tokyo, Japan"
    },
    {
        id: 7,
        username: "joshua_l",
        image: "https://picsum.photos/200/300?grayscale",
        address: "Tokyo, Japan"
    },
    {

        id: 8,
        username: "kieron_d",
        image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        address: "Tokyo, Japan"
    },
    {
        id: 9,
        username: "joshua_l",
        image: "https://picsum.photos/200/300?grayscale",
        address: "Tokyo, Japan"
    },
   
]

export const dummyImageData = [
    {
        id: 1,
        image: images.rectangleIcon,
        type: "image"
    },
    {
        id: 2,
        image: images.rectangleIcon,
        type: "image"

    },
    {
        id: 3,
        image: images.rectangleIcon,
        type: "image"

    }
]
export const keyWords = [{
    title: "IGTV",
    image: images.igtvIcon,
    id: 1
},
{
    title: "Shop",
    image: images.shopIcon,
    id: 2
},
{
    title: "Style",
    id: 3
},
{
    title: "Sports",
    id: 4
},
{
    title: "Auto",
    id: 5
}
]

export const serachPost = [
    {
        id: 1,
        imageData: [{ id: 1 }, { id: 2 }],
        mainImag: images.dummyImg
    },
    {
        id: 2,
        imageData: [],
        mainImag: images.dummyImg1
    },
    {
        id: 3,
        imageData: [],
        mainImag: images.dummyImg2
    },
    {
        id: 4,
        imageData: [],
        mainImag: images.dummyImg3
    },
    {
        id: 5,
        imageData: [],
        mainImag: images.dummyImg4
    },
    {
        id: 6,
        imageData: [{ id: 1 }, { id: 2 }],
        mainImag: images.dummyImg2
    },
    {
        id: 7,
        imageData: [{ id: 1 }, { id: 2 }],
        mainImag: images.dummyImg
    },
    {
        id: 8,
        imageData: [],
        mainImag: images.dummyImg1
    },
    {
        id: 9,
        imageData: [],
        mainImag: images.dummyImg2
    },
    {
        id: 10,
        imageData: [],
        mainImag: images.dummyImg3
    },
    {
        id: 11,
        imageData: [],
        mainImag: images.dummyImg4
    },
    {
        id: 12,
        imageData: [{ id: 1 }, { id: 2 }],
        mainImag: images.dummyImg2
    },
    {
        id: 13,
        imageData: [{ id: 1 }, { id: 2 }],
        mainImag: images.dummyImg2
    },
    {
        id: 14,
        imageData: [{ id: 1 }, { id: 2 }],
        mainImag: images.dummyImg
    },
    {
        id: 15,
        imageData: [],
        mainImag: images.dummyImg1
    },
    {
        id: 16,
        imageData: [],
        mainImag: images.dummyImg2
    },
    {
        id: 17,
        imageData: [],
        mainImag: images.dummyImg3
    },
    {
        id: 18,
        imageData: [],
        mainImag: images.dummyImg4
    },

]

export const followinData = [
    {
        id: 1,
        status: 1,//"other people like post"
        postList: [
            {
                id: 1,
                image: images.dummyImg
            },
            {
                id: 2,
                image: images.dummyImg1
            },
            {
                id: 3,
                image: images.dummyImg2
            }
        ],
        name: "karennne",
        time: "3h",
        type_post: "multiple",
        user_image: images.oval

    },
    {
        id: 2,
        status: 2,//any  users like same user post
        userList: [
            {
                id: 1,
                name: "kiero_d",
                image: images.dummyImg
            },
            {
                id: 2,
                name: "zackjohn",
                image: images.oval
            },
            {
                id: 3,
                name: "craig_love",
                image: images.dummyImg2
            }
        ],
        name: "joshua_l",
        type_post: "image",
        post_image: images.dummyImg4,
        time: "3h"
    },
    {
        id: 3,
        status: 3,//following status
        name: "kiero_d",
        followingPersonName: "craig_love",
        time: "3h",
        user_image: images.oval


    },
    {
        id: 4,
        status: 1,//"other people like post"
        postList: [
            {
                id: 1,
                image: images.dummyImg
            },
            {
                id: 2,
                image: images.dummyImg1
            },
            {
                id: 3,
                image: images.dummyImg2
            },
            {
                id: 4,
                image: images.dummyImg
            },
            {
                id: 5,
                image: images.dummyImg4
            },
            {
                id: 6,
                image: images.dummyImg3
            },
            {
                id: 7,
                image: images.dummyImg2
            },
            {
                id: 8,
                image: images.dummyImg3
            },
        ],
        name: "craig_love",
        time: "3h",
        type_post: "multiple",
        user_image: images.dummyImg2
    },
    {
        id: 5,
        status: 2,//any  users like same user post
        userList: [
            {
                id: 1,
                name: "maxjacobson",
                image: images.dummyImg
            },
            {
                id: 2,
                name: "zackjohn",
                image: images.oval
            }
        ],
        name: "miss_potter",
        type_post: "image",
        post_image: images.dummyImg4,
        time: "3h"
    },
    {
        id: 6,
        status: 3,//following status
        name: "kiero_d",
        followingPersonName: "craig_love",
        time: "3h",
        user_image: images.oval


    },
]
export const youfollowinData = [
    {
        id: 1,
        title: "New",
        data: [
            {
                id: 1,
                status: 1,//"like your photo"
                time: "3h",
                type_post: "image",
                post_image: images.dummyImg3,
                userList: [
                    {
                        id: 1,
                        name: "kiero_d",
                        image: images.dummyImg
                    },

                ],
            },
        ]
    },
    {
        id: 2,
        title: "Today",
        data: [
            {
                id: 1,
                status: 1,//"like your photo"
                time: "3h",
                type_post: "image",
                post_image: images.dummyImg2,
                userList: [
                    {
                        id: 1,
                        name: "kiero_d",
                        image: images.dummyImg
                    },
                    {
                        id: 2,
                        name: "zackjohn",
                        image: images.oval
                    },
                    {
                        id: 3,
                        name: "craig_love",
                        image: images.dummyImg2
                    }
                ],
            },
        ]

    },
    {
        id: 3,
        title: "This Week",
        data: [
            {
                id: 1,
                name: "martini_rond",
                status: 5,
                user_image: images.oval,
                youFollowing: true,
                othrFollowing: true,
                time: "2d"

            },
            {
                id: 2,
                name: "maxjacobson",
                status: 5,
                user_image: images.dummyImg1,
                youFollowing: true,
                othrFollowing: true,
                time: "2d"

            },
            {
                id: 3,
                name: "mis_potter",
                status: 5,
                user_image: images.dummyImg3,
                youFollowing: false,
                othrFollowing: true,
                time: "3d"
            }
        ]
    },
    {
        id: 4,
        title: "This Month",
        data: [
            {
                id: 1,
                name: "martini_rond",
                status: 5,
                user_image: images.oval,
                youFollowing: true,
                othrFollowing: true,
                time: "2d"

            },
            {
                id: 2,
                status: 1,//"like your photo"
                time: "3h",
                type_post: "image",
                post_image: images.dummyImg3,
                userList: [
                    {
                        id: 1,
                        name: "kiero_d",
                        image: images.dummyImg
                    },

                ],
            },

        ]
    }
]

export const categoryData = [
    {
        id: 1,
        title: "New",
        image:"svg"
    },
    {
        id:2,
        title:"Friends",
        image:images.dummyImg4
    },
    {
        id:3,
        title:"Sport",
        image:images.dummyImg2
    },
    {
        id:4,
        title:"Design",
        image:images.dummyImg1
    }
]

export const drawerData=[
    {
        id:1,
        title:"Archive",
        images:images.archive
    },
    {
        id:2,
        title:"Your Activity",
        images:images.activity
    },
    {
        id:3,
        title:"Nametag",
        images:images.nameTag
    },
    {
        id:4,
        title:"Saved",
        images:images.saved
    },
    {
        id:5,
        title:"Close Friends",
        images:images.closeFriend
    },
    {
        id:6,
        title:"Discover People",
        images:images.disPeople
    },
    {
        id:7,
        title:"Open Facebook",
        images:images.facebook
    }
]
