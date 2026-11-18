import type { GamesResponse } from '../types/game';

export const mockGames: GamesResponse = {
    count: 3,
    next: null,
    previous: null,
    results: [
        {
            id: 1,
            slug: 'dark-souls-remastered',
            name: 'Dark Souls Remastered',
            released: '2018-05-25',
            background_image: 'https://store-images.s-microsoft.com/image/apps.9585.69479559702140610.dad571dd-6b2c-42a6-be9e-fd11d891d66c.b640dda6-99fd-45d1-b7f1-a54f914615d6',
            rating: 8.4,
            metacritic: 84,
            parent_platforms: [
                {
                    platform: {
                        id: 1,
                        name: 'PC',
                        slug: 'pc'
                    }
                }
            ],
            genres: [
                {
                    id: 1,
                    name: 'Action RPG',
                    slug: 'action-rpg'
                }
            ]
        },
        {
            id: 2,
            slug: 'overwatch',
            name: 'Overwatch',
            released: '2016-05-24',
            background_image: null,
            rating: 8.2,
            metacritic: 79,
            parent_platforms: [
                {
                    platform: {
                        id: 1,
                        name: 'PC',
                        slug: 'pc'
                    }
                }
            ],
            genres: [
                {
                    id: 2,
                    name: 'Hero Shooter',
                    slug: 'hero-shooter'
                }
            ]
        },
        {
            id: 3,
            slug: 'the-binding-of-isaac-rebirth',
            name: 'The Binding of Isaac: Rebirth',
            released: '2014-09-04',
            background_image: 'https://store-images.s-microsoft.com/image/apps.58856.69039762475408619.1f9f3938-799b-4ad8-a607-676e85baba27.95ed1dc8-4ddf-43fb-8a87-f54c81f96879',
            rating: 8.2,
            metacritic: null,
            parent_platforms: [
                {
                    platform: {
                        id: 1,
                        name: 'PC',
                        slug: 'pc'
                    }
                }
            ],
            genres: [
                {
                    id: 3,
                    name: 'Rogue-like',
                    slug: 'rogue-like'
                }
            ]
        }
    ]
};