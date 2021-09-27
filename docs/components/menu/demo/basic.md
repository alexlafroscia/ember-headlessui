# Basic Menu

The following shows an example of a basic menu triggered by a button.

> **Note:** This example uses [`ember-popper-modifier`](https://github.com/alexlafroscia/ember-popper-modifier) to place the menu items adjacent to the trigger button

```hbs template
<Menu as |menu|>
  <span class='rounded-md shadow-sm'>
    <menu.Button
      class='inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'
      {{did-insert (set this.menuTriggerElement)}}
    >
      <span>Options</span>
      <svg class='w-5 h-5 ml-2 -mr-1' viewBox='0 0 20 20' fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
          clipRule='evenodd'
        ></path>
      </svg>
    </menu.Button>
  </span>

  <menu.Items
    class='w-56 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
    {{popper-tooltip
      this.menuTriggerElement
      placement='bottom-start'
      modifiers=(popper-modifier 'offset' offset=(array 0 8))
    }}
    as |items|
  >
    <div class='px-4 py-3'>
      <p class='text-sm leading-5'>Signed in as</p>
      <p
        class='text-sm font-medium leading-5 text-gray-900 truncate'
      >tom@example.com</p>
    </div>

    <div class='py-1'>
      <items.Item as |item|>
        <Menus::CustomMenuItem @item={{item}} href='#account-settings'>Account
          settings</Menus::CustomMenuItem>
      </items.Item>
      <items.Item as |item|>
        <Menus::CustomMenuItem
          @item={{item}}
          href='#support'
        >Support</Menus::CustomMenuItem>
      </items.Item>
      <items.Item @isDisabled={{true}} as |item|>
        <Menus::CustomMenuItem @item={{item}} href='#new-feature'>New feature
          (soon)</Menus::CustomMenuItem>
      </items.Item>
      <items.Item as |item|>
        <Menus::CustomMenuItem
          @item={{item}}
          href='#license'
        >License</Menus::CustomMenuItem>
      </items.Item>
    </div>
    <div class='py-1'>
      <items.Item as |item|>
        <Menus::CustomMenuItem @item={{item}} href='#sign-out'>Sign out</Menus::CustomMenuItem>
      </items.Item>
    </div>
  </menu.Items>
</Menu>
```
