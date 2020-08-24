import image from './assets/IMG_0767.jpg'
import { TitleBlock, ImageBlock, TextBlock, TextColumnsBlock } from './classes/blocks'
export const model = [
  new TitleBlock('Test title', 
  {
    tag: 'h2',
    styles: 'background: darkred; color: #fff;'
  }),
  new ImageBlock(image,
  {
    styles: 'padding: 2rem 0; display: flex; justify-content:center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo aut aliquid ipsam. Odit, at?',
  {
    styles: 'background: darkblue; color: yellow;'
  }),
  new TextColumnsBlock(
  [
    '1 text',
    '2 text',
    '3 text'
  ],
  {
    styles: 'padding: 1rem;'
  })
]