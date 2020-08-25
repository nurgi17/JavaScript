import image from './assets/IMG_0767.jpg'
import { TitleBlock, ImageBlock, TextBlock, TextColumnsBlock } from './classes/blocks'
import { css } from './utils'
export const model = [
  new TitleBlock('Test title', 
  {
    tag: 'h2',
    styles: css({
      background: 'darkred',
      color: '#fff'
    })
  }),
  new ImageBlock(image,
  {
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    }),
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo aut aliquid ipsam. Odit, at?',
  {
    styles: css({
      background: 'darkblue',
      color: 'yellow'
    })
  }),
  new TextColumnsBlock(
  [
    '1 text',
    '2 text',
    '3 text'
  ],
  {
    styles: css({
      padding: '1rem'
    })
  })
]