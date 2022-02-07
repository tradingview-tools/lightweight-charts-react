import React, { forwardRef, useCallback } from 'react';
import { To, useLinkClickHandler } from 'react-router-dom';
import { Button, ButtonProps } from 'evergreen-ui';
import { Merge } from 'type-fest';

type ButtonLinkProps = Merge<
  ButtonProps,
  {
    replace?: boolean;
    state?: any;
    to: To;
    target?: React.HTMLAttributeAnchorTarget;
  }
>;

const ButtonLink: React.FC<ButtonLinkProps> = forwardRef((props, ref) => {
  const { to, replace, state, target, onClick, ...evergreenProps } = props;

  const doCallLinkClickHandler = useLinkClickHandler<HTMLButtonElement>(to, { replace, state, target });

  const doCallClickHandlers = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) doCallLinkClickHandler(event);
    },
    [onClick, doCallLinkClickHandler]
  );

  return <Button {...evergreenProps} onClick={doCallClickHandlers} ref={ref} />;
});

export default ButtonLink;
