import Component from '../template/Component';

interface ContentsProps {
  data: { [key: string]: string }[];
}

export default class Contents extends Component<ContentsProps, undefined> {
  template() {
    const { data } = this.props;
    return `
    <ul data-name="content-list">
      ${data
        .map(
          ({ title, thumbnail, url }) =>
            `<li data-name="content-item", data-url=${url}>${title}${thumbnail}${url}</li>`,
        )
        .join('')}
      </ul>
    `;
  }

  setEvent() {
    this.addEventToTarget(
      'click',
      '[data-name="content-item"]',
      ({ target }) => {
        if (target instanceof HTMLElement) {
          const { url } = target.dataset;
          history.pushState(null, null, url);
        }
      },
    );
  }
}