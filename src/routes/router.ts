const ROUTE_PUSH_EVENT_NAME = 'route-push';
const ROUTE_REPLACE_EVENT_NAME = 'route-replace';

interface CustomEventType extends Event {
  detail: {
    [key: string]: string;
  };
}

export const pushRouter = (onRoute: () => void) => {
  window.addEventListener(ROUTE_PUSH_EVENT_NAME, (e: CustomEventType) => {
    const { nextUrl } = e.detail;
    if (nextUrl) {
      history.pushState(null, null, nextUrl);
      onRoute();
    }
  });
};

export const replaceRouter = (onRoute: () => void) => {
  window.addEventListener(ROUTE_REPLACE_EVENT_NAME, (e: CustomEventType) => {
    const { nextUrl } = e.detail;
    if (nextUrl) {
      history.replaceState(null, null, nextUrl);

      onRoute();
    }
  });
};

export const popStateRouter = (onRoute: () => void) => {
  window.addEventListener('popstate', () => {
    onRoute();
  });
};

export const push = (nextUrl: string) => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_PUSH_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    }),
  );
};

export const replace = (nextUrl: string) => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_REPLACE_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    }),
  );
};
