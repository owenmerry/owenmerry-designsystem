import React, { Component } from 'react'

import { Icon, Button } from 'owenmerry-designsystem'

export default class App extends Component {
  render () {
    return (
      <div>
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
      <Button icon='FaPlus' iconStart>Add Item</Button>
      <Button icon='FaPlus'></Button>
      <Button icon='FaPlus' disabled></Button>
      <Button icon='MdPrint'></Button>

      <h2>Buttons Icons</h2>
      <Button icon='FaPlus' fontSize='16'>Add Item</Button>
      <Button icon='FaPlus' fontSize='24'>Add Item</Button>
      <Button icon='FaPlus' fontSize='32'>Add Item</Button>
      <Button icon='FaPlus' fontSize='40'>Add Item</Button>

      <h2>Buttons Round</h2>
      <Button icon='FaPlus' circle fontSize='16' />
      <Button icon='FaPlus' secondary circle fontSize='24' />
      <Button icon='FaPlus' disabled circle fontSize='32' />
      <Button icon='FaPlus' secondary disabled circle fontSize='40' />
      
      </div>
    )
  }
}
