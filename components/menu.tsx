import { LinkPlain } from './link'

const Menu = () => (
  <div class="text-xl uppercase  w-full flex flex-row p-2 gap-2 font-medium">
    <LinkPlain href="/about" class="flex-grow">
      <div class="flex-grow flex justify-center p-2 bg-primary rounded-full uppercase">About</div>
    </LinkPlain>
    <LinkPlain href="/" class="flex-grow">
      <div class="flex-grow flex justify-center p-2 bg-primary rounded-full uppercase">Projects</div>
    </LinkPlain>
    {/* 
    <LinkPlain href="/papers" class="flex-grow">
      <div class="flex-grow flex justify-center p-2 bg-primary rounded-full uppercase">Papers</div>
    </LinkPlain>
    */}
  </div>
)

export default Menu


