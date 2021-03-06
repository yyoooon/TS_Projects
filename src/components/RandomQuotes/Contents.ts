import Component from '../template/Component';

class Contents extends Component<
  { [key: string]: string },
  { [key: string]: string }
> {
  setup() {
    this.state = this.props;
  }

  template() {
    const { quote, author } = this.state;
    return `
            <p data-name='quote'>${quote}</p>
            <h3 data-name='author'>${author}</h3>
    `;
  }
}
export default Contents;

//
