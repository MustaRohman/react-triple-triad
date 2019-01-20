let deck1 = [
    {
        name: 'Card1',
        stats: [1, 2, 3, 4],
        player: true
      },
      {
          name: 'Card2',
          stats: [1, 2, 3, 4],
          player: true
      },
      {
          name: 'Card3',
          stats: [1, 2, 3, 4],
          player: true
      },
      {
          name: 'Card4',
          stats: [1, 2, 3, 4],
          player: true
      },
      {
        name: 'Card5',
        stats: [5, 5, 5, 5],
        player: true
      }
]

let deck2 = [
    {
        name: 'Card1',
        stats: [1, 2, 3, 4],
        player: false
      },
      {
          name: 'Card2',
          stats: [1, 2, 2, 2],
          player: false
      },
      {
          name: 'Card3',
          stats: [4, 3, 2, 1],
          player: false
      },
      {
          name: 'Card4',
          stats: [1, 2, 3, 4],
          player: false
      },
      {
        name: 'Card5',
        stats: [1, 3, 4, 2],
        player: false
      }
]

const cards = {
    deck1: deck1,
    deck2: deck2
}

export default cards;