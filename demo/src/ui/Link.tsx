import React, { forwardRef, Suspense, useCallback } from 'react';
import { To, useHref, useLinkClickHandler } from 'react-router-dom';
import { Link as EvergreenLink, LinkProps as EvergreenLinkProps } from 'evergreen-ui';
import { Merge } from 'type-fest';

type LinkProps = Merge<
  EvergreenLinkProps,
  {
    replace?: boolean;
    state?: any;
    to: To;
    target?: React.HTMLAttributeAnchorTarget;
  }
>;

const Link: React.FC<LinkProps> = forwardRef((props, ref) => {
  const { to, replace, state, target, onClick, ...evergreenProps } = props;

  const href = useHref(to);
  const doCallLinkClickHandler = useLinkClickHandler(to, { replace, state, target });

  const doCallClickHandlers = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) doCallLinkClickHandler(event);
    },
    [onClick, doCallLinkClickHandler]
  );

  return <EvergreenLink {...evergreenProps} href={href} onClick={doCallClickHandlers} ref={ref} target={target} />;
});

export default Link;
