import { Component, Host, h, State, Prop } from '@stencil/core';
import { format } from '../../utils/utils';
import { jsonPlaceholderTypes } from './app-home.types';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Prop({reflect:true, mutable: true }) userName: string;
  @State() show: boolean = false;
  @State() jsonData: jsonPlaceholderTypes;

  @State() APIData: string = 'starting value';
  @State() showReactTab = false;
  @State() showStencilTab = false;

  @State() myStencilUsers: string;
  @State() myReactUsers: string;


  private getText(): string {
    return format('Stencil', '', "'Don't call me a framework' JS");
  }

  handleInfoBtn() {
    this.show = !this.show;
  }

  componentWillLoad() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => (this.jsonData = json));
  }

  onContentChange(content: string) {
    if (content == 'reactTab') {
      this.showReactTab = true;
      this.showStencilTab = false;
    } else if (content == 'stencilTab') {
      this.showStencilTab = true;
      this.showReactTab = false;
    } else {
      this.showReactTab = false;
      this.showStencilTab = false;
    }
  }

  // @Listen('searchWorldNameSelected', { target: 'body' })
  // searchWorldNameSelectedHandler(event: CustomEvent<string>) {
  //   alert('called');
  //   this.userName = event.detail;
  // }
  

  render() {

    let reactContent = (
      <div>
        <div class="card-custom" id="react-div">
          Hello, from React <br></br> Live Users <span>{this.myReactUsers}</span>
        </div>
      </div>
    );

    let stencilContent = (
      <div>
        <div class="card-custom" id="stencil-div">
          Hello, from Stencil
          <br></br> <br></br>
          Live Users <span>{this.myStencilUsers}</span>
          <br></br>
        </div>
      </div>
    );

    let contentToDisplay = '';
    if (this.showReactTab) {
      contentToDisplay = reactContent;
    } else if (this.showStencilTab) {
      contentToDisplay = stencilContent;
    }

    let mainContent = (
      <div class="my-card-wrapper">
        <h1>Hi, I am {this.userName}</h1>

        <button class="btn-stencil" onClick={this.onContentChange.bind(this, 'stencilTab')}>
          Stencil
        </button>
        <button class="btn-react" onClick={this.onContentChange.bind(this, 'reactTab')}>
          React
        </button>
        {contentToDisplay}
      </div>
    );

    return (
      <Host>
        <button onClick={()=>this.handleInfoBtn()}>Show / Hide</button>
        {this.show ? <div>Hello, World! I'm {this.getText()}</div> : null}
        {this.jsonData ? <div>{this.jsonData.title} </div> : null}
        {mainContent}
      </Host>
    );
  }
}
