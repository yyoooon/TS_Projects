// import { createDom } from './../../utils/createDom';
// import Component from '../Component';
// import Button from './Button';

// interface ButtonContainerProps {
//   onClick: (value: string) => void;
// }

// interface MathSymbolObj {
//   [key: string]: {
//     symbol: string;
//     backgroundColor: string;
//   };
// }

// class ButtonContainer extends Component<ButtonContainerProps> {
//   numberArr: number[] = Array.from({ length: 10 }, (_, i) => i);
//   etcArr: string[] = ['.', 'C'];
//   mathSymbolObj: MathSymbolObj = {
//     add: {
//       symbol: '+',
//       backgroundColor: '#ffb84d',
//     },
//     subtract: {
//       symbol: '-',
//       backgroundColor: '#ffcc80',
//     },
//     multiple: {
//       symbol: '*',
//       backgroundColor: '#ffe0b3',
//     },
//     division: {
//       symbol: '/',
//       backgroundColor: '#fff5e6',
//     },
//   };

//   constructor($target: Element, props: ButtonContainerProps) {
//     super($target, props);
//     this.render();
//   }

//   template() {
//     return `
//     <div data-name='button_container'>
//       <div data-name='value_buttons'></div>
//       <div data-name='calculate_buttons'></div>
//     </div>
//     `;
//   }

//   mount() {
//     const $buttonContainer = document.querySelector(
//       '[data-name="button_container"]',
//     );

//     $buttonContainer.addEventListener('click', e => {
//       const { target } = e;
//       target instanceof HTMLElement && this.props.onClick(target.dataset.value);
//     });
//   }

//   render() {
//     this.$target.appendChild(createDom(this.template()));

//     const $value_buttons = document.querySelector(
//       '[data-name="value_buttons"]',
//     );
//     const $calculate_buttons = document.querySelector(
//       '[data-name="calculate_buttons"]',
//     );

//     this.numberArr.map(
//       value => new Button($value_buttons, { value: String(value) }),
//     );
//     this.etcArr.map(value => new Button($value_buttons, { value }));
//     Object.entries(this.mathSymbolObj).map(
//       ([_, { symbol, backgroundColor }]) =>
//         new Button($calculate_buttons, { value: symbol, backgroundColor }),
//     );

//     this.mount();
//   }
// }
// export default ButtonContainer;

// // ??? ??? ??????????????? ??? ??? ?????? ?????? ???????????? - ?????????????????? ?????? ?????????..
// // ?????? ?????? ?????? obj??? ?????? ??? ???????????????????????????..
