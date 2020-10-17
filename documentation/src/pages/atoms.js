import React from 'react'
import {Button, Icon, MenuHorizontal,Header} from 'owenmerry-designsystem'

export function AtomsPage() {
    return (
        <div>
            <Header menuSettings={
              {
                items: [
                  {name:'Home',url:'/'},
                  {name:'About',url:'/about'},
                  {name:'Components',url:'/components'},
                  {name:'Atoms',url:'/atoms'},
                  {name:'Example',url:'/example'},
                  {name:'Login',url:'/login'},
                ]
              }
            }/>
            <h1>Buttons</h1>
            <h2>Icons</h2>
            <Icon type='FaPlus' />
            <Icon type='FaAdobe' />
            <Icon type='MdPrint' />

            <h2>Buttons Primary</h2>
            <Button>Click Me Please</Button>
            <Button disabled>Click Me Please</Button>
            <Button icon='FaPlus'>Click Me Please</Button>
            <Button disabled icon>Click Me Please</Button>

            <h2>Buttons Secondary</h2>
            <Button secondary>Click Me Please</Button>
            <Button secondary disabled>Click Me Please</Button>
            <Button secondary icon='FaPlus'>Click Me Please</Button>
            <Button secondary disabled icon='FaPlus'>Click Me Please</Button>

            <h2>Buttons Icons</h2>
            <Button icon='FaPlus'>Add Item</Button>
            <Button icon='FaPlus'>Add Item</Button>
            <Button icon='FaPlus'></Button>
            <Button icon='FaPlus' disabled></Button>
            <Button icon='MdPrint'></Button>

            <h2>Buttons Sizes</h2>
            <Button icon='FaPlus' fontSize='8'>Add Item</Button>
            <Button icon='FaPlus'>Add Item</Button>
            <Button icon='FaPlus' fontSize='16'>Add Item</Button>
            <Button icon='FaPlus' fontSize='24'>Add Item</Button>
            <Button icon='FaPlus' fontSize='32'>Add Item</Button>
            <Button icon='FaPlus' iconStart fontSize='32'>Add Item</Button>

            <h2>Buttons Round</h2>
            <Button icon='FaAdobe' circle fontSize='16' />
            <Button icon='FaPlus' circle fontSize='16' />
            <Button icon='FaPlus' secondary circle fontSize='24' />
            <Button icon='FaAdobe' secondary circle fontSize='24' />
            <Button icon='FaPlus' disabled circle fontSize='32' />
            <Button icon='FaPlus' secondary disabled circle fontSize='40' />

            <h1>Menu</h1>
            <h2>Left Menu</h2>
            <MenuHorizontal light items={[
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]}/>
            <h2>Right Menu</h2>
            <MenuHorizontal align='right' light items={[
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]}/>
            <h2>Center Menu</h2>
            <MenuHorizontal align='center' light items={[
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]}/>

            <h2>Left Menu Dark</h2>
            <MenuHorizontal dark items={[
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]}/>
            <h2>Right Menu Dark</h2>
            <MenuHorizontal align='right' dark items={[
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]}/>
            <h2>Center Menu Dark</h2>
            <MenuHorizontal align='center' dark items={[
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]}/>
        </div>
    );
  }
