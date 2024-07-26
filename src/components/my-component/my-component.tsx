import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <main>
          {/* <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/home' component="app-home"/>
            </stencil-route-switch>
          </stencil-router> */}
          <app-home user-name="This is Shibin"></app-home>
        </main>
      </div>
    )
  }
}
